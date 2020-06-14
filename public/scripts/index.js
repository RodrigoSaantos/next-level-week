const buttonSearch = document.querySelector('#page-home main a')
const modal = document.querySelector('#modal')
const close = document.querySelector('#modal .header a')

buttonSearch.addEventListener('click', () => {
    modal.classList.toggle('hide')

})

close.addEventListener('click', () => {
    modal.classList.toggle('hide')
})

document.querySelector('body').addEventListener('keydown', (event) => {
    const escClose = 27

    if (escClose == event.keyCode){
        modal.classList.add('hide')
    }
    
})

