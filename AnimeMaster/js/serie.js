const valores = window.location.search
const urlparams = new URLSearchParams(valores) 
var prod = urlparams.get('valor')
const div = document.getElementById('peli')
const div_list = document.getElementById('list')

function cargarSeri(id){
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
        
    fetch("http://localhost:8080/seri", requestOptions)
        .then(response => response.text())
        .then(result => comparar(id,result))
        .catch(error => console.log('error', error));
}
function comparar(id,datos){
    const data= JSON.parse(datos)
    for(const i in data){
        if(data[i].id==id){
            foto=data[i].foto
            titulo=data[i].titulo
            descripcion=data[i].description
            tipo=data[i].tipo
            capitulos=data[i].capitulos
            crearSeri(foto,titulo,descripcion,tipo,capitulos)
            cargarCap(id)
        }
    }
}
function cargarCap(id){
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    
    fetch("http://localhost:8080/link", requestOptions)
        .then(response => response.text())
        .then(result => compararcap(id,result))
        .catch(error => console.log('error', error));
}
function compararcap(id,datos){
    const data= JSON.parse(datos)
    for(const i in data){
        if(data[i].serie_id==id){
            var a =document.createElement("a")
            a.innerText="capitulo "+data[i].cap_id
            a.href= data[i].link
            div_list.appendChild(a)
        }
    }
}

function crearSeri(foto,titulo,descripcion,tipo,capitulos){
    const div_img = document.getElementById('img')
    const div_info = document.getElementById('info')
    var h1 =document.createElement("h1")
    var img =document.createElement("img")
    var h3 =document.createElement("h3")
    var p = document.createElement("p")
    var h32 =document.createElement("h3")
    var p2 = document.createElement("p")

    img.src = foto
    h1.innerHTML=titulo
    div_img.appendChild(h1)
    div_img.appendChild(img)

    h3.innerHTML="Descripcion:"
    div_info.appendChild(h3)
    p.innerHTML=descripcion
    div_info.appendChild(p)
    h32.innerHTML="Genero:"
    div_info.appendChild(h32)
    p2.innerHTML=tipo
    div_info.appendChild(p2)
    
}
cargarSeri(prod)