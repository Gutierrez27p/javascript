let cart = JSON.parse(localStorage.getItem("cart")) || [];

const modificarCarrito = () => {

    // verCarrito.addEventListener("click", () => {
    carritoContainer.innerHTML = "";
    carritoContainer.style.display = "flex";
    const carritoSup = document.createElement("div");
    carritoSup.className = "carrito-sup"
    carritoSup.innerHTML =`
    <h1 class="carritoTitle">Carrito de compras</h1>
    `;
    carritoContainer.append(carritoSup);

    const carritoButton = document.createElement("h1");
    carritoButton.innerText = "x";
    carritoButton.className = "carrito-button";

    carritoButton.addEventListener("click", () => {
        carritoContainer.style.display = "none";
    })

    carritoSup.append(carritoButton);

    cart.forEach((product) => {

    let carritoContent = document.createElement("div")
    carritoContent.className = "cart-sup"
    carritoContent.innerHTML = `
                    <h4><img src="${product.image}"></h4>
                    <h4>ID: ${product.id}</h4>
                    <h4>Producto: ${product.name} </h4>
                    <h4>Precio: $ ${product.price} </h4>
                    <span class="restar"> ➖ </span>
                    <h4>Cantidad: ${product.cantidad} </h4>
                    <span class="sumar"> ➕ </span>
                    <h4>Total: $ ${product.cantidad * product.price} </h4>
                    <span class="delete-product"> ❌ </span>
    `;

    carritoContainer.append(carritoContent);

    let restar = carritoContent.querySelector(".restar")
    restar.addEventListener("click", () => {
        if(product.cantidad !== 1) {
        product.cantidad--;
    }
    saveLocal();
    modificarCarrito();
    });

    let sumar = carritoContent.querySelector(".sumar")
    sumar.addEventListener("click", () => {
        product.cantidad++;
        saveLocal();
        modificarCarrito();
    });

// Evento eliminar

let eliminar = carritoContent.querySelector(".delete-product");

eliminar.addEventListener("click", () =>{
    eliminarProducto(product.id);
})
    // let eliminar = document.createElement("span");
    // eliminar.innerText = "❌";
    // eliminar.className = "delete-product";
    // carritoContent.append(eliminar);

    // eliminar.addEventListener("click", eliminarProducto);
    });

    let total = cart.reduce((acumulador, prod) => acumulador + parseFloat(prod.price * prod.cantidad), 0);

    const totalCompra = document.createElement("div")
    totalCompra.className = "total-content";
    totalCompra.innerHTML = `Total a pagar: ${total}`;

    carritoContainer.append(totalCompra);
};

// Eliminar del carrito

verCarrito.addEventListener("click", modificarCarrito);

const eliminarProducto = (id) => {
    const foundId = cart.find((element) => element.id === id);
    cart = cart.filter((carritoId) => {
        return carritoId !== foundId;
    });
    carritoCantidad();
    saveLocal();
    modificarCarrito();
};

const carritoCantidad = () => {
    cantidadCarrito.style.display = "block";

    const cartLength = cart.length;
    localStorage.setItem("cartLength", JSON.stringify(cartLength))

    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("cartLength"));
};

carritoCantidad();
