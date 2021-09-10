basic.show_string("HOLA!")

def on_forever():
    if input.pin_is_pressed(TouchPin.P0):
        basic.show_string("GREEN")
    if input.pin_is_pressed(TouchPin.P1):
        basic.show_string("RED")
    if input.pin_is_pressed(TouchPin.P2):
        basic.show_string("YELLOW")
    basic.clear_screen()
basic.forever(on_forever)
