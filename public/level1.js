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

	eval("'use strict';\n\n$(function () {\n  function getMousePosition(event) {\n    return {\n      x: event.pageX,\n      y: event.pageY\n    };\n  }\n\n  function getPosition(element) {\n    var top = 0;\n    var left = 0;\n    do {\n      top += element.offsetTop;\n      left += element.offsetLeft;\n    } while (element = element.offsetParent);\n    return { x: left, y: top };\n  }\n\n  $('#videoBox').on('click', function (e) {\n    var mouse = getMousePosition(e);\n    var parent = getPosition(e.target);\n    $.post('/levels/level1', { t: $('#videoBox').get(0).currentTime, x: mouse.x - parent.x, y: mouse.y - parent.y }, function (data, textStatus, jqXHR) {\n      console.log('Is level succeeded ?' + data.achieved);\n    });\n  });\n\n  // ======== FOR DEBUG ===========\n  $('#videoBox').on('mousemove', function (e) {\n    var parent = getPosition(e.target);\n    var mouse = getMousePosition(e);\n    $('#x').text(mouse.x - parent.x);\n    $('#y').text(mouse.y - parent.y);\n  });\n\n  // $('#videoBox').on('click', (e) => {\n  //   const parent = getPosition(e.target)\n  //   const mouse = getMousePosition(e)\n  //   alert('Position x ' + (mouse.x - parent.x) + ' Position y ' + (mouse.y - parent.y))\n  // })\n\n  document.onkeypress = function (e) {\n    if (e.which === 32) {\n      var video = $('#videoBox').get(0);\n      if (video.paused) {\n        video.play();\n      } else {\n        video.pause();\n      }\n    }\n  };\n  // ========================\n});//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9jbGllbnQvamF2YXNjcmlwdHMvbGV2ZWwxLmpzPzQ1MDEiXSwic291cmNlc0NvbnRlbnQiOlsiJChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGdldE1vdXNlUG9zaXRpb24gKGV2ZW50KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IGV2ZW50LnBhZ2VYLFxuICAgICAgeTogZXZlbnQucGFnZVlcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRQb3NpdGlvbiAoZWxlbWVudCkge1xuICAgIGxldCB0b3AgPSAwXG4gICAgbGV0IGxlZnQgPSAwXG4gICAgZG8ge1xuICAgICAgdG9wICs9IGVsZW1lbnQub2Zmc2V0VG9wXG4gICAgICBsZWZ0ICs9IGVsZW1lbnQub2Zmc2V0TGVmdFxuICAgIH0gd2hpbGUgKGVsZW1lbnQgPSBlbGVtZW50Lm9mZnNldFBhcmVudClcbiAgICByZXR1cm4ge3g6IGxlZnQsIHk6IHRvcH1cbiAgfVxuXG4gICQoJyN2aWRlb0JveCcpLm9uKCdjbGljaycsIChlKSA9PiB7XG4gICAgbGV0IG1vdXNlID0gZ2V0TW91c2VQb3NpdGlvbihlKVxuICAgIGxldCBwYXJlbnQgPSBnZXRQb3NpdGlvbihlLnRhcmdldClcbiAgICAkLnBvc3QoJy9sZXZlbHMvbGV2ZWwxJyxcbiAgICAgIHt0OiAkKCcjdmlkZW9Cb3gnKS5nZXQoMCkuY3VycmVudFRpbWUsIHg6IG1vdXNlLnggLSBwYXJlbnQueCwgeTogbW91c2UueSAtIHBhcmVudC55fSxcbiAgICAgIGZ1bmN0aW9uIChkYXRhLCB0ZXh0U3RhdHVzLCBqcVhIUikge1xuICAgICAgICBjb25zb2xlLmxvZygnSXMgbGV2ZWwgc3VjY2VlZGVkID8nICsgZGF0YS5hY2hpZXZlZClcbiAgICAgIH0pXG4gIH0pXG5cbiAgLy8gPT09PT09PT0gRk9SIERFQlVHID09PT09PT09PT09XG4gICQoJyN2aWRlb0JveCcpLm9uKCdtb3VzZW1vdmUnLCAoZSkgPT4ge1xuICAgIGNvbnN0IHBhcmVudCA9IGdldFBvc2l0aW9uKGUudGFyZ2V0KVxuICAgIGNvbnN0IG1vdXNlID0gZ2V0TW91c2VQb3NpdGlvbihlKVxuICAgICQoJyN4JykudGV4dChtb3VzZS54IC0gcGFyZW50LngpXG4gICAgJCgnI3knKS50ZXh0KG1vdXNlLnkgLSBwYXJlbnQueSlcbiAgfSlcblxuICAvLyAkKCcjdmlkZW9Cb3gnKS5vbignY2xpY2snLCAoZSkgPT4ge1xuICAvLyAgIGNvbnN0IHBhcmVudCA9IGdldFBvc2l0aW9uKGUudGFyZ2V0KVxuICAvLyAgIGNvbnN0IG1vdXNlID0gZ2V0TW91c2VQb3NpdGlvbihlKVxuICAvLyAgIGFsZXJ0KCdQb3NpdGlvbiB4ICcgKyAobW91c2UueCAtIHBhcmVudC54KSArICcgUG9zaXRpb24geSAnICsgKG1vdXNlLnkgLSBwYXJlbnQueSkpXG4gIC8vIH0pXG5cbiAgZG9jdW1lbnQub25rZXlwcmVzcyA9XG4gIChlKSA9PiB7XG4gICAgaWYgKGUud2hpY2ggPT09IDMyKSB7XG4gICAgICBsZXQgdmlkZW8gPSAkKCcjdmlkZW9Cb3gnKS5nZXQoMClcbiAgICAgIGlmICh2aWRlby5wYXVzZWQpIHtcbiAgICAgICAgdmlkZW8ucGxheSgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2aWRlby5wYXVzZSgpXG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PVxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjbGllbnQvamF2YXNjcmlwdHMvbGV2ZWwxLmpzIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })
/******/ ]);