const fil = document.querySelector('.contenedor-peli-carrucel');
const peli = document.querySelectorAll('.pelic');

peli.forEach((pelicula)=>{
    pelicula.addEventListener('mouseenter',(e)=>{
        const elemento=e.currentTarget;
        setTimeout(()=>{
            peli.forEach(pelicula=>pelicula.classList.remove('hover'));
            elemento.classList.add('hover');
        },300);
    });
});
fil.addEventListener('mouseleave',()=>{
    peli.forEach(pelicula=>pelicula.classList.remove('hover'));
});