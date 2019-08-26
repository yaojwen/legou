$(function(){


    //title的hover
    $('#logo ul li').mouseover(function () {
        $(this).addClass('active').siblings().removeClass('active');

    })


    //结算事件
    $('#addbutton').click(function(){
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

  
  



})