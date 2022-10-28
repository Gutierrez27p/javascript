const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const carritoContainer = document.getElementById("carritoContainer");
const cantidadCarrito = document.getElementById("cantidadCarrito");

Products.forEach((product) => {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
                <img src="${product.image}" alt="${product.description}" width="180" >
                <h3 class="price"> $ ${product.price}</h3>
                <h4 class="name">${product.name} | ${product.description}</h4>
    `;
    shopContent.append(content);

    let comprar = document.createElement("button");
    comprar.innerText = "Agregar al carrito";
    comprar.className = "comprar";

    content.append(comprar);

    comprar.addEventListener("click", () =>{

    const repeat = cart.some((repeatProduct) => repeatProduct.id === product.id);

    if (repeat){
        cart.map((prod) => {
            if(prod.id === product.id){
                prod.cantidad++;
            }
        });
    } else {
        cart.push({
                id:product.id,
                name:product.name,
                price:product.price,
                description:product.description,
                brand:product.brand,
                image:product.image,
                cantidad:product.cantidad,
        });
        agregadoCart();
        carritoCantidad();
        saveLocal();
    }
    });
}); 

const saveLocal = () =>{
    localStorage.setItem("cart", JSON.stringify(cart));
};
