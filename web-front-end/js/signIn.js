var url='/personal/kaike';

window.onload=function(){
	
	console.log($.cookie('uid'));
	if($.cookie('uid')!=null){
		alert("cookie exists");
		$('#email').placeholder=$.cookie('uid');
	}
};

function check_login(){
	
	var pass = $("#password").val();
    var email = $("#email").val();
	
	if(email!="" && pass!="" ){
		var reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");
		if(!reg.test(email)){
			alert("Invalid email address");
		}else{
			if($('input:checkbox:checked')){
				cookie_remember_pass(email,pass);
			}
			var result = send_email_to_server(email);
			if(result==null){
				alert("No such account exists");
			}else if(result!=pass){
				alert("Wrong password");
			}else{
				alert("success！");
				window.open("hall.html");//同时要向hall.html传入uid
			}
			
		}
		/*判断1 ： 像服务器发送请求，判断输入的邮箱密码是否成立*/
	 }
	 else{
		 alert("Wrong input, please enter again!");
	 }
}

function send_email_to_server(email){
	
	var post_data={"uid":email};  

	var url="";
	var res="";
	$.post(url, post_data,
		function(data){
			alert(data.pass); // password
			res=data.pass;
		}, "json");
	return res;
}

function cookie_remember_pass(email,pass){
	//设置cookie失败
	alert("set uo cookie");
	$.cookie('uid', 'email', { expires: 7, path: '/' });  
	$.cookie('password', pass, { expires: 7 });
	alert($.cookie('uid'));
}