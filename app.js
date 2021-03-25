let user = {}


function next() {
    let intro = document.getElementById('intro')
    let form = document.getElementById('form')
    intro.classList.remove('d-flex')
    intro.classList.add('d-none')
    form.classList.remove('d-none')
}

function startGame(event) {
    event.preventDefault()
    let element = document.getElementById('start')
    let game = document.getElementById('game')
    element.classList.add('d-none')
    game.classList.remove('d-none')
    save()
    console.log(user.name)
    document.getElementById('username').innerText = user.name
}

function save() {
    let username = document.getElementById('name').value
    user = { name: username, wins: 0, losses: 0 }
}


function play(btn) {
    let myResult;
    let computerResult = computer()
    let color;
    if (btn == 'rock') {
        computerResult == 'rock' ? myResult = 'tie' : computerResult == 'paper' ? myResult = 'loss' : myResult = 'win'
    } else if (btn == 'paper') {
        computerResult == 'paper' ? myResult = 'tie' : computerResult == 'scissors' ? myResult = 'loss' : myResult = 'win'
    } else if (btn == 'scissors') {
        computerResult == 'scissors' ? myResult = 'tie' : computerResult == 'rock' ? myResult = 'loss' : myResult = 'win'
    }
    myResult == 'tie' ? color = 'text-secondary' : myResult == 'loss' ? color = 'text-danger' : color = 'text-success'
    document.getElementById('result').innerHTML = `<p class="d-flex ${color}">${myResult}</p>`
    myResult == 'win' ? user.wins++ : user.losses++
    return myResult
}

function computer() {
    let randomNumber = Math.floor(Math.random() * Math.floor(3))
    let result = randomNumber == 0 ? 'rock' : randomNumber == 1 ? 'paper' : 'scissors'
    return result
}

function reset() {
    location.reload()
}