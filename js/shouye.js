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
        img:"./images/shouye/112.png",
        link:"https://wqitem.jd.com/item/view?sku=10072106507548&ptag=138631.89.2&__navVer=1&jxsid=17023567800373773293&appCode=msc588d6d5",
        name:"舒可乐卫生纸无芯卷纸",
        price:"¥0.42",
        sold:"已售2000+件"
       },
       {
        img:"./images/shouye/113.png",
        link:"https://wqitem.jd.com/item/view?sku=100029949854&ptag=138631.89.2&__navVer=1&jxsid=17023567800373773293&appCode=msc588d6d5",
        name:"味滋源酸辣粉袋",
        price:"¥2.9",
        sold:"已售20万+件"
       },
       {
        img:"./images/shouye/114.png",
        link:"https://wqitem.jd.com/item/view?sku=10064011829879&ptag=138631.89.2&__navVer=1&jxsid=17023567800373773293&appCode=msc588d6d5",
        name:"冬天情侣棉拖鞋女厚底",
        price:"¥7.0",
        sold:"已售100+件"
       },
       {
        img:"./images/shouye/115.png",
        link:"https://wqitem.jd.com/item/view?sku=100030236660&ptag=138631.89.2&__navVer=1&jxsid=17023567800373773293&appCode=msc588d6d5",
        name:"果可尼（GUOKENI）",
        price:"¥9.9",
        sold:"已售5万+件"
       },
       {
        img:"./images/shouye/116.png",
        link:"https://wqitem.jd.com/item/view?sku=10073456624454&ptag=138631.89.2&__navVer=1&jxsid=17024563674058755598&appCode=msc588d6d5",
        name:"雨森（YUSEN）妇婴",
        price:"¥5.0",
        sold:"已售5000+件"
       },
       {
        img:"./images/shouye/117.png",
        link:"https://wqitem.jd.com/item/view?sku=10050069696773&ptag=138631.89.2&__navVer=1&jxsid=17024563674058755598&appCode=msc588d6d5",
        name:"JBQAN洁碧泉香水去",
        price:"¥9.9",
        sold:"已售500+件"
       },
       {
        img:"./images/shouye/118.png",
        link:"https://wqitem.jd.com/item/view?sku=10072217433695&ptag=138631.89.2&__navVer=1&jxsid=17024563674058755598&appCode=msc588d6d5",
        name:"南博耐森",
        price:"¥9.99",
        sold:"已售5000+件"
       },
       {
        img:"./images/shouye/119.png",
        link:"https://wqitem.jd.com/item/view?sku=19725367988&ptag=138631.89.2&__navVer=1&jxsid=17024563674058755598&appCode=msc588d6d5",
        name:"邮星 高邮松花蛋6枚",
        price:"¥12.9",
        sold:"已售2万+件"
       },
       {
        img:"./images/shouye/120.png",
        link:"https://wqitem.jd.com/item/view?sku=72232478148&ptag=138631.89.2&__navVer=1&jxsid=17024563674058755598&appCode=msc588d6d5",
        name:"泓一 提拉米苏夹心蛋糕",
        price:"¥8.8",
        sold:"已售10万+件"
       },
       {
        img:"./images/shouye/121.png",
        link:"https://wqitem.jd.com/item/view?sku=10023583848382&ptag=138631.89.2&__navVer=1&jxsid=17024563674058755598&appCode=msc588d6d5",
        name:"乐事（Lay's）薯片袋",
        price:"¥1.06",
        sold:"已售2万+件"
       }
      ];
      var jlist=document.querySelector(".jlist");
      jarr.forEach((v,i)=>
      {
       let li=document.createElement("li");
       li.classList.add("neb");
       li.innerHTML=
       `
        <img src="${v.img}">
        <div class="txt">
        <h3><a href="${v.link}">${v.name}</a></h3>
        <p class="price">${v.price}</p>
        <p class="sold">${v.sold}</p>
        </div>
       `;
       jlist.appendChild(li);
      })