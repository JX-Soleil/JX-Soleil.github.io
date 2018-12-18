$(document).pjax('a[target!=_blank]', '#main', {
    fragment: '#main',
    timeout: 5000,
});
$(document).on({
    'pjax:click': function() {
        //点击链接时，需要触发的事件写到这里
    },
    'pjax:start': function() {
        //当开始获取请求时，需要触发的事件写在这里

    },
    'pjax:end': function() {
        load_lazyload(jQuery, window, document);
        load_fancybox(window, document, jQuery);
        load_affix(jQuery);
        load_pisces();
        //load_algolia_search(); //存在bug
        load_bootstrap();
        load_exturl();
        load_motion();
        load_post_details_one();
        load_post_details_two();
        //load_scroll_cookie();
        load_utils();
        load_homepage_pic();

        load_comments_valine();
        lean_analytics();
    }
});

//valine评论
function load_comments_valine() {
    $.getScript("//cdn1.lncld.net/static/js/3.0.4/av-min.js");
    $.getScript("//unpkg.com/valine/dist/Valine.min.js");
    var GUEST = ['nick', 'mail', 'link'];
    var guest = 'nick,mail';
    guest = guest.split(',').filter(item => {
        return GUEST.indexOf(item) > -1;
    });
    var valine = new Valine({
        el: '#comments',
        verify: false,
        notify: true,
        appId: 'M0YM5C0b8qruNqYNjrhM165A-gzGzoHsz',
        appKey: 'LY14JvHejhSeJeglvECLi7s5',
        placeholder: 'ヾﾉ≧∀≦)o来啊，快活啊!',
        avatar: 'mm',
        guest_info: guest,
        pageSize: '10' || 10,
    });
    valine.render('#comments');
}

// //gittalk评论
// function load_gittalk() {
//     if ($('#gitalk-container').length > 0) {
//         var gitalk = new Gitalk({
//             // gitalk的主要参数
//             clientID: `95f6862990b9e0401189`,
//             clientSecret: `9e403b521bd43dd0a58ba205008a6800c8f61024`,
//             repo: `https://jx-soleil.github.io/`, //存储你评论 issue 的 Github 仓库名（建议直接用 GitHub Page 的仓库名）
//             owner: 'JX-Soleil',
//             admin: ['JX-Soleil'], //这个仓库的管理员，可以有多个，用数组表示，一般写自己,
//             id: 'window.location.pathname', //页面的唯一标识，gitalk 会根据这个标识自动创建的issue的标签,我们使用页面的相对路径作为标识
//         });
//         gitalk.render('gitalk-container');

//     }
// }


//leancloud阅读数
function lean_analytics() {
    AV.initialize("M0YM5C0b8qruNqYNjrhM165A-gzGzoHsz", "LY14JvHejhSeJeglvECLi7s5");
    $.getScript("https://cdn1.lncld.net/static/js/av-core-mini-0.6.4.js");

    function showTime(Counter) {
        var query = new AV.Query(Counter);
        var entries = [];
        var $visitors = $(".leancloud_visitors");

        $visitors.each(function() {
            entries.push($(this).attr("id").trim());
        });

        query.containedIn('url', entries);
        query.find()
            .done(function(results) {
                var COUNT_CONTAINER_REF = '.leancloud-visitors-count';
                if (results.length === 0) {
                    $visitors.find(COUNT_CONTAINER_REF).text(0);
                    return;
                }
                for (var i = 0; i < results.length; i++) {
                    var item = results[i];
                    var url = item.get('url');
                    var time = item.get('time');
                    var element = document.getElementById(url);
                    $(element).find(COUNT_CONTAINER_REF).text(time);
                }
                for (var i = 0; i < entries.length; i++) {
                    var url = entries[i];
                    var element = document.getElementById(url);
                    var countSpan = $(element).find(COUNT_CONTAINER_REF);
                    if (countSpan.text() == '') {
                        countSpan.text(0);
                    }
                }
            })
            .fail(function(object, error) {
                console.log("Error: " + error.code + " " + error.message);
            });
    }

    function addCount(Counter) {
        var $visitors = $(".leancloud_visitors");
        var url = $visitors.attr('id').trim();
        var title = $visitors.attr('data-flag-title').trim();
        var query = new AV.Query(Counter);

        query.equalTo("url", url);
        query.find({
            success: function(results) {
                if (results.length > 0) {
                    var counter = results[0];
                    counter.fetchWhenSave(true);
                    counter.increment("time");
                    counter.save(null, {
                        success: function(counter) {
                            var $element = $(document.getElementById(url));
                            $element.find('.leancloud-visitors-count').text(counter.get('time'));
                        },
                        error: function(counter, error) {
                            console.log('Failed to save Visitor num, with error message: ' + error.message);
                        }
                    });
                } else {
                    var newcounter = new Counter();
                    /* Set ACL */
                    var acl = new AV.ACL();
                    acl.setPublicReadAccess(true);
                    acl.setPublicWriteAccess(true);
                    newcounter.setACL(acl);
                    /* End Set ACL */
                    newcounter.set("title", title);
                    newcounter.set("url", url);
                    newcounter.set("time", 1);
                    newcounter.save(null, {
                        success: function(newcounter) {
                            var $element = $(document.getElementById(url));
                            $element.find('.leancloud-visitors-count').text(newcounter.get('time'));
                        },
                        error: function(newcounter, error) {
                            console.log('Failed to create');
                        }
                    });
                }
            },
            error: function(error) {
                console.log('Error:' + error.code + " " + error.message);
            }
        });
    }
    var Counter = AV.Object.extend("Counter");
    if ($('.leancloud_visitors').length == 1) {
        addCount(Counter);
    } else if ($('.post-title-link').length > 1) {
        showTime(Counter);
    }

}