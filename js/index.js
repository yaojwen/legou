


$(function(){
    
    /* 设置loding动画 */
    var timer=null;
    timer= setInterval(
        function(){
            $('.loader').remove();   
            $('#q').show();
             clearInterval(timer);
        },3000) 
      
       console.log(timer);
       
    //二级菜单hover效果
    $('.item').mouseover(function () { $(this).children('.i-mc').show() }).mouseout(function () { $(this).children('.i-mc').hide() });


    $('#ebook .content-middleright li').mouseover(function(){
        $(this).addClass('active').siblings().removeClass('active')
    })

    // 电子选项卡
    $("#cloth .h4Lis h4").mouseover(function(){
        //为当前li添加激活样式
        $(this).addClass("active").siblings().removeClass("active");
        //获取当前li的索引
        let index = $(this).index();  
        //显示当前li对应的内容
        $("#cloth .content-middle>ul").removeClass("on").eq(index).addClass("on");      
    });

    $("#ebook .h4Lis h4").mouseover(function(){
        $(this).addClass("active").siblings().removeClass("active");
        let index = $(this).index(); 
        $("#ebook .content-middle>ul").removeClass("on").eq(index).addClass("on");       
    });

    $("#sport .h4Lis h4").mouseover(function(){
        $(this).addClass("active").siblings().removeClass("active");
        let index = $(this).index();
        $("#sport .content-middle>ul").removeClass("on").eq(index).addClass("on");       
    });
   
    $("#childCloth .h4Lis h4").mouseover(function(){
        $(this).addClass("active").siblings().removeClass("active");
        let index = $(this).index();
        $("#childCloth .content-middle>ul").removeClass("on").eq(index).addClass("on");        
    });

    $("#popular .h4Lis h4").mouseover(function(){
        $(this).addClass("active").siblings().removeClass("active");
        let index = $(this).index();
        $("#popular ul").removeClass("on").eq(index).addClass("on");
        
    });




    //初始化轮播图
    $(".ebookslider").slidebox({
        boxh: 218,//盒子的高度
        w: 330,//图片的宽度
        h: 218,//图片的高度
        isShow: true,//是否显示控制器
        isShowBtn: true,//是否显示左右按钮
        controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20,//控制按钮宽度
        controlsH: 10,//控制按钮高度
        radius: 16//控制按钮圆角度数
    });

   
    $(".sportslider").slidebox({
        boxh: 340,//盒子的高度
        w: 427,//图片的宽度
        h: 340,//图片的高度
        isShow: true,//是否显示控制器
        isShowBtn: true,//是否显示左右按钮
        controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20,//控制按钮宽度
        controlsH: 10,//控制按钮高度
        radius: 16//控制按钮圆角度数
    });

   
    $(".clothslider").slidebox({
        boxh: 340,//盒子的高度
        w: 427,//图片的宽度
        h: 340,//图片的高度
        isShow: true,//是否显示控制器
        isShowBtn: true,//是否显示左右按钮
        controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20,//控制按钮宽度
        controlsH: 10,//控制按钮高度
        radius: 16//控制按钮圆角度数
    });

   
    $(".childClothslider").slidebox({
        boxh: 340,//盒子的高度
        w: 427,//图片的宽度
        h: 340,//图片的高度
        isShow: true,//是否显示控制器
        isShowBtn: true,//是否显示左右按钮
        controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20,//控制按钮宽度
        controlsH: 10,//控制按钮高度
        radius: 16//控制按钮圆角度数
    });


    


    //goTop
    $(window).on('scroll',function(){
        var $scroll=$(this).scrollTop();
        if($scroll>=500){
            $('#loutinav').show();
        }else{
            $('#loutinav').hide();
        }

        //4.拖动滚轮，对应的楼梯样式进行匹配
        $('.goTop').each(function(){
            var $loutitop=$('.goTop').eq($(this).index()).offset().top+400;
            //console.log($loutitop);
            if($loutitop>$scroll){//楼层的top大于滚动条的距离
                $('#loutinav li').removeClass('active');
                $('#loutinav li').eq($(this).index()).addClass('active');
                return false;//中断循环
            }
        });
    });
    //2.获取每个楼梯的offset().top,点击楼梯让对应的内容模块移动到对应的位置(-150 差不多第一眼看上去在屏幕中间)  offset().left
    
    var $loutili=$('#loutinav li').not('.last');
    $loutili.on('click',function(){
        $(this).addClass('active').siblings('li').removeClass('active');
        var $loutitop=$('.goTop').eq($(this).index()).offset().top-150;
        //获取每个楼梯的offsetTop值
        $('html,body').animate({//$('html,body')兼容问题body属于chrome
            scrollTop:$loutitop
        })
    });
    //3.回到顶部
    $('.last').on('click',function(){
        $('html,body').animate({//$('html,body')兼容问题body属于chrome
            scrollTop:0
        })
    });
    
    

    //alwaysOn
    $(window).on('scroll',function(){
        var $scroll=$(this).scrollTop();
        if($scroll>=500){
            $('#topSearch').show();
        }else{
            $('#topSearch').hide();
        }})



    //添加popular里的hover效果
    $('#popular li').mouseover(function(){
        $(this).addClass('active').siblings().removeClass('active');
    })
    $('#popular li').mouseout(function(){
        $(this).removeClass('active')
    })


    //coupon hover效果
    $('#coupon .on').mouseover(function(){
        $('#coupon .active').fadeIn();
    })
    $('#coupon .on').mouseout(function(){
        $('#coupon .active').fadeOut();
    })



    //recomend  hover 效果
    $("#recomend ul li").hover(function(){
        $(this).addClass('on').siblings().removeClass('on');
    });


    
    

})




