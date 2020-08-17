let rand = 0
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    rand = randint(0, 5)
})
basic.forever(function on_forever() {
    if (rand == 0) {
        basic.showString("@")
    } else if (rand == 1) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . # . .
            `)
    } else if (rand == 2) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . # . # .
            . # . # .
            . # . # .
            `)
    } else if (rand == 3) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # . .
            . # . . .
            . # # # .
            `)
    } else if (rand == 4) {
        basic.showLeds(`
            . # . . .
            . # . . .
            . # # # .
            . # . # .
            . # . # .
            `)
    } else {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
        basic.showLeds(`
            # . . . #
            # . . . #
            # . . . #
            . # . # .
            . . # . .
            `)
    }
    
})
