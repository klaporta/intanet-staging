
(function($){var Engine={isotope:function(){var $photos=$('#photos');$photos.imagesLoaded(function(){$photos.isotope({itemSelector:'.item',masonry:{columnWidth:190},animationEngine:'jquery'});});},columnize:function(){var $context;if($(".ui-tabs-nav").length>0){$context=$($(".ui-tabs-nav .ui-state-active a").attr('href'));}else{$context=$('div.fancy-masonry');}
var $tmp=$('.article',$context),numColumns=parseInt($('.page-columns',$context).text());if($tmp.columnize){if(numColumns>1){$tmp.columnize({columns:numColumns});$(".column",$context).width(Math.floor($tmp.width()/numColumns-(21-21/numColumns)));}}else{numColumns=String(numColumns);$tmp.css({'-webkit-column-count':numColumns,'-webkit-column-rule':'1px dotted #BBBBBB','-webkit-column-gap':'24px','-moz-column-count':numColumns,'-moz-column-rule':'1px dotted #BBBBBB','-moz-column-gap':'24px','column-count':numColumns,'column-rule':'1px dotted #BBBBBB','column-gap':'24px'});}}};$(document).ready(function(){Engine.isotope();Engine.columnize();});}(jQuery));