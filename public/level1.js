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

	eval("'use strict';\n\n$(function () {\n\n  function getMousePosition(event) {\n    return {\n      x: event.pageX,\n      y: event.pageY\n    };\n  }\n\n  function getPosition(element) {\n    var top = 0;\n    var left = 0;\n    do {\n      top += element.offsetTop;\n      left += element.offsetLeft;\n    } while (element = element.offsetParent);\n    return { x: left, y: top };\n  }\n\n  function startLevel1() {\n\n    $('#videoBox').off();\n\n    $('#videoBox').on('click', function (e) {\n      var mouse = getMousePosition(e);\n      var parent = getPosition(e.target);\n      $.post('/levels/level1', { t: $('#videoBox').get(0).currentTime, x: mouse.x - parent.x, y: mouse.y - parent.y }, function (data, textStatus, jqXHR) {\n        console.log('Is level succeeded ?' + data.achieved);\n      });\n    });\n\n    $('#videoBox').on('ended', function () {\n      setInstructionsText('Oh noooon, tu n\\'as pas été assez rapide, et la personne s\\'est noyée. Tu à le droit de recommencer, car il est évident que personne ne peut égaler Czsctzce');\n      setInstructionsButton('Recommencer', function () {\n        hideInstructions();\n        startLevel1();\n      });\n      showInstructions();\n    });\n\n    $('#videoBox').get(0).play();\n  }\n\n  // ======== FOR DEBUG ===========\n  $('#videoBox').on('mousemove', function (e) {\n    var parent = getPosition(e.target);\n    var mouse = getMousePosition(e);\n    $('#x').text(mouse.x - parent.x);\n    $('#y').text(mouse.y - parent.y);\n  });\n\n  // $('#videoBox').on('click', (e) => {\n  //   const parent = getPosition(e.target)\n  //   const mouse = getMousePosition(e)\n  //   alert('Position x ' + (mouse.x - parent.x) + ' Position y ' + (mouse.y - parent.y))\n  // })\n\n  document.onkeypress = function (e) {\n    if (e.which === 32) {\n      var video = $('#videoBox').get(0);\n      if (video.paused) {\n        video.play();\n      } else {\n        video.pause();\n      }\n    }\n  };\n  // ========================\n\n  setInstructionsText('<div>Bienvenue aventurière, dans la chasse au trésor de Czsctzce. <br/> Accompli tous les niveaux pour prouver que tu es digne d\\'obtenir le trésor de Czsctzce!<br/></div>');\n  setInstructionsButton('A l\\'aventure!', function () {\n    setInstructionsButton('C\\'est parti', function () {\n      hideInstructions();\n      startLevel1();\n    });\n    setInstructionsText('Czsctzce a l\\'oeil d\\'un faucon, et les réflexes d\\'un cougar. Prouve que tu peux égaler ses compétences en maître nageuse en cliquant sur la personne sur le point de se noyer!');\n  });\n  showInstructions();\n});//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9jbGllbnQvamF2YXNjcmlwdHMvbGV2ZWwxLmpzPzQ1MDEiXSwic291cmNlc0NvbnRlbnQiOlsiJChmdW5jdGlvbiAoKSB7XG5cbiAgZnVuY3Rpb24gZ2V0TW91c2VQb3NpdGlvbiAoZXZlbnQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgeDogZXZlbnQucGFnZVgsXG4gICAgICB5OiBldmVudC5wYWdlWVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFBvc2l0aW9uIChlbGVtZW50KSB7XG4gICAgbGV0IHRvcCA9IDBcbiAgICBsZXQgbGVmdCA9IDBcbiAgICBkbyB7XG4gICAgICB0b3AgKz0gZWxlbWVudC5vZmZzZXRUb3BcbiAgICAgIGxlZnQgKz0gZWxlbWVudC5vZmZzZXRMZWZ0XG4gICAgfSB3aGlsZSAoZWxlbWVudCA9IGVsZW1lbnQub2Zmc2V0UGFyZW50KVxuICAgIHJldHVybiB7eDogbGVmdCwgeTogdG9wfVxuICB9XG5cblxuXG4gIGZ1bmN0aW9uIHN0YXJ0TGV2ZWwxKCkge1xuXG4gICAgJCgnI3ZpZGVvQm94Jykub2ZmKClcblxuICAgICQoJyN2aWRlb0JveCcpLm9uKCdjbGljaycsIChlKSA9PiB7XG4gICAgbGV0IG1vdXNlID0gZ2V0TW91c2VQb3NpdGlvbihlKVxuICAgIGxldCBwYXJlbnQgPSBnZXRQb3NpdGlvbihlLnRhcmdldClcbiAgICAkLnBvc3QoJy9sZXZlbHMvbGV2ZWwxJyxcbiAgICAgIHt0OiAkKCcjdmlkZW9Cb3gnKS5nZXQoMCkuY3VycmVudFRpbWUsIHg6IG1vdXNlLnggLSBwYXJlbnQueCwgeTogbW91c2UueSAtIHBhcmVudC55fSxcbiAgICAgIGZ1bmN0aW9uIChkYXRhLCB0ZXh0U3RhdHVzLCBqcVhIUikge1xuICAgICAgICBjb25zb2xlLmxvZygnSXMgbGV2ZWwgc3VjY2VlZGVkID8nICsgZGF0YS5hY2hpZXZlZClcbiAgICAgIH0pXG4gICAgfSlcblxuICAgICQoJyN2aWRlb0JveCcpLm9uKCdlbmRlZCcsICgpID0+IHtcbiAgICAgIHNldEluc3RydWN0aW9uc1RleHQoJ09oIG5vb29vbiwgdHUgblxcJ2FzIHBhcyDDqXTDqSBhc3NleiByYXBpZGUsIGV0IGxhIHBlcnNvbm5lIHNcXCdlc3Qgbm95w6llLiBUdSDDoCBsZSBkcm9pdCBkZSByZWNvbW1lbmNlciwgY2FyIGlsIGVzdCDDqXZpZGVudCBxdWUgcGVyc29ubmUgbmUgcGV1dCDDqWdhbGVyIEN6c2N0emNlJylcbiAgICAgIHNldEluc3RydWN0aW9uc0J1dHRvbignUmVjb21tZW5jZXInLCAoKSA9PiB7XG4gICAgICAgIGhpZGVJbnN0cnVjdGlvbnMoKVxuICAgICAgICBzdGFydExldmVsMSgpXG4gICAgICB9KVxuICAgICAgc2hvd0luc3RydWN0aW9ucygpXG4gICAgfSlcblxuICAgICQoJyN2aWRlb0JveCcpLmdldCgwKS5wbGF5KClcblxuICB9XG5cbiAgLy8gPT09PT09PT0gRk9SIERFQlVHID09PT09PT09PT09XG4gICQoJyN2aWRlb0JveCcpLm9uKCdtb3VzZW1vdmUnLCAoZSkgPT4ge1xuICAgIGNvbnN0IHBhcmVudCA9IGdldFBvc2l0aW9uKGUudGFyZ2V0KVxuICAgIGNvbnN0IG1vdXNlID0gZ2V0TW91c2VQb3NpdGlvbihlKVxuICAgICQoJyN4JykudGV4dChtb3VzZS54IC0gcGFyZW50LngpXG4gICAgJCgnI3knKS50ZXh0KG1vdXNlLnkgLSBwYXJlbnQueSlcbiAgfSlcblxuICAvLyAkKCcjdmlkZW9Cb3gnKS5vbignY2xpY2snLCAoZSkgPT4ge1xuICAvLyAgIGNvbnN0IHBhcmVudCA9IGdldFBvc2l0aW9uKGUudGFyZ2V0KVxuICAvLyAgIGNvbnN0IG1vdXNlID0gZ2V0TW91c2VQb3NpdGlvbihlKVxuICAvLyAgIGFsZXJ0KCdQb3NpdGlvbiB4ICcgKyAobW91c2UueCAtIHBhcmVudC54KSArICcgUG9zaXRpb24geSAnICsgKG1vdXNlLnkgLSBwYXJlbnQueSkpXG4gIC8vIH0pXG5cbiAgZG9jdW1lbnQub25rZXlwcmVzcyA9XG4gIChlKSA9PiB7XG4gICAgaWYgKGUud2hpY2ggPT09IDMyKSB7XG4gICAgICBsZXQgdmlkZW8gPSAkKCcjdmlkZW9Cb3gnKS5nZXQoMClcbiAgICAgIGlmICh2aWRlby5wYXVzZWQpIHtcbiAgICAgICAgdmlkZW8ucGxheSgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2aWRlby5wYXVzZSgpXG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIHNldEluc3RydWN0aW9uc1RleHQoJzxkaXY+QmllbnZlbnVlIGF2ZW50dXJpw6hyZSwgZGFucyBsYSBjaGFzc2UgYXUgdHLDqXNvciBkZSBDenNjdHpjZS4gPGJyLz4gQWNjb21wbGkgdG91cyBsZXMgbml2ZWF1eCBwb3VyIHByb3V2ZXIgcXVlIHR1IGVzIGRpZ25lIGRcXCdvYnRlbmlyIGxlIHRyw6lzb3IgZGUgQ3pzY3R6Y2UhPGJyLz48L2Rpdj4nKVxuICBzZXRJbnN0cnVjdGlvbnNCdXR0b24oJ0EgbFxcJ2F2ZW50dXJlIScsICgpID0+IHtcbiAgICBzZXRJbnN0cnVjdGlvbnNCdXR0b24oJ0NcXCdlc3QgcGFydGknLCAoKSA9PiB7XG4gICAgICBoaWRlSW5zdHJ1Y3Rpb25zKClcbiAgICAgIHN0YXJ0TGV2ZWwxKClcbiAgICB9KVxuICAgIHNldEluc3RydWN0aW9uc1RleHQoJ0N6c2N0emNlIGEgbFxcJ29laWwgZFxcJ3VuIGZhdWNvbiwgZXQgbGVzIHLDqWZsZXhlcyBkXFwndW4gY291Z2FyLiBQcm91dmUgcXVlIHR1IHBldXggw6lnYWxlciBzZXMgY29tcMOpdGVuY2VzIGVuIG1hw650cmUgbmFnZXVzZSBlbiBjbGlxdWFudCBzdXIgbGEgcGVyc29ubmUgc3VyIGxlIHBvaW50IGRlIHNlIG5veWVyIScpXG4gIH0pXG4gIHNob3dJbnN0cnVjdGlvbnMoKVxuXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNsaWVudC9qYXZhc2NyaXB0cy9sZXZlbDEuanMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })
/******/ ]);