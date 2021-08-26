function calcTokenChance(obj, token) {
    let total = obj.length
    let tokenEl = obj.find(o => o.name === token)
    if (tokenEl) {
        return tokenEl.number / total * 100
    }
    
}
function calcWinChance(obj) {

    let diff = document.getElementById('diffVal').value
    let testVal = document.getElementById('testVal').value

    let win = 0
    let lose = 0

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
    console.log(calcWinChance(newBag))
})
