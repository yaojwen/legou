$(function () {

        var i=0;


    $.alerts = {
        alert: function (title, message, callback) {
            if (title == null) title = 'Alert';
            $.alerts._show(title, message, null, 'alert', function (result) {
                if (callback) callback(result);
            });
        },

        confirm: function (title, message, callback) {
            if (title == null) title = 'Confirm';
            $.alerts._show(title, message, null, 'confirm', function (result) {
                if (callback) callback(result);
            });
        },


        _show: function (title, msg, value, type, callback) {

            var _html = "";

            _html += '<div id="mb_box"></div><div id="mb_con"><span id="mb_tit">' + title + '</span>';
            _html += '<div id="mb_msg">' + msg + '</div><div id="mb_btnbox">';
            if (type == "alert") {
                _html += '<input id="mb_btn_ok" type="button" value="确定" />';
            }
            if (type == "confirm") {
                _html += '<input id="mb_btn_ok" type="button" value="确定" />';
                _html += '<input id="mb_btn_no" type="button" value="取消" />';
            }
            _html += '</div></div>';

            //必须先将_html添加到body，再设置Css样式
            $("body").append(_html); GenerateCss();

            switch (type) {
                case 'alert':

                    $("#mb_btn_ok").click(function () {
                        $.alerts._hide();
                        callback(true);
                    });
                    $("#mb_btn_ok").focus().keypress(function (e) {
                        if (e.keyCode == 13 || e.keyCode == 27) $("#mb_btn_ok").trigger('click');
                    });
                    break;
                case 'confirm':

                    $("#mb_btn_ok").click(function () {
                        $.alerts._hide();
                        if (callback) callback(true);
                    });
                    $("#mb_btn_no").click(function () {
                        $.alerts._hide();
                        if (callback) callback(false);
                    });
                    $("#mb_btn_no").focus();
                    $("#mb_btn_ok, #mb_btn_no").keypress(function (e) {
                        if (e.keyCode == 13) $("#mb_btn_ok").trigger('click');
                        if (e.keyCode == 27) $("#mb_btn_no").trigger('click');
                    });
                    break;


            }
        },
        _hide: function () {
            $("#mb_box,#mb_con").remove();
        }
    }
    // Shortuct functions
    zdalert = function (title, message, callback) {
        $.alerts.alert(title, message, callback);
    }

    zdconfirm = function (title, message, callback) {
        $.alerts.confirm(title, message, callback);
    };




    //生成Css
    var GenerateCss = function () {

        $("#mb_box").css({
            width: '100%', height: '100%', zIndex: '99999', position: 'fixed',
            filter: 'Alpha(opacity=60)', backgroundColor: 'black', top: '0', left: '0', opacity: '0.6'
        });

        $("#mb_con").css({
            zIndex: '999999', width: '30%', position: 'fixed',
            backgroundColor: 'White', borderRadius: '15px'
        });

        $("#mb_tit").css({
            display: 'block', fontSize: '14px', color: '#444', padding: '10px 15px',
            backgroundColor: '#DDD', borderRadius: '15px 15px 0 0',
            borderBottom: '3px solid #009BFE', fontWeight: 'bold'
        });

        $("#mb_msg").css({
            padding: '20px', lineHeight: '20px',
            borderBottom: '1px dashed #DDD', fontSize: '13px'
        });

        $("#mb_ico").css({
            display: 'block', position: 'absolute', right: '10px', top: '9px',
            border: '1px solid Gray', width: '18px', height: '18px', textAlign: 'center',
            lineHeight: '16px', cursor: 'pointer', borderRadius: '12px', fontFamily: '微软雅黑'
        });

        $("#mb_btnbox").css({ margin: '15px 0 10px 0', textAlign: 'center' });
        $("#mb_btn_ok,#mb_btn_no").css({ width: '85px', height: '30px', color: 'white', border: 'none' });
        $("#mb_btn_ok").css({ backgroundColor: '#168bbb' });
        $("#mb_btn_no").css({ backgroundColor: 'gray', marginLeft: '20px' });


        //右上角关闭按钮hover样式
        $("#mb_ico").hover(function () {
            $(this).css({ backgroundColor: 'Red', color: 'White' });
        }, function () {
            $(this).css({ backgroundColor: '#DDD', color: 'black' });
        });

        var _widht = document.documentElement.clientWidth; //屏幕宽
        var _height = document.documentElement.clientHeight; //屏幕高

        var boxWidth = $("#mb_con").width();
        var boxHeight = $("#mb_con").height();

        //让提示框居中
        $("#mb_con").css({ top: (_height - boxHeight) / 2 + "px", left: (_widht - boxWidth) / 2 + "px" });
    }




    //也可以传方法名 test
    $("#addbutton").bind("click", function () {


        // $.MsgBox.Confirm("温馨提示", "确定要进行修改吗？", test);

        zdconfirm('系统确认框', '确认跳转收货地址吗', function (r) {
            if (r) {
                //...点确定之后执行的内容

                window.location.href = "./balance.html"
            }
        });


    })



    yunsuan({ "BoxId": "content", "ResultId": "addbutton" });      //调用函数
    function yunsuan(obj) {
        var BoxId = obj.BoxId;  //获取到传递的参数
        var ResultId = obj.ResultId;   //获取到最终的button的Id
        for (var i = 0; i < document.getElementById(BoxId).getElementsByTagName("li").length - 1; i++) {
            addbutton(document.getElementById(BoxId).getElementsByTagName("li")[i]);
        }
        function addbutton(obj) {
            obj.index = 0;
            obj.getElementsByTagName("button")[1].onclick = function () {
                obj.index++;
                obj.getElementsByTagName("span")[0].innerHTML = obj.index;
                var NumD = obj.getElementsByTagName("em")[0].innerHTML.split(".");
                var splitStr = obj.getElementsByTagName("em")[0].innerHTML.replace(".", "").toString();
                obj.getElementsByTagName("label")[0].innerHTML = splitStr * parseInt(obj.index) / Math.pow(10, NumD[1].length);
               
               
               
                //显示总和
                var Num = 0;  //用来求和
                var btn = document.getElementById(ResultId)
                for (var i = 0; i < document.getElementById(BoxId).getElementsByTagName("label").length - 1; i++)  //必须减去1因为要是不减去1她会加上最底部求和那个
                {
                    Num += parseFloat(document.getElementById(BoxId).getElementsByTagName("label")[i].innerHTML);
                }
                btn.parentNode.getElementsByTagName("label")[0].innerHTML = Num.toFixed(2);
            }





            obj.getElementsByTagName("button")[0].onclick = function () {
                if (obj.index == 0) {
                    zdalert('系统提示','这本书真的好看不骗你，来一下嘛')
                } else {
                    //我的思路就是首先找到小数点后面的位数，然后去掉小数点，再用这个数字去运算然后再除以扩大的倍数
                    //这样就避免了19.31*100 = 1930.9999999999999999998
                    obj.index--;
                    obj.getElementsByTagName("span")[0].innerHTML = obj.index;
                    var NumD = obj.getElementsByTagName("em")[0].innerHTML.split(".");
                    var splitStr = obj.getElementsByTagName("em")[0].innerHTML.replace(".", "").toString();
                    obj.getElementsByTagName("label")[0].innerHTML = splitStr * parseInt(obj.index) / Math.pow(10, NumD[1].length);


                      //显示总和
                var Num = 0;  //用来求和
                var btn = document.getElementById(ResultId)
                for (var i = 0; i < document.getElementById(BoxId).getElementsByTagName("label").length - 1; i++)  //必须减去1因为要是不减去1她会加上最底部求和那个
                {
                    Num += parseFloat(document.getElementById(BoxId).getElementsByTagName("label")[i].innerHTML);
                }
                btn.parentNode.getElementsByTagName("label")[0].innerHTML = Num.toFixed(2);


                }
            }
        }


    }





    /* 猜你喜欢 */
    //youlike  hover 效果
    $("#youlike ul li").hover(function () {
        $(this).addClass('on').siblings().removeClass('on');
    });



    /* 全选效果 */
    var flag = false;
    $('#checkalltop').click(function () {
        flag = !flag
        if (flag) {
            $('.checklis').prop('checked', true);
            $('#checkalldown').css('background','#f60');
            $(this).css('background','#f60');
            i=$("input[type='checkbox']:checked").length
            console.log(i)
             $('#totle').text(i)
        } else {
            $('#content .checklis').prop('checked', false);           
            $(this).css('background','rgb(141, 126, 126)');
            $('#checkalldown').css('background','');
            
            i=$("input[type='checkbox']:checked").length
            console.log(i)
             $('#totle').text(i)
        }

    })

    /* 下面的全选按钮 */
    $('#checkalldown').click(function () {
        flag = !flag
        if (flag) {
            $('.checklis').prop('checked', true);
            $('#checkalltop').css('background','#f60');
            
            i=$("input[type='checkbox']:checked").length
            console.log(i)
             $('#totle').text(i)
           
            $(this).css('background','#f60')
        } else {
            $('#content .checklis').prop('checked', false);
            $('#checkalltop').css('background','');
            
            $(this).css('background','rgb(141, 126, 126)');
            i=$("input[type='checkbox']:checked").length
            console.log(i)
             $('#totle').text(i)
        }   

    })

    /* 删除效果 */
    $('#content .del').click(function () {
        
        var $flag = confirm('are u sure?')
        if ($flag) {
            $(this).parent('li').remove();
             $('#totle').text(i)
            /* i=$("input[type='checkbox']:checked").length */
    
        console.log(i)
        
        }
        

    })
   
    /* 显示总选择数量，上放几个点击效果调用该函数 */
    $('.commodity').click(function(){
        i=$("input[type='checkbox']:checked").length
    
      console.log(i)
       $('#totle').text(i)
    })
   

             
      
    
})