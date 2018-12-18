function load_homepage_pic(){
    var pic = document.getElementsByName("with_pic");
    var odiv = document.getElementsByClassName("inner-pic");
    var i;
    for(i=0;i<odiv.length;i++){
        odiv[i].style.backgroundImage = "url(https://acg.toubiec.cn/random?" + i + ")";
        odiv[i].setAttribute("index",pic[i].getElementsByClassName("post-title-link")[0].getAttribute("href"));
        odiv[i].onclick = function(){
            var a = this.parentElement.parentElement.getElementsByClassName("post-title-link");
            a[0].setAttribute("onclick",''); 
            a[0].click("return false");  
        }   
    }
}

load_homepage_pic();


