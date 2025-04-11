// Datos simulados para la galería
const imagenes = [
    { id: 1, src: "assets/img4.jpg", categoria: "Cultivo de setas", titulo: "Setas", descripcion: "Un pequeño cultivo de setas", autor: "Nicolás" },
    { id: 2, src: "assets/img5.jpg", categoria: "Ciudad", titulo: "Ciudad ", descripcion: "En algun parte de la city", autor: "Nicolás" },
    { id: 3, src: "assets/img6.jpg", categoria: "Grafiti", titulo: "Grafiti", descripcion: "Grafiti con enredaderas en las manos", autor: "Nicolás" },
    { id: 4, src: "assets/img7.jpg", categoria: "Naturaleza", titulo: "Bosque", descripcion: "Algun arbol y sus raices", autor: "Nicolás" }
  ];
  
  // Mostrar todas las imágenes al cargar
  document.addEventListener("DOMContentLoaded", () => {
    mostrarImagenes(imagenes);
  });
  
  // Función para mostrar las imágenes en la galería
  function mostrarImagenes(lista) {
    const contenedor = document.getElementById("galeria-container");
    contenedor.innerHTML = "";
    lista.forEach(imagen => {
      const img = document.createElement("img");
      img.src = imagen.src;
      img.alt = imagen.titulo;
      img.classList.add("img-thumbnail");
      img.addEventListener("click", () => mostrarDetalle(imagen));
      contenedor.appendChild(img);
    });
  }
  
  // Función para filtrar imágenes
  function filtrarCategoria(categoria) {
    if (categoria === "Todas") {
      mostrarImagenes(imagenes);
    } else {
      const filtradas = imagenes.filter(img => img.categoria === categoria);
      mostrarImagenes(filtradas);
    }
  }
  
  // Mostrar detalle en el modal
  function mostrarDetalle(imagen) {
    document.getElementById("modal-img").src = imagen.src;
    document.getElementById("modal-titulo").textContent = imagen.titulo;
    document.getElementById("modal-descripcion").textContent = imagen.descripcion;
    document.getElementById("modal-autor").textContent = `Autor: ${imagen.autor}`;
    const modal = new bootstrap.Modal(document.getElementById("imagenModal"));
    modal.show();
  }
  
  // Validación del formulario
  document.getElementById("form-contacto").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();
  
    if (!nombre || !email || !mensaje) {
      alert("Por favor completa todos los campos.");
      return;
    }
  
    if (!email.includes("@")) {
      alert("Por favor ingresa un correo válido.");
      return;
    }
  
    alert("¡Mensaje enviado con éxito!");
    this.reset();
  });
  