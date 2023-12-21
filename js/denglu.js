document.getElementById("login-form").addEventListener("submit",function(event) 
{
 event.preventDefault();  // 阻止表单默认提交行为
 //获取用户名和密码输入框的值
 var username=document.getElementById("username").value;
 var password=document.getElementById("password").value;
 //模拟登录验证
 if(username==="21001010910"&&password==="123456") 
 {
  alert("登录成功！");
  window.location.href="./wode.html";  //登录成功后跳转到指定页面
 }
 else 
 {
  alert("用户名或密码错误！");
 }
});
//返回上一页
function goBack() 
{
 window.history.back();
}