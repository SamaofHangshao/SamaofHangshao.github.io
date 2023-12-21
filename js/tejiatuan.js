var swiper=new Swiper(".s", 
{
 slidesPerView: 3,
 spaceBetween: 5,
 autoplay: 
 {
  delay: 1000, // 自动切换的时间间隔，单位为毫秒
  disableOnInteraction: false, // 用户操作swiper后是否停止自动切换
 },
});
var tabs=document.querySelectorAll(".tab");
for(var i=0;i<tabs.length;i++)
{
 JiangTab(tabs[i]);
}
function JiangTab(tab)
{
 //dom
 //var tab=document.querySelector(".tab");
 //var tab=document.getElementsByClassName("tab")[0];
 var span=tab.querySelectorAll(".t-title span");
 var tc=tab.querySelectorAll(".tc");
 for(let i=0;i<span.length;i++)
 {
  span[i].onmouseover=function()
  {
   //箭头函数内部不用this
   //this表示正在操作的那个span
   //去除所有span的cur类
   for(let j=0;j<span.length;j++)
   {
    span[j].classList.remove("cur");
    tc[j].style.display="none";
    //删除第j个span的cur类
   }
   //span[i].classList.add("cur");
   //只在let循环里用
   this.classList.add("cur");
   tc[i].style.display="block";
  }
 }
}
var jarr=
[
 {
  img:"018.png",
  link:"https://wqitem.jd.com/item/view?sku=100077887389&ptag=139351.1.1&eventsec=Babel_dev_sku_tiantiantejiafeeds1_lc-3.EgE5Gg0xMDA2NzY5NDJ0YWIxIggwMTU4NTM4MSoMMTAwMDc3ODg3Mzg5aggyMTMwNTc4OQ&jxsid=17029732835722628147&appCode=msc588d6d5",
  name:"小香厨清真非油炸免煮即食冲泡老味酸辣粉115g*6桶",
  price:"¥8.6   立即参团",
  sold:"已团49件"
 },
 {
  img:"019.png",
  link:"https://wqitem.jd.com/item/view?sku=100070105636&ptag=139351.1.1&eventsec=Babel_dev_sku_tiantiantejiafeeds1_lc-3.EgE5Gg0xMDA2NzY5NDJ0YWIxIggwMTU4NTM4MSoMMTAwMDcwMTA1NjM2aggyMTMwNTc4OQ&jxsid=17029738872796969089&appCode=msc588d6d5",
  name:"Apple iPhone 15 (A3092) 128GB 黑色 支持移动联通电信5G 双卡双待手机",
  price:"¥5399   立即参团",
  sold:"已团500+件"
 },
 {
  img:"020.png",
  link:"https://wqitem.jd.com/item/view?sku=100037209326&ptag=139351.1.1&eventsec=Babel_dev_sku_tiantiantejiafeeds1_lc-3.EgE5Gg0xMDA2NzY5NDJ0YWIxIggwMTU4NTM4MSoMMTAwMDM3MjA5MzI2aggyMTMwNTc4OQ&jxsid=17029739061700252915&appCode=msc588d6d5",
  name:"剑南春 水晶剑 浓香型白酒 52度 500ml*2 双瓶装 （新老包装随机发货）",
  price:"¥899   立即参团",
  sold:"已团5000+件"
 },
 {
  img:"021.png",
  link:"https://wqitem.jd.com/item/view?sku=100066923793&ptag=139351.1.1&eventsec=Babel_dev_sku_tiantiantejiafeeds1_lc-3.EgE5Gg0xMDA2NzY5NDJ0YWIxIggwMTU4NTM4MSoMMTAwMDY2OTIzNzkzaggyMTMwNTc4OQ&jxsid=17029739220698813948&appCode=msc588d6d5",
  name:"小米电视EA55 55英寸 金属全面屏 远场语音 逐台校准4K超高清智能教育电视机",
  price:"¥1629   立即参团",
  sold:"已团1000+件"
 },
 {
  img:"022.png",
  link:"https://wqitem.jd.com/item/view?sku=100069175571&ptag=139351.1.1&eventsec=Babel_dev_sku_tiantiantejiafeeds1_lc-3.EgE5Gg0xMDA2NzY5NDJ0YWIxIggwMTU4NTM4MSoMMTAwMDY5MTc1NTcxaggyMTMwNTc4OQ&jxsid=17029739383729932873&appCode=msc588d6d5",
  name:"华为（HUAWEI）旗舰手机 Mate60 12GB+512GB 雅川青 碎屏保套装",
  price:"¥6849   立即参团",
  sold:"已团500+件"
 },
 {
  img:"023.png",
  link:"https://wqitem.jd.com/item/view?sku=100058157931&ptag=139351.1.1&eventsec=Babel_dev_sku_tiantiantejiafeeds1_lc-3.EgE5Gg0xMDA2NzY5NDJ0YWIxIggwMTU4NTM4MSoMMTAwMDU4MTU3OTMxaggyMTMwNTc4OQ&jxsid=17029739575190797090&appCode=msc588d6d5",
  name:"茅台贵州茅台酒 53度飞天茅台500ML*1酱香型白酒",
  price:"¥2999   立即参团",
  sold:"已团1万+件"
 }
];
              //本地json，推荐使用rap2、json server或mock.js进行mock。
              //var jlist=document.getElementsByClassName("jlist")[0];
              //var jlist=document.querySelectorAll(".jlist")[0];
              var jlist=document.querySelector(".jlist");
              for(let v of jarr)
              {
               let li=document.createElement("li");
               li.innerHTML=
               ` 
                <img src="./images/tejiatuan/${v.img}">
                <div class="txt">
                <h3><a href="${v.link}">${v.name}</a></h3>
                <span class="price">${v.price}</span>
                <span class="sold">${v.sold}</span>
                </div>
               `;
               jlist.appendChild(li);
              }