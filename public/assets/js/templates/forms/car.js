/**
 * User: cravelo
 * Date: 9/23/13 1:27 PM
 */

/*jslint browser: true, white: true, plusplus: true */
/*global jQuery*/

jQuery(function($){
	'use strict';

	var Engine = {
		submit: function(){
			$("#submitCar").button();
			$("#resetCar").button();
		}
	};
	Engine.submit();

});
