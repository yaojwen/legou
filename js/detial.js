$(function(){
    /*
     show  //正常状态的框
     bigshow   // 放大的框的盒子
     smallshow  //缩小版的框
     mask   //放大的区域（黑色遮罩）
     bigitem  //放大的框
     */
    var obj = new mag('.show', '.bigshow','.smallshow','.mask','.bigitem');
    obj.init();



        //精装版
        var num=0
        $('#banner .content .choose').click(function () {
            num++;
            $(this).addClass('active').siblings().removeClass('active');
            if(num%2==1){
                $('#banner .right .none').css('display','block');
                $('#banner .right .open').css('display','none');            
            }else{
                $('#banner .right .none').css('display','none');
                $('#banner .right .open').css('display','block');   
            }
        })


        /* 数量事件 */
        
        $('#add').click(function(){
           var $num=parseInt($('#totle').val());
           $('#totle').val($num+1)
        })
    
                
        $('#reduce').click(function(){
            var $num=parseInt($('#totle').val());
            $('#totle').val($num-1);
            if($num-1<1){
                $('#totle').val('1')
            }
         })

         
    
         /* 商品详情和评论切换 */
       
    $('.p1').click(function(){
        console.log($('.p1'));
        
        $(this).addClass('active').siblings().removeClass('active');
        $('#seeagain .content>.on').show();
        $('#seeagain .content .reputably').hide();
    })
    $('.p2').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        $('#seeagain .content>.on').hide();
        $('#seeagain .content .reputably').show();
    })



    //翻页效果
    
    $('#seeagain .filp .btn').click(function () {
      
        $(this).addClass('active').siblings().removeClass('active');
    })
    
    
    $('#seeagain .filp .next').click(function(){
        $('#seeagain .filp .btn.active').removeClass('active').next().addClass('active');
    })
});