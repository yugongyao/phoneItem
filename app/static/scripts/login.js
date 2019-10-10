var txt=document.querySelector(".txt");
var pas=document.querySelector(".pas");  
var btn1=document.querySelector(".log");


$(function(){
    var $txt=$('.txt');
    var $pas=$('.pas');
    (function () {
        if (getCookie('username')) {
            txt.value = getCookie('username');
            pas.value = getCookie('userpass');
            $('.che')[0].checked = true;
        }
    })();
btn1.onclick = function (){
    ajax({
        url: '../static/php/setSql.php',
        type: 'get',
        data: 'act=login&user='+txt.value+'&pass='+pas.value,
        succeed: function (d){
            var json = JSON.parse(d);
            alert(json.msg);
            if (json.msg=="登陆成功") {
                setCookie('state',1,7);
                setCookie('user',txt.value,7);
                window.open("index.html","_self","");
            }
            
        },
        failed: function (code){
            alert('提交失败');
        }
    });
    if ($('.che')[0].checked) {
        setCookie('username',txt.value,7);
        setCookie('userpass',pas.value,7);
    } else {
        removeCookie('username');
        removeCookie('userpass');
    }
}

    // $('.log').click(function () {
    //     // if ($txt[0].value == '123456' && $pas[0].value == '654321') {
    //         if ($('.che')[0].checked) {
    //             setCookie('username',txt.value,7);
    //             setCookie('userpass',pas.value,7);
    //         } else {
    //             removeCookie('username');
    //             removeCookie('userpass');
    //         }
    //     // } else {
    //     //     alert('账号或密码错误');
    //     //     return false;
    //     // }
    // })
})