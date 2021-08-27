const finalBag = (obj) => {
    let newBag = []
    let vals = Array.from(document.querySelectorAll('.tokenNum'))
    vals.map((v, i) => {
        if (v.value != 0) {
            let label = v.previousElementSibling.id
            newBag.push({
                name: label,
                number: parseInt(v.value),
                value: parseInt(v.nextElementSibling.value),
                next: v.nextElementSibling.nextElementSibling.checked
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
        console.log('token', token)
        let bagToken = document.createElement('img')
        bagToken.src = "imgs/tokens/" + token.name + ".png"
        bagToken.setAttribute('next', token.next)
        bagEl.appendChild(bagToken)
    })
})