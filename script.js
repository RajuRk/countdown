const count = document.getElementById("count");
var i = 10;
setTimeout(() =>{
    count.innerText = `${i}`;
    setTimeout(() =>{
        count.innerText = `${i-1}`;
       setTimeout(() =>{
        count.innerText = `${i-2}`;
        setTimeout(() =>{
         count.innerText = `${i-3}`;
         setTimeout(() =>{
            count.innerText = `${i-4}`;
            setTimeout(() =>{
             count.innerText = `${i-5}`;
             setTimeout(() =>{
              count.innerText = `${i-6}`;
              setTimeout(() =>{
               count.innerText = `${i-7}`;
               setTimeout(() =>{
                count.innerText = `${i-8}`;
                setTimeout(() =>{
                 count.innerText = `${i-9}`;
                  setTimeout(() =>{
                    count.innerText = `Happy Independence Day 😃`;
                  },1000)
                },1000)
               },1000)
              },1000)
             },1000)
            },1000)   
         },1000)
        },1000)
       }, 1000)
    }, 1000)
}, 1000);