const carrito = [];

const updateCarrito = (carrito) =>
{

    let cartContenedor = document.querySelector('#cart');

    let contenedor = document.querySelector('#cartContenedor');
    if(contenedor)
    {
        contenedor.parentNode.removeChild(contenedor);
    }
    
    let div = document.createElement('div');
    div.setAttribute('id', 'cartContenedor');
    div.innerHTML += `<h2>Carrito de compras</h2>`;
    for (const perfume of carrito)
    {
        div.innerHTML +=`
            <div class="cart-item">
                <h4>Producto: ${perfume.nombre} </h4>
                <h4>Precio: $${perfume.precio} </h4>
            </div>
        `;
    }
    cartContenedor.appendChild(div);
}
