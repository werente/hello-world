def on_button_pressed_a():
    basic.clear_screen()
input.on_button_pressed(Button.A, on_button_pressed_a)

basic.show_string("HOLA!")

def on_forever():
    if input.pin_is_pressed(TouchPin.P0):
        basic.show_string("TRANQUILIDAD")
        basic.show_icon(IconNames.QUARTER_NOTE)
    if input.pin_is_pressed(TouchPin.P1):
        basic.show_string("AMOR")
        basic.show_icon(IconNames.HEART)
    if input.pin_is_pressed(TouchPin.P2):
        basic.show_string("FELICIDAD")
        basic.show_icon(IconNames.HAPPY)
    if input.button_is_pressed(Button.A):
        basic.show_string("Lololol")
    basic.clear_screen()
basic.forever(on_forever)
