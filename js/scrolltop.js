// JavaScript Document
function goTopEx(){
        var obj=document.getElementById("goTopBtn");
        function getScrollTop(){
                return document.documentElement.scrollTop|document.body.scrollTop;
            }
        function setScrollTop(value){
                document.documentElement.scrollTop=value;
                document.body.scrollTop=value;
            }    
        window.onscroll=function(){getScrollTop()>60?obj.style.display="":obj.style.display="none";}
        obj.onclick=function(){
            var goTop=setInterval(scrollMove,10);
            function scrollMove(){
                    setScrollTop(getScrollTop()/1.1);
                    if(getScrollTop()<1)clearInterval(goTop);
                }
        }
    }
