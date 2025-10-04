// 1. Localizar elementos
const porId = document.getElementById("titulo-principal");
const porTag = document.getElementsByTagName("p");
const porClase = document.getElementsByClassName("parrafo");
const porQuery = document.querySelector(".parrafo");
const porQueryAll = document.querySelectorAll(".parrafo");

console.log("getElementById:", porId);
console.log("getElementsByTagName:", porTag);
console.log("getElementsByClassName:", porClase);
console.log("querySelector:", porQuery);
console.log("querySelectorAll:", porQueryAll);

// 2. Trabajar con listas
const listaParrafos = Array.from(porClase);
listaParrafos.forEach(p => console.log("Párrafo:", p.textContent));

// 3a. Acción de clic sobre div
const zonaClick = document.getElementById("zona-click");
zonaClick.addEventListener("click", () => {
  alert("¡Hola usuario!");
  console.log("Ancho del div:", zonaClick.offsetWidth + "px");
});

// 3b. Validar campo password
const campoPassword = document.getElementById("campo-password");
campoPassword.addEventListener("input", () => {
  const valor = campoPassword.value;
  if (valor.length >= 8) {
    console.log("Contraseña válida");
  } else {
    console.log("Contraseña demasiado corta");
  }
});

// 4. Procesar formulario
const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const datos = new FormData(formulario);
  const objeto = Object.fromEntries(datos);
  console.log("Datos del formulario:", objeto);
});

// 5a. Crear título con clases
const nuevoTitulo = document.createElement("h3");
nuevoTitulo.textContent = "Título dinámico";
nuevoTitulo.classList.add("titulo", "importante");
document.getElementById("contenedor-titulo").appendChild(nuevoTitulo);

// 5b. Crear imagen
const imagen = document.createElement("img");
imagen.src = "https://via.placeholder.com/150";
imagen.alt = "Imagen de ejemplo";
imagen.width = 150;
document.getElementById("contenedor-imagen").appendChild(imagen);

// 6a. Modificar clases
nuevoTitulo.classList.remove("importante");
nuevoTitulo.classList.add("destacado");

// 6b. Cambiar estilos
nuevoTitulo.style.color = "green";
nuevoTitulo.style.textTransform = "uppercase";

// 7. Eliminar elemento
const elementoRemover = document.getElementById("elemento-a-remover");
elementoRemover.remove();