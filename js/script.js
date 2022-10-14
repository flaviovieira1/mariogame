

const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const clouds = document.querySelector('.clouds')
const clouds2 = document.querySelector('.clouds2')
const msg = document.querySelector('#msg')

const jump = () => {
    mario.classList.add('jump')

    setTimeout(() => {

        mario.classList.remove('jump')
    }, 750)
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')
    const cloudsPosition = clouds.offsetLeft
    const clouds2Position = clouds2.offsetLeft

    if(pipePosition<=120&& marioPosition<100 && pipePosition >0){

        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`

        clouds.style.animation='none'
        clouds.style.left= `${cloudsPosition}px`

        clouds2.style.animation='none'
        clouds2.style.left= `${clouds2Position}px`


        mario.src='/images/game-over.png'
        mario.style.width='75px'
        mario.style.marginLeft='50px'

        msg.innerText = 'F'

        clearInterval(loop)

    }
}, 10)

document.addEventListener('keydown', jump)