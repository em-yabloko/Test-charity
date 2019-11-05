var $crew=$('div.crew').clone();
 for (var i=0; i<3; i++) { 
 $(function(){$crew.insertAfter('.crew');});}

var $crew_2nd=$('div.crew_2nd').clone();
 for (var i=0; i<3; i++) { 
 $(function(){$crew_2nd.insertAfter('.crew_2nd');});}

var $uni=$('div.uni').clone();
 for (var i=0; i<3; i++) { 
 $(function(){$uni.insertAfter('.uni');});}


var $otchet=$('#otchety_sv');
if (window.innerWidth<=900) {
  $(function(){$otchet.insertAfter('#otchety');});
}