function play1 () {
	var setinterval = null;
			var imgs = $('#Mediterranean .style-cen ul li');
			var dot = $('.style-cen ol li');
//			alert(dot.eq(1).index())
//			var w = imgs.eq(0).width();
			var len = dot.length;
			//获取doc  的元素
			function interval(offset,hoverTime){
				var act = dot.filter('.act').index();
				
				var next = act + offset;
				
				if(offset==0){
					next = hoverTime;
				}else if(offset==1){
					next = next > len-1?0 : next;
				}else{
					next = next < 0? len-1 :next;
				}
				//显示下一张  隐藏当前
			
				imgs.eq(act).stop().fadeOut(1000);
				imgs.eq(next).stop().fadeIn(1000);
				
				//下一张添加聚焦
				dot.eq(act).removeClass('act');
				dot.eq(next).addClass('act');
			}
			
			//定时器
			function dsq() {
				window.clearInterval(setinterval);
				setinterval = setInterval(function() {
					//循环的方法
					interval(1);
				}, 3000);
			}
			dsq();
			
		
////			
			//消除鼠标移动到视图div上时候的定时器效果
			$('#Mediterranean .style-cen').hover(function(){
				window.clearInterval(setinterval);
			},function(){
				dsq();
			});
			dot.hover(function(){
				window.clearInterval(setinterval)
				interval(0,$(this).index());
			},function(){dsq();})
}
play1();

function play2 () {
	var setinterval = null;
			var imgs = $('#European .style-cen1 ul li');
			var dot = $('.style-cen1 ol li');
//			alert(dot.eq(1).index())
//			var w = imgs.eq(0).width();
			var len = dot.length;
			//获取doc  的元素
			function interval(offset,hoverTime){
				var act = dot.filter('.act').index();
				
				var next = act + offset;
				
				if(offset==0){
					next = hoverTime;
				}else if(offset==1){
					next = next > len-1?0 : next;
				}else{
					next = next < 0? len-1 :next;
				}
				//显示下一张  隐藏当前
			
				imgs.eq(act).stop().fadeOut(1000);
				imgs.eq(next).stop().fadeIn(1000);
				
				//下一张添加聚焦
				dot.eq(act).removeClass('act');
				dot.eq(next).addClass('act');
			}
			
			//定时器
			function dsq() {
				window.clearInterval(setinterval);
				setinterval = setInterval(function() {
					//循环的方法
					interval(1);
				}, 3000);
			}
			dsq();
			
		
////			
			//消除鼠标移动到视图div上时候的定时器效果
			$('#European .style-cen1').hover(function(){
				window.clearInterval(setinterval);
			},function(){
				dsq();
			});
			dot.hover(function(){
				window.clearInterval(setinterval)
				interval(0,$(this).index());
			},function(){dsq();})
}
play2();

function play3 () {
	var setinterval = null;
			var imgs = $('#fashion .style-cen2 ul li');
			var dot = $('.style-cen2 ol li');
//			alert(dot.eq(1).index())
//			var w = imgs.eq(0).width();
			var len = dot.length;
			//获取doc  的元素
			function interval(offset,hoverTime){
				var act = dot.filter('.act').index();
				
				var next = act + offset;
				
				if(offset==0){
					next = hoverTime;
				}else if(offset==1){
					next = next > len-1?0 : next;
				}else{
					next = next < 0? len-1 :next;
				}
				//显示下一张  隐藏当前
			
				imgs.eq(act).stop().fadeOut(1000);
				imgs.eq(next).stop().fadeIn(1000);
				
				//下一张添加聚焦
				dot.eq(act).removeClass('act');
				dot.eq(next).addClass('act');
			}
			
			//定时器
			function dsq() {
				window.clearInterval(setinterval);
				setinterval = setInterval(function() {
					//循环的方法
					interval(1);
				}, 3000);
			}
			dsq();
			
		
////			
			//消除鼠标移动到视图div上时候的定时器效果
			$('#fashion .style-cen2').hover(function(){
				window.clearInterval(setinterval);
			},function(){
				dsq();
			});
			dot.hover(function(){
				window.clearInterval(setinterval)
				interval(0,$(this).index());
			},function(){dsq();})
}
play3();

function play4 () {
	var setinterval = null;
			var imgs = $('#exalted .style-cen3 ul li');
			var dot = $('.style-cen3 ol li');
//			alert(dot.eq(1).index())
//			var w = imgs.eq(0).width();
			var len = dot.length;
			//获取doc  的元素
			function interval(offset,hoverTime){
				var act = dot.filter('.act').index();
				
				var next = act + offset;
				
				if(offset==0){
					next = hoverTime;
				}else if(offset==1){
					next = next > len-1?0 : next;
				}else{
					next = next < 0? len-1 :next;
				}
				//显示下一张  隐藏当前
			
				imgs.eq(act).stop().fadeOut(1000);
				imgs.eq(next).stop().fadeIn(1000);
				
				//下一张添加聚焦
				dot.eq(act).removeClass('act');
				dot.eq(next).addClass('act');
			}
			
			//定时器
			function dsq() {
				window.clearInterval(setinterval);
				setinterval = setInterval(function() {
					//循环的方法
					interval(1);
				}, 3000);
			}
			dsq();
			
		
////			
			//消除鼠标移动到视图div上时候的定时器效果
			$('#exalted .style-cen3').hover(function(){
				window.clearInterval(setinterval);
			},function(){
				dsq();
			});
			dot.hover(function(){
				window.clearInterval(setinterval)
				interval(0,$(this).index());
			},function(){dsq();})
}
play4();


