/** Jump to section on click sidebar anchors*/
/** ===================== */
function scrollSmoothTo(elementId) {
    var element = document.getElementById(elementId);
    const offset = $('.navbar').outerHeight();
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
}

/** Change tag passing anchor point */
function sidebar() {
    //find the number of anchors/sections
    var numSec = $('.section').length;

    //append all anchors 
    if (numSec > 0) {
        for (i = 1; i <= numSec; i++) {
            var secName = $('#s' + i).text();
            $('#tags').append('<a class="anchor" id="a' + i + '" onclick="scrollSmoothTo(\'s' + i + '\')">' + secName + '</a>');
        }
        //change tag when pass anchor point 
        var anchor_offset = 0;
        // highlight table of contents
        $(window).on('scroll', function () {
            for (i = 1; i <= numSec; i++) {
                anchor_offset = $('#s' + i).offset().top - 200;

                if ($(window).scrollTop() > anchor_offset) {
                    $('.sidebar-highlight').removeClass('sidebar-highlight');
                    $('#a' + i).addClass('sidebar-highlight');
                }
            }
        })
    };
}