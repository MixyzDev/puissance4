//Déclarons nos variable qui vont nous servir dans ce code

let table = [
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
];
let tableContainer = document.querySelector("#table")
let lap = 1
let gameOver = false
let score = 0
let cpuMode = true
let lapContainer = document.querySelector("#lap")

// cette fonction fait jouer un IA random qui ne gagne quasi jamais.

function bot() {

    if (lap <= 41) {
        let rand = random(0, 41)
        while (document.querySelectorAll(".cell")[rand].innerHTML != "") {
            rand = random(0, 41)
        }
        document.querySelectorAll('.cell')[rand].click()
    }
}

// ici nous affichons le tableau du jeu P4

function display() {
    document.querySelector("#replay").classList.add("hide")
    document.querySelector("#draw").classList.remove("hide")
    tableContainer.innerHTML = ""
    draw.innerHTML = ""
    table.forEach((row, indexOne) => {
        let elem = document.createElement("div")
        elem.classList.add("row")
        tableContainer.appendChild(elem)
        row.forEach((cel, indexTwo) => {
            let cell = document.createElement("div")
            cell.classList.add("cell")
            elem.appendChild(cell)
            // la fonction ci dessou sert en cliquant sur une cellule a activé quelque chose
            cell.addEventListener("click", () => {
                displayPion(cell, indexOne, indexTwo)
            }, { once: true })
        });
    });
}

// avec cette fonction nous affichons les X ou les O en fonction du lap dans lequel ils sont

function displayPion(cell, indexOne, indexTwo) {
    if (gameOver == false) {
        if (lap % 2 == 0) {
            cell.textContent = "O"
            cell.classList.add("yell")
            table[indexOne][indexTwo] = "O"
            win()
        } else {
            cell.textContent = "X"
            cell.classList.add("red")
            table[indexOne][indexTwo] = "X"
            win()
            if (cpuMode == true && gameOver == false) {
                lap++
                bot()
                lap++
            }
        }
        if (cpuMode == false) {
            lap++
        }
    }
}

// si un des joueurs gagne c'est cette fonction qui entre en jeu

function win() {
    for (let i = 0; i < table.length; i++) {
        for (let j = 0; j < table[i].length; j++) {
            if (table[i][j + 3] && table[i][j] != "") {
                if (table[i][j] === table[i][j + 1] && table[i][j + 1] === table[i][j + 2] && table[i][j + 2] === table[i][j + 3]) {
                    document.querySelector("#replay").classList.remove("hide")
                    gameOver = true
                    let div = document.createElement("div")
                    gg.appendChild(div)
                    if (table[i][j] == "X") {
                        score++
                        div.textContent = `GG vous avez gagner ${score}`
                    } else {
                        div.textContent = `Tu as perdu! ${score}`
                    }
                }
            }
            if (table[i + 3] && table[i][j] != "") {
                if (table[i][j] === table[i + 1][j] && table[i + 1][j] === table[i + 2][j] && table[i + 2][j] === table[i + 3][j]) {
                    document.querySelector("#replay").classList.remove("hide")
                    gameOver = true
                    let div = document.createElement("div")
                    gg.appendChild(div)
                    if (table[i][j] == "X") {
                        score++
                        div.textContent = `GG vous avez gagner ${score}`
                    } else {
                        div.textContent = `Tu as perdu! ${score}`
                    }
                }
            }
            if (table[i + 3] && table[i + 3][j + 3] && table[i][j] != "") {
                if (table[i][j] === table[i + 1][j + 1] && table[i + 1][j + 1] === table[i + 2][j + 2] && table[i + 2][j + 2] === table[i + 3][j + 3]) {
                    document.querySelector("#replay").classList.remove("hide")
                    gameOver = true
                    let div = document.createElement("div")
                    gg.appendChild(div)
                    if (table[i][j] == "X") {
                        score++
                        div.textContent = `GG vous avez gagner ${score}`
                    } else {
                        div.textContent = `Tu as perdu! ${score}`
                    }
                }
            }
            if (table[i + 3] && table[i + 3][j - 3] && table[i][j] != "") {
                if (table[i][j] === table[i + 1][j - 1] && table[i + 1][j - 1] === table[i + 2][j - 2] && table[i + 2][j - 2] === table[i + 3][j - 3]) {
                    document.querySelector("#replay").classList.remove("hide")
                    gameOver = true
                    let div = document.createElement("div")
                    gg.appendChild(div)
                    if (table[i][j] == "X") {
                        score++
                        div.textContent = `GG vous avez gagner ${score}`
                    } else {
                        div.textContent = `Tu as perdu! ${score}`
                    }
                }
            }
        }

    }
    if (lap > 41 && gameOver == false) {
        document.querySelector("#replay").classList.remove("hide")
        let div = document.createElement("div")
        gameOver = false
        div.textContent = `Il n'y a pas de gagnant!`
        draw.appendChild(div)
    }
}

// cette fonction nous sert a recommencer le jeu

function replay() {
    gg.textContent = ""
    table = [
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
    ];
    lap = 1
    gameOver = false
    display()
}

// fonction randomize bien connu des service de police

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//fonction qui determine si c'est le bot joue

function gameMode(isCpu) {
    cpuMode = isCpu
    replay()
}

