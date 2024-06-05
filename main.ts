radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        Speed += 1
    } else if (receivedNumber == 2) {
        Speed += -1
    } else if (receivedNumber == 0) {
        Turning = 0
        Speed = 0
        bitbot.stop(BBStopMode.Coast)
        bitbot.ledClear()
    } else if (receivedNumber == 3) {
        Turning += -1
    } else if (receivedNumber == 4) {
        Turning += 1
    } else if (receivedNumber == 5) {
        Turning = 0
        bitbot.setLedColor(0xFFFFFF)
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
            bitbot.rotate(BBRobotDirection.Right, 20 * Turning)
            bitbot.setPixelColor(5, 0xFFFFFF)
            bitbot.setPixelColor(11, 0xFFFF00)
        } else {
            bitbot.rotate(BBRobotDirection.Left, 20 * (-1 * Turning))
            bitbot.setPixelColor(11, 0xFFFFFF)
            bitbot.setPixelColor(5, 0xFFFF00)
        }
    } else if (0 < Speed) {
        if (true) {
            bitbot.go(BBDirection.Forward, 50 * Speed)
            bitbot.setLedColor(0xFFFFFF)
        }
    } else {
        bitbot.go(BBDirection.Reverse, 50 * (-1 * Speed))
    }
})
