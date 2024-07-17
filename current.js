
const sum = document.querySelector('#sum')
const usd = document.querySelector('#usd')

sum.addEventListener('input', (e) => {
    const request = new XMLHttpRequest()

    request.open('GET', './current.json')
    request.setRequestHeader('Content-Tyoe', 'application/json')
    request.send()

    request.addEventListener('load', () => {
        if(request.status === 200) {
            const data = JSON.parse(request.response)
            usd.value = (+sum.value / data.current.usd).toFixed(1)
        } else {
            usd.value = 'Something went wrong!'
        }
    })
})

