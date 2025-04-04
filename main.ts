// Define the function to check who won a game
function checkGameWinner () {
    if (player1Score >= 11 && player1Score - player2Score >= 2) {
        basic.showString("Game to p1!")
        basic.showIcon(IconNames.Happy)
        music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.UntilDone)
        player1GamesWon += 1
        resetGame()
    } else {
        if (player2Score >= 11 && player2Score - player1Score >= 2) {
            basic.showString("Game to p2!")
            music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.UntilDone)
            basic.showIcon(IconNames.Happy)
            resetGame()
        } else if (player1Score == 10 && player2Score == 10) {
            basic.showString("Deuce")
            music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Wawawawaa), music.PlaybackMode.UntilDone)
        }
        resetGame()
    }
}
// Define the function to reset the following games
function resetGame () {
    player1Score = 0
    player2Score = 0
    lastResetTime = input.runningTime()
    // 1 minute water break
    while (input.runningTime() - lastResetTime < 60000) {
        basic.showString("Water Break")
        music.play(music.stringPlayable("G B A G C5 B A B ", 120), music.PlaybackMode.UntilDone)
    }
    gameActive = true
    basic.showString("Game on!")
}
// Press button A to show player_1's scores
input.onButtonPressed(Button.A, function () {
    if (gameActive) {
        player1Score += 1
        basic.showString("\"p1:\" + player1Score + | p2:\" + player2Score")
    }
    checkGameWinner()
})
// Define the function to reset matches
function resetMatch () {
    player1GamesWon = 0
    player2GamesWon = 0
    basic.showString("New Match!")
}
// Press button A+B to handle warm up time
input.onButtonPressed(Button.AB, function () {
    gameActive = false
    warmupTime = input.runningTime()
    basic.showString("Warm Up!")
    while (0 - 0 == 0) {
        basic.showNumber(0 - 0)
    }
    gameActive = true
    basic.showString("Game On!")
})
// Press button B to show player_2's scores
input.onButtonPressed(Button.B, function () {
    if (gameActive) {
        player2Score += 1
        basic.showString("\"p1:\" + player1Score + | p2:\" + player2Score")
    }
    checkGameWinner()
})
// Switch to matches mode, best of 5/7
input.onGesture(Gesture.Shake, function () {
    if (totalGames == 5) {
        totalGames = 7
    } else {
        totalGames = 5
    }
    basic.showString("\"Best of\"+totalGames")
})
// Define the function to check who is the winner
function checkMatchWinner () {
    if (player1GamesWon >= totalGames / (2 + 1)) {
        basic.showString("Winner:p1!")
        resetMatch()
    } else {
        if (player2GamesWon >= totalGames / (2 + 1)) {
            basic.showString("Winner:p2!")
            resetMatch()
        }
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Entertainer), music.PlaybackMode.UntilDone)
    }
}
// Initialize variables
let gameActive = false
let lastResetTime = 0
let warmupTime = 0
let totalGames = 0
let player2GamesWon = 0
let player1GamesWon = 0
let player2Score = 0
let player1Score = 0
// Scores variables
// Matches state
player1Score = 0
player2Score = 0
player1GamesWon = 0
player2GamesWon = 0
// Best of 5 games by default
totalGames = 5
// Timers variables
warmupTime = 0
lastResetTime = 0
// Game flows
gameActive = false
let deuceAnnounced = false
