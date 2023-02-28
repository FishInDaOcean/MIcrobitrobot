input.onButtonPressed(Button.A, function () {
    radio.sendString("MoveFoward")
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendString("MoveLeft")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("StopMovement")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == MoveFoward) {
        robotbit.MotorRun(robotbit.Motors.M1B, 255)
        robotbit.MotorRun(robotbit.Motors.M2A, 255)
        basic.pause(1000)
    }
    if (receivedString == MoveBackwards) {
        robotbit.MotorRun(robotbit.Motors.M1B, -255)
        robotbit.MotorRun(robotbit.Motors.M2A, -255)
        basic.pause(1000)
    }
    if (receivedString == MoveLeft) {
        robotbit.MotorRun(robotbit.Motors.M1B, 255)
        robotbit.MotorRun(robotbit.Motors.M2A, -255)
        basic.pause(1000)
    }
    if (receivedString == MoveRight) {
        robotbit.MotorRun(robotbit.Motors.M1B, -255)
        robotbit.MotorRun(robotbit.Motors.M2A, 255)
        basic.pause(1000)
    }
    if (receivedString == Stop_Movement) {
        robotbit.MotorRun(robotbit.Motors.M1B, 0)
        robotbit.MotorRun(robotbit.Motors.M2A, 0)
        basic.pause(1000)
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("MoveBack")
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendString("MoveRight")
})
let Stop_Movement = ""
let MoveRight = ""
let MoveLeft = ""
let MoveBackwards = ""
let MoveFoward = ""
radio.setGroup(1)
MoveFoward = "MoveFoward"
MoveBackwards = "MoveBack"
MoveLeft = "MoveLeft"
MoveRight = "MoveRight"
Stop_Movement = "StopMovement"
