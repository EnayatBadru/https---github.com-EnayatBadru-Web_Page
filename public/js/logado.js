// hamburguer
const btnMobile = document.getElementById('btn-mobile')

function toggleMenu(event){
    if(event.type == 'touchstart') event.preventDefault()
    const nav = document.getElementById('nav')
    nav.classList.toggle('active')
    const active = nav.classList.contains('active')
    event.currentTarget.setAttribute('aria-expanded', active)
    if(active){
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu')
    }else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu')
    }
}
btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('touchstart', toggleMenu)


// scrollHeader
window.addEventListener("scroll", (e)=>{
    if(e.type == 'touchstart') e.preventDefault();
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0)
});


//clickActive 
const links = document.querySelectorAll('#menu a');

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function(event) {
    // Evita o comportamento padrão do link
    event.preventDefault();

    // Remove a classe "active" de todos os links
    for (let j = 0; j < links.length; j++) {
      links[j].classList.remove('active');
    }

    // Adiciona a classe "active" apenas ao link clicado
    this.classList.add('active');
  });
}
