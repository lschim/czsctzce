/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	eval("'use strict';\n\n$(function () {\n\n  function getSelectedElements() {\n    var selected = [];\n    if (window.getSelection().rangeCount < 1) {\n      return selected;\n    }\n    for (var i = 0; i < 5; i++) {\n      if ($('#' + i).get(0) && window.getSelection().getRangeAt(0).intersectsNode($('#' + i).get(0))) {\n        selected.push(i);\n      }\n    }\n    return selected;\n  }\n\n  $('body').on('mouseup', function (e) {\n    if (!$.contains($('#navbar').get(0), e.target) && !$.contains($('#instructions').get(0), e.target)) {\n      $.post('/levels/level2', { selected: getSelectedElements() }, function (data, textStatus, jqXHR) {\n        console.log('Is level succeeded ?' + data.achieved);\n        if (data.achieved) {\n          setInstructionsText('En effet !!! Czsctzce est tellement belle que chaque photo de Czsctzce est la plus belle !!');\n          setInstructionsButton('Niveau 3', function () {\n            hideInstructions();\n            window.location = '/levels/level3';\n          });\n          showInstructions();\n        }\n      }, 'json');\n    }\n  });\n\n  $('.img-fluid').on('click', function () {\n    setInstructionsText('Effectivement, cette photo de Czsctzce est magnifique. Mais je trouve qu\\'il y en a une autre qui est la plus belle photo de Czsctzce.<br/> Sélectionne la plus belle photo de Czsctsce!');\n    setInstructionsButton('Je suis d\\'accord', function () {\n      hideInstructions();\n    });\n    showInstructions();\n  });\n\n  // Display instructions for level 2\n  setInstructionsText('Czsctzce est une belle personne. Sélectionne la plus belle photo de Czsctzce!');\n  setInstructionsButton('Facile!', function () {\n    hideInstructions();\n  });\n  showInstructions();\n});//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9jbGllbnQvamF2YXNjcmlwdHMvbGV2ZWwyLmpzP2Y2YWIiXSwic291cmNlc0NvbnRlbnQiOlsiJChmdW5jdGlvbiAoKSB7XG5cbiAgZnVuY3Rpb24gZ2V0U2VsZWN0ZWRFbGVtZW50cyAoKSB7XG4gICAgbGV0IHNlbGVjdGVkID0gW11cbiAgICBpZih3aW5kb3cuZ2V0U2VsZWN0aW9uKCkucmFuZ2VDb3VudCA8IDEpe1xuICAgICAgcmV0dXJuIHNlbGVjdGVkXG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICBpZiAoJCgnIycraSkuZ2V0KDApICYmIHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5nZXRSYW5nZUF0KDApLmludGVyc2VjdHNOb2RlKCQoJyMnICsgaSkuZ2V0KDApKSkge1xuICAgICAgICBzZWxlY3RlZC5wdXNoKGkpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzZWxlY3RlZFxuICB9XG5cbiAgJCgnYm9keScpLm9uKCdtb3VzZXVwJywgKGUpID0+IHtcbiAgICBpZiAoISQuY29udGFpbnMoJCgnI25hdmJhcicpLmdldCgwKSwgZS50YXJnZXQpICYmICEkLmNvbnRhaW5zKCQoJyNpbnN0cnVjdGlvbnMnKS5nZXQoMCksIGUudGFyZ2V0KSkge1xuICAgICAgJC5wb3N0KCcvbGV2ZWxzL2xldmVsMicsXG4gICAgICAgIHtzZWxlY3RlZDogZ2V0U2VsZWN0ZWRFbGVtZW50cygpfSxcbiAgICAgICAgZnVuY3Rpb24gKGRhdGEsIHRleHRTdGF0dXMsIGpxWEhSKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ0lzIGxldmVsIHN1Y2NlZWRlZCA/JyArIGRhdGEuYWNoaWV2ZWQpXG4gICAgICAgICAgaWYgKGRhdGEuYWNoaWV2ZWQpIHtcbiAgICAgICAgICAgIHNldEluc3RydWN0aW9uc1RleHQoJ0VuIGVmZmV0ICEhISBDenNjdHpjZSBlc3QgdGVsbGVtZW50IGJlbGxlIHF1ZSBjaGFxdWUgcGhvdG8gZGUgQ3pzY3R6Y2UgZXN0IGxhIHBsdXMgYmVsbGUgISEnKVxuICAgICAgICAgICAgc2V0SW5zdHJ1Y3Rpb25zQnV0dG9uKCdOaXZlYXUgMycsICgpID0+IHtcbiAgICAgICAgICAgICAgaGlkZUluc3RydWN0aW9ucygpXG4gICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9ICcvbGV2ZWxzL2xldmVsMydcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBzaG93SW5zdHJ1Y3Rpb25zKClcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICdqc29uJ1xuICAgICAgKVxuICAgIH1cbiAgfSlcblxuICAkKCcuaW1nLWZsdWlkJykub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgIHNldEluc3RydWN0aW9uc1RleHQoJ0VmZmVjdGl2ZW1lbnQsIGNldHRlIHBob3RvIGRlIEN6c2N0emNlIGVzdCBtYWduaWZpcXVlLiBNYWlzIGplIHRyb3V2ZSBxdVxcJ2lsIHkgZW4gYSB1bmUgYXV0cmUgcXVpIGVzdCBsYSBwbHVzIGJlbGxlIHBob3RvIGRlIEN6c2N0emNlLjxici8+IFPDqWxlY3Rpb25uZSBsYSBwbHVzIGJlbGxlIHBob3RvIGRlIEN6c2N0c2NlIScpXG4gICAgc2V0SW5zdHJ1Y3Rpb25zQnV0dG9uKCdKZSBzdWlzIGRcXCdhY2NvcmQnLCAoKSA9PiB7XG4gICAgICBoaWRlSW5zdHJ1Y3Rpb25zKClcbiAgICB9KVxuICAgIHNob3dJbnN0cnVjdGlvbnMoKVxuICB9KVxuXG4gIC8vIERpc3BsYXkgaW5zdHJ1Y3Rpb25zIGZvciBsZXZlbCAyXG4gIHNldEluc3RydWN0aW9uc1RleHQoJ0N6c2N0emNlIGVzdCB1bmUgYmVsbGUgcGVyc29ubmUuIFPDqWxlY3Rpb25uZSBsYSBwbHVzIGJlbGxlIHBob3RvIGRlIEN6c2N0emNlIScpXG4gIHNldEluc3RydWN0aW9uc0J1dHRvbignRmFjaWxlIScsICgpID0+IHtcbiAgICBoaWRlSW5zdHJ1Y3Rpb25zKClcbiAgfSlcbiAgc2hvd0luc3RydWN0aW9ucygpXG59KVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY2xpZW50L2phdmFzY3JpcHRzL2xldmVsMi5qcyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ })
/******/ ]);