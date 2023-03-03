import {year} from './year.js'
import {happen, descr} from './happen.js'

let inp = document.querySelector('#input');
let table = document.querySelector('#table');

inp.addEventListener('keypress', (event) => {
    if (event.code == 'Enter') {
        if (inp.value == '1337') {
            table.replaceChildren();
            let tr = document.createElement('tr');
            let td1 = document.createElement('td');
            let td2 = document.createElement('td');
            let td3 = document.createElement('td');

            td1.textContent = year.b;
            td2.textContent = happen.b;
            td3.textContent = descr.b;
            
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            table.appendChild(tr);  
        }
        if (inp.value == '1184') {
            table.replaceChildren();
            let tr = document.createElement('tr');
            let td1 = document.createElement('td');
            let td2 = document.createElement('td');
            let td3 = document.createElement('td');

            td1.textContent = year.a;
            td2.textContent = happen.a;
            td3.textContent = descr.a;
            
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            table.appendChild(tr); 
        }
        if (inp.value == '1918') {
            table.replaceChildren();
            let tr = document.createElement('tr');
            let td1 = document.createElement('td');
            let td2 = document.createElement('td');
            let td3 = document.createElement('td');

            td1.textContent = year.c;
            td2.textContent = happen.c;
            td3.textContent = descr.c;
            
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            table.appendChild(tr);
        }
        if (inp.value == '1472') {
            table.replaceChildren();
            let tr = document.createElement('tr');
            let td1 = document.createElement('td');
            let td2 = document.createElement('td');
            let td3 = document.createElement('td');

            td1.textContent = year.d;
            td2.textContent = happen.d;
            td3.textContent = descr.d;
            
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            table.appendChild(tr);
        }
        if (inp.value == '1314') {
            table.replaceChildren();
            let tr = document.createElement('tr');
            let td1 = document.createElement('td');
            let td2 = document.createElement('td');
            let td3 = document.createElement('td');

            td1.textContent = year.e;
            td2.textContent = happen.e;
            td3.textContent = descr.e;
            
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            table.appendChild(tr);
        }
        if (inp.value == '2015') {
            table.replaceChildren();
            let tr = document.createElement('tr');
            let td1 = document.createElement('td');
            let td2 = document.createElement('td');
            let td3 = document.createElement('td');

            td1.textContent = year.f;
            td2.textContent = happen.f;
            td3.textContent = descr.f;
            
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            table.appendChild(tr);
        }
        if (inp.value == '1888') {
            table.replaceChildren();
            let tr = document.createElement('tr');
            let td1 = document.createElement('td');
            let td2 = document.createElement('td');
            let td3 = document.createElement('td');

            td1.textContent = year.g;
            td2.textContent = happen.g;
            td3.textContent = descr.g;
            
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            table.appendChild(tr);}
    }
})