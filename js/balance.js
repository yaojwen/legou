$(function(){

    /* 头两个框框点击事件 */
    var num=0;
    var num1=0;
   $('#card1 .active').click(function(){
       num++;
       if(num%2==1){
        $(this).find('.on').fadeIn();
        $(this).css('border-color','#f60')
       }else{
        $(this).find('.on').fadeOut();
        $(this).css('border-color','#ccc')
       }
    })
    $('#address #card1 .active').hover(function(){
        $(this).addClass('hand')
    })



    $('#card2 .active').click(function(){
        num1++;
        if(num1%2==1){
         $(this).find('.on').show();
         $(this).css('border-color','#f60')
        }else{
         $(this).find('.on').hide();
         $(this).css('border-color','#ccc')
        }
     })
     $('#address #card2 .active').hover(function(){
         $(this).addClass('hand')
     })



     /* 支付方式切换 */
     $('#card3 .test').click(function(){
         /* console.log(1); */
         
       $(this).addClass('active').siblings().removeClass('active')
       
     })


     /* 修改pay和time事件 */
     $('#changepay').click(function(){
         console.log(111);
         
         $('#pay').prop("selected",true);
     })



     /* 点击确认支付事件 */
     $('#invoice .btn').click(function(){
         $('#confirm').fadeIn();
         $('body').css('background','rgba(222,222,222,0.5)')
     })


    

     $('#confirm .false,#confirm .del').click(function(){
         console.log(111)
        $('#confirm').fadeOut();
        $('body').css('background','')
        $('#Easteregg').fadeIn();
     })

     $('#Easteregg').click(function(){
        
       $(this).fadeOut();
    })


     $('#confirm .true').click(function(){
        console.log(111)
        window.location.href="online payment.html"
    })

    /*  $('.active').click(function(){
        num1++;
        if(num1%2==1){
         $(this).find('.on').show();
         $(this).css('border-color','#f60')
        }else{
         $(this).find('.on').hide();
         $(this).css('border-color','#ccc')
        }
     })
     $('.active').hover(function(){
         $(this).addClass('hand')
     }) */





     //点击添加地址事件
     $('#clone,#addRess').click(function(){
         num++;
         if(num%2==1){
            $('#address .more,#card2').show();
            $('#clone').text('删除多余地址 +');
            $('#card2').addClass('on');
            $('#card1').removeClass('on')
         }else{
            $('#address .more,#card2').hide();
            $('#clone').text('添加更多地址 +');
            $('#card1').addClass('on');
            $('#card2').removeClass('on')
         }
        
     })

})