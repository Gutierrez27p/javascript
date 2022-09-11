const tituloPrincipal = document.createElement("h1")
const subtitulo = document.createElement("h2")

function crearElementoHTML(){
    tituloPrincipal.id = "tituloHTML"
    tituloPrincipal.innerText = "Productos perfumeria"
    tituloPrincipal.className = "text-black"
    document.body.append(tituloPrincipal)
}

function crearSubTiutloHTML (){
    subtitulo.id = "subtituloHTML"
    subtitulo.innerText = "Precios"
    subtitulo.className = "text-black"
    document.body.append (subtitulo)
}