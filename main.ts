radio.onReceivedString(function (receivedString) {
    if (receivedString == "U") {
        step0 = 5
    } else if (receivedString == "D") {
        step0 = -5
    } else if (receivedString == "L") {
        step1 = 5
    } else if (receivedString == "R") {
        step1 = -5
    } else if (receivedString == "1") {
        step2 = 5
    } else if (receivedString == "3") {
        step2 = -5
    } else if (receivedString == "2") {
        step3 = 5
    } else if (receivedString == "4") {
        step3 = -5
    } else if (receivedString == "N") {
        step0 = 0
        step1 = 0
        step2 = 0
        step3 = 0
    }
})
let step3 = 0
let step2 = 0
let step1 = 0
let step0 = 0
radio.setGroup(1)
let pos0 = 0
let pos1 = 0
let pos2 = 0
let pos3 = 0
Servo.ServoPulse(0, pos0)
Servo.ServoPulse(0, pos1)
Servo.ServoPulse(0, pos2)
Servo.ServoPulse(0, pos3)
basic.forever(function () {
    if (step0 != 0) {
        pos0 = step0
        step0 += Math.max(pos0, 0)
        step0 += Math.min(pos0, 0)
        Servo.Servo(0, pos0)
    }
    if (step1 != 0) {
        pos1 = step1
        step1 += Math.max(pos1, 0)
        step1 += Math.min(pos1, 0)
        Servo.Servo(0, pos1)
    }
    if (step2 != 0) {
        pos2 = step2
        step2 += Math.max(pos2, 0)
        step2 += Math.min(pos2, 0)
        Servo.Servo(0, pos2)
    }
    if (step3 != 0) {
        pos3 = step3
        step3 += Math.max(pos3, 0)
        step3 += Math.min(pos3, 0)
        Servo.Servo(0, pos3)
    }
})
