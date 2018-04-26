export default class Offcanvas {
  constructor (options = {}) {
    this.togglerSelector = options.togglerSelector || '.offcanvas__toggle'
    this.togglerExpandedClass = options.togglerExpandedClass || 'offcanvas__toggle--expanded'
    this.navSelector = options.navSelector || '.offcanvas'
    this.navExpandedClass = options.navExpandedClass || 'offcanvas--expanded'
    this.hamburgerSelector = options.hamburgerSelector || '.hamburger'
    this.hamburgerExpandedClass = options.hamburgerExpandedClass || 'is-active'

    this.init()
  }

  init () {
    this.toggler = document.querySelector(this.togglerSelector)
    this.nav = document.querySelector(this.navSelector)
    this.hamburger = document.querySelector(this.hamburgerSelector)
    this.initEvents()
  }

  initEvents () {
    this.toggler.addEventListener('click', this.toggle.bind(this))
  }

  toggle () {
    this.nav.classList.toggle(this.navExpandedClass)
    this.toggler.classList.toggle(this.togglerExpandedClass)
    this.hamburger.classList.toggle(this.hamburgerExpandedClass)
  }

  open () {
    this.nav.classList.add(this.navExpandedClass)
    this.toggler.classList.add(this.togglerExpandedClass)
    this.hamburger.classList.add(this.hamburgerExpandedClass)
  }

  close () {
    this.nav.classList.remove(this.navExpandedClass)
    this.toggler.classList.remove(this.togglerExpandedClass)
    this.hamburger.classList.remove(this.hamburgerExpandedClass)
  }

  // kill () {
  //   this.toggler.removeEventListener('click', this.toggleNav.bind(this))
  // }
}
