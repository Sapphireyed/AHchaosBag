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
        tokenNum.min = 0;
        tokenNum.value = 1
    } else {
        tokenNum.max = 10;
        tokenNum.min = 0;
        tokenNum.value = 0
    }

    let tokenVal = document.createElement('input')
    tokenVal.className = 'tokenVal'
    tokenVal.type = 'number'
    if (!['Elder Sign', 'Skull', 'Tablet', 'Elder Thing', 'Cultist'].some(el => el === token)) {
        tokenVal.value = token
        if (tokenVal.value === '') tokenVal.value = 0
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
create.className = 'button'
create.innerHTML = 'Create'
document.getElementById('tokens').appendChild(create)

// hide/show tokens on mobile
let showTokens = document.getElementById('showTokens')

showTokens.addEventListener('click', function () {
    let tokens = document.getElementById('tokens')
    let elder = document.querySelectorAll('.showImg')[0]
    let autofail = document.querySelectorAll('.showImg')[1]

    if (elder.style.opacity == 1) {
        tokens.style.animation = 'slideDown 2s ease 0s forwards'
        tokens.style.zIndex = 1
        elder.style.opacity = 0
        autofail.style.opacity = 1
    } else {
        tokens.style.animation = 'slideUp 2s ease 0s forwards'
        tokens.style.zIndex = -2
        elder.style.opacity = 1
        autofail.style.opacity = 0
    }
})
