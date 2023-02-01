let texts = [];
let create = document.querySelector('#create button');
let notes = document.querySelector('#notes');
let text = document.querySelector('#text textarea')
let save = document.querySelector('#text button');
let mess = document.querySelector('#mess')

create.addEventListener('click', () => {
    if (create.dataset.mode == 'create') {

        create.dataset.mode = 'update';
        create.innerHTML = 'редактировать';
        console.log(create);
    } else {
        create.dataset.mode='create';
        create.innerHTML = 'создать';
        console.log(create);
    }
})

save.addEventListener('click', () => {
    let mode = create.dataset.mode;

    if (mode == 'create') {
        texts.push(text.value);
        console.log(texts);

        let li = document.createElement('li');
        let num = texts.length;
        li.innerHTML = '<span class="open">' + 'Запись ' + num + '</span>' + ' ' + '<span class="remove">' + 'X' + '</span>';
        let open = li.querySelector('span.open')
        open.addEventListener('click', () => {
            current = num - 1;
            text.value = texts[current];
            text.focus();
            console.log(texts[current]);
        })
        let deleteLi = li.querySelector('span.remove');
        deleteLi.addEventListener('click', () => {
            deleteLi.parentElement.remove();
            mess.classList.remove('diss')
            setTimeout(() => {
                mess.classList.add('diss')
            }, 3000);
        })
        console.log(li);
        notes.appendChild(li);
        
        text.value = '';
        text.focus();
    } if (mode == 'update') {
        
    }
})