let contenedor = document.querySelector("#contenedor");
let subtitulo = document.createElement("h3");
subtitulo.innerText = "Usuario";

let imagen = document.createElement("img");
imagen.src = "assets/img/user.png";
imagen.width = "100";
imagen.alt = "Imagen de usuario";
/*contenedor.appendChild(subtitulo);
contenedor.appendChild(imagen);*/
contenedor.append(subtitulo, imagen);

const usuario = {
  nombre: "Lenin",
  apellido: "Masapanta",
  user: "lenyn",
  descripcion: "Estudiante de Javascript",
  imagen: "assets/img/user.png",
  correo: "lennyn@epn.edu.ec",
};
const crearTarjeta = () => {
  //document.querySelector("#contenedor_tarjeta").innerHTML = "";

  let columna_tarjeta = document.createElement("div");
  columna_tarjeta.className = "col";

  let tarjeta_usuario = `<div class="card" style="width: 18rem;">
<img src="${usuario.imagen}" 
class="card-img-top pt-2"
    alt="${usuario.nombre}"
  />
  <div class="card-body">
    <h5 class="card-title">${usuario.nombre} ${usuario.apellido}</h5>
    <p class="card-text">
      ${usuario.descripcion}
    </p>
    <p class="text-muted">
  ${usuario.correo}
    </p>
    <button class="btn btn-primary" onclick="eventoClick(event)">Ver perfil</button>
  </div>
  </div>`;
  columna_tarjeta.innerHTML = tarjeta_usuario;
  document.querySelector("#contenedor_tarjeta").append(columna_tarjeta);
};

const modificarUsuario = (event) => {
  console.log(event);
  event.preventDefault();

  usuario.nombre = document.querySelector("#nombre").value;
  usuario.apellido = document.querySelector("#apellido").value;
  usuario.usuario = document.querySelector("#usuario").value;
  usuario.correo = document.querySelector("#email").value;

  crearTarjeta();
  limpiarFormulario();
};

const limpiarFormulario = () => {
    document.getElementById("formulario").reset();
  };
  
  document
    .getElementById("formulario")
    .addEventListener("submit", modificarUsuario);
  
  crearTarjeta();
