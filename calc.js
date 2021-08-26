function calcTokenChance(obj, token) {
    let total = obj.length
    let tokenEl = obj.find(o => o.name === token)
    if (tokenEl) {
        return tokenEl.number / total * 100
    } else {
        return 0
    }
}

function calcWinChance(obj, testval, regular=true) {

    let diff = document.getElementById('diffVal').value
    let testVal = testval

    let win = 0
    let lose = 0
    let loseBy2 = 0

    for (let i = 0; i < obj.length; i++) {
        let el = obj[i]
        if (el.name === 'autoFail') {
            lose++
        } else if (el.name === 'bless') {

        } else {
            if (diff - el.value <= testVal) {
                win = win + parseInt(el.number)
            } else if (diff - el.value > testVal) {
                lose = lose + parseInt(el.number)
            }
        }
        if (regular === false) {
            testVal = 0
            if ((diff - el.value - testVal <= 2) && (diff - el.value - testVal > 0)) {
                loseBy2++
            }
        } 

    }
    if (regular === false) {
        let total = win + lose
        let winChance = loseBy2 * 100 / total
        return winChance
    }
    let total = win + lose
    let winChance = win * 100 / total
    return winChance
}

function chanceWithBless() {
    let blessChance = calcTokenChance(obj, 'bless')
    bless.number--

    if (bless.number > 0) {
        return calcTokenChance(obj, 'bless') * calcWinChance(obj)
    } else {
        let finalChance = blessChance / 100 * (winChance / 100)
        console.log('lose', lose)
        return winChance
    }
}

document.getElementById('calc').addEventListener('click', function () {
    const newBag = finalBag(bag)
    const newBagExt = finalBagExt(newBag)
    const testVal = document.getElementById('testVal').value

    let winResult = document.getElementById('winResult')
    winResult.innerHTML = Math.floor(calcWinChance(newBag, testVal)) + '%'

    let skullResult = document.getElementById('skullResult')
    skullResult.innerHTML = Math.floor(calcTokenChance(newBagExt, 'skull')) + '%'

    let bullshitResult = document.getElementById('bullshitResult')
    bullshitResult.innerHTML = Math.floor(calcTokenChance(newBagExt, 'skull')
        + calcTokenChance(newBagExt, 'ancient')
        + calcTokenChance(newBagExt, 'tablet')
        + calcTokenChance(newBagExt, 'cultist')
        + calcTokenChance(newBagExt, 'autoFail')) + '%'

    let winBy2 = document.getElementById('by2orMoreResult')
    winBy2.innerHTML = Math.floor(calcWinChance(newBag, testVal - 2)) + '%'

    let failBy2 = document.getElementById('failBy2')
    failBy2.innerHTML = Math.floor(calcWinChance(newBag, testVal, false)) + '%'

})
