var inputEl = document.getElementById('input')
var convertBtn = document.getElementById('convert-btn')
var long = document.getElementById('long')
var vol = document.getElementById('vol')
var mass = document.getElementById('mass')


function longitudAPies(input) {
    var res = input * 3.281
    return res.toFixed(3)
}

function longitudAMetros(input) {
    var res = input / 3.281
    return res.toFixed(3)
}

function volumenAGalones(input) {
    var res = input * 0.264
    return res.toFixed(3)
}

function volumenALitros(input) {
    var res = input / 0.264
    return res.toFixed(3)
}

function masaALibras(input) {
    var res = input * 2.204
    return res.toFixed(3)
}

function masaAKilos(input) {
    var res = input / 2.204
    return res.toFixed(3)
}

convertBtn.addEventListener('click', function() {
    var baseValue = inputEl.value

    long.textContent = `${baseValue} metros = ${longitudAPies(baseValue)} pies | ${baseValue} pies = ${longitudAMetros(baseValue)} metros`

    vol.textContent = `${baseValue} litros = ${volumenAGalones(baseValue)} galones | ${baseValue} galones = ${volumenALitros(baseValue)} litros`
    
    mass.textContent = `${baseValue} kilos = ${masaALibras(baseValue)} libras | ${baseValue} libras = ${masaAKilos(baseValue)} kilos`
})