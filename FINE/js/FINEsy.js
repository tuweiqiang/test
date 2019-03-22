//轮播图
$(function() {
            
//       1.获取窗口宽度
            var w = $(window).width();
//          alert( w );
//          2.把获取的w给每个li
            $('#slider ul li').width(w);
            //3.点击每个轮播点，图片动起来
            $('#slider ol li').click(function(){
            	//点击哪一个就是给当前添加类
            	$(this).addClass('current').siblings().removeClass('current');
            	//第一个图  0*w   第二个图 1*w   第三个图 2*w
            	//每一个值 i*w
            	//获取编号
            	var i = $(this).index();
            	//把每个值给left属性
            	$('#slider ul').stop().animate({left:-i*w},500);
            	num = i;
            });
            //4.自动播放----定时器
            var timer = null;
            //累加器
            var num = 0;
            var autoplay = function(){
//          	function(){
            	num++;
            	if(num > 4){
            		num = 0;
            		$('#slider ul').css('left',0).stop().animate({left:-w},500);
            		num = 1;
            		//播放到第二张的时候，
            		$('#slider ol li').eq(1).addClass('current').siblings().removeClass('current');
            	}else{
            		$('#slider ul').stop().animate({left:-num*w},500);
            		//通过编号，来找到对应的轮播点
            		$('#slider ol li').eq(num).addClass('current').siblings().removeClass('current');
            	}
            	if(num == 4){
            		$('#slider ol li').eq(0).addClass('current').siblings('li').removeClass('current');
            	}
//          }
            };
            timer = setInterval(autoplay,5000);
            
            $('#slider').mouseenter(function(){
            	clearInterval(timer);
            }).mouseleave(function(){
            	timer = setInterval(autoplay,5000);
            });
            //向右播放---点击右
            $('#slider .right').click(function(){
            	autoplay();
            });
            //向左播放---点击左
            var prevplay = function(){
            	num--;
            	if(num < 0){
            		num = 4;
            		$('#slider ul').css({left:-4*w}).stop().animate({left:-3*w},500);
            		num = 3;
            		//播放到第二张的时候，
            		$('#slider ol li').eq(3).addClass('current').siblings().removeClass('current');
            	}else{
            		$('#slider ul').stop().animate({left:-num*w},500);
            		//通过编号，来找到对应的轮播点
            		$('#slider ol li').eq(num).addClass('current').siblings().removeClass('current');
            	}
            	if(num == 4){
            		$('#slider ol li').eq(0).addClass('current').siblings('li').removeClass('current');
            	}
            };
           $('#slider .left').click(function(){
            	prevplay();
            });    
		});

	
	
	
	
	
	
	

