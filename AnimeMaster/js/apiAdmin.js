var form1 = document.getElementById('peli')
form1.addEventListener('submit', function(e){
    e.preventDefault();
    var datos = new FormData(form1);
    foto = datos.get('foto');
    titulo = datos.get('titulo');
    descripcion = datos.get('descripcion');
    tipo= datos.get("tipo");
    link= datos.get("link");
    crearPeli(foto,titulo,descripcion,tipo,link)
})

// document.getElementById('POST').onclick= function(){
//     var datos = new FormData(form1);
//     foto = datos.get('foto');
//     titulo = datos.get('titulo');
//     descripcion = datos.get('descripcion');
//     tipo= datos.get("tipo");
//     link= datos.get("link");
//     crearPeli(foto,titulo,descripcion,tipo,link)
// }

function crearPeli(foto,titulo,descripcion,tipo,link){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
    "foto": foto,
    "title": titulo,
    "description": descripcion,
    "tipopeli": tipo,
    "link": link
    });

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch("http://localhost:8080/peli", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

var form2 = document.getElementById('serie')
form2.addEventListener('submit', function(e){
    e.preventDefault();
    var datos = new FormData(form2);
    foto = datos.get('foto');
    titulo = datos.get('titulo');
    descripcion = datos.get('descripcion');
    tipo= datos.get("tipo");
    capitulos= datos.get("capitulos");
    crearSeri(foto,titulo,descripcion,tipo,capitulos)
})

function crearSeri(foto,titulo,descripcion,tipo,capitulos){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
    "titulo": titulo,
    "foto": foto,
    "description": descripcion,
    "capitulos": capitulos,
    "tipo": tipo
    });

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch("http://localhost:8080/seri", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}