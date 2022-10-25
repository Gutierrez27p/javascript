const cartCompras = JSON.parse(localStorage.getItem('cart')) || [];

function backupCart() 
{
    let tabla = document.querySelector("tbody")
        cart.forEach(Products => {
            let fila = `<tr>
                            <td>${Products.id}</td>
                            <td>${Products.name}</td>
                            <td>${Products.price}</td>
                            <td>${Products.cantidad}</td>
                        </tr>`
                        tabla.innerHTML += fila
        });
}

backupCart();

const deletItem = (id) => {
    let result = cart.filter(perf => perf.id != id)
    backupCart(result)
}




















/* const cart= JSON.parse(localStorage.getItem(cart)) || [] */
/* 
const cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartDiv = document.querySelector("#cartDiv")

function backupCart() 
{
    cartDiv.innerHTML = cart.map(Products => `<tr>
                                                <td>${Products.name}</td>
                                                <td>${Products.price}</td>
                                            </tr>`)
}

backupCart(); */

