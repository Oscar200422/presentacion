const sectionHome = document.getElementById('section_home')
const sectionAbout = document.getElementById('section_about')
const sectionMenu = document.getElementById('section_menu')
const sectionServices = document.getElementById('section_services')
const sectionContact = document.getElementById('section_contact')

const buttonHome = document.getElementById('button_home')
const buttonAbout = document.getElementById('button_about')
const buttonServices = document.getElementById('button_services')

const labelMenu1 = document.getElementById('label_menu0')
const labelMenu2 = document.getElementById('label_menu1')
const labelMenu3 = document.getElementById('label_menu2')




function iniciar(){
    sectionAbout.style.display = 'none'
    sectionMenu.style.display = 'none'
    sectionServices.style.display = 'none'
    sectionContact.style.display = 'none'
    
    buttonHome.addEventListener('click', fAbout)
}
function fAbout(){
    sectionAbout.style.display = 'flex'
    sectionHome.style.display = 'none'
    buttonAbout.addEventListener('click', fMenu)
}

function fMenu(){
    sectionMenu.style.display = 'flex'
    sectionAbout.style.display = 'none'

    labelMenu1.addEventListener('dblclick', fServices)
    labelMenu2.addEventListener('dblclick', fServices)
    labelMenu3.addEventListener('dblclick', fServices)

}

function fServices(){
    sectionMenu.style.display = 'none'
    sectionServices.style.display = 'flex'
    buttonServices.addEventListener('click', fContact)
}

function fContact(){
    sectionServices.style.display = 'none'
    sectionContact.style.display = 'flex'

}
window.addEventListener('DOMContentLoaded', iniciar())
