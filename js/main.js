(function() {

    "use strict";

    var toggles = document.querySelectorAll(".toggle-hamburger");

    for (var i = toggles.length - 1; i >= 0; i--) {
        var toggle = toggles[i];
        toggleHandler(toggle);
    };

    function toggleHandler(toggle) {
        toggle.addEventListener( "click", function(e) {
            e.preventDefault();
            (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
        });
    }

})();

$(document).ready(function () {
    let mMenuBtn = $('.toggle-hamburger');
    let mMenu = $('.navbar');
    mMenuBtn.on('click', function () {
        mMenu.toggleClass('active');
        $('body').toggleClass('no-scroll');
    });
    $('.single-item').slick({
        appendArrows: $('.class-arrow'),
        prevArrow: '<button id="prev" type="button" class="btn"><i class="icon-angle-left" aria-hidden="true"></i></button>',
        nextArrow: '<button id="next" type="button" class="btn"><i class="icon-angle-right" aria-hidden="true"></i></button>'
    });

});


