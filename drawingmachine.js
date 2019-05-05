// Drawing Machine - BBC micro:bit version 1.0
// Enrico Miglino - balearicdyanmics@gmail.com
// GitHub: https://alicemirror.github.io/drawingmachine
// Need the Kitronik's All-in-one robotic board library
let speedStep = 0
let currentMotor = 0
let isMotorRunning = false
let speedMax = 0
let motorSmall = 0
let motorBig = 0
let speedMin = 0
// Increment the big wheel motor by one step and if it
// is over the maximum reset the value to the minimum
function incrementSpeedBig2() {
    // Increment the motor speed
    motorBig = motorBig + speedStep
    if (motorBig >= speedMax) {
        // Reset the motor speed to minimum
        motorBig = speedMin
    }
}
// Increment the small wheel motor by one step and if
// it is over the maximum reset the value to the
// minimum
function incrementSpeedSmall2() {
    // Increment the motor speed
    motorSmall = motorSmall + speedStep
    if (motorSmall >= speedMax) {
        // Reset the motor speed to minimum
        motorSmall = speedMin
    }
}
// Decrement the big wheel motor by one step and if it
// is under the minimum reset the value to the maximum
function decrementSpeedBig2() {
    // Decrement the motor speed
    motorBig = motorBig - speedStep
    if (motorBig <= speedMin) {
        // Reset the motor speed to maximum
        motorBig = speedMax
    }
}
// Decrement the small wheel motor by one step and if
// it is under the minimum reset the value to the
// maximum
function decrementSpeedSmall2() {
    // Decrement the motor speed
    motorSmall = motorSmall - speedStep
    if (motorSmall <= speedMin) {
        // Reset the motor speed to maximum
        motorSmall = speedMax
    }
}
// Depending on the state of the currentMotor, the
// button increment the speed of the small or big
// wheel
input.onButtonPressed(Button.A, function () {
    if (currentMotor == 0) {
        incrementSpeedSmall2()
        basic.showNumber(motorSmall)
    } else {
        incrementSpeedBig2()
        basic.showNumber(motorBig)
    }
})
// Everytime you shake the board, motors start or stop
// moving
input.onGesture(Gesture.Shake, function () {
    motorsOnOff2()
})
// Stop both motors
function motorsOnOff2() {
    if (isMotorRunning) {
        Kitronik_Robotics_Board.motorOff(Kitronik_Robotics_Board.Motors.Motor1)
        Kitronik_Robotics_Board.motorOff(Kitronik_Robotics_Board.Motors.Motor2)
        basic.showIcon(IconNames.No)
        isMotorRunning = false
    } else {
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Forward, motorSmall)
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor2, Kitronik_Robotics_Board.MotorDirection.Forward, motorBig)
        basic.showIcon(IconNames.Yes)
        isMotorRunning = true
    }
}
// Depending on the state of the currentMotor, the
// button increment the speed of the small or big
// wheel
input.onButtonPressed(Button.AB, function () {
    if (currentMotor == 0) {
        currentMotor = 1
        basic.showIcon(IconNames.Square)
    } else {
        currentMotor = 0
        basic.showIcon(IconNames.SmallSquare)
    }
})
// Depending on the state of the currentMotor, the
// button increment the speed of the small or big
// wheel
input.onButtonPressed(Button.B, function () {
    if (currentMotor == 0) {
        decrementSpeedSmall2()
        basic.showNumber(motorSmall)
    } else {
        decrementSpeedBig2()
        basic.showNumber(motorBig)
    }
})
// Motors lower speed limit
speedMin = 20
// Motors higher speed limit
speedMax = 80
// Motors increment/decrement speed units
speedStep = 5
// Define the motor you are acting on with the
// buttons: 0=small wheel, 1=big wheel
currentMotor = 0
isMotorRunning = false
basic.showString("Welcome to the Drawing Machine")
// Initialize the small wheel speed
motorSmall = speedMin
// Initialize the big wheel speed
motorBig = speedMin
basic.pause(1000)

