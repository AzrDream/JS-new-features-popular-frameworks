$(function () {
    /*控制移动端菜单按钮动画*/
    $(".navbar-toggler").click(function () {
        if($(this).hasClass("on")){
            $(this).removeClass("on");
        }else{
            $(this).addClass("on");
        }
    });

    /*控制导航注册登录弹窗显示隐藏*/
    $(".login").hover(function () {
        // console.log("移入");
        $(this).addClass("on");
    }, function () {
        // console.log("移出");
        $(this).removeClass("on");
    });

    /*控制模态弹窗关闭*/
    $(".modal-close").click(function () {
        $('.modal').modal('hide')
    });

    /*控制吸顶导航显示和隐藏*/
    let headerHeight = $(".header-top").height() + $(".header-middle").height();
    $(window).scroll(function () {
        let offsetY = $("body").scrollTop() + $("html").scrollTop();
        if(offsetY >= headerHeight){
            $(".header-top").removeClass("d-xl-block");
            $(".header-middle").hide();
            $(".body").css("padding-top", $(".header").height());
        }else{
            $(".header-top").addClass("d-xl-block");
            $(".header-middle").show();
            $("body").css("padding-top", $(".header").height());
        }
    });
    $("body").css("padding-top", $(".header").height());
});
