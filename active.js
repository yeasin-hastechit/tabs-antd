(function($){
    "use strict";

    const $tabList = $('.tab-nav li'),
        $tabListLink = $('.tab-nav li a'),
        $tabBorder = $('.tab-border'),
        $tabPane = $('.tab-pane');
    
    function tabBorderAnimation() {
        const $tabActive = $('.tab-nav li.active');
        $tabBorder.stop().css({
            top: $tabActive.position().top,
            height: $tabActive.height()
        });
    }
    tabBorderAnimation();

    $tabList.on('click', 'a', function (e) {
        e.preventDefault();
        const $tabTarget = $(this).attr('href');

        $tabListLink.stop().parent('li').removeClass('active');
        $(this).stop().parent('li').addClass('active');
        tabBorderAnimation();

        $tabPane.stop().removeClass('active');
        $($tabTarget).addClass('active');
    });

})(jQuery);