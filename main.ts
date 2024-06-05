radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        Speed += 1
    } else if (receivedNumber == 2) {
        Speed += -1
    } else if (receivedNumber == 0) {
        Turning = 0
        Speed = 0
    } else if (receivedNumber == 3) {
        Turning += -1
    } else if (receivedNumber == 4) {
        Turning += 1
    }
})
let Turning = 0
let Speed = 0
bitbot.select_model(BBModel.XL)
radio.setGroup(42)
Speed = 0
Turning = 0
basic.forever(function () {
    Turning = Math.constrain(Turning, -2, 2)
    Speed = Math.constrain(Speed, -2, 2)
    if (Turning < 0 || Turning > 0) {
        if (Turning > 0) {
            bitbot.rotate(BBRobotDirection.Right, 50 * Turning)
            bitbot.setPixelColor(11, 0xFFFF00)
            bitbot.ledClear()
        } else {
            bitbot.rotate(BBRobotDirection.Left, 50 * (-1 * Turning))
            bitbot.setPixelColor(5, 0xFFFF00)
            bitbot.ledClear()
        }
    } else if (0 < Speed) {
        if (5 < bitbot.sonar(BBPingUnit.Centimeters)) {
            bitbot.go(BBDirection.Forward, 50 * Speed)
            bitbot.setLedColor(0xFFFFFF)
        }
    } else {
        bitbot.go(BBDirection.Reverse, 50 * (-1 * Speed))
    }
})
