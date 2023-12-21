var swiper=new Swiper(".s", 
{
 direction: "vertical",
 autoplay: 
 {
  delay: 2000,
  disableOnInteraction: false,
 },
});
// 获取要隐藏的区域元素
var box2=document.getElementsByClassName('box2')[0];
box=false;
function hideBox2() 
{
 if(box)
 {
  box2.style.display="block";
  box=false;
 }
 else
 {
  box2.style.display = 'none';
  box=true;
 }
}