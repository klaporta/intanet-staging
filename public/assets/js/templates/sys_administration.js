
(function($,w){'use strict';var Engine={strrpos:function(haystack,needle,offset){var i=(haystack+String).lastIndexOf(needle,offset);return i>=0?i:false;},hrad_import:function(){$("#btnHRADImport").button().click(function(){var strFile=$("#fileHRAD").val(),strExt=strFile.substr(Engine.strrpos(strFile,"."),4);if(strExt===".csv"){$("#formHRAD")[0].submit();}else{w.alert(strExt+" is not a valid extension. Please upload only .xls or .csv files.");}
return false;});}};$(document).ready(function(){Engine.hrad_import();});}(jQuery,window));