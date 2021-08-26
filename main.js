const bag = {
    elder: 1,
    autoFail: 1,
    skull: 0,
    tablet: 0,
    ancient: 0,
    cultist: 0,
    bless: 0,
    '+1': 0
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
    tokenNum.max = 10;
    tokenNum.min = 0;
    tokenNum.step = 1
    tokenNum.value = 0

    let tokenVal = document.createElement('input')
    tokenVal.className = 'tokenVal'

    tokenEl.append(tokenLabel, tokenNum, tokenVal)
    document.getElementById('mainSection').appendChild(tokenEl)
}

//let createdBag = []
//document.getElementById('create').addEventListener('click', function () {
//    createdBag = createBag(bag)

//})