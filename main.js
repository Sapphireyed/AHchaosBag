// base bag element
const bag = {
    'Elder Sign': 1,
    'Auto-fail': 1,
    'Skull': 0,
    'Tablet': 0,
    'Elder Thing': 0,
    'Cultist': 0,
    '0':0,
    '1': 0,
    '-1': 0,
    '-2': 0,
    '-3': 0,
}

// create a list for user to fill
for (token in bag) {
    let tokenEl = document.createElement('div')
    tokenEl.className = 'tokenEl'

    let tokenImg = document.createElement('img')
    tokenImg.id = token
    tokenImg.className = 'tokenImg'
    tokenImg.src = `imgs/tokens/${token}.png`

    let tokenNum = document.createElement('input')
    tokenNum.className = 'tokenNum'
    tokenNum.type = 'number'
    tokenNum.step = 1
    if (token === 'Elder Sign' || token === 'Auto-fail') {
        tokenNum.max = 1;
        tokenNum.min = 1;
        tokenNum.value = 1
    } else {
        tokenNum.max = 10;
        tokenNum.min = 0;
        tokenNum.value = 0
    }


    let tokenVal = document.createElement('input')
    tokenVal.className = 'tokenVal'
    tokenVal.type = 'number'
    console.log(token === "1")
    if (!['Elder Sign', 'Skull', 'Tablet', 'Elder Thing', 'Cultist'].some(el => el === token)) {
        tokenVal.value = token
    } else {
        tokenVal.value = 0
    }


    let tokenNext = document.createElement('input')
    tokenNext.className = 'tokenNext'
    tokenNext.type = 'checkbox'

    tokenEl.append(tokenImg, tokenNum, tokenVal, tokenNext)
    document.getElementById('tokens').appendChild(tokenEl)
}

// add create button to create a final bag
let create = document.createElement('button')
create.id = 'create'
create.innerHTML = 'Create'
document.getElementById('tokens').appendChild(create)

// make tokenscontainer be equal to bag container
//let width = document.getElementById('bagImg').clientWidth + 'px'
//let height = document.getElementById('bagImg').clientHeight + 'px'
//let bagTkens = document.getElementById('bagTokens')
//bagTokens.style.width = width * 0.8
//bagTokens.style.height = height
