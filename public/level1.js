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

	eval("'use strict';\n\n$(function () {\n\n  function getMousePosition(event) {\n    return {\n      x: event.pageX,\n      y: event.pageY\n    };\n  }\n\n  function getPosition(element) {\n    var top = 0;\n    var left = 0;\n    do {\n      top += element.offsetTop;\n      left += element.offsetLeft;\n    } while (element = element.offsetParent);\n    return { x: left, y: top };\n  }\n\n  function startLevel1() {\n\n    $('#videoBox').off();\n\n    $('#videoBox').on('click', function (e) {\n      var mouse = getMousePosition(e);\n      var parent = getPosition(e.target);\n      $.post('/levels/level1', { t: $('#videoBox').get(0).currentTime, x: mouse.x - parent.x, y: mouse.y - parent.y }, function (data, textStatus, jqXHR) {\n        console.log('Is level succeeded ?' + data.achieved);\n        if (data.achieved) {\n          $('#videoBox').get(0).pause();\n          setInstructionsText('Félicitations !!! Tu as sauvé ce pauvre enfant de la noyade !!');\n          setInstructionsButton('Niveau 2', function () {\n            window.location = '/levels/level2';\n          });\n          showInstructions();\n        }\n      });\n    });\n\n    $('#videoBox').on('ended', function () {\n      setInstructionsText('Oh noooon, tu n\\'as pas été assez rapide, et la personne s\\'est noyée. Tu as le droit de recommencer, car il est évident que personne ne peut égaler Czsctzce.');\n      setInstructionsButton('Recommencer', function () {\n        hideInstructions();\n        startLevel1();\n      });\n      showInstructions();\n    });\n\n    $('#videoBox').get(0).play();\n  }\n\n  setInstructionsText('<div>Bienvenue aventurière, dans la chasse au trésor de Czsctzce. <br/> Accompli tous les niveaux pour prouver que tu es digne d\\'obtenir le trésor de Czsctzce!<br/></div>');\n  setInstructionsButton('A l\\'aventure!', function () {\n    setInstructionsButton('C\\'est parti', function () {\n      hideInstructions();\n      startLevel1();\n    });\n    setInstructionsText('Czsctzce a l\\'oeil d\\'un faucon, et les réflexes d\\'un cougar. Prouve que tu peux égaler ses compétences en maître nageuse en cliquant sur la personne sur le point de se noyer!');\n  });\n  showInstructions();\n});//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9jbGllbnQvamF2YXNjcmlwdHMvbGV2ZWwxLmpzPzQ1MDEiXSwic291cmNlc0NvbnRlbnQiOlsiJChmdW5jdGlvbiAoKSB7XG5cbiAgZnVuY3Rpb24gZ2V0TW91c2VQb3NpdGlvbiAoZXZlbnQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgeDogZXZlbnQucGFnZVgsXG4gICAgICB5OiBldmVudC5wYWdlWVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFBvc2l0aW9uIChlbGVtZW50KSB7XG4gICAgbGV0IHRvcCA9IDBcbiAgICBsZXQgbGVmdCA9IDBcbiAgICBkbyB7XG4gICAgICB0b3AgKz0gZWxlbWVudC5vZmZzZXRUb3BcbiAgICAgIGxlZnQgKz0gZWxlbWVudC5vZmZzZXRMZWZ0XG4gICAgfSB3aGlsZSAoZWxlbWVudCA9IGVsZW1lbnQub2Zmc2V0UGFyZW50KVxuICAgIHJldHVybiB7eDogbGVmdCwgeTogdG9wfVxuICB9XG5cblxuXG4gIGZ1bmN0aW9uIHN0YXJ0TGV2ZWwxKCkge1xuXG4gICAgJCgnI3ZpZGVvQm94Jykub2ZmKClcblxuICAgICQoJyN2aWRlb0JveCcpLm9uKCdjbGljaycsIChlKSA9PiB7XG4gICAgbGV0IG1vdXNlID0gZ2V0TW91c2VQb3NpdGlvbihlKVxuICAgIGxldCBwYXJlbnQgPSBnZXRQb3NpdGlvbihlLnRhcmdldClcbiAgICAkLnBvc3QoJy9sZXZlbHMvbGV2ZWwxJyxcbiAgICAgIHt0OiAkKCcjdmlkZW9Cb3gnKS5nZXQoMCkuY3VycmVudFRpbWUsIHg6IG1vdXNlLnggLSBwYXJlbnQueCwgeTogbW91c2UueSAtIHBhcmVudC55fSxcbiAgICAgIGZ1bmN0aW9uIChkYXRhLCB0ZXh0U3RhdHVzLCBqcVhIUikge1xuICAgICAgICBjb25zb2xlLmxvZygnSXMgbGV2ZWwgc3VjY2VlZGVkID8nICsgZGF0YS5hY2hpZXZlZClcbiAgICAgICAgaWYoZGF0YS5hY2hpZXZlZCkge1xuICAgICAgICAgICQoJyN2aWRlb0JveCcpLmdldCgwKS5wYXVzZSgpXG4gICAgICAgICAgc2V0SW5zdHJ1Y3Rpb25zVGV4dCgnRsOpbGljaXRhdGlvbnMgISEhIFR1IGFzIHNhdXbDqSBjZSBwYXV2cmUgZW5mYW50IGRlIGxhIG5veWFkZSAhIScpXG4gICAgICAgICAgc2V0SW5zdHJ1Y3Rpb25zQnV0dG9uKCdOaXZlYXUgMicsICgpID0+IHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9ICcvbGV2ZWxzL2xldmVsMidcbiAgICAgICAgICB9KVxuICAgICAgICAgIHNob3dJbnN0cnVjdGlvbnMoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG5cbiAgICAkKCcjdmlkZW9Cb3gnKS5vbignZW5kZWQnLCAoKSA9PiB7XG4gICAgICBzZXRJbnN0cnVjdGlvbnNUZXh0KCdPaCBub29vb24sIHR1IG5cXCdhcyBwYXMgw6l0w6kgYXNzZXogcmFwaWRlLCBldCBsYSBwZXJzb25uZSBzXFwnZXN0IG5vecOpZS4gVHUgYXMgbGUgZHJvaXQgZGUgcmVjb21tZW5jZXIsIGNhciBpbCBlc3Qgw6l2aWRlbnQgcXVlIHBlcnNvbm5lIG5lIHBldXQgw6lnYWxlciBDenNjdHpjZS4nKVxuICAgICAgc2V0SW5zdHJ1Y3Rpb25zQnV0dG9uKCdSZWNvbW1lbmNlcicsICgpID0+IHtcbiAgICAgICAgaGlkZUluc3RydWN0aW9ucygpXG4gICAgICAgIHN0YXJ0TGV2ZWwxKClcbiAgICAgIH0pXG4gICAgICBzaG93SW5zdHJ1Y3Rpb25zKClcbiAgICB9KVxuXG4gICAgJCgnI3ZpZGVvQm94JykuZ2V0KDApLnBsYXkoKVxuXG4gIH1cblxuICBzZXRJbnN0cnVjdGlvbnNUZXh0KCc8ZGl2PkJpZW52ZW51ZSBhdmVudHVyacOocmUsIGRhbnMgbGEgY2hhc3NlIGF1IHRyw6lzb3IgZGUgQ3pzY3R6Y2UuIDxici8+IEFjY29tcGxpIHRvdXMgbGVzIG5pdmVhdXggcG91ciBwcm91dmVyIHF1ZSB0dSBlcyBkaWduZSBkXFwnb2J0ZW5pciBsZSB0csOpc29yIGRlIEN6c2N0emNlITxici8+PC9kaXY+JylcbiAgc2V0SW5zdHJ1Y3Rpb25zQnV0dG9uKCdBIGxcXCdhdmVudHVyZSEnLCAoKSA9PiB7XG4gICAgc2V0SW5zdHJ1Y3Rpb25zQnV0dG9uKCdDXFwnZXN0IHBhcnRpJywgKCkgPT4ge1xuICAgICAgaGlkZUluc3RydWN0aW9ucygpXG4gICAgICBzdGFydExldmVsMSgpXG4gICAgfSlcbiAgICBzZXRJbnN0cnVjdGlvbnNUZXh0KCdDenNjdHpjZSBhIGxcXCdvZWlsIGRcXCd1biBmYXVjb24sIGV0IGxlcyByw6lmbGV4ZXMgZFxcJ3VuIGNvdWdhci4gUHJvdXZlIHF1ZSB0dSBwZXV4IMOpZ2FsZXIgc2VzIGNvbXDDqXRlbmNlcyBlbiBtYcOudHJlIG5hZ2V1c2UgZW4gY2xpcXVhbnQgc3VyIGxhIHBlcnNvbm5lIHN1ciBsZSBwb2ludCBkZSBzZSBub3llciEnKVxuICB9KVxuICBzaG93SW5zdHJ1Y3Rpb25zKClcblxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjbGllbnQvamF2YXNjcmlwdHMvbGV2ZWwxLmpzIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBIiwic291cmNlUm9vdCI6IiJ9");

/***/ })
/******/ ]);