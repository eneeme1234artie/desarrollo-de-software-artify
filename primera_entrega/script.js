function cambiarTexto() {
  const texto = document.getElementById("verMas");
  const boton = document.getElementById("botonNombre");

  if (texto.innerText === "Nicolas Melendez") {
    texto.innerText = "Tengo 27 años y soy de Cali";
    boton.innerText = "Ocultar información";
  } else {
    texto.innerText = "Nicolas Melendez";
    boton.innerText = "Saber más";
  }
}

document.getElementById("botonNombre").addEventListener("click", cambiarTexto);
// Cuando el mouse pasa por encima
    tecnologias.addEventListener("mouseover", () => {
      tecnologias.style.backgroundColor = "#4caf50";
      
    });
    
    tecnologias.addEventListener("mouseout", () => {
        tecnologias.style.backgroundColor = ""; // Vuelve al color original (CSS)
    });

function mostrarAlerta() {
      alert("HTML\nPHP\nCSS\nJAVASCRIPT\nPYTHON");
    }

