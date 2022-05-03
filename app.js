const MenuMobile = document.querySelector('.hamburguer-menu');
const Menu = document.querySelector('.main-menu')

MenuMobile.addEventListener('click', Mobile)

function Mobile(){
    Menu.classList.toggle('active');
    MenuMobile.classList.toggle('active')

}
function iphoneVerde(){
    var imagem = document.querySelector('.iphone-img')
    imagem.src = 'imgs/iphoneVerde.png'
}
function iphoneRoxo(){
    var imagem = document.querySelector('.iphone-img')
    imagem.src = "imgs/iphoneRoxo.png"
}
function iphoneBranco(){
    var imagem = document.querySelector('.iphone-img')
    imagem.src = 'imgs/iphoneBranco.png'
}
function iphoneAmarelo(){
    var imagem = document.querySelector('.iphone-img')
    imagem.src = 'imgs/iphoneAmarelo.png'
}
function iphonePreto(){
    var imagem = document.querySelector('.iphone-img')
    imagem.src = 'imgs/iphonePreto.png'
}
function iphoneVermelho(){
    var imagem = document.querySelector('.iphone-img')
    imagem.src = 'imgs/iphoneVermelho.png'
}

