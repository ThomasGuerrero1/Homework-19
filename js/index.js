console.log("Your index.js file is loaded correctly!");

$(document).ready(function() {
    $('#myInfo').on('click', function() {
        $('html, body').animate({
            scrollTop: $(document).height()
        }, 1000);
    });
});