// 스크롤 애니메이션
$(function(){
    $('.animate').scrolla({
        mobile: true,
        once:false,
        
    });
})

// Header event
var scrollValue = 0;
scrollValue = $(document).scrollTop();
fixHeader();

$(window).on('scroll resize', function(){
    scrollValue = $(document).scrollTop();
    fixHeader();
})

function fixHeader(){
    if(scrollValue > 200) {
        $('header').addClass('on');
    } else{
        $('header').removeClass('on');
    }
}