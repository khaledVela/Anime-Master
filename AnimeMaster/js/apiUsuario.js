var form = document.getElementById('formulario')
var div= document.getElementById('error')

form.addEventListener('submit', function(e){
    e.preventDefault();
    var datos = new FormData(form);
    nombre = datos.get('fullname');
    contra = datos.get('password');
    let email = datos.get('username');
    let busc = "@"
    if(nombre==="" || contra=="" || email==""){
        div.innerHTML="Completa los datos correctamente"
        div.style.display="block"
    }else if(email.indexOf(busc)==-1){
        div.innerHTML="Tiene que introducir un correo"
        div.style.display="block"
    }else{
        crearUsuarios(nombre,contra,email)
    }
})

function crearUsuarios(nombre,contra,email){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
    "username": email,
    "password": contra,
    "fullname": nombre,
    "tipousuario": "normal"
    });

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch("http://localhost:8080/users/", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}