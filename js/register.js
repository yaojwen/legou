$(function(){

  
    var stuList = getStuList();//设置传送信息：学生的集合
    
    //focus
    $('input').eq(0).focus(function(){
		if($(this).val().length==0){
			$(this).next("div").text("支持中文，字母，数字，'-'，'_'的多种组合");
		}
	})
	$('input').eq(1).focus(function(){
		if($(this).val().length==0){
		    $(this).next("div").text("建议使用字母、数字和符号两种以上的组合，6-20个字符");
		}
	})
	$('input').eq(2).focus(function(){
		if($(this).val().length==0){
			$(this).next("div").text("请再次输入密码");
		}
	})
	$('input').eq(3).focus(function(){
		if($(this).val().length==0){
			$(this).next("div").text("验证完后，你可以使用该手机登陆和找回密码");
		}
	})
	$('input').eq(4).focus(function(){	
		if($(this).val().length==0){
			$(this).next("div").text("看不清？点击图片更换验证码");
		}
    })

    

    //blur
    $('input').eq(0).blur(function(){
		if($(this).val().length==0){
			$(this).next("div").text('');
		}
	})
	$('input').eq(1).blur(function(){
		if($(this).val().length==0){
		    $(this).next("div").text('');
		}
	})
	$('input').eq(2).blur(function(){
		if($(this).val().length==0){
			$(this).next("div").text('');
		}
	})
	$('input').eq(3).blur(function(){
		if($(this).val().length==0){
			$(this).next("div").text('');
		}
	})
	$('input').eq(4).blur(function(){	
		if($(this).val().length==0){
			$(this).next("div").text('');
		}
	})




    //input各种判断
	//用户名：
	$('input').eq(0).blur(function(){
		if($(this).val().length==0){
			$(this).next("div").text("");
			$(this).next("div").css("color",'#ccc');
		}else if($(this).val().length>0 && $(this).val().length<4){
			$(this).next("div").text("长度只能在4-20个字符之间");
			$(this).next("div").css("color",'red');
		}else if($(this).val().length>=4&& !isNaN($(this).val())){
			$(this).next("div").text("用户名不能为纯数字");
			$(this).next("div").css("color",'red');
		}else{
			for(var m=0;m<stuList.length;m++){
				if($(this).val()==stuList[m].name){
					$(this).next("div").text("该用户名已被注册");
					$(this).next("div").css("color",'red');
					return;
				}				
			}
			$(this).next("div").text("");
		}		
	})
	//密码
	$('input').eq(1).blur(function(){
		if($(this).val().length==0){
			$(this).next("div").text("");
			$(this).next("div").css("color",'#ccc');
		}else if($(this).val().length>0 && $(this).val().length<6){
			$(this).next("div").text("长度只能在6-20个字符之间");
			$(this).next("div").css("color",'red');
		}else{
			$(this).next("div").text("");
		}		
	})
//	确认密码
	$('input').eq(2).blur(function(){
		if($(this).val().length==0){
			$(this).next("div").text("");
			$(this).next("div").css("color",'#ccc');
		}else if($(this).val()!=$('input').eq(1).val()){
			$(this).next("div").text("两次密码不匹配");
			$(this).next("div").css("color",'red');
		}else{
			$(this).next("div").text("");
		}		
	})
//	手机号
	$('input').eq(3).blur(function(){
		if($(this).val().length==0){
			$(this).next("div").text("");
			$(this).next("div").css("color",'#ccc');
		}else if($(this).val().substr(0,3)!=138&&$(this).val().substr(0,3)!=186&&$(this).val().substr(0,3)!=139&&$(this).val().substr(0,3)!=158&&$(this).val().substr(0,3)!=188&&$(this).val().substr(0,3)!=157||$(this).val().length!=11){
			$(this).next("div").text("手机号格式不正确");
			$(this).next("div").css("color",'red');
		}else{
			$(this).next("div").text("");
		}		
	})




    // 	验证码
//	 验证码刷新
	function code(){
		var str="qwertyuiopasdfghjklzxcvbnm1234567890QWERTYUIOPLKJHGFDSAZXCVBNM";
		var str1=0;
		for(var i=0; i<4;i++){
			str1+=str.charAt(Math.floor(Math.random()*62)) 
		}
		str1=str1.substring(1)
		$("#code").text(str1);
	}
	code();
	$("#code").click(code);	
//	验证码验证
	$('input').eq(4).blur(function(){
		if($(this).val().length==0){
			$(this).next("div").text("");
			$(this).next("div").css("color",'#ccc');
		}else if($(this).val().toUpperCase()!=$("#code").text().toUpperCase()){
			$(this).next("div").text("验证码不正确");
			$(this).next("div").css("color",'red');
		}else{
			$(this).next("div").text("");
		}		
    })
    


    



    //	提交按钮
	$(".now").click(function(even){		
		for(var j=0 ;j<5;j++){
			if($('input').eq(j).val().length==0){				
				$('input').eq(j).focus();				
				if(j==4){
					$('input').eq(j).next("div").text("此处不能为空");
					$('input').eq(j).next("div").css("color",'red');
					even.preventDefault();
					return;
				}
				$('input').eq(j).next(".tips").text("此处不能为空");
				$('input').eq(j).next(".tips").css("color",'red');	
				even.preventDefault();
				return;
			}			
		}
		//协议

		//if($('#xieyi').prop('checked'))
		var xieyi=document.getElementById('xieyi')
		 if(xieyi.checked){
			alert("注册成功");
			window.open("index.html","_blank");
		}else{						
			$("#xieyi").next().next(".tips").text("请勾选协议");
			$("#xieyi").next().next(".tips").css("color",'red');
			even.preventDefault();
			return;
		} 
	})



    //	获取之前所有已经注册的用户集合
	function getStuList(){
	    var list = localStorage.getItem('stuList');
	    if(list != null){
	        return JSON.parse(list);
	    }else{
	        return new Array();
	    }
	}


})

