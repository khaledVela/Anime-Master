var div= document.getElementById('error')

function cargarusuarios(contra,email){
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
        
    fetch("http://localhost:8080/users", requestOptions)
        .then(response => response.text())
        .then(result => comparar(contra,email,result))
        .catch(error => console.log('error', error));
}

function comparar(contra,email,datos){
    const data= JSON.parse(datos)
    for(const i in data){
        if(data[i].username===email && data[i].password===contra){
            if(data[i].tipousuario==="normal"){
                document.location.href="menu.html";
            }else{
                document.location.href="admin.html";
            }
            break
        }else{
            div.innerHTML="Usuario y contraseña erroneos"
            div.style.display="block"
        }
    }
}

var form = document.getElementById('formulario')
form.addEventListener('submit', function(e){
    e.preventDefault();
    var datos = new FormData(form);
    contra = datos.get('password');
    email = datos.get('username');
    cargarusuarios(contra,email)
})