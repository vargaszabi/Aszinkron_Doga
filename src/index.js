import './style.css';

let quotes = []

document.addEventListener('DOMContentLoaded', async () => {
    let response = await fetch('/quotes.json');
    let result = await response.json();
    for(let e of result.quotes) {
        quotes.push(e);
    }

    document.getElementById('osszesidezet').addEventListener('click', async () => {
        document.getElementById('list').textContent = "";
        response = await fetch('/quotes.json');
        result = await response.json();
        quotes.sort((a,b) => a.author.localeCompare(b.author))
        for(let e of quotes) {
            let li = document.createElement('li');
            li.innerHTML = e.author + " : <q>" +e.quote+ "</q>";
            document.getElementById('list').appendChild(li);
        }
    })

    document.getElementById('The').addEventListener('click', async () => {
        document.getElementById('ollist').textContent = "";
        response = await fetch('/quotes.json');
        result = await response.json();
        for(let e of quotes) {
            let li = document.createElement('li');
            li.innerHTML = e.quote;
            document.getElementById('ollist').appendChild(li);
        }
    })

    document.getElementById('length').addEventListener('click', async () => {
        document.getElementById('lengthlist').textContent = "";
        response = await fetch('/quotes.json');
        result = await response.json();
        let p = "";
        for(let e of quotes) {
            p += e.quote.length + ",";
        }
        document.getElementById('lengthlist').textContent = p;
    })

    document.getElementById('darabszam').addEventListener('click', async () => {
        let nev = document.getElementById('author').value;
        document.getElementById('darab').value = 0;
        response = await fetch('/quotes.json');
        result = await response.json();
        let sum = 0;
        for(let e of quotes) {
            if(e.author == nev){
                sum++;
            }
        }
        document.getElementById('darab').value = sum;
    })
})