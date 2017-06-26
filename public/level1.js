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

	eval("'use strict';\n\n$(function () {\n\n  function getMousePosition(event) {\n    return {\n      x: event.pageX,\n      y: event.pageY\n    };\n  }\n\n  function getPosition(element) {\n    var top = 0;\n    var left = 0;\n    do {\n      top += element.offsetTop;\n      left += element.offsetLeft;\n    } while (element = element.offsetParent);\n    return { x: left, y: top };\n  }\n\n  function startLevel1() {\n\n    $('#videoBox').off();\n\n    $('#videoBox').on('click', function (e) {\n      var mouse = getMousePosition(e);\n      var parent = getPosition(e.target);\n      $.post('/levels/level1', { t: $('#videoBox').get(0).currentTime, x: mouse.x - parent.x, y: mouse.y - parent.y }, function (data, textStatus, jqXHR) {\n        console.log('Is level succeeded ?' + data.achieved);\n        if (data.achieved) {\n          $('#videoBox').get(0).pause();\n          //Ok c'est le corrigé mais j'ai pas le temps de protéger mieux que ca\n          setInstructionsText('Félicitations !!! Tu as sauvé ce pauvre enfant de la noyade !!<br/>Voici ce qu\\'aurait fait Czsctce dans la vraie vie : <br/><video controls=\"controls\"><source src=\"/videos/corrige.mp4\" type=\"video/mp4\"></video>');\n          setInstructionsButton('Niveau 2', function () {\n            window.location = '/levels/level2';\n          });\n          showInstructions();\n        }\n      });\n    });\n\n    $('#videoBox').on('ended', function () {\n      setInstructionsText('Oh noooon, tu n\\'as pas été assez rapide, et la personne s\\'est noyée. Tu as le droit de recommencer, car il est évident que personne ne peut égaler Czsctzce.');\n      setInstructionsButton('Recommencer', function () {\n        hideInstructions();\n        startLevel1();\n      });\n      showInstructions();\n    });\n\n    $('#videoBox').get(0).play();\n  }\n\n  setInstructionsText('<div>Bienvenue aventurière, dans la chasse au trésor de Czsctzce. <br/> Accompli tous les niveaux pour prouver que tu es digne d\\'obtenir le trésor de Czsctzce!<br/></div>');\n  setInstructionsButton('A l\\'aventure!', function () {\n    setInstructionsButton('C\\'est parti', function () {\n      hideInstructions();\n      startLevel1();\n    });\n    setInstructionsText('Czsctzce a l\\'oeil d\\'un faucon, et les réflexes d\\'un cougar. Prouve que tu peux égaler ses compétences en maître nageuse en cliquant sur la personne sur le point de se noyer!');\n  });\n  showInstructions();\n});//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9jbGllbnQvamF2YXNjcmlwdHMvbGV2ZWwxLmpzPzQ1MDEiXSwic291cmNlc0NvbnRlbnQiOlsiJChmdW5jdGlvbiAoKSB7XG5cbiAgZnVuY3Rpb24gZ2V0TW91c2VQb3NpdGlvbiAoZXZlbnQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgeDogZXZlbnQucGFnZVgsXG4gICAgICB5OiBldmVudC5wYWdlWVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFBvc2l0aW9uIChlbGVtZW50KSB7XG4gICAgbGV0IHRvcCA9IDBcbiAgICBsZXQgbGVmdCA9IDBcbiAgICBkbyB7XG4gICAgICB0b3AgKz0gZWxlbWVudC5vZmZzZXRUb3BcbiAgICAgIGxlZnQgKz0gZWxlbWVudC5vZmZzZXRMZWZ0XG4gICAgfSB3aGlsZSAoZWxlbWVudCA9IGVsZW1lbnQub2Zmc2V0UGFyZW50KVxuICAgIHJldHVybiB7eDogbGVmdCwgeTogdG9wfVxuICB9XG5cblxuXG4gIGZ1bmN0aW9uIHN0YXJ0TGV2ZWwxKCkge1xuXG4gICAgJCgnI3ZpZGVvQm94Jykub2ZmKClcblxuICAgICQoJyN2aWRlb0JveCcpLm9uKCdjbGljaycsIChlKSA9PiB7XG4gICAgbGV0IG1vdXNlID0gZ2V0TW91c2VQb3NpdGlvbihlKVxuICAgIGxldCBwYXJlbnQgPSBnZXRQb3NpdGlvbihlLnRhcmdldClcbiAgICAkLnBvc3QoJy9sZXZlbHMvbGV2ZWwxJyxcbiAgICAgIHt0OiAkKCcjdmlkZW9Cb3gnKS5nZXQoMCkuY3VycmVudFRpbWUsIHg6IG1vdXNlLnggLSBwYXJlbnQueCwgeTogbW91c2UueSAtIHBhcmVudC55fSxcbiAgICAgIGZ1bmN0aW9uIChkYXRhLCB0ZXh0U3RhdHVzLCBqcVhIUikge1xuICAgICAgICBjb25zb2xlLmxvZygnSXMgbGV2ZWwgc3VjY2VlZGVkID8nICsgZGF0YS5hY2hpZXZlZClcbiAgICAgICAgaWYoZGF0YS5hY2hpZXZlZCkge1xuICAgICAgICAgICQoJyN2aWRlb0JveCcpLmdldCgwKS5wYXVzZSgpXG4gICAgICAgICAgLy9PayBjJ2VzdCBsZSBjb3JyaWfDqSBtYWlzIGonYWkgcGFzIGxlIHRlbXBzIGRlIHByb3TDqWdlciBtaWV1eCBxdWUgY2FcbiAgICAgICAgICBzZXRJbnN0cnVjdGlvbnNUZXh0KCdGw6lsaWNpdGF0aW9ucyAhISEgVHUgYXMgc2F1dsOpIGNlIHBhdXZyZSBlbmZhbnQgZGUgbGEgbm95YWRlICEhPGJyLz5Wb2ljaSBjZSBxdVxcJ2F1cmFpdCBmYWl0IEN6c2N0Y2UgZGFucyBsYSB2cmFpZSB2aWUgOiA8YnIvPjx2aWRlbyBjb250cm9scz1cImNvbnRyb2xzXCI+PHNvdXJjZSBzcmM9XCIvdmlkZW9zL2NvcnJpZ2UubXA0XCIgdHlwZT1cInZpZGVvL21wNFwiPjwvdmlkZW8+JylcbiAgICAgICAgICBzZXRJbnN0cnVjdGlvbnNCdXR0b24oJ05pdmVhdSAyJywgKCkgPT4ge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gJy9sZXZlbHMvbGV2ZWwyJ1xuICAgICAgICAgIH0pXG4gICAgICAgICAgc2hvd0luc3RydWN0aW9ucygpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcblxuICAgICQoJyN2aWRlb0JveCcpLm9uKCdlbmRlZCcsICgpID0+IHtcbiAgICAgIHNldEluc3RydWN0aW9uc1RleHQoJ09oIG5vb29vbiwgdHUgblxcJ2FzIHBhcyDDqXTDqSBhc3NleiByYXBpZGUsIGV0IGxhIHBlcnNvbm5lIHNcXCdlc3Qgbm95w6llLiBUdSBhcyBsZSBkcm9pdCBkZSByZWNvbW1lbmNlciwgY2FyIGlsIGVzdCDDqXZpZGVudCBxdWUgcGVyc29ubmUgbmUgcGV1dCDDqWdhbGVyIEN6c2N0emNlLicpXG4gICAgICBzZXRJbnN0cnVjdGlvbnNCdXR0b24oJ1JlY29tbWVuY2VyJywgKCkgPT4ge1xuICAgICAgICBoaWRlSW5zdHJ1Y3Rpb25zKClcbiAgICAgICAgc3RhcnRMZXZlbDEoKVxuICAgICAgfSlcbiAgICAgIHNob3dJbnN0cnVjdGlvbnMoKVxuICAgIH0pXG5cbiAgICAkKCcjdmlkZW9Cb3gnKS5nZXQoMCkucGxheSgpXG5cbiAgfVxuXG4gIHNldEluc3RydWN0aW9uc1RleHQoJzxkaXY+QmllbnZlbnVlIGF2ZW50dXJpw6hyZSwgZGFucyBsYSBjaGFzc2UgYXUgdHLDqXNvciBkZSBDenNjdHpjZS4gPGJyLz4gQWNjb21wbGkgdG91cyBsZXMgbml2ZWF1eCBwb3VyIHByb3V2ZXIgcXVlIHR1IGVzIGRpZ25lIGRcXCdvYnRlbmlyIGxlIHRyw6lzb3IgZGUgQ3pzY3R6Y2UhPGJyLz48L2Rpdj4nKVxuICBzZXRJbnN0cnVjdGlvbnNCdXR0b24oJ0EgbFxcJ2F2ZW50dXJlIScsICgpID0+IHtcbiAgICBzZXRJbnN0cnVjdGlvbnNCdXR0b24oJ0NcXCdlc3QgcGFydGknLCAoKSA9PiB7XG4gICAgICBoaWRlSW5zdHJ1Y3Rpb25zKClcbiAgICAgIHN0YXJ0TGV2ZWwxKClcbiAgICB9KVxuICAgIHNldEluc3RydWN0aW9uc1RleHQoJ0N6c2N0emNlIGEgbFxcJ29laWwgZFxcJ3VuIGZhdWNvbiwgZXQgbGVzIHLDqWZsZXhlcyBkXFwndW4gY291Z2FyLiBQcm91dmUgcXVlIHR1IHBldXggw6lnYWxlciBzZXMgY29tcMOpdGVuY2VzIGVuIG1hw650cmUgbmFnZXVzZSBlbiBjbGlxdWFudCBzdXIgbGEgcGVyc29ubmUgc3VyIGxlIHBvaW50IGRlIHNlIG5veWVyIScpXG4gIH0pXG4gIHNob3dJbnN0cnVjdGlvbnMoKVxuXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNsaWVudC9qYXZhc2NyaXB0cy9sZXZlbDEuanMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })
/******/ ]);