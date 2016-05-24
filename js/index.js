var eventToUse = 'tap';
$(document).ready(function() {
    makeTemplates();
    $(function() {
    timer = localStorage.getItem('timer') || 0;
    if ( timer === 0 ) {
       $("div#timer").html("Timer is unset");
    } else {
       timer--;
       localStorage.setItem('timer', timer);
      $("div#timer").html(timer);
    }
});

$(function() {
    setInterval(updateTimer, 1000);
    $("#start").click( function() {
        localStorage.setItem('timer', 500);
    });
});
});
