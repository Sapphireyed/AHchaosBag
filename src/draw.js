document.getElementById('draw').addEventListener('click', function () {
    const newBag = finalBag(bag)
    const newBagExt = finalBagExt(newBag)
    let rand = Math.floor(Math.random() * newBagExt.length)
    console.log(rand)
})