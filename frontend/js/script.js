function toggleMenu(){
    const menu = document.querySelector('.mobile-links')
    const icon = document.querySelector('.mobile-icon')
    menu.classList.toggle('open')
    icon.classList.toggle('open')
}

function toggleMenuFooter(){
    const footerMenu = document.querySelector('.footer-links')
    const footerIcon = document.querySelector('.footer-icon')
    footerMenu.classList.toggle('open')
    footerIcon.classList.toggle('open')
}

document.getElementById('year').textContent = new Date().getFullYear()