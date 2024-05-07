let pulsanteUnmute = document.querySelector('.fa-microphone')
let testoMicrUnmute = document.querySelector('.testoMicr')


pulsanteUnmute.addEventListener('click', () => {
    pulsanteUnmute.classList.remove('fa-microphone')
    pulsanteUnmute.classList.add('fa-microphone-slash')

    testoMicrUnmute.textContent = 'Mute'
    
})




