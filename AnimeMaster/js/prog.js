const fila = document.querySelector('.contenedor-carrucel');
const peliculas = document.querySelectorAll('.peli');

peliculas.forEach((pelicula)=>{
    pelicula.addEventListener('mouseenter',(e)=>{
        const element=e.currentTarget;
        setTimeout(()=>{
            peliculas.forEach(pelicula=>pelicula.classList.remove('hover'));
            element.classList.add('hover');
        },300);
    });
});
fila.addEventListener('mouseleave',()=>{
    peliculas.forEach(pelicula=>pelicula.classList.remove('hover'));
});