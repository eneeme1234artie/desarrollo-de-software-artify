
    const inputTarea = document.getElementById("inputTarea");
    const btnAgregar = document.getElementById("btnAgregar");
    const listaTareas = document.getElementById("listaTareas");

    btnAgregar.addEventListener("click", () => {
        const texto = inputTarea.value.trim();//trim() elimina los espacios en blanco al inicio y al final de un texto.
        if (texto === "") return;

        const tarea = document.createElement("div");
        tarea.classList.add("tarea");

        const textoTarea = document.createElement("span");
        textoTarea.textContent = texto;

        const btnCompletar = document.createElement("button");
        btnCompletar.textContent = "✔";

        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "🗑";

        // ➤ Marcar como completada (se pone verde)
        btnCompletar.addEventListener("click", () => {
            tarea.classList.toggle("completada");
        });

        btnEliminar.addEventListener("click", () => {
            listaTareas.removeChild(tarea);
        });

        tarea.appendChild(textoTarea);
        tarea.appendChild(btnCompletar);
        tarea.appendChild(btnEliminar);

        listaTareas.appendChild(tarea);

        inputTarea.value = "";
    });
