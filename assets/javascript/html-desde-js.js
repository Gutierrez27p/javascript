/* const tituloPrincipal = document.createElement("h1")
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
} */

const cargaEventos = () => 
{
    let buttons = document.querySelectorAll('.button');
    //console.log('buttons: ', buttons);
    for (const button of buttons) 
    {
        button.addEventListener('click', ()=>{
            const perf = perfumeria.find(perfumes => perfumes.codigo == button.id);
            //console.log('perfumes seleccionados: ', perf);
            if(perf)
            {
                carrito.push(perf);
                updateCarrito(carrito);
            }

        })
    }
}

const cargaProductos = (perfumeria) =>
{
    let conteiner = document.querySelector('#conteiner');
/*     console.log('conteiner: ', conteiner); */
    for (const perfume of perfumeria) 
    {
        let div = document.createElement('div');
        div.setAttribute('class','card');
        div.innerHTML = `
        <img src="${perfume.img}" alt="${perfume.autor}">
        <h3>$${perfume.precio}</h3>
        <h4>${perfume.nombre}</h4>
        <button class="button" id="${perfume.codigo}">Agregar al carrito</button>
        `;
        conteiner.appendChild(div);
    }
    // Eventos
    cargaEventos();
}

cargaProductos(perfumeria);
