(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

$(document).ready(function () {
	console.log('ready');

	var $input = $('#input');
	var $button = $('#button');
	var $invalidCharacter = $('#invalid-character');
	var $invalidRange = $('#invalid-range');
	var $yes = $('#true');
	var $no = $('#false');

	function onButtonClick() {

		var newInput = $input.val();
		if ($.isNumeric(newInput)) {
			$invalidCharacter.hide();
			console.log('good');

			if (newInput < 1 || newInput > 110) {
				$invalidRange.show();
				console.log('err 2');
			} else {
				$invalidRange.hide();
				$invalidCharacter.hide();
				//Validation is done.
				if (newInput >= 16) {
					$no.hide();
					$yes.show();
				} else {
					$no.html('Sorry, but you cant drive yet. You have to wait' + ' ' + (16 - newInput) + ' ' + 'years');
					$yes.hide();
					$no.show();
				}
			}
		} else {
			$invalidRange.hide();
			$invalidCharacter.show();
			console.log('err');
		}
	}
	$button.click(onButtonClick);
});

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map