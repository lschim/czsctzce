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

	eval("'use strict';\n\n$(function () {\n\n  function getSelectedElements() {\n    var selected = [];\n    if (window.getSelection().rangeCount < 1) {\n      return selected;\n    }\n    for (var i = 0; i < 5; i++) {\n      if ($('#' + i).get(0) && window.getSelection().getRangeAt(0).intersectsNode($('#' + i).get(0))) {\n        selected.push(i);\n      }\n    }\n    return selected;\n  }\n\n  $('body').on('mouseup', function (e) {\n    if (!$.contains($('#navbar').get(0), e.target) && !$.contains($('#instructions').get(0), e.target)) {\n      $.post('/levels/level2', { selected: getSelectedElements() }, function (data, textStatus, jqXHR) {\n        console.log('Is level succeeded ?' + data.achieved);\n        if (data.achieved) {\n          setInstructionsText('En effet !!!<br/> <strong class=\"text-danger\">Czsctzce</strong> est tellement belle que chaque photo de <strong class=\"text-danger\">Czsctzce</strong> est la plus belle !!<br/>');\n          setInstructionsButton('Niveau 3', function () {\n            hideInstructions();\n            window.location = '/levels/level3';\n          });\n          showInstructions();\n        }\n      }, 'json');\n    }\n  });\n\n  $('.img-fluid').on('click', function () {\n    setInstructionsText('Effectivement, cette photo de <strong class=\"text-danger\">Czsctzce</strong> est magnifique.<br/> Mais je trouve qu\\'il y en a une autre qui est la plus belle photo de <strong class=\"text-danger\">Czsctzce</strong>.<br/> Sélectionne la plus belle photo de <strong class=\"text-danger\">Czsctzce</strong>!<br/>');\n    setInstructionsButton('Je suis d\\'accord', function () {\n      hideInstructions();\n    });\n    showInstructions();\n  });\n\n  // Display instructions for level 2\n  setInstructionsText('<strong class=\"text-danger\">Czsctzce</strong> est une belle personne.<br/> Sélectionne la plus belle photo de <strong class=\"text-danger\">Czsctzce</strong>!<br/>');\n  setInstructionsButton('Facile!', function () {\n    hideInstructions();\n  });\n  showInstructions();\n});//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9jbGllbnQvamF2YXNjcmlwdHMvbGV2ZWwyLmpzP2Y2YWIiXSwic291cmNlc0NvbnRlbnQiOlsiJChmdW5jdGlvbiAoKSB7XG5cbiAgZnVuY3Rpb24gZ2V0U2VsZWN0ZWRFbGVtZW50cyAoKSB7XG4gICAgbGV0IHNlbGVjdGVkID0gW11cbiAgICBpZih3aW5kb3cuZ2V0U2VsZWN0aW9uKCkucmFuZ2VDb3VudCA8IDEpe1xuICAgICAgcmV0dXJuIHNlbGVjdGVkXG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICBpZiAoJCgnIycraSkuZ2V0KDApICYmIHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5nZXRSYW5nZUF0KDApLmludGVyc2VjdHNOb2RlKCQoJyMnICsgaSkuZ2V0KDApKSkge1xuICAgICAgICBzZWxlY3RlZC5wdXNoKGkpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzZWxlY3RlZFxuICB9XG5cbiAgJCgnYm9keScpLm9uKCdtb3VzZXVwJywgKGUpID0+IHtcbiAgICBpZiAoISQuY29udGFpbnMoJCgnI25hdmJhcicpLmdldCgwKSwgZS50YXJnZXQpICYmICEkLmNvbnRhaW5zKCQoJyNpbnN0cnVjdGlvbnMnKS5nZXQoMCksIGUudGFyZ2V0KSkge1xuICAgICAgJC5wb3N0KCcvbGV2ZWxzL2xldmVsMicsXG4gICAgICAgIHtzZWxlY3RlZDogZ2V0U2VsZWN0ZWRFbGVtZW50cygpfSxcbiAgICAgICAgZnVuY3Rpb24gKGRhdGEsIHRleHRTdGF0dXMsIGpxWEhSKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ0lzIGxldmVsIHN1Y2NlZWRlZCA/JyArIGRhdGEuYWNoaWV2ZWQpXG4gICAgICAgICAgaWYgKGRhdGEuYWNoaWV2ZWQpIHtcbiAgICAgICAgICAgIHNldEluc3RydWN0aW9uc1RleHQoJ0VuIGVmZmV0ICEhITxici8+IDxzdHJvbmcgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiPkN6c2N0emNlPC9zdHJvbmc+IGVzdCB0ZWxsZW1lbnQgYmVsbGUgcXVlIGNoYXF1ZSBwaG90byBkZSA8c3Ryb25nIGNsYXNzPVwidGV4dC1kYW5nZXJcIj5DenNjdHpjZTwvc3Ryb25nPiBlc3QgbGEgcGx1cyBiZWxsZSAhITxici8+JylcbiAgICAgICAgICAgIHNldEluc3RydWN0aW9uc0J1dHRvbignTml2ZWF1IDMnLCAoKSA9PiB7XG4gICAgICAgICAgICAgIGhpZGVJbnN0cnVjdGlvbnMoKVxuICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSAnL2xldmVscy9sZXZlbDMnXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgc2hvd0luc3RydWN0aW9ucygpXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAnanNvbidcbiAgICAgIClcbiAgICB9XG4gIH0pXG5cbiAgJCgnLmltZy1mbHVpZCcpLm9uKCdjbGljaycsICgpID0+IHtcbiAgICBzZXRJbnN0cnVjdGlvbnNUZXh0KCdFZmZlY3RpdmVtZW50LCBjZXR0ZSBwaG90byBkZSA8c3Ryb25nIGNsYXNzPVwidGV4dC1kYW5nZXJcIj5DenNjdHpjZTwvc3Ryb25nPiBlc3QgbWFnbmlmaXF1ZS48YnIvPiBNYWlzIGplIHRyb3V2ZSBxdVxcJ2lsIHkgZW4gYSB1bmUgYXV0cmUgcXVpIGVzdCBsYSBwbHVzIGJlbGxlIHBob3RvIGRlIDxzdHJvbmcgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiPkN6c2N0emNlPC9zdHJvbmc+Ljxici8+IFPDqWxlY3Rpb25uZSBsYSBwbHVzIGJlbGxlIHBob3RvIGRlIDxzdHJvbmcgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiPkN6c2N0emNlPC9zdHJvbmc+ITxici8+JylcbiAgICBzZXRJbnN0cnVjdGlvbnNCdXR0b24oJ0plIHN1aXMgZFxcJ2FjY29yZCcsICgpID0+IHtcbiAgICAgIGhpZGVJbnN0cnVjdGlvbnMoKVxuICAgIH0pXG4gICAgc2hvd0luc3RydWN0aW9ucygpXG4gIH0pXG5cbiAgLy8gRGlzcGxheSBpbnN0cnVjdGlvbnMgZm9yIGxldmVsIDJcbiAgc2V0SW5zdHJ1Y3Rpb25zVGV4dCgnPHN0cm9uZyBjbGFzcz1cInRleHQtZGFuZ2VyXCI+Q3pzY3R6Y2U8L3N0cm9uZz4gZXN0IHVuZSBiZWxsZSBwZXJzb25uZS48YnIvPiBTw6lsZWN0aW9ubmUgbGEgcGx1cyBiZWxsZSBwaG90byBkZSA8c3Ryb25nIGNsYXNzPVwidGV4dC1kYW5nZXJcIj5DenNjdHpjZTwvc3Ryb25nPiE8YnIvPicpXG4gIHNldEluc3RydWN0aW9uc0J1dHRvbignRmFjaWxlIScsICgpID0+IHtcbiAgICBoaWRlSW5zdHJ1Y3Rpb25zKClcbiAgfSlcbiAgc2hvd0luc3RydWN0aW9ucygpXG59KVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY2xpZW50L2phdmFzY3JpcHRzL2xldmVsMi5qcyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ })
/******/ ]);