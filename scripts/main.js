'use strict';


$(document).ready(function () {
	console.log('ready');

	var $input = $('#input');
	var $button = $('#button');
	var $invalidCharacter = $('#invalid-character');
	var $invalidRange = $('#invalid-range');
	var $yes = $('#true');
	var $no = $('#false');

	function onButtonClick () {

		var newInput = $input.val();
		if($.isNumeric(newInput)) {
			$invalidCharacter.hide();
			console.log('good');

			if(newInput < 1 || newInput > 110) {
				$invalidRange.show();
				console.log('err 2');
			}
			else {
				$invalidRange.hide();
				$invalidCharacter.hide();
				//Validation is done.
				if(newInput >= 16) {
					$no.hide();
					$yes.show();
				}
				else {
					$no.html('Sorry, but you cant drive yet. You have to wait' + ' ' + (16 - newInput) + ' ' +'years');
					$yes.hide();
					$no.show();
				}

			}
		}
		else {
			$invalidRange.hide();
			$invalidCharacter.show();
			console.log('err');
		}
	}
	$button.click(onButtonClick);
});
