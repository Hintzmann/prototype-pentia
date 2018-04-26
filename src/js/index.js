import Offcanvas from './offcanvas.js'

require('../scss/index.scss')

document.addEventListener('DOMContentLoaded', () => {
    let offcanvas = new Offcanvas()
    // offcanvas.open() / .close() / .toggle()

    document.getElementById('start').addEventListener('click', (event) => {
        // Maybe a polyfill http://iamdustan.com/smoothscroll/
        document
            .getElementById('section-digital-transformation')
            .scrollIntoView({behavior: 'smooth', block: 'start'})

        event.preventDefault()
        return false
    })

})
