
(function($){'use strict';var Engine={setup_player1:function(){var file=$("#video1 p").text(),img=$("#video1 img").attr('src');if((file==="")||(file==='#')||(img==null)){return;}
$("#video1").empty();jwplayer($("#video1").get(0)).setup({'autostart':false,'controlbar':'over','skin':coreEngine.siteRoot+"assets/flash/efglow/efglow.zip",'flashplayer':coreEngine.siteRoot+"assets/flash/jwplayer.swf?"+(new Date()).getTime(),'file':file,'image':img,'width':309,'height':191});},setup_player2:function(){var file=$("#video2 p").text(),img=$("#video2 img").attr('src');if((file==="")||(file==='#')||(img==null)){return;}
$("#video2").empty();jwplayer($("#video2").get(0)).setup({'autostart':false,'controlbar':'over','skin':coreEngine.siteRoot+"assets/flash/efglow/efglow.zip",'flashplayer':coreEngine.siteRoot+"assets/flash/jwplayer.swf?"+(new Date()).getTime(),'file':file,'image':img,'width':309,'height':191});},setup_player3:function(){var file=$("#video3 p").text(),img=$("#video3 img").attr('src');if((file==="")||(file==='#')||(img==null)){return;}
$("#video3").empty();jwplayer($("#video3").get(0)).setup({'autostart':false,'controlbar':'over','skin':coreEngine.siteRoot+"assets/flash/efglow/efglow.zip",'flashplayer':coreEngine.siteRoot+"assets/flash/jwplayer.swf?"+(new Date()).getTime(),'file':file,'image':img,'width':309,'height':191});}};$(document).ready(function(){Engine.setup_player1();Engine.setup_player2();Engine.setup_player3();});}(jQuery));