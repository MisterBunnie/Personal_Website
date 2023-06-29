//navbar icon
let menu = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

//scroll sections
let sections = document.querySelectorAll('.section')
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    sections.forEach((section) => {
        let top = window.scrollY
        let offset = section.offsetTop - 100
        let height = section.offsetHeight
        let id = section.getAttribute('id')

        if (top >= offset && top < offset + height) {
            navLinks.forEach((links) => {
                links.classList.remove('active')
                document
                    .querySelector('header nav a[href*=' + id + ']')
                    .classList.add('active')
            })
            if (section.classList.contains('footer-contact')) {
                // Add the "active" class to the corresponding navigation link
                document
                    .querySelector('header nav a[href="#contact"]')
                    .classList.add('active')
            } else {
                // Add the "active" class to the navigation link corresponding to the current section
                document
                    .querySelector('header nav a[href="#' + id + '"]')
                    .classList.add('active')
            }
        }
    })

    //remove toggle icon + navbar after click navbar link or scroll
    menu.classList.remove('bx-x')
    navbar.classList.remove('active')
}

//download CV button
document.getElementById('downloadButton').addEventListener('click', (event) => {
    event.preventDefault()

    let fileURL = './cv/MyCV.pdf'
    let fileName = "Mister's Bunny CV "

    let a = document.createElement('a')
    a.href = fileURL
    a.download = fileName
    a.style.display = 'none'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
})

//scroll reveal
ScrollReveal({ reset: true, distance: '80px', duration: 2000 })

ScrollReveal().reveal(
    '.home-content, .header-about, .header-services,.section-subtitle, .header-projects, .header-contact',
    { origin: 'top' }
)
ScrollReveal().reveal(
    '.home-img, .about-content,.section-subtitle,  .services__container_grid_section__border, .projects-container, .home-sec-box',
    { origin: 'bottom' }
)
ScrollReveal().reveal(
    '.footer-p, .navbar .services__container_grid_section__border, .projects-container',
    { origin: 'left' }
)
