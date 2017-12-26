$(function () {
    $("#submit").click(function(){
        if($("#username").val() !="" && $("#password").val() !="" ){
            $("#username").removeAttr("style");
            $("#password").removeAttr("style");
            $.ajax({
                type: "POST",
                url: "https://b.ittun.com/reg",
                dataType: "json",
                async: false,
                data: {"username":$("#username").val(),"password":$("#password").val()},
                success: function (res) {
                    console.log(res);
                    if(res.stats=="-1"){
                        alert("用户名重复")
                    }else if(res.stats=="0"){
                        alert("登录")
                    }
                },
                error: function () {
                    alert("请求出错");
                }
            });
        }else{
            alert("查看下是否有没填的信息")
            if($("#username").val()==""){
                $("#username").css("border","1px solid red");
            }else{
                $("#username").css("border","1px solid #000");
            }
            if($("#password").val()==""){
                $("#password").css("border","1px solid red");
            }else{
                $("#password").css("border","1px solid #000");
            }
        }
    })
    $.ajax({
        type: "GET",
        url: "https://b.ittun.com/queryInfo",
        dataType: "json",
        async: false,
        data:'',
        success: function (res) {
            console.log(res)
        },
        error: function () {
            alert("请求出错1");
        }
    });
    $("#delete").click(function () {

        $.ajax({
            type: "POST",
            url: "https://b.ittun.com/destroy",
            dataType: "json",
            async: false,
            data:{"id":"3"},
            success: function (res) {
                console.log(res)
            },
            error: function () {
                alert("请求出错");
            }
        });
    })
    $("#updata").click(function () {
        $.ajax({
            type: "POST",
            url: "https://b.ittun.com/update",
            dataType: "json",
            async: false,
            data:{"username":$("#username").val(),"password":$("#password").val(),"age":$("#age").val(),"salary":$("#salary").val()},
            success: function (res) {
                console.log(res)
            },
            error: function () {
                alert("请求出错");
            }
        });
    })

    var r = window.location.search;
    r = r.substring(r.indexOf("?"),r.length-1);
    alert(r)
    alert("123")
})