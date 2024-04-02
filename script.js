

//MENU HAMBURGUESA

let menuVisible = false;

function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
  
    document.getElementById("nav").classList = "";
    menuVisible = false;
}



// VALIDACION DE FORMULARIO


const datos= {
    nombre: '',
    email: '',
    mensaje: '',
    telefono: '',
}


const email= document.querySelector('#email') 
const mensaje= document.querySelector('#mensaje')
const nombre= document.querySelector('#nombre')
const telefono= document.querySelector('#telefono')
const formulario=document.querySelector(".formulario")

nombre.addEventListener('input',leerTexto)
email.addEventListener('input',leerTexto)
mensaje.addEventListener('input',leerTexto)
telefono.addEventListener('input',leerTexto)



formulario.addEventListener('submit', function(e){
    e.preventDefault();

    //Comprobar que no haya campos en datos vacíos
    const{nombre,email,mensaje}=datos;

    if(nombre===""||email===""||mensaje===""){
        //Si está vacío algún campo mostrar error
        mostrarMensaje("error", "Todos los campos son obligatorios")
        return;
    }
  

     //Si todo está correcto enviar y mostrar mensaje de enviado
    console.log("Todo bien")
    mostrarMensaje("correct","Mensaje enviado correctamente")
   
})

function leerTexto(e){
    
    datos[e.target.id]=e.target.value;
    console.log(datos)
    
}



function mostrarMensaje(tipo, mensaje){
    const alerta=document.createElement('p')
    alerta.textContent= mensaje
    alerta.classList.add(tipo);
    formulario.appendChild(alerta)

    setTimeout(()=>{
        alerta.remove();
    },2000)

    

}




//PROYECTOS JASON


const galeria = document.getElementById("galeria");


//1

const requestURL = './jason.json';
  

//2
  const request = new XMLHttpRequest(); 

//3

  request.open("GET", requestURL); 


  //4

  request.responseType = "json";
  request.send();


  //5

  request.onload = function () {
    const proyectos = request.response;
    verproyectos(proyectos);
  };


//CREACION DE LOS PROYECTOS



function verproyectos(jsonObj) {
    const objetos = jsonObj["proyects"];
  
    for (var i = 0; i < objetos.length; i++) {
      
      
      const proyecto = document.createElement("div");
      proyecto.className="proyecto";
      const imagen = document.createElement("img");
      const overlay = document.createElement("div");
      overlay.className="overlay";
      const textoEnlace =document.createElement("a");
      textoEnlace.className= "enlaceGit"
      const myh3 = document.createElement("h3");
      const myPara1 = document.createElement("p");
      
      
  
      imagen.src =  objetos[i].imagen;
      textoEnlace.href = objetos[i].enlace;
      myh3.textContent = objetos[i].name;
      myPara1.textContent = objetos[i].contenido;
      
  
      textoEnlace.appendChild(myPara1);
      textoEnlace.appendChild(myh3);
      overlay.appendChild(textoEnlace);
      proyecto.appendChild(imagen);
      proyecto.appendChild(overlay);
     
      
    
  
      galeria.appendChild(proyecto);
    }
  }











//Funcion que aplica las animaciones de las habilidades
// function efectoHabilidades(){
//     var skills = document.getElementById("skills");
//     var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
//     if(distancia_skills >= 300){
//         let habilidades = document.getElementsByClassName("progreso");
//         habilidades[0].classList.add("javascript");
//         habilidades[1].classList.add("htmlcss");
//         habilidades[2].classList.add("photoshop");
//         habilidades[3].classList.add("wordpress");
//         habilidades[4].classList.add("drupal");
//         habilidades[5].classList.add("comunicacion");
//         habilidades[6].classList.add("trabajo");
//         habilidades[7].classList.add("creatividad");
//         habilidades[8].classList.add("dedicacion");
//         habilidades[9].classList.add("proyect");
//     }
// }


// //detecto el scrolling para aplicar la animacion de la barra de habilidades
// window.onscroll = function(){
//     efectoHabilidades();
// } 