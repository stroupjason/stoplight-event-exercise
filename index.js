  // YOUR CODE HERE
(function() {
 $(document).ready(function(){
    'use strict';

 $('#stopButton').click(function(){
   console.log("this works");
$('#stopLight').toggleClass("stop");
});

 })();
 $('#slowButton').click(function(){
  console.log("this works too");
   $('#slowLight').toggleClass('slow');
});

$('#goButton').click(function(){
  console.log("this works 3");
  $('#goLight').toggleClass('go');
});

})();
