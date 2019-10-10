// 设置cookie
function setCookie(key,value,day){
  if (day) {
      var d = new Date();
      d.setDate(d.getDate()+day);
      document.cookie = key + '=' + escape(value) + '; expires='+d;
  } else {
      document.cookie = key + '=' + escape(value);
  }
}
// 获取cookie
function getCookie(key){
var arr1 = document.cookie.split('; ');
for (var i = 0; i < arr1.length; i++){
  var arr2 = arr1[i].split('=');//
  if (arr2[0] === key) {
      return unescape(arr2[1]);
  }
}
return null;
}
// 删除cookie
function removeCookie(key) {
setCookie(key,'123',-2);//设置为过期
}