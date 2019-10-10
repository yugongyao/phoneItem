var txt=document.querySelector(".txt");
var pas=document.querySelector(".pas");  
var btn2=document.querySelector(".reg");

btn2.onclick=function(){

    if (!(txt.value)) {
        alert('账号为空');
        return;
    }
    if (!(pas.value)) {
        alert('密码为空');
        return;
    }
    ajax({
        data: 'act=add&user='+txt.value+'&pass='+pas.value,//txt.value->用户输入的账号,pas.value->用户输入的密码
        url: '../static/php/setSql.php',
        type: 'get',
        succeed: function (d){
            var json = JSON.parse(d);
                alert(json.msg);
                if (json.msg=="注册成功") {
                    window.open('login.html',"_self","");
                }
        },
        failed: function (code){
            alert('提交失败');
        }
    });
}