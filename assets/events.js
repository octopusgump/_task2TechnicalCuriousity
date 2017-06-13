$(document).ready(function() {

    var $body = $('body');

    // activation event
    $body.on('click', '.bx-trigger', function() {
        $('.bxc').addClass('bx-impress');    
    });

    // submit event        
    $body.on('click', '#submit', function() {
        $('.bxc').removeClass('bx-impress');
    });

    // close event
    $body.on('click', '.bx-triangle', function() {
        $('.bxc').removeClass('bx-impress');
    });

});
