const bag = {
    'Elder Sign': 1,
    'Auto-fail': 1,
    'Skull': 0,
    'Tablet': 0,
    'Elder Thing': 0,
    'Cultist': 0,
    '0':0,
    '+1': 0,
    '-1': 0,
    '-2': 0,
    '-3': 0,
}

for (token in bag) {
    let tokenEl = document.createElement('div')
    tokenEl.className = 'tokenEl'

    let tokenImg = document.createElement('img')
    tokenImg.id = token
    tokenImg.className = 'tokenImg'
    tokenImg.src = `imgs/tokens/${token}.png`

    //let tokenLabel = document.createElement('label')
    //tokenLabel.className = 'tokenLabel'
    //tokenLabel.innerHTML = token

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
    if (!['Elder Sign', 'Skull', 'Tablet', 'Elder Thing', 'Cultist'].some(el => el === token)) {
        tokenVal.value = token
    }
    tokenEl.append(tokenImg, tokenNum, tokenVal)
    document.getElementById('tokens').appendChild(tokenEl)
}
let create = document.createElement('button')
create.id = 'create'
create.innerHTML = 'Create'
document.getElementById('tokens').appendChild(create)
//let createdBag = []
//document.getElementById('create').addEventListener('click', function () {
//    createdBag = createBag(bag)

//})