$(function(){


    //推荐点击效果
    $('.recommend ul li a').click(function(){
        $('.recommend ul li').removeClass('active');
        $(this).parent('li').addClass('active')
    })

    //轮播图
    banner(3000)
    var timer;
    var counLen = $('.list li').length;
    var acIndex = $('.list li').filter('.active').index();
    var next = acIndex+1;
    function banner(time){

        timer = setInterval(function(){
        $('.item').eq(acIndex).fadeOut(1000);
        $('.list li').removeClass('active');
        $('.list li').eq(next).addClass('active');
        $('.item').eq(next).fadeIn(1000);
        acIndex = next;
        next = acIndex + 1 < counLen ? acIndex + 1 : 0;
        },time)
    }
    $('.list li').click(function(){

        clearInterval(timer);
        banner(3000);
        acIndex=$(this).index();
        next = acIndex + 1 < counLen ? acIndex + 1 : 0;
        $('.item').fadeOut(500);
        $('.list li').removeClass('active');
        $('.item').eq(acIndex).fadeIn(500);
        $(this).addClass('active')
    })

//公司动态
    dynamic()
    function dynamic(){
        var imgIndex = $('.dynamic_con .topimg img').filter('.curr').index();
        var nextInd = imgIndex+1
        var dynLen = $('.dynamic_con .topimg img').length
        for(var i=0;i<dynLen; i++){
            $('.dynamic_con .topimg img').eq(i).css('z-index',-i);
        }
         setInterval(function(){

            $('.dynamic_con .topimg img').eq(imgIndex).fadeOut(1000);
            $('.dynamic_con .topimg img').removeClass('curr');
            $('.dynamic_con .topimg img').eq(nextInd).addClass('curr');
            $('.dynamic_con .topimg img').eq(nextInd).fadeIn(1000);
            imgIndex = nextInd;
            nextInd = imgIndex + 1 < dynLen ? imgIndex + 1 : 0;
        },2500)
    }





})