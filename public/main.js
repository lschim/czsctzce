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
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

	eval("'use strict';\n\nwindow.showInstructions = function showInstructions() {\n  $('#instructions').show();\n};\n\nwindow.hideInstructions = function hideInstructions() {\n  $('#instructions').hide();\n};\n\nwindow.setInstructionsButton = function setInstructionsButton(text, f) {\n  $('#instructions-button').html(text);\n  $('#instructions-button').off();\n  $('#instructions-button').on('click', f);\n};\n\nwindow.setInstructionsText = function setInstructionsText(text) {\n  $('#instructions-text').html('');\n  $('#instructions-text').append(text);\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9jbGllbnQvYXBwbGljYXRpb24uanM/N2JlMCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbndpbmRvdy5zaG93SW5zdHJ1Y3Rpb25zID0gZnVuY3Rpb24gc2hvd0luc3RydWN0aW9ucyAoKSB7XG4gICQoJyNpbnN0cnVjdGlvbnMnKS5zaG93KClcbn1cblxud2luZG93LmhpZGVJbnN0cnVjdGlvbnMgPSBmdW5jdGlvbiBoaWRlSW5zdHJ1Y3Rpb25zICgpIHtcbiAgJCgnI2luc3RydWN0aW9ucycpLmhpZGUoKVxufVxuXG53aW5kb3cuc2V0SW5zdHJ1Y3Rpb25zQnV0dG9uID0gZnVuY3Rpb24gc2V0SW5zdHJ1Y3Rpb25zQnV0dG9uICh0ZXh0LCBmKSB7XG4gICQoJyNpbnN0cnVjdGlvbnMtYnV0dG9uJykuaHRtbCh0ZXh0KVxuICAkKCcjaW5zdHJ1Y3Rpb25zLWJ1dHRvbicpLm9mZigpXG4gICQoJyNpbnN0cnVjdGlvbnMtYnV0dG9uJykub24oJ2NsaWNrJywgZilcbn1cblxud2luZG93LnNldEluc3RydWN0aW9uc1RleHQgPSBmdW5jdGlvbiBzZXRJbnN0cnVjdGlvbnNUZXh0ICh0ZXh0KSB7XG4gICQoJyNpbnN0cnVjdGlvbnMtdGV4dCcpLmh0bWwoJycpXG4gICQoJyNpbnN0cnVjdGlvbnMtdGV4dCcpLmFwcGVuZCh0ZXh0KVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNsaWVudC9hcHBsaWNhdGlvbi5qcyJdLCJtYXBwaW5ncyI6Ijs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })
/******/ ]);