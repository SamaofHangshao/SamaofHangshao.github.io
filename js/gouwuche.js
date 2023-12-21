var jarr=  
      [
       {
        img:"./images/gouwuche/005.png",
        link:"https://wqitem.jd.com/item/view?sku=10072106507548&ptag=138631.89.2&__navVer=1&jxsid=17030399275430370593&appCode=msc588d6d5",
        name:"舒可乐卫生纸无芯卷纸小",
        price2:"¥0.42",
        sold:"已售2000+件"
       },
       {
        img:"./images/gouwuche/006.png",
        link:"https://wqitem.jd.com/item/view?sku=10032160995986&ptag=138631.89.2&__navVer=1&jxsid=17030399275430370593&appCode=msc588d6d5&_fd=jx",
        name:"嗨大师（HAIDASHI）酸",
        price2:"¥1.9",
        sold:"已售5万+件"
       },
       {
        img:"./images/gouwuche/007.png",
        link:"https://wqitem.jd.com/item/view?sku=10078722910833&ptag=138631.89.2&__navVer=1&jxsid=17030399275430370593&appCode=msc588d6d5",
        name:"织梦原木纸巾抽纸整箱餐",
        price2:"¥0.54",
        sold:"已售1000+件"
       },
       {
        img:"./images/gouwuche/008.png",
        link:"https://wqitem.jd.com/item/view?sku=10080204393824&ptag=138631.89.2&__navVer=1&jxsid=17030399275430370593&appCode=msc588d6d5",
        name:"CLETHUG留兰香口味云",
        price2:"¥1.99",
        sold:"已售200+件"
       },
       {
        img:"./images/gouwuche/009.png",
        link:"https://wqitem.jd.com/item/view?sku=10047431403746&ptag=138631.89.2&__navVer=1&jxsid=17030399275430370593&appCode=msc588d6d5",
        name:"金悦 手提垃圾袋装背心式",
        price2:"¥1.99",
        sold:"已售5万+件"
       },
       {
        img:"./images/gouwuche/010.png",
        link:"https://wqitem.jd.com/item/view?sku=10080203409172&ptag=138631.89.2&__navVer=1&jxsid=17030399275430370593&appCode=msc588d6d5",
        name:"馨燚小苏打25g多用途清",
        price2:"¥0.19",
        sold:"已售500+件"
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
        <div class="txt2">
        <h3><a href="${v.link}">${v.name}</a></h3>
        <p class="price2">${v.price2}</p>
        <p class="sold">${v.sold}</p>
        </div>
       `;
       jlist.appendChild(li);
      })
      document.addEventListener('DOMContentLoaded',function() 
      {  
            // 获取减号按钮  
            var minusButton=document.querySelector('.ctro-num .minus');  
            // 获取数字元素  
            var numElement=document.querySelector('.ctro-num .num');  
            // 获取加号按钮  
            var plusButton=document.querySelector('.ctro-num .plus');  
          
            // 数量减  
            minusButton.addEventListener('click',function() 
            {  
                var currentNum=parseInt(numElement.innerText);  
                if(currentNum>1) 
                {  
                    numElement.innerText=currentNum-1;  
                }
                else 
                {  
                    numElement.innerText=1;  
                }  
                  
            });  
          
            // 数量加  
            plusButton.addEventListener('click',function() 
            {  
                var currentNum=parseInt(numElement.innerText);  
                numElement.innerText=currentNum+1;  
                if(currentNum>=1) 
                {  
                    numElement.innerText=currentNum+1;  
                } 
                else 
                {  
                    numElement.innerText=1;  
                }  
                 
            });  
        });
        document.addEventListener('DOMContentLoaded',function() 
      {  
            // 获取减号按钮  
            var minusButton=document.querySelector('.ctro-num2 .minus2');  
            // 获取数字元素  
            var numElement=document.querySelector('.ctro-num2 .num2');  
            // 获取加号按钮  
            var plusButton=document.querySelector('.ctro-num2 .plus2');  
          
            // 数量减  
            minusButton.addEventListener('click',function() 
            {  
                var currentNum=parseInt(numElement.innerText);  
                if(currentNum>1) 
                {  
                    numElement.innerText=currentNum-1;  
                }
                else 
                {  
                    numElement.innerText=1;  
                }  
                  
            });  
          
            // 数量加  
            plusButton.addEventListener('click',function() 
            {  
                var currentNum=parseInt(numElement.innerText);  
                numElement.innerText=currentNum+1;  
                if(currentNum>=1) 
                {  
                    numElement.innerText=currentNum+1;  
                } 
                else 
                {  
                    numElement.innerText=1;  
                }  
                 
            });  
        });