load_lazyload(jQuery, window, document);
load_fancybox(window, document, jQuery);
load_affix(jQuery);

//加载进度条
$(window).scroll(function () {
    $(".scroll-bar").attr("stye", "width:" + ($(this).scrollTop() / ($(document).height() - $(this).height()) * 100) + "%;display: block;");
});

