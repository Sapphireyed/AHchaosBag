document.getElementById('draw').addEventListener('click', function () {
    // firstidentify the bag and removestyling from previous draw
    let bag = Array.from(document.querySelectorAll('#bagTokens img'))
    bag.map(el => {
        el.style.filter = 'none'
        el.style.width = '100%'
    })

    //check if token has next value set to true and draw it tooif yes
    function drawNext() {
        // find randomindex, draw random token, add styling to chosen token
        let rand = Math.floor(Math.random() * bag.length)
        bag[rand].style.width = '120%'
        bag[rand].style.filter = 'drop-shadow(0 0 10px goldenrod)'
        if (bag[rand].getAttribute('next') === 'true') {
            bag.splice(rand, 1);
            document.getElementById('buttonsBag').style.zIndex = -1
            
            setTimeout(function () {
                drawNext()
                document.getElementById('buttonsBag').style.zIndex = 1
            }, 1000)
        }
    }
    drawNext()

})