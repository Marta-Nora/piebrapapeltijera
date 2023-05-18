radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        if (MIJUGADA == 3) {
            basic.showString("EMPATE")
        } else if (MIJUGADA == 2) {
            basic.showString("PERDISTE")
        } else {
            basic.showString("GANASTE")
        }
    }
    if (receivedNumber == 2) {
        if (MIJUGADA == 2) {
            basic.showString("EMPATE")
        } else if (MIJUGADA == 1) {
            basic.showString("PERDISTE")
        } else {
            basic.showString("GANASTE")
        }
    }
    if (receivedNumber == 3) {
        if (MIJUGADA == 3) {
            basic.showString("EMPATE")
        } else if (MIJUGADA == 1) {
            basic.showString("PERDISTE")
        } else {
            basic.showString("GANASTE")
        }
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . # .
        # # # # #
        # # # # #
        . # # # #
        . . # # .
        `)
    radio.sendNumber(1)
    MIJUGADA = 1
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        # # . . #
        # # . # .
        . . # . .
        # # . # .
        # # . . #
        `)
    radio.sendNumber(3)
    MIJUGADA = 3
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # # # # .
        # . . # #
        # . . . #
        # . . . #
        # # # # #
        `)
    radio.sendNumber(2)
    MIJUGADA = 2
})
let MIJUGADA = 0
radio.setGroup(220)
