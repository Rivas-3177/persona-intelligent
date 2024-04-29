input.onPinPressed(TouchPin.P0, function () {
	
})
input.onSound(DetectedSound.Loud, function () {
    basic.showIcon(IconNames.Sad)
})
input.onSound(DetectedSound.Quiet, function () {
    basic.showIcon(IconNames.Happy)
})
music.play(music.createSoundExpression(WaveShape.Triangle, 5000, 1, 176, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Logarithmic), music.PlaybackMode.UntilDone)
input.calibrateCompass()
led.setDisplayMode(DisplayMode.BlackAndWhite)
basic.forever(function () {
    while (input.isGesture(Gesture.Shake)) {
        basic.showArrow(ArrowNames.North)
    }
})
