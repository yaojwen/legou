$(function () {

    /* 切换界面 */
    $('#content .saoma').click(function () {

        $("#content .hover").show()
        $("#content .hover .myerweima").animate({ width: "155px", height: "155px", opacity: 1 }, 300, function () {
            $(this).css({ display: "block" })
        })
        $("#content .hover .saoyisao").animate({ width: "155px", height: "155px", opacity: 1 }, 600, function () {
            $(this).css({ display: "block" })
        })
        $("#content .hover p").animate({ opacity: 1 }, 600, function () {
            $(this).css({ display: "block" })
        })
        $('#content .none').fadeOut();
    })








    $('#content .zhanghu').click(function () {
        $('#content .hover').css('display', 'none');

        $('#content .none').css('display', 'block');
    })

    /* 删除input的value事件 */
    $('#content .myform .del1').click(function () {
        console.log(11)
        $('#content .myform .input1').val('')
    })

    $('#content .myform .del2').click(function () {
        console.log(11)
        $('#content .myform .input2').val('')
    })

    /* 自动登录事件 */
    var num = 0;
    var fuxuan = document.getElementById('input3');
    $('#content .myform .motion').click(function () {
        console.log(11)
        num++;
        if (num % 2 == 1) {

            fuxuan.checked = true;
        } else {
            fuxuan.checked = false;

        }
    })


    

})