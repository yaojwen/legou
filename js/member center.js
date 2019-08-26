$(function(){



                //logo hover效果
                $('#logo ul li').mouseover(function () {
                    console.log(1);
                    
                    $(this).addClass('active').siblings().removeClass('active');
            
            
                }).mouseout(function () {
                    $(this).removeClass('active');
            
            
                })
        

    //初始化轮播图
    $(".bannerlider").slidebox({
        boxh: 474,//盒子的高度
        w: 730,//图片的宽度
        h: 474,//图片的高度
        isShow: true,//是否显示控制器
        isShowBtn: true,//是否显示左右按钮
        controltop: 50,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20,//控制按钮宽度
        controlsH: 20,//控制按钮高度
        radius: 16//控制按钮圆角度数
    });











})