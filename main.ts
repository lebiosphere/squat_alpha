input.onGesture(Gesture.LogoUp, function () {
    if (autorisationcomptagesquat == 1) {
        nbdesquats += 1
        basic.pause(100)
    }
})
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    nbdesquats = 0
    Avertir_début_exercice()
    autorisationcomptagesquat = 1
    basic.pause(dureedusablier * 1000)
    autorisationcomptagesquat = 0
    Avertir_fin_exercice()
    basic.showString("" + (nbdesquats))
})
function Avertir_début_exercice () {
    basic.pause(randint(1000, 3000))
    basic.showString("GO")
}
function Avertir_fin_exercice () {
    basic.showString("STOP")
}
let nbdesquats = 0
let autorisationcomptagesquat = 0
let dureedusablier = 0
dureedusablier = 10
autorisationcomptagesquat = 0
nbdesquats = 0
