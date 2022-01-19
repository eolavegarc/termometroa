let TenpExt = 0
radio.setGroup(7)
basic.forever(function () {
    TenpExt = input.temperature()
    basic.showNumber(TenpExt)
    radio.sendNumber(TenpExt)
})
