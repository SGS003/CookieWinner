
window.onload=function(){
	var photo;
	var name="  "+"Player1";
	var tier="  " +"Golden tier";
	var cookies="   "+"1034 cookies";
	$('#name1').text(name);
	$('#tier1').text(tier);
	$('#cookies1').html(cookies);
	// text()和html() 有啥区别叻？
};





	//如何保证用户1的new Date（）与用户2的new Date（）相同，在这里就不予考虑了-->
	$(document).ready(function () {  
		var target = new Date().getTime() + 10000;
		$('.val').countdown(target, function(event) {
			$(this).html(event.strftime(' %S '));
		})
		.on('finish.countdown', function(){  
			toastr.warning("Time's up!"); 
			refresh();
			// important method! refresh the page to acquire next page
			$('.failure').unbind("click");
			$('#success').unbind("click");
		});  
	
		//获取正确选项，给正确选项添加id为success,给其他选项增加failure类，这个操作应在java中完成-->
			
		$('#success').click(function () {
			$(this).unbind("click");
			$('.failure').unbind("click");
            toastr.success('You are right!');
        });
		//注意：为什么一个this，一个却要全部写明？因为一个是#一个是.，而我们的目标是禁用全部错误答案链接-->
		$('.failure').click(function () {
			$('.failure').unbind("click");
			$('#success').unbind("click");
            toastr.error('You are wrong!');
			
        });
		
		$('#exit').click(function () {
            swal({ 
			title: "leave now?", 
			text: "You will lose this competition!", 
			type: "warning",
			showCancelButton: true, 
			confirmButtonColor: "#DD6B55",
			confirmButtonText: "leave now", 
			cancelButtonText: "stay for competition",
			closeOnConfirm: false, 
			closeOnCancel: true
		},
		function(isConfirm){ 
			if (isConfirm) { 
				swal({ 
					title: "unfortunately", 
					text: "Ten cookies lost !", 
					type: "warning",
					showCancelButton: false, 
					confirmButtonColor: "#DD6B55",
					confirmButtonText: "ok", 
					closeOnConfirm: true
				},
				function(){
					window.open("hall.html");
					/* need improvements*/
				});
			}
		});	
        });
		}); 
		
$(function() {
　　if (window.history && window.history.pushState) {
　　	$(window).on('popstate', function () {
			alert("You cannot get back");          //用sweetalert就不行？？？？-->
　　		window.history.pushState('forward', null, '#');
　　		window.history.forward(1);
　　	});
　　}
　　window.history.pushState('forward', null, '#'); //在IE中必须得有这两行
　　window.history.forward(1);
});


//implement later
function refresh(){
	
}