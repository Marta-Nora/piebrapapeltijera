radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        if (MIJUGADA == 1) {
            basic.showString("EMPATE")
        } else if (MIJUGADA == 2) {
            basic.showString("GANASTE")
        } else if (MIJUGADA == 3) {
            basic.showString("PERDISTE")
        }
    } else if (receivedNumber == 2) {
        if (MIJUGADA == 2) {
            basic.showString("EMPATE")
        } else if (MIJUGADA == 1) {
            basic.showString("PERDISTE")
        } else if (MIJUGADA == 3) {
            basic.showString("GANASTE")
        }
    } else if (receivedNumber == 3) {
        if (MIJUGADA == 3) {
            basic.showString("EMPATE")
        } else if (MIJUGADA == 1) {
            basic.showString("GANASTE")
        } else if (MIJUGADA == 2) {
            basic.showString("PERDISTE")
        }
    }
    basic.clearScreen()
    MIJUGADA = 0
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
    basic.pause(1000)
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
    basic.pause(1000)
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
    basic.pause(1000)
})
let MIJUGADA = 0
radio.setGroup(220)
