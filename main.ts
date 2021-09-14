 function emotion(): void {
    if (input.pinIsPressed(TouchPin.P0)) {
        basic.showString("TRANQUILIDAD")
        basic.showIcon(IconNames.QuarterNote)
    }
    if (input.pinIsPressed(TouchPin.P1)) {
        basic.showString("AMOR")
        basic.showIcon(IconNames.Heart)
    }
    if (input.pinIsPressed(TouchPin.P2)) {
        basic.showString("FELICIDAD")
        basic.showIcon(IconNames.Happy)
    }
    basic.clearScreen()
}
