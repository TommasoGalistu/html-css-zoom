let pulsanteUnmute = document.querySelector('.fa-microphone');
let testoMicrUnmute = document.querySelector('.testoMicr');

pulsanteUnmute.addEventListener('click', () => {
    if (pulsanteUnmute.classList.contains('fa-microphone')) {
        pulsanteUnmute.classList.remove('fa-microphone');
        pulsanteUnmute.classList.add('fa-microphone-slash');
        testoMicrUnmute.textContent = 'Mute';
    } else {
        pulsanteUnmute.classList.remove('fa-microphone-slash');
        pulsanteUnmute.classList.add('fa-microphone');
        testoMicrUnmute.textContent = 'Unmute';
    }
});




