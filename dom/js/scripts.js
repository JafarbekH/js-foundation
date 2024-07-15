const box = document.querySelector('#box'), 
    buttons = document.querySelectorAll('button'),
    circles = document.querySelectorAll('.circle')


box.style.backgroundColor = 'red'
box.style.width ="400px"

console.log(buttons);
buttons[0].style.backgroundColor = 'blue'
console.log(circles);
circles[0].style.cssText = 'border-radius: 30px'
     