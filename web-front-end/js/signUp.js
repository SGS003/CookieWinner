var url='/personal/kaike';

function check_register(){
    var name = $("#name").val();
    var pass = $("#password").val();
	var repass = $("#repassword").val();
    var email = $("#email").val();
	
	if(email!="" && name!="" && pass!="" && repass!="" && pass==repass){
		/*判断1 ： 像服务器发送请求，判断输入的邮箱地址是否存在于数据库中*/
		var reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");
		if(!reg.test(email)){
			alert("Invalid email address");
		}else if(pass.length<6){
			alert("password must have more than 6 digits or characters");
		}else{
			var result = send_to_server(name,pass,email);//connect to server method
			if(result){
				alert("This email has been registered!");
			}else{
				alert("success！");
				window.open("hall.html");//同时要向hall.html传入uid
			}
		}
	 }
	 else{
		 alert("Wrong input, please enter again!");
	 }
}


function send_to_server(name,pass,email){
	
	var post_data={"uid":email;"password":pass;"name":name};  
	alert(post_data);
	var url="";
	var res="";
	$.post(url, post_data,
		function(data){
			//test   
			//alert(data.pass); 
			res=data.isRegistered;//this variable name data.X is decided by the server
			//传入一个boolean值即可
		}, "json");
	return res;
}