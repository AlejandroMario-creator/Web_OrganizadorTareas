const inputTarea = document.getElementById("inputTarea");
const btnAgregar = document.getElementById("btnAgregar");
const listaTareas = document.getElementById("listaTareas");

btnAgregar.addEventListener("click",function(){
    const textoTarea = inputTarea.value;

    if (textoTarea !==""){
        const nuevaTarea = document.createElement("li");
        nuevaTarea.textContent = textoTarea + "";

        const btnEliminar = document.createElement("button")
        btnEliminar.textContent = "Eliminar"
        btnEliminar.addEventListener("click", function(){
            nuevaTarea.remove();
        })

        nuevaTarea.appendChild(btnEliminar);

        listaTareas.appendChild(nuevaTarea)

        inputTarea.value = "";
    }
});