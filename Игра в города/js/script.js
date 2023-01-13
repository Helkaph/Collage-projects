let field = document.querySelector('#field');
let message = document.querySelector('#message');
let game = document.querySelector('#game');
let fail = document.querySelector('.fail');
let players = document.querySelectorAll('.player')

let arr = [];

function check(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        let word = arr[arr.length - 1];
        let lastelem = word.split('');
        console.log(lastelem[lastelem.length-1])
        let newword = value.split('');
        console.log(typeof(newword[0]))
        if (newword[0].toLowerCase().startsWith(lastelem[lastelem.length - 1]) === true) {
            if (arr.includes(value)) {
                fail.classList.add('active');
                game.classList.add('gameover')
            }
        } else {
            fail.classList.add('active');
            game.classList.add('gameover')
        }
        
    }
}

field.addEventListener('keypress', (event) => {
    if (event.key == 'Enter') {
        for (let player of players) {
            player.classList.toggle('turn')
        }
        message.innerHTML += '<p>' + field.value + '</p>';
        check(arr, field.value);
        arr.push(field.value);
        field.value = '';
    }
})