const inputNombre = document.querySelector("#imputNombre")
const inputEmail = document.querySelector("#imputEmail")
const inputComentarios = document.querySelector("#imputComentarios")
const btnEnviar = document.querySelector("#btnEnviar")

function guardarDatos()
{   localStorage.setItem("nombre",inputNombre.value)
    localStorage.setItem("email",inputEmail.value)
    localStorage.setItem("comentarios",inputComentarios.value)
}

btnEnviar.addEventListener("click", guardarDatos)