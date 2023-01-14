let parent = document.querySelector('#parent')
let menus = document.querySelectorAll('a');
let tabs = document.querySelectorAll('.tab');

for (let menu of menus) {
    let arr1 = menu.textContent.split(' ')
    menu.addEventListener('click', (event) => {
        event.preventDefault();
        let activeLink = parent.querySelector('.menu a.active');
        activeLink.classList.remove('active')
        for (let tab of tabs) {
            let arr2 = tab.textContent.split(' ')
            if (arr1[1] == arr2[2]) {
                tab.classList.add('active');
                menu.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
        }
    })
}