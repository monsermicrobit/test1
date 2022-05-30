let T0 = 0
basic.forever(function () {
    basic.clearScreen()
    T0 = 10
    for (let index = 0; index < 4; index++) {
        T0 = T0 - 1
        if (T0 == 8) {
            basic.showNumber(T0)
            music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
            basic.pause(3000)
            basic.showLeds(`
                . . . . .
                . # # . .
                . # # # .
                . # # # .
                . . . . .
                `)
        } else {
            basic.showNumber(T0)
            basic.pause(1000)
            basic.showLeds(`
                # # # # #
                # . . . #
                # . . . #
                # . . . #
                # # # # #
                `)
            music.playTone(988, music.beat(BeatFraction.Whole))
        }
    }
})
