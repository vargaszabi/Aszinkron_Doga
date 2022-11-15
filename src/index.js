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
        for(let e of quotes) {
            let li = document.createElement('li');
            li.innerHTML = e.quote;
            document.getElementById('list').appendChild(li);
        }
    })
})