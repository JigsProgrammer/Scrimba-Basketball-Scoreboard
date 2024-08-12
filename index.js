let homePoints = document.getElementById("home-points")
let homePointsFunc = 0

function homeOne() {
    homePointsFunc += 1
    homePoints.textContent = homePointsFunc
}

function homeTwo() {
    homePointsFunc += 2
    homePoints.textContent = homePointsFunc
}

function homeThree() {
    homePointsFunc += 3
    homePoints.textContent = homePointsFunc
}

function backSpaceHome() {
    homePointsFunc -= 1
    homePoints.textContent = homePointsFunc
}

let guestPoints = document.getElementById("guest-points")
let guestPointsFunc = 0

function guestOne() {
    guestPointsFunc += 1
    guestPoints.textContent = guestPointsFunc
}

function guestTwo() {
    guestPointsFunc += 2
    guestPoints.textContent = guestPointsFunc
}

function guestThree() {
    guestPointsFunc += 3
    guestPoints.textContent = guestPointsFunc
}


function backSpaceGuest() {
    guestPointsFunc -= 1
    guestPoints.textContent = guestPointsFunc
}

// let newGame = document.getElementById("new-game")

function newGame() {
    guestPoints.textContent = 0
    homePoints.textContent = 0
}