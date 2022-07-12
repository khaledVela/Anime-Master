const valores = window.location.search
const urlparams = new URLSearchParams(valores) 
var prod = urlparams.get('valor')
const div = document.getElementById('peli')

function cargarPeli(id){
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
        
    fetch("http://localhost:8080/peli", requestOptions)
        .then(response => response.text())
        .then(result => comparar(id,result))
        .catch(error => console.log('error', error));
}
function comparar(id,datos){
    const data= JSON.parse(datos)
    for(const i in data){
        if(data[i].id==id){
            foto=data[i].foto
            titulo=data[i].title
            descripcion=data[i].description
            tipopeli=data[i].tipopeli
            link=data[i].link

            crarPeli(foto,titulo,descripcion,tipopeli,link)
        }
    }
}
function crarPeli(foto,titulo,descripcion,tipopeli,link){
    const div_img = document.getElementById('img')
    const div_info = document.getElementById('info')
    var h1 =document.createElement("h1")
    var img =document.createElement("img")
    var h3 =document.createElement("h3")
    var p = document.createElement("p")
    var h32 =document.createElement("h3")
    var p2 = document.createElement("p")
    var ifram = document.createElement("iframe")
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
    p2.innerHTML=tipopeli
    div_info.appendChild(p2)
    ifram.src=link
    if(screen.width>850){
        ifram.width="560"
        ifram.height="315"
    }else if(screen.width>550){
        ifram.width="470"
        ifram.height="300"
    }else{
        ifram.width="230"
        ifram.height="157"
    }
    div_info.appendChild(ifram)
}
cargarPeli(prod)