function backupCart() 
{
    debugger
    let cart = JSON.parse(localStorage.getItem("cart"))
    let tabla = document.querySelector("tbody")
        cart.forEach(Products => {
            let fila = `<tr>
                            <td>${Products.name}</td>
                            <td>${Products.price}</td>
                        </tr> `
                        fila.innerHTML += fila
        });
}

backupCart();