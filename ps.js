const progreso = document.getElementById('progreso')
const prev = document.getElementById('prev')
const sig = document.getElementById('sig')
const pasos = document.querySelectorAll('.paso')

let Activo = 1

sig.addEventListener('click', () => {
    Activo++

    if(Activo > pasos.length) {
        Activo = pasos.length
    }

    actualizar()
})

prev.addEventListener('click', () => {
    Activo--

    if(Activo < 1) {
        Activo - 1
    }

    actualizar()
})

function actualizar() {
    pasos.forEach((paso, idx) => {
        if(idx < Activo) {
            paso.classList.add('active')
        }else{
            paso.classList.remove('active')
        }
    })

    const activos = document.querySelectorAll('.active')

    progreso.style.width = (activos.length - 1) / (pasos.length - 1) * 100 + '%'

    if(Activo === 1){
        prev.disabled = true
    }else if(Activo === pasos.length){
        sig.disabled = true
    } else {
        prev.disabled = false
        sig.disabled = false
    }
}