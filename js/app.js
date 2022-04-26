
$(document).ready(function(){
    menu()
    slide()
    popup()
})

function menu(){
    $(".gnb>li").hover(
        function(){
            $(".lnb").stop().slideDown()
            $(".left_bg").stop().slideDown()
            $(".right_bg").stop().slideDown()
        },
        function(){
            $(".lnb").stop().slideUp()
            $(".left_bg").stop().slideUp()
            $(".right_bg").stop().slideUp()
        }
    )
}
function slide(){
    setInterval(slide_move,3000)
}
var curLeft=0
function slide_move(){
    curLeft -= 1200
    if(curLeft<-2400){
        curLeft=0
    }
    $("#slide_contents").animate({left:curLeft},400,"swing")
    //-1200 -2400 0
    //-1200 -2400 0
}
function popup(){
    $(".notice_list>li").eq(0).click(function(){
        $("#popup").show()
    })
    $("#closeBtn").click(function(){
        $("#popup").hide()
    })
}