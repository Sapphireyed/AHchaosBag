//check if token has next value set to true and draw it tooif yes
drawNext (bag) => {
    // find randomindex, draw random token, add styling to chosen token
    let rand = Math.floor(Math.random() * bag.length)
    bag[rand].style.width = '120%'
    bag[rand].style.filter = 'drop-shadow(0 0 10px goldenrod)'
    if (bag[rand].getAttribute('next') === 'true') {
        bag.splice(rand, 1);
        document.getElementById('buttonsBag').style.zIndex = -1

        setTimeout(function () {
            drawNext(bag)
            document.getElementById('buttonsBag').style.zIndex = 1
        }, 1000)
    }
}

document.getElementById('draw').addEventListener('click', () => {
    // firstidentify the bag and removestyling from previous draw
    let bag = Array.from(document.querySelectorAll('#bagTokens img'))
    bag.map(el => {
        el.style.filter = 'none'
        el.style.width = '100%'
    })
    drawNext(bag)
})

document.getElementById('add').addEventListener('click', () => {
    let bag = Array.from(document.querySelectorAll('#bagTokens img'))
    bag = bag.filter(t => t.style.width !== '120%')
    console.log(bag)
    drawNext(bag)
})
