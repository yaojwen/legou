

$(function () {







    //折扣区hover效果
    $('#discount ul li').mouseover(function () {
        $(this).addClass('active').siblings().removeClass('active');


    }).mouseout(function () {
        $(this).removeClass('active');


    })



    //加入购物车功能
    var k = 0;
    $(".carbox .left span").click(function () {
        if (k == 0) {
            $(".carbox").animate({ right: "0px" }, 500);
            k = 1;
        } else if (k == 1) {
            $(".carbox").animate({ right: "-220px" }, 500);
            k = 0;
        }

    });
    $(".par_list ul li p.jg span").click(function () {
        console.log(11);
        var img = $(this).parent().siblings("img").attr("src");
        var text = $(this).parent().siblings("p.title").html();
        var money = $(this).siblings("font").html();
        $(".con").append("<dl><dt><img src='" + img + "' width='60' height='60' alt='' /></dt><dd class='ti'>" + text + "</dd><dd class='money'>" + money + "</dd></dl>" + '<div class="del txtcenter lh30">清空</div><div class="go txtcenter lh30">购物车</div>');

        //清空和跳转操作
        $('.carbox .del').click(function () {
            //清空购物车，隐藏图标
            $("#shopping .con dl").remove();
            $('.carbox .del,.carbox .go').remove()
        })
        $('.carbox .go').click(function () {
            //跳转购物车
            window.open('shopping car.html');


        })
        //play(event);
    })

    //点击跳转


    //抛物线函数
    /* function play(event) {
        var s_left = event.clientX;//获取鼠标左边的位置
        var s_top = event.clientY;//获取鼠标左边的位置
        var e_left = $(".carbox .left span").offset().left;
        var e_top = $(".carbox .left span").offset().top;
        var _this = $(event.target);//当前到点击的js对象
        var img = _this.parent().siblings("img").attr("src");
        var flyer = $("<img src='" + img + "' width='50' style='border-radius:50%'/>");//创建图片对象

        flyer.fly({
            start: {
                left: s_left,
                top: s_top
            },
            end: {
                left: e_left,
                top: e_top - 640
            },
            onEnd: function () {
                flyer.fadeOut("slow", function () {
                    $(this).remove();
                });
            }
        })
    } */






    //独家提供hover效果
    $('#offers .title>ul>li').mouseover(function () {
        $(this).addClass('active').siblings().removeClass('active');


    }).mouseout(function () {
        $(this).removeClass('active');


    })




    //新书推荐hover效果
    $('#newbook .left li').mouseover(function () {
        $(this).addClass('active').siblings().removeClass('active');
    }).mouseout(function () {
        $(this).removeClass('active');
    })


    //电子书手风琴
    $("#newbook .ebookRight li").mouseover(function () {
        //显示所有li下面的标题h4
        $("#newbook .ebookRight li h4").show()
        //隐藏当前下面的
        $("h4", this).hide();
        //隐藏所有li下面的div
        $("#newbook .ebookRight li div").hide()
        //显示当前下面的 内容div
        $("div", this).show();
    });







    //初始化轮播图
    $("#offersilde").slidebox({
        boxh: 520,//盒子的高度
        w: 1200,//图片的宽度
        h: 480,//图片的高度
        isShow: true,//是否显示控制器
        isShowBtn: true,//是否显示左右按钮
        controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 12,//控制按钮宽度
        controlsH: 12,//控制按钮高度
        radius: 6//控制按钮圆角度数
    });








    //猜你喜欢hover效果
    $('#youlike .content li').mouseover(function () {
        $(this).addClass('active').siblings().removeClass('active');
    }).mouseout(function () {
        $(this).removeClass('active');
    })

})

