import { objdescr } from './tagdescr.js'
import { objn } from './tagname.js'

let body = document.querySelector('body');
let search = document.querySelector('#search');

search.addEventListener('focus', () => {
    search.value = '';
})
let p1 = document.createElement('p');
let p2 = document.createElement('p');
body.appendChild(p1)
body.appendChild(p2)
search.addEventListener('blur', () => {
    p1.innerHTML = '';
    p2.innerHTML = '';
    
    for (let key1 in objn) {
        for (let key2 in objdescr) {
            if (search.value == objn[key1]) {
                p1.innerHTML = '<b>' + objn[key1] + '</b>';
                if (key1 == key2) {
                p2.innerHTML = objdescr[key2]
                } 
            }
        }
    }
})