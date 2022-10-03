let ataqueJugador
let ataqueEnemigo
let vidaJugador = 3
let vidaEnemigo = 3 

function iniciarJuego(){
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none'

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'none'

    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador)
    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click',ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click',ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click',ataqueTierra)

    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador(){
    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
    sectionSeleccionarMascota.style.display = 'none'

    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'block'

    let inputHipodoge=document.getElementById('hipodoge')
    let inputCapipepo=document.getElementById('capipepo')
    let inputRatigueya=document.getElementById('ratigueya')
    let spanMascotaJugador=document.getElementById('mascota-jugador')

if(inputHipodoge.checked){
    spanMascotaJugador.innerHTML='Hipodoge'
} else if(inputCapipepo.checked){
    spanMascotaJugador.innerHTML='Capipepo'
} else if(inputRatigueya.checked){
    spanMascotaJugador.innerHTML='Ratigueya'
} else{
    alert('Selecciona una mascota')
    reiniciarJuego()
}

seleccionarMascotaEnemigo()}

function seleccionarMascotaEnemigo(){
    let mascotaAleatoria=aleatorio(1,3)
    let spanMascotaEnemigo=document.getElementById('mascota-enemigo')

    if(mascotaAleatoria==1){
        spanMascotaEnemigo.innerHTML='Hipodoge'
    } else if(mascotaAleatoria==2){
        spanMascotaEnemigo.innerHTML='Capipepo'
    } else{spanMascotaEnemigo.innerHTML='Ratigueya'
    }
}

function ataqueFuego(){
    ataqueJugador='FUEGO'
    ataqueAleatorioEnemigo()
}
function ataqueAgua(){
    ataqueJugador='AGUA'
    ataqueAleatorioEnemigo()
}
function ataqueTierra(){
    ataqueJugador='TIERRA'
    ataqueAleatorioEnemigo()
}
function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)

    if(ataqueAleatorio == 1){
        ataqueEnemigo ='FUEGO'
    } else if(ataqueAleatorio == 2){
        ataqueEnemigo ='AGUA'
    } else{ataqueEnemigo ='TIERRA'
}
combate()
}

function combate(){
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')

    if(ataqueEnemigo == ataqueJugador){
        crearMensaje('EMPATE👍')
    } else if(ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA'){
        crearMensaje('GANASTE🏆')
        vidaEnemigo--
        spanVidasEnemigo.innerHTML = vidaEnemigo
    } else if(ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO'){
        crearMensaje('GANASTE🏆')
        vidaEnemigo--
        spanVidasEnemigo.innerHTML = vidaEnemigo
    } else if(ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA'){
        crearMensaje('GANASTE🏆')
        vidaEnemigo--
        spanVidasEnemigo.innerHTML = vidaEnemigo
    } else{
        crearMensaje('PERDISTE😔')
        vidaJugador--
        spanVidasJugador.innerHTML = vidaJugador
    }
    revisarVida()
}

function revisarVida(){
    if(vidaEnemigo == 0){
        crearMensajeFinal("FELICITACIONES!!! GANASTE🏆")
    }else if(vidaJugador == 0){
        crearMensajeFinal("LO SENTIMOS MUCHO!!! PERDISTE😞")
    }
}

function crearMensaje(resultado){
    let sectionMensajes = document.getElementById('mensajes')
    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota atacó con '+ ataqueJugador +', las mascota del enemigo atacó con ' + ataqueEnemigo + '- ' + resultado
    sectionMensajes.appendChild(parrafo)
}

function crearMensajeFinal(resultadoFinal){
    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'block'

    let sectionMensajes = document.getElementById('mensajes')
    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultadoFinal
    sectionMensajes.appendChild(parrafo)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true
}

function reiniciarJuego(){
    location.reload()
}

function aleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}
window.addEventListener('load',iniciarJuego)
