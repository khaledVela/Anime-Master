const fila = document.querySelector('.contenedor-carrucel');
const peliculas = document.querySelectorAll('.peli');
const fil = document.querySelector('.contenedor-peli-carrucel');
const peli = document.querySelectorAll('.pelic');

const izq = document.getElementById('izquierda');
const der = document.getElementById('derecha');
const izquierda = document.getElementById('izq');
const derecha = document.getElementById('der');

der.addEventListener('click', () => {
    fila.scrollLeft += fila.offsetWidth;
    const indicactivo= document.querySelector('.indicadores .activo');
    if(indicactivo.nextSibling){
        indicactivo.nextSibling.classList.add('activo');
        indicactivo.classList.remove('activo');
    }
});
derecha.addEventListener('click', () => {
    fil.scrollLeft += fil.offsetWidth;
    const indicat= document.querySelector('.indicador .activo');
    if(indicat.nextSibling){
        indicat.nextSibling.classList.add('activo');
        indicat.classList.remove('activo');
    }
});
izq.addEventListener('click', () => {
    fila.scrollLeft -= fila.offsetWidth;
    const indicactivo= document.querySelector('.indicadores .activo');
    if(indicactivo.previousSibling){
        indicactivo.previousSibling.classList.add('activo');
        indicactivo.classList.remove('activo');
    }
});
izquierda.addEventListener('click', () => {
    fil.scrollLeft -= fil.offsetWidth;
    const indicat= document.querySelector('.indicador .activo');
    if(indicat.previousSibling){
        indicat.previousSibling.classList.add('activo');
        indicat.classList.remove('activo');
    }
});

const nump = Math.ceil(peli.length /5);
for(let i=0;i<nump;i++){
    const indict= document.createElement('button');

    if(i===0){
        indict.classList.add('activo');
    }

    document.querySelector('.indicador').appendChild(indict)
    indict.addEventListener('click',(e)=>{
        fil.scrollLeft=i *fil.offsetWidth;
        document.querySelector('.indicador .activo').classList.remove('activo');
        e.target.classList.add('activo');
    });
}

const numpag = Math.ceil(peliculas.length /5);
for(let i=0;i<numpag;i++){
    const indic= document.createElement('button');

    if(i===0){
        indic.classList.add('activo');
    }

    document.querySelector('.indicadores').appendChild(indic)
    indic.addEventListener('click',(e)=>{
        fila.scrollLeft=i *fila.offsetWidth;
        document.querySelector('.indicadores .activo').classList.remove('activo');
        e.target.classList.add('activo');
    });
}

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

peli.forEach((pelicula)=>{
    pelicula.addEventListener('mouseenter',(e)=>{
        const elemento=e.currentTarget;
        setTimeout(()=>{
            peli.forEach(pelicula=>pelicula.classList.remove('hover'));
            elemento.classList.add('hover');
        },300);
    });
});
fila.addEventListener('mouseleave',()=>{
    peli.forEach(pelicula=>pelicula.classList.remove('hover'));
});