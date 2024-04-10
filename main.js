let audio = document.querySelector('.audio'),
    buts = document.querySelector('.logo')

buts.addEventListener('click' , e => {
    buts.classList.toggle('paused')
    if (audio.paused){
        audio.play()
    }
    else{
        audio.pause()
    }
})
