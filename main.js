(()=>{"use strict";let e=[];document.addEventListener("DOMContentLoaded",(async()=>{let t=await fetch("/quotes.json"),n=await t.json();for(let t of n.quotes)e.push(t);document.getElementById("osszesidezet").addEventListener("click",(async()=>{document.getElementById("list").textContent="",t=await fetch("/quotes.json"),n=await t.json();for(let t of e){let e=document.createElement("li");e.innerHTML=t.quote,document.getElementById("list").appendChild(e)}}))}))})();