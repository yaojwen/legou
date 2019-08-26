
$(function () {

    /* 选择银行卡样式 */
    var num = 0;
    var num1 = 0;
    var num2 = 0;
    $('#content .card .active').click(function () {
        num++;
        if (num % 2 == 1) {
            $(this).find('.on').show();
            $(this).css('border-color', '#f60')
            num2 = num;
            return num2;
        } else {
            $(this).find('.on').hide();
            $(this).css('border-color', '#ccc')
        }
    })
    $('#content .card .active').hover(function () {
        $(this).addClass('hand')
    })


    /* 点击添加银行卡 */


    /* 复制体公用一个num 有bug。。 */
    $('#content .addcare').click(function () {

        //复制
        var $cloned = $('#content .card').first().clone();
        //添加复制体到
        $cloned.appendTo($('#content .clonebox'));
        //第一行的金额数去掉
        $(this).next('.del').html('')
        //复制体的添加改为 删除
        $cloned.children('.addcare').html('删除银行卡&nbsp;-');
        //复制体点击删除事件
        $cloned.children('.addcare').click(function () {
            //恢复第一行的金额显示
            $('#content .addcare').next('.del').html('支付金额：&emsp;<i class="cf60">47.00</i>');
            //删除复制体
            $cloned.remove()
        })


        $cloned.find('.active').click(function () {
            num1++;
            if (num1 % 2 == 1) {
                $(this).find('.on').show();
                $(this).css('border-color', '#f60');

            } else {
                $(this).find('.on').hide();
                $(this).css('border-color', '#ccc')
            }
        })
        $('#content .card .active').hover(function () {
            $(this).addClass('hand')
        })
    })



    /* 付款事件 */

    $('#content .payment').click(function () {
        if (num % 2 == 1) {
            $('#myerweima').fadeIn();
            $('body').css('background', 'rgba(211,211,211,0.3)')
        } else {
            $('#confirm').fadeIn();
            $('#confirm .false,#confirm .del').hover(function(){
                $(this).css('cursor','not-allowed');
            });
        }
    })

    //提交成功
    $('#myerweima').click(function () {
        $(this).fadeOut();
        $('body').css('background', '')
    })


    //提交失败
    $('#confirm .false,#confirm .del').click(function () {
        console.log(111)

        $('body').css('background', '')

    })


    $('#confirm .true').click(function () {
        console.log(111)
        window.location.href = "online payment.html"
    })


})