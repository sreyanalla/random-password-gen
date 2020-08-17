rand = 0

def on_button_pressed_a():
    global rand
    rand = randint(0, 5)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_forever():
    if rand == 0:
        basic.show_string("@")
    elif rand == 1:
        basic.show_leds("""
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . # . .
            """)
    elif rand == 2:
        basic.show_leds("""
            . # . # .
            . # . # .
            . # . # .
            . # . # .
            . # . # .
            """)
    elif rand == 3:
        basic.show_leds("""
            . # # # .
            . # . . .
            . # # . .
            . # . . .
            . # # # .
            """)
    elif rand == 4:
        basic.show_leds("""
            . # . . .
            . # . . .
            . # # # .
            . # . # .
            . # . # .
            """)
    else:
        basic.show_leds("""
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            """)
        basic.show_leds("""
            # . . . #
            # . . . #
            # . . . #
            . # . # .
            . . # . .
            """)
basic.forever(on_forever)
