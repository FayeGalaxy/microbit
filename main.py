def checkGameWinner():
    if player1Score >= 11 and player1Score - player2Score >= 2:
        basic.show_string("Game to player1!")
        music.play(music.builtin_playable_sound_effect(soundExpression.giggle),
            music.PlaybackMode.IN_BACKGROUND)
        basic.show_icon(IconNames.HAPPY)
    else:
        if player2Score >= 11 and player2Score - player1Score >= 2:
            basic.show_string("Game to player2!")
            music.play(music.builtin_playable_sound_effect(soundExpression.giggle),
                music.PlaybackMode.IN_BACKGROUND)
            basic.show_icon(IconNames.HAPPY)
        elif player1Score == 10 and player2Score == 10:
            basic.show_string("Deuce")
            music._play_default_background(music.built_in_playable_melody(Melodies.WAWAWAWAA),
                music.PlaybackMode.UNTIL_DONE)
        resetGame()
def resetGame():
    global player1Score, player2Score
    player1Score = 0
    player2Score = 0
    basic.show_string("Water Break")
    music.play(music.string_playable("G B A G C5 B A B ", 120),
        music.PlaybackMode.UNTIL_DONE)
    for index in range(61):
        basic.show_number(60)
        basic.pause(1000)
        # Tick means "It's time for next game"
        basic.show_icon(IconNames.YES)

def on_button_pressed_a():
    global player1Score
    player1Score += 1
    basic.show_string("\"player1: \" + player1Score + | player2: \" + player2Score")
    checkGameWinner()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global warmupTime
    basic.show_string("\"Confirmed:Best of\" + totalGames")
    warmupTime = 120
    for index2 in range(120):
        warmupTime += -1
        basic.show_string("\"Warm Up\"")
    basic.show_string("\"Game On\"")
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global player2Score
    player2Score += 1
    basic.show_string("\"player1: \" + player1Score + | player2: \" + player2Score")
    checkGameWinner()
input.on_button_pressed(Button.B, on_button_pressed_b)

# Switch to matches mode, best of 5/7

def on_gesture_shake():
    global totalGames
    if totalGames == 5:
        totalGames = 7
    else:
        totalGames = 5
    basic.show_string("\"Best of\"+totalGames")
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

# Initialize variables
warmupTime = 0
totalGames = 0
player2Score = 0
player1Score = 0
# Scores variables
# Matches state
player1Score = 0
player2Score = 0
player1GamesWon = 0
player2GamesWon = 0
# Best of 5 games by default
totalGames = 5
# Timers variables
warmupTime = 0
lastResetTime = 0
# Game flows
gameActive = 0
deuceAnnounced = 0