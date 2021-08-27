// calculate chances to draw a specific token. give it bag object and token name
function calcTokenChance(obj, token) {
    let total = obj.length
    let tokenEl = obj.find(o => o.name === token)
    if (tokenEl) {
        return tokenEl.number / total * 100
    } else {
        return 0
    }
}

// calculates win chance. obj = bag, 
//regular = general win chance calc, if set to false it calculates lose chance by 2 or less
function calcWinChance(obj, testval, difficult, regular=true) {

    let diff = parseInt(difficult)
    let testVal = parseInt(testval)

    let win = 0
    let lose = 0
    let loseBy2 = 0

    for (let i = 0; i < obj.length; i++) {
        let el = obj[i]
        if (el.name === 'Auto-fail') {
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
 
            let tempVal = el.name === 'Auto-fail' ? 0 : testVal
            console.log('test', tempVal)
            console.log('elval', el.name, el.value)
            console.log('diff', diff)
            console.log('res', (tempVal + el.value))
            if (((tempVal + el.value) - diff == -2) || ((tempVal + el.value) - diff == -1)) {
                console.log('yes')
                loseBy2 = loseBy2 + parseInt(el.number)
            }
        }

    }
    let total = lose + win

    if (regular === false) {
        let winChance = loseBy2 * 100 / total
        return winChance
    }

    let winChance = win * 100 / total
    return winChance
}

function chanceWithBless(objExt, obj) {
    let blessChance = calcTokenChance(objExt, 'bless')
    console.log(objExt.findIndex(el => el.name === 'Bless'))
    //if (bless.number > 0) {
    //    return calcTokenChance(objExt, 'bless') * calcWinChance(obj)
    //} else {
    //    let finalChance = blessChance / 100 * (winChance / 100)
    //    console.log('lose', lose)
    //    return winChance
    //}
}

// calculate button -> displays all chancesas per index.html -> results section
document.getElementById('calc').addEventListener('click', function () {
    const newBag = finalBag(bag)
    const newBagExt = finalBagExt(newBag)
    console.log('new', newBag)
    console.log('newExt', newBagExt)
    const testVal = document.getElementById('testVal').value
    let difficulty = document.getElementById('diffVal').value

    console.log(chanceWithBless(newBagExt, newBag))
    let winResult = document.getElementById('winResult')
    console.log('win', calcWinChance(newBag, testVal, difficulty))
    winResult.innerHTML = Math.floor(calcWinChance(newBag, testVal, difficulty)) + '%'

    let skullResult = document.getElementById('skullResult')
    skullResult.innerHTML = Math.floor(calcTokenChance(newBagExt, 'skull')) + '%'

    let bullshitResult = document.getElementById('bullshitResult')
    bullshitResult.innerHTML = Math.floor(calcTokenChance(newBagExt, 'Skull')
        + calcTokenChance(newBagExt, 'Elder Thing')
        + calcTokenChance(newBagExt, 'Tablet')
        + calcTokenChance(newBagExt, 'Cultist')
        + calcTokenChance(newBagExt, 'Auto-fail')) + '%'

    let winBy2 = document.getElementById('by2orMoreResult')
    winBy2.innerHTML = Math.floor(calcWinChance(newBag, testVal - 2, difficulty)) + '%'

    let failBy2 = document.getElementById('failBy2')
    failBy2.innerHTML = Math.floor(calcWinChance(newBag, testVal, difficulty, false)) + '%'

    console.log(calcWinChance(newBag, 5, 4))
})

document.getElementById('create').addEventListener('click', function () {
    const newBag = finalBag(bag)
    const newBagExt = finalBagExt(newBag)
    const testVal = document.getElementById('testVal').value
    let difficulty = document.getElementById('diffVal').value

    let atMinus1 = document.getElementById('at-1chance')
    atMinus1.innerHTML = Math.floor(calcWinChance(newBag, 0, 1)) + '%'

    let at0chance = document.getElementById('at0chance')
    at0chance.innerHTML = Math.floor(calcWinChance(newBag, 0, 0)) + '%'

    let at1chance = document.getElementById('at+1chance')
    at1chance.innerHTML = Math.floor(calcWinChance(newBag, 1, 0)) + '%'

    let at2chance = document.getElementById('at+2chance')
    at2chance.innerHTML = Math.floor(calcWinChance(newBag, 2, 0)) + '%'

    let at3chance = document.getElementById('at+3chance')
    at3chance.innerHTML = Math.floor(calcWinChance(newBag, 3, 0)) + '%'

    console.log(calcWinChance(newBag, 5, 4))
})