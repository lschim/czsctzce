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

	eval("'use strict';\n\n$(function () {\n\n  function getMousePosition(event) {\n    return {\n      x: event.pageX,\n      y: event.pageY\n    };\n  }\n\n  function getPosition(element) {\n    var top = 0;\n    var left = 0;\n    do {\n      top += element.offsetTop;\n      left += element.offsetLeft;\n    } while (element = element.offsetParent);\n    return { x: left, y: top };\n  }\n\n  function startLevel1() {\n\n    $('#videoBox').off();\n\n    $('#videoBox').on('click', function (e) {\n      var mouse = getMousePosition(e);\n      var parent = getPosition(e.target);\n      $.post('/levels/level1', { t: $('#videoBox').get(0).currentTime, x: mouse.x - parent.x, y: mouse.y - parent.y }, function (data, textStatus, jqXHR) {\n        console.log('Is level succeeded ?' + data.achieved);\n        if (data.achieved) {\n          $('#videoBox').get(0).pause();\n          //Ok c'est le corrigé mais j'ai pas le temps de protéger mieux que ca\n          setInstructionsText('Félicitations !!! Tu as sauvé ce pauvre enfant de la noyade !!<br/>Voici ce qu\\'aurait fait <strong class=\"text-danger\">Czsctce</strong> dans la vraie vie (admire son bronzage et ses muscles) : <br/><video controls=\"controls\"><source src=\"/videos/corrige.mp4\" type=\"video/mp4\"></video>');\n          setInstructionsButton('Niveau 2', function () {\n            window.location = '/levels/level2';\n          });\n          $('#instructions-button').attr('style', 'margin-top:0px;');\n          showInstructions();\n        }\n      });\n    });\n\n    $('#videoBox').on('ended', function () {\n      setInstructionsText('Oh noooon, tu n\\'as pas été assez rapide, et la personne s\\'est noyée. Tu as le droit de recommencer, car il est évident que personne ne peut égaler <strong class=\"text-danger\">Czsctzce</strong>.');\n      setInstructionsButton('Recommencer', function () {\n        hideInstructions();\n        startLevel1();\n      });\n      showInstructions();\n    });\n\n    $('#videoBox').get(0).play();\n  }\n\n  setInstructionsText('<div>Bienvenue aventurière, dans la chasse au trésor de <strong class=\"text-danger\">Czsctzce</strong>. <br/> Accomplis tous les niveaux pour prouver que tu es digne d\\'obtenir le trésor de <strong class=\"text-danger\">Czsctzce</strong>!<br/></div>');\n  setInstructionsButton('A l\\'aventure!', function () {\n    setInstructionsButton('C\\'est parti', function () {\n      hideInstructions();\n      startLevel1();\n    });\n    setInstructionsText('<strong class=\"text-danger\">Czsctzce</strong> a l\\'oeil d\\'un faucon, et les réflexes d\\'un cougar. Prouve que tu peux égaler ses compétences en maître nageuse en cliquant sur la personne sur le point de se noyer!');\n  });\n  showInstructions();\n});//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9jbGllbnQvamF2YXNjcmlwdHMvbGV2ZWwxLmpzPzQ1MDEiXSwic291cmNlc0NvbnRlbnQiOlsiJChmdW5jdGlvbiAoKSB7XG5cbiAgZnVuY3Rpb24gZ2V0TW91c2VQb3NpdGlvbiAoZXZlbnQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgeDogZXZlbnQucGFnZVgsXG4gICAgICB5OiBldmVudC5wYWdlWVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFBvc2l0aW9uIChlbGVtZW50KSB7XG4gICAgbGV0IHRvcCA9IDBcbiAgICBsZXQgbGVmdCA9IDBcbiAgICBkbyB7XG4gICAgICB0b3AgKz0gZWxlbWVudC5vZmZzZXRUb3BcbiAgICAgIGxlZnQgKz0gZWxlbWVudC5vZmZzZXRMZWZ0XG4gICAgfSB3aGlsZSAoZWxlbWVudCA9IGVsZW1lbnQub2Zmc2V0UGFyZW50KVxuICAgIHJldHVybiB7eDogbGVmdCwgeTogdG9wfVxuICB9XG5cblxuXG4gIGZ1bmN0aW9uIHN0YXJ0TGV2ZWwxKCkge1xuXG4gICAgJCgnI3ZpZGVvQm94Jykub2ZmKClcblxuICAgICQoJyN2aWRlb0JveCcpLm9uKCdjbGljaycsIChlKSA9PiB7XG4gICAgbGV0IG1vdXNlID0gZ2V0TW91c2VQb3NpdGlvbihlKVxuICAgIGxldCBwYXJlbnQgPSBnZXRQb3NpdGlvbihlLnRhcmdldClcbiAgICAkLnBvc3QoJy9sZXZlbHMvbGV2ZWwxJyxcbiAgICAgIHt0OiAkKCcjdmlkZW9Cb3gnKS5nZXQoMCkuY3VycmVudFRpbWUsIHg6IG1vdXNlLnggLSBwYXJlbnQueCwgeTogbW91c2UueSAtIHBhcmVudC55fSxcbiAgICAgIGZ1bmN0aW9uIChkYXRhLCB0ZXh0U3RhdHVzLCBqcVhIUikge1xuICAgICAgICBjb25zb2xlLmxvZygnSXMgbGV2ZWwgc3VjY2VlZGVkID8nICsgZGF0YS5hY2hpZXZlZClcbiAgICAgICAgaWYoZGF0YS5hY2hpZXZlZCkge1xuICAgICAgICAgICQoJyN2aWRlb0JveCcpLmdldCgwKS5wYXVzZSgpXG4gICAgICAgICAgLy9PayBjJ2VzdCBsZSBjb3JyaWfDqSBtYWlzIGonYWkgcGFzIGxlIHRlbXBzIGRlIHByb3TDqWdlciBtaWV1eCBxdWUgY2FcbiAgICAgICAgICBzZXRJbnN0cnVjdGlvbnNUZXh0KCdGw6lsaWNpdGF0aW9ucyAhISEgVHUgYXMgc2F1dsOpIGNlIHBhdXZyZSBlbmZhbnQgZGUgbGEgbm95YWRlICEhPGJyLz5Wb2ljaSBjZSBxdVxcJ2F1cmFpdCBmYWl0IDxzdHJvbmcgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiPkN6c2N0Y2U8L3N0cm9uZz4gZGFucyBsYSB2cmFpZSB2aWUgKGFkbWlyZSBzb24gYnJvbnphZ2UgZXQgc2VzIG11c2NsZXMpIDogPGJyLz48dmlkZW8gY29udHJvbHM9XCJjb250cm9sc1wiPjxzb3VyY2Ugc3JjPVwiL3ZpZGVvcy9jb3JyaWdlLm1wNFwiIHR5cGU9XCJ2aWRlby9tcDRcIj48L3ZpZGVvPicpXG4gICAgICAgICAgc2V0SW5zdHJ1Y3Rpb25zQnV0dG9uKCdOaXZlYXUgMicsICgpID0+IHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9ICcvbGV2ZWxzL2xldmVsMidcbiAgICAgICAgICB9KVxuICAgICAgICAgICQoJyNpbnN0cnVjdGlvbnMtYnV0dG9uJykuYXR0cignc3R5bGUnLCAnbWFyZ2luLXRvcDowcHg7JylcbiAgICAgICAgICBzaG93SW5zdHJ1Y3Rpb25zKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgJCgnI3ZpZGVvQm94Jykub24oJ2VuZGVkJywgKCkgPT4ge1xuICAgICAgc2V0SW5zdHJ1Y3Rpb25zVGV4dCgnT2ggbm9vb29uLCB0dSBuXFwnYXMgcGFzIMOpdMOpIGFzc2V6IHJhcGlkZSwgZXQgbGEgcGVyc29ubmUgc1xcJ2VzdCBub3nDqWUuIFR1IGFzIGxlIGRyb2l0IGRlIHJlY29tbWVuY2VyLCBjYXIgaWwgZXN0IMOpdmlkZW50IHF1ZSBwZXJzb25uZSBuZSBwZXV0IMOpZ2FsZXIgPHN0cm9uZyBjbGFzcz1cInRleHQtZGFuZ2VyXCI+Q3pzY3R6Y2U8L3N0cm9uZz4uJylcbiAgICAgIHNldEluc3RydWN0aW9uc0J1dHRvbignUmVjb21tZW5jZXInLCAoKSA9PiB7XG4gICAgICAgIGhpZGVJbnN0cnVjdGlvbnMoKVxuICAgICAgICBzdGFydExldmVsMSgpXG4gICAgICB9KVxuICAgICAgc2hvd0luc3RydWN0aW9ucygpXG4gICAgfSlcblxuICAgICQoJyN2aWRlb0JveCcpLmdldCgwKS5wbGF5KClcblxuICB9XG5cbiAgc2V0SW5zdHJ1Y3Rpb25zVGV4dCgnPGRpdj5CaWVudmVudWUgYXZlbnR1cmnDqHJlLCBkYW5zIGxhIGNoYXNzZSBhdSB0csOpc29yIGRlIDxzdHJvbmcgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiPkN6c2N0emNlPC9zdHJvbmc+LiA8YnIvPiBBY2NvbXBsaXMgdG91cyBsZXMgbml2ZWF1eCBwb3VyIHByb3V2ZXIgcXVlIHR1IGVzIGRpZ25lIGRcXCdvYnRlbmlyIGxlIHRyw6lzb3IgZGUgPHN0cm9uZyBjbGFzcz1cInRleHQtZGFuZ2VyXCI+Q3pzY3R6Y2U8L3N0cm9uZz4hPGJyLz48L2Rpdj4nKVxuICBzZXRJbnN0cnVjdGlvbnNCdXR0b24oJ0EgbFxcJ2F2ZW50dXJlIScsICgpID0+IHtcbiAgICBzZXRJbnN0cnVjdGlvbnNCdXR0b24oJ0NcXCdlc3QgcGFydGknLCAoKSA9PiB7XG4gICAgICBoaWRlSW5zdHJ1Y3Rpb25zKClcbiAgICAgIHN0YXJ0TGV2ZWwxKClcbiAgICB9KVxuICAgIHNldEluc3RydWN0aW9uc1RleHQoJzxzdHJvbmcgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiPkN6c2N0emNlPC9zdHJvbmc+IGEgbFxcJ29laWwgZFxcJ3VuIGZhdWNvbiwgZXQgbGVzIHLDqWZsZXhlcyBkXFwndW4gY291Z2FyLiBQcm91dmUgcXVlIHR1IHBldXggw6lnYWxlciBzZXMgY29tcMOpdGVuY2VzIGVuIG1hw650cmUgbmFnZXVzZSBlbiBjbGlxdWFudCBzdXIgbGEgcGVyc29ubmUgc3VyIGxlIHBvaW50IGRlIHNlIG5veWVyIScpXG4gIH0pXG4gIHNob3dJbnN0cnVjdGlvbnMoKVxuXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNsaWVudC9qYXZhc2NyaXB0cy9sZXZlbDEuanMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBIiwic291cmNlUm9vdCI6IiJ9");

/***/ })
/******/ ]);