
window.onload=function(){
	var photo;
	var name="  "+"Player1";
	var tier="  " +"Golden tier";
	var cookies="   "+"1034 cookies";
	$('#name1').text(name);
	$('#tier1').text(tier);
	$('#cookies1').html(cookies);
	// text()��html() ��ɶ����߷��
};





	//��α�֤�û�1��new Date�������û�2��new Date������ͬ��������Ͳ��迼����-->
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
	
		//��ȡ��ȷѡ�����ȷѡ�����idΪsuccess,������ѡ������failure�࣬�������Ӧ��java�����-->
			
		$('#success').click(function () {
			$(this).unbind("click");
			$('.failure').unbind("click");
            toastr.success('You are right!');
        });
		//ע�⣺Ϊʲôһ��this��һ��ȴҪȫ��д������Ϊһ����#һ����.�������ǵ�Ŀ���ǽ���ȫ�����������-->
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
����if (window.history && window.history.pushState) {
����	$(window).on('popstate', function () {
			alert("You cannot get back");          //��sweetalert�Ͳ��У�������-->
����		window.history.pushState('forward', null, '#');
����		window.history.forward(1);
����	});
����}
����window.history.pushState('forward', null, '#'); //��IE�б������������
����window.history.forward(1);
});


//implement later
function refresh(){
	
}