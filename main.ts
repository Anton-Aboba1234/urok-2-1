input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . # . . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # . . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # . . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    if (Math.randomBoolean()) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
        basic.pause(100)
        basic.showLeds(`
            # # # # #
            # . . . #
            # # # # #
            # . . . .
            # . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            # # # # #
            # . . . .
            # # # # #
            # . . . .
            # # # # #
            `)
        basic.pause(100)
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            # . . . #
            # . . . #
            `)
        basic.pause(100)
        basic.clearScreen()
    } else {
        basic.showLeds(`
            # # # # #
            # . . . #
            # # # # #
            # . . . .
            # . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            # # # # #
            # . . . .
            # # # # #
            # . . . .
            # # # # #
            `)
        basic.pause(100)
        basic.showLeds(`
            # . . . #
            # . . . #
            # . # . #
            # . # . #
            # # # # #
            `)
        basic.pause(100)
        basic.showLeds(`
            . # . # .
            . # . # .
            . # # . .
            . # . # .
            . # . # .
            `)
        basic.pause(100)
        basic.showLeds(`
            # # # # #
            # . . . #
            # # # # #
            # . . . #
            # . . . #
            `)
        basic.pause(100)
        basic.clearScreen()
    }
})
basic.forever(function () {
	
})
