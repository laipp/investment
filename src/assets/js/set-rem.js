/* 
* @Last Modified time: 2017-09-06 16:17:49
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
                docEl.style.fontSize=100 * (clientWidth / 750)+'px';
            }
        };
        if(!doc.addEventListener) return;
        win.addEventListener(resizeEvt,recalc,false);
        doc.addEventListener('DOMContentLoaded',recalc,false)
})(document,window)