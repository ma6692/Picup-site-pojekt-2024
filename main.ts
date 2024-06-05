radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        Speed += 1
    }
    if (receivedNumber == 2) {
        Speed += -1
    }
    if (receivedNumber == 0) {
        Turning = 0
        Speed = 0
        bitbot.stop(BBStopMode.Coast)
        bitbot.ledClear()
    }
    if (receivedNumber == 3) {
        Turning += -1
    }
    if (receivedNumber == 4) {
        Turning += 1
    }
    if (receivedNumber == 5) {
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
    if (0 < Speed) {
        if (5 < bitbot.sonar(BBPingUnit.Centimeters)) {
            bitbot.stop(BBStopMode.Coast)
            bitbot.go(BBDirection.Forward, 50 * Speed)
            bitbot.setLedColor(0xFFFFFF)
        }
        if (Turning > 0) {
            bitbot.stop(BBStopMode.Coast)
            bitbot.BBBias(BBRobotDirection.Left, 50 * Turning)
            bitbot.setPixelColor(5, 0xFFFFFF)
            bitbot.setPixelColor(11, 0xFFFF00)
        } else {
            bitbot.stop(BBStopMode.Coast)
            bitbot.BBBias(BBRobotDirection.Left, 50 * (-1 * Turning))
            bitbot.setPixelColor(11, 0xFFFFFF)
            bitbot.setPixelColor(5, 0xFFFF00)
        }
    } else {
        bitbot.stop(BBStopMode.Coast)
        bitbot.go(BBDirection.Reverse, 50 * (-1 * Speed))
    }
})
