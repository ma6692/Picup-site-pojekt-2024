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
	
})
