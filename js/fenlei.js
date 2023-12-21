var tabs=document.querySelectorAll('#fixed li');
var tabContents=document.querySelectorAll('.box');
tabs.forEach(function(tab,index) 
{
 tab.addEventListener('mouseenter',function() 
 {
  tabs.forEach(function(tab) 
  {
   tab.classList.remove('cur');
  });
  tab.classList.add('cur');
  tabContents.forEach(function(content) 
  {
   content.style.display = 'none';
  });
  tabContents[index].style.display='block';
  });
});
//鼠标滚轮滚动事件
document.getElementById('fixed').addEventListener('wheel',function(e) 
{
 e.preventDefault();  //阻止默认滚动行为
 var delta=e.deltaY||e.detail||e.wheelDelta;  //获取滚动方向
 this.scrollTop+=(delta<0?-30:30);  //滚动距离
});