const finalBag = (obj) => {
    let newBag = []
    let vals = Array.from(document.querySelectorAll('.tokenNum'))
    vals.map((v, i) => {
        if (v.value != 0) {
            let label = v.previousElementSibling.id
            newBag.push({
                name: label,
                number: parseInt(v.value),
                value: v.nextElementSibling.value
            })
        }
    })

    return newBag
}

const finalBagExt = (obj) => {
    let newBag = []
    for (let i = 0; i < obj.length; i++) {
        let token = obj[i]
        for (let index = 1; index <= token.number; index++) {
            newBag.push(token)
        }
    }
    return newBag
}

// in html
document.getElementById('create').addEventListener('click', function () {
    let createdBag = finalBag(bag)
    createdBag = finalBagExt(createdBag)
    let bagEl = document.getElementById('bagTokens')
    bagEl.innerHTML = ''
    createdBag.map(token => {
        let bagToken = document.createElement('img')
        bagToken.src = "imgs/tokens/" + token.name + ".png"
        bagEl.appendChild(bagToken)
    })
})