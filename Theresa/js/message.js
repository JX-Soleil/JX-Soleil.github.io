function renderTip(template, context) {
    var tokenReg = /(\\)?\{([^\{\}\\]+)(\\)?\}/g;
    return template.replace(tokenReg, function (word, slash1, token, slash2) {
        if (slash1 || slash2) {
            return word.replace('\\', '');
        }
        var variables = token.replace(/\s/g, '').split('.');
        var currentObject = context;
        var i, length, variable;
        for (i = 0, length = variables.length; i < length; ++i) {
            variable = variables[i];
            currentObject = currentObject[variable];
            if (currentObject === undefined || currentObject === null) return '';
        }
        return currentObject;
    });
}

String.prototype.renderTip = function (context) {
    return renderTip(this, context);
};

jQuery.ajax({
    cache: true,
    url: '/Theresa/data/message.json',
    dataType: "json",
    success: function (result){
        jQuery.each(result.mouseover, function (index, tips){
	    var timer=null;
            jQuery(tips.selector).mouseover(function (){
		var text = tips.text;
                if(Array.isArray(tips.text)) text = tips.text[Math.floor(Math.random() * tips.text.length + 1)-1];
                text = text.renderTip({text: jQuery(this).text()});
                timer=setTimeout(function(){
		    showMessage(text, 2000)
		},500);
            });
	    jQuery(tips.selector).mouseout(function (){
		clearTimeout(timer);
	    });
        });
        jQuery.each(result.click, function (index, tips){
            jQuery(tips.selector).click(function (){
                var text = tips.text;
                if(Array.isArray(tips.text)) text = tips.text[Math.floor(Math.random() * tips.text.length + 1)-1];
                text = text.renderTip({text: jQuery(this).text()});
                showMessage(text, 3000);
            });
        });
    },
    // error: function () {
    //     alert('fuck');
    // }
});

(function (){
    var text;
    if(document.referrer !== ''){
        var referrer = document.createElement('a');
        referrer.href = document.referrer;
        text = '嗨！来自 <span style="color:#0099cc;">' + referrer.hostname + '</span> 的朋友！';
	if (referrer.hostname=='www.xjh.me') {
	    text = '这篇文章怎么样啊？有意思吗？';
	}
        var domain = referrer.hostname.split('.')[1];
        if (domain == 'baidu') {
            text = '嗨！ 来自 百度搜索 的朋友，<br>你是搜索 <span style="color:#0099cc;">' + referrer.search.split('&wd=')[1].split('&')[0] + '</span> 找到的我吗？';
        }else if (domain == 'so') {
            text = '嗨！ 来自 360搜索 的朋友，<br>你是搜索 <span style="color:#0099cc;">' + referrer.search.split('&q=')[1].split('&')[0] + '</span> 找到的我吗？';
        }else if (domain == 'google') {
            text = '嗨！ 来自 谷歌搜索 的朋友，<br>欢迎阅读<span style="color:#0099cc;">「 ' + document.title.split(' - ')[0] + ' 」</span>';
        }
    }else {
        if (window.location.href == `jQuery{home_Path}`) { //如果是主页
            var now = (new Date()).getHours();
            if (now > 23 || now <= 5) {
                text = '你是夜猫子呀？这么晚还不睡觉，明天起的来嘛？';
            } else if (now > 5 && now <= 7) {
                text = '早上好！一日之计在于晨，美好的一天就要开始了！';
            } else if (now > 7 && now <= 11) {
                text = '上午好！工作顺利嘛，不要久坐，多起来走动走动哦！';
            } else if (now > 11 && now <= 14) {
                text = '中午了，工作了一个上午，现在是午餐时间！';
            } else if (now > 14 && now <= 17) {
                text = '午后很容易犯困呢，今天的运动目标完成了吗？';
            } else if (now > 17 && now <= 19) {
                text = '傍晚了！窗外夕阳的景色很美丽呢，最美不过夕阳红~~';
            } else if (now > 19 && now <= 21) {
                text = '晚上好，今天过得怎么样？';
            } else if (now > 21 && now <= 23) {
                text = '已经这么晚了呀，早点休息吧，晚安~~';
            } else {
                text = '嗨~ 快来逗我玩吧！';
            }
        }else {
            text = '欢迎阅读<span style="color:#0099cc;">「 ' + document.title.split(' - ')[0] + ' 」</span>';
        }
    }
    showMessage(text, 12000);
})();

var hitoTimer = window.setInterval(showHitokoto,30000);

function showHitokoto(){
    jQuery.getJSON('https://sslapi.hitokoto.cn/',function(result){
        showMessage(result.hitokoto, 5000);
    });
}

function showMessage(text, timeout){
    if(Array.isArray(text)) text = text[Math.floor(Math.random() * text.length + 1)-1];
    jQuery('.message').stop();
    jQuery('.message').html(text).fadeTo(200, 1);
    if (timeout === null) timeout = 5000;
    hideMessage(timeout);
}

function hideMessage(timeout){
    jQuery('.message').stop().css('opacity',1);
    if (timeout === null) timeout = 5000;
    jQuery('.message').delay(timeout).fadeTo(200, 0);
}

function showLive2d(){
jQuery(".hide-button").css("display","");
	jQuery(".show-button").css("display","none");
	if(jQuery('#landlord').height()!=280 ||jQuery('#landlord').width()!=280){
		jQuery('#landlord').height(280);
		jQuery('#landlord').width(280);
}}

function hideLive2d(){
if(jQuery.cookie('show-live2d')=='false'){
	jQuery(".hide-button").css("display","none");
	jQuery(".show-button").css("display","");
	if(jQuery('#landlord').height()!=40 ||jQuery('#landlord').width()!=40){
		jQuery('#landlord').height(40);
		jQuery('#landlord').width(40);
}}}

// jQuery(".hide-button").bind("click",function(){
//     jQuery("#landlord").css("transition","all 1s ease-in-out");
//     jQuery("#live2d").css("display","none");
//     jQuery('#landlord').height(40);
//     jQuery('#landlord').width(40);
//     jQuery.cookie('show-live2d',false);
//     jQuery(".message").css("display","none");
//     jQuery(".hide-button").css("display","none");
//     jQuery(".show-button").css("display","");
//     loadlive2d("live2d","null.json");
//     jQuery("#landlord").css("transition","");
//     window.clearInterval(hitoTimer);
// });

// jQuery(".show-button").bind("click",function(){
//     jQuery('#landlord').height(280);
//     jQuery('#landlord').width(280);
//     jQuery("#landlord").css("transition","all 1s cubic-bezier(0.18, 0.89, 0.32, 1.28)");
//     jQuery("#live2d").css("display","");
//     jQuery(".message").css("display","");  
//     jQuery(".hide-button").css("display","");
//     jQuery(".show-button").css("display","none");
//     loadlive2d("live2d",window.l2dmodel);
//     jQuery("#landlord").css("transition","");
//     window.hitoTimer = window.setInterval(showHitokoto,30000);
// });
