let check = document.querySelector('button');
let test = document.querySelector('#test');
let questions = [
	{
		text:  'вопрос 1?',
		right: '1',
	},
	{
		text:  'вопрос 2?',
		right: '2',
	},
	{
		text:  'вопрос 3?',
		right: '3',
	},
];

for (let subArr of questions) {
    let keys = Object.keys(subArr)
    let div = document.createElement('div');
    div.innerHTML = '<p>' + subArr[keys[0]] + '</p>' + '<input type="text">'
    test.appendChild(div)
}

let anss = test.querySelectorAll('input')

check.addEventListener('click', () => {
    for (let i = 0; i < questions.length; i++) {
        if (anss[i].value == questions[i].right) {
            anss[i].classList.add('g')
            anss[i].classList.remove('r')
            anss[i].disabled = true;
        } else {
            anss[i].classList.add('r')
        }
    }
    })
