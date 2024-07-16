const btns = document.querySelectorAll("button"),
    wrapper = document.querySelector('.wrapper')

// console.log(buttons[0].classList);

// btns[1].addEventListener('click', () => {
//     if(btns[1].classList.contains('red')) {
//         console.log('Hello world')
//     }
// })

wrapper.addEventListener('click',  (e) => {
    console.log(e.target);
})
