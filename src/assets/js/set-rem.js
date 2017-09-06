/* 
* @Last Modified time: 2017-09-06 16:17:49
* 使用：
1.下载完成后首先修改js文件中的基本单位：psd宽度是640就写640，是750就写750.现在的设计稿大部分是以iphone 6 为基准设计的，也就是750px。
2.切图时，我们以100px为基本单位（至于为什么是100px，自己看看我的js代码就知道了），每个元素的宽高，字体等等就直接用rem来写，不用执行减半等操作，设计稿是多少就写多少。
-->下面是一张750px的设计稿图中那个690px*336PX元素css样式如下：
.box{
    width: 6.9rem;
    height: 3.36rem;
    margin: 0 auto;
    background: #ffffff;
}
*/
(function(doc,win){
    var docEl=doc.documentElement,
        resizeEvt ='orientationchange' in window ? 'orientationchange' : 'resize',
        recalc =function(){
            var clientWidth =docEl.clientWidth;
            if(!clientWidth) return;
            if(clientWidth > 414){
                docEl.style.fontSize='50px';
            }else{
                docEl.style.fontSize=100 * (clientWidth / 750)+'px';//750这个值，根据设计师的psd宽度来修改，是多少就多少
            }
        };
        if(!doc.addEventListener) return;
        win.addEventListener(resizeEvt,recalc,false);
        doc.addEventListener('DOMContentLoaded',recalc,false)
})(document,window)