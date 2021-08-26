const bag = {
    elder: 1,
    autoFail: 1,
    skull: 0,
    tablet: 0,
    ancient: 0,
    cultist: 0,
    '0':0,
    '+1': 0,
    '-1': 0,
    '-2': 0,
    '-3': 0,
}

for (token in bag) {
    let tokenEl = document.createElement('div')
    tokenEl.className = 'tokenEl'

    let tokenLabel = document.createElement('label')
    tokenLabel.className = 'tokenLabel'
    tokenLabel.innerText = token

    let tokenNum = document.createElement('input')
    tokenNum.className = 'tokenNum'
    tokenNum.type = 'number'
    tokenNum.step = 1
    if (token === 'elder' || token === 'autoFail') {
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
    if (!['elder', 'skull', 'tablet', 'ancient', 'cultist'].some(el => el === token)) {
        tokenVal.value = token
    }
    tokenEl.append(tokenLabel, tokenNum, tokenVal)
    document.getElementById('tokens').appendChild(tokenEl)
}

//let createdBag = []
//document.getElementById('create').addEventListener('click', function () {
//    createdBag = createBag(bag)

//})