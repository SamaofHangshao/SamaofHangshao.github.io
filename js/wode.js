var jarr=  
      [
       {
        img:"./images/wode/003.png",
        link:"https://wqitem.jd.com/item/view?sku=10072045922952&ptag=138631.89.2&__navVer=1&jxsid=17030554899254545527&appCode=msc588d6d5",
        name:"舒可乐原木抽纸4层整箱",
        price:"¥0.79",
        sold:"已售2万+件"
       },
       {
        img:"./images/wode/004.png",
        link:"https://wqitem.jd.com/item/view?sku=100029949854&ptag=138631.89.2&__navVer=1&jxsid=17030554899254545527&appCode=msc588d6d5",
        name:"味滋源酸辣粉袋",
        price:"¥2.9",
        sold:"已售20万+件"
       },
       {
        img:"./images/wode/005.png",
        link:"https://wqitem.jd.com/item/view?sku=100037378341&ptag=138631.89.2&__navVer=1&jxsid=17030554899254545527&appCode=msc588d6d5",
        name:"千丝肉松夹心吐司海苔味",
        price:"¥6.9",
        sold:"已售10万+件"
       },
       {
        img:"./images/wode/006.png",
        link:"https://wqitem.jd.com/item/view?sku=10072551972458&ptag=138631.89.2&__navVer=1&jxsid=17030554899254545527&appCode=msc588d6d5",
        name:"天微抽纸整箱批发纸巾加",
        price:"¥0.8",
        sold:"已售2万+件"
       },
       {
        img:"./images/wode/007.png",
        link:"https://wqitem.jd.com/item/view?sku=10080201768527&ptag=138631.89.2&__navVer=1&jxsid=17030554899254545527&appCode=msc588d6d5",
        name:"美欣净薰衣草洗衣液1袋",
        price:"¥1.0",
        sold:"已售200+件"
       },
       {
        img:"./images/wode/008.png",
        link:"https://wqitem.jd.com/item/view?sku=10085751385013&ptag=138631.89.2&__navVer=1&jxsid=17030554899254545527&appCode=msc588d6d5",
        name:"相于中运动袜子男士中筒",
        price:"¥3.99",
        sold:"已售200+件"
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