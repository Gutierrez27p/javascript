const Products = 
[
    {
        id:2101,
        name:'MISS DIOR A.B.',
        price:'$ 30.900',
        description:'Floral',
        brand:'DIOR',
        image:'assets/img/miss-dior.jpg',
    },
    {
        id:2102,
        name:'This Love',
        price:'$ 7.500',
        description:'Frutal',
        brand:'This Love',
        image:'assets/img/this-love-frutal.jpg',
    },
    {
        id:2103,
        name:'GUCCI BLOOM EDP',
        price:'$ 19.750',
        description:'Aromático',
        brand:'Gucci',
        image:'assets/img/gucci-bloom.jpg',
    },
    {
        id:2104,
        name:'Far Away Infinity',
        price:'$ 4.950',
        description:'Oriental',
        brand:'Far Away',
        image:'assets/img/far-way-infinity.jpg',
    },
    {
        id:2105,
        name:'SCANDAL EDP',
        price:'$ 20.050',
        description:'Cítrico',
        brand:'Jean Paul Gaultier',
        image:'assets/img/scandal-jean.jpg',
    },
    {
        id:2106,
        name:'PURE POISON',
        price:'$ 30.900',
        description:'Musk',
        brand:'DIOR',
        image:'assets/img/pure-poison.jpg',
    },
    {
        id:2107,
        name:'Eros Femme',
        price:'$ 21.380',
        description:'Amaderado',
        brand:'Versace',
        image:'assets/img/versace-eros.jpg',
    },
    {
        id:2108,
        name:'BOSS THE SCENT',
        price:'$ 21.250',
        description:'Chipre',
        brand:'Hugo Boss',
        image:'assets/img/perfume1.png',
    },
    {
        id:2109,
        name:'Luna Confinante',
        price:'$ 6.900',
        description:'Fougère',
        brand:'Natura',
        image:'assets/img/luna-confinante.jpg',
    },
    {
        id:2110,
        name:'Be Delicious',
        price:'$ 18.427',
        description:'Verde',
        brand:'DONNA KARAN',
        image:'assets/img/verde.jpg',
    }
]

// Filtro de busqueda de productos



// Agregado de Productos al carrito

const cart = []; //actualizar carrito

const updateCart = (cart) =>
{
    let cartContainer = document.querySelector('#cart');

    //Eliminacion de html por su id (solo cuando existe)

    let container = document.querySelector('#cartContainer');
    if(container)
    {
        container.parentNode.removeChild(container);
    }
    let div = document.createElement('div');
    div.setAttribute('id', 'cartContainer');
    div.innerHTML += `<h2>Carrito de compras</h2>`;
    for(const product of cart)
    {
        div.innerHTML +=`
            <div class="cart-item">
            <h4>Producto: ${product.name} </h4>
            <h4>Precio: ${product.price} </h4>
            <h4>Cantidad: ${product.cantidad} </h4>
            </div>
            `;
    }
    cartContainer.appendChild(div);
}

const loadEvents = () =>
{
    let buttons = document.querySelectorAll('.button');
    for (const button of buttons) 
    {
        button.addEventListener('click', ()=>{
            const prod = cart.find(product => product.id == button.id);
            if(prod)
            {
                // esta en el carrito
                prod.cantidad++;
            }
            else // cargar eventos
            {
                //se agrega al carrito
                const prod = Products.find(product => product.id == button.id);
                if(prod)
                {
                    let newProduct = {
                            id:prod.id,
                            name:prod.name,
                            price:prod.price,
                            description:prod.description,
                            brand:prod.brand,
                            image:prod.image,
                            cantidad: 1
                    }
                    cart.push(newProduct);
                    localStorage.setItem("cart", JSON.stringify(cart))
                }
            }
            updateCart(cart);
        });
    }
}

//Carga de los productos

const loadProducts = (Products) =>  // cargar productos
{
    let container = document.querySelector('#container');
    for (const product of Products) 
    {
        let div = document.createElement('div')
        div.setAttribute('class', 'card');
        div.innerHTML = `
        <img src="${product.image}" alt="${product.description}" width="180" >
        <h3>${product.price}</h3>
        <h4>${product.name} | ${product.description}</h4>
        <button class="button" id="${product.id}">Agregar al carrito</button>
        `;
        container.appendChild(div);
    }

    // Carga de eventos

    loadEvents();
}

// Llamado de los productos

loadProducts(Products);