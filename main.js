(()=>{"use strict";let e=[];document.addEventListener("DOMContentLoaded",(async()=>{let t=await fetch("/quotes.json"),n=await t.json();for(let t of n.quotes)e.push(t);document.getElementById("osszesidezet").addEventListener("click",(async()=>{document.getElementById("list").textContent="",t=await fetch("/quotes.json"),n=await t.json(),e.sort(((e,t)=>e.author.localeCompare(t.author)));for(let t of e){let e=document.createElement("li");e.innerHTML=t.author+" : <q>"+t.quote+"</q>",document.getElementById("list").appendChild(e)}})),document.getElementById("The").addEventListener("click",(async()=>{document.getElementById("ollist").textContent="",t=await fetch("/quotes.json"),n=await t.json();for(let t of e){let e=document.createElement("li");e.innerHTML=t.quote,document.getElementById("ollist").appendChild(e)}})),document.getElementById("length").addEventListener("click",(async()=>{document.getElementById("lengthlist").textContent="",t=await fetch("/quotes.json"),n=await t.json();let o="";for(let t of e)o+=t.quote.length+",";document.getElementById("lengthlist").textContent=o})),document.getElementById("darabszam").addEventListener("click",(async()=>{let o=document.getElementById("author").value;document.getElementById("darab").value=0,t=await fetch("/quotes.json"),n=await t.json();let a=0;for(let t of e)t.author==o&&a++;document.getElementById("darab").value=a}))}))})();