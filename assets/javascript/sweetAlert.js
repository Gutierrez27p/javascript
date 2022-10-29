// // Falsa publicidad

    Swal.fire({
        title: 'Promo + Regalo',
        html: '<a href="#" class="btn-publi">Comprar ahora</a>',
        icon: undefined,
        footer: "Anuncio",
        width: '300px',
        padding: '1rem',
        background: 'rgb(255 236 211)',
        grow: false,
        backdrop: false,
        timer: 20000,
        timerProgressBar: true,
        toast: false,
        position: 'bottom-end',
        allowOutsideClick: false,
        allowEscapeKey: false,
        stopKeydownPropagation: false,
        showConfirmButton: false,
        showCancelButton: false,
        showCloseButton: true,
        closeButtonArialLabel: 'Cerrar esta alerta',
        imageUrl:'assets/img/oferta.jpg',
        imageWidth: '90%',
        imageAlt: 'Producto en oferta ilimitada'
    });

const eliminarCart = () =>{
    Swal.fire({
        title: '¿Estas seguro?',
        text: "¡No podrás volver atrás!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar!'
        }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
            'Eliminado!',
            'Su producto ha sido eliminado.',
            'Perfecto!'
            )
        }
    });
}

const agregadoCart = () => {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: '¡Se agregó al carrito!',
        showConfirmButton: false,
        timer: 700
    });
}

const compraCart = () => {
    Swal.fire({
        title: ' Messi!',
        text: '¡Gracias por confiar en nosotros!❤',
        imageUrl: 'assets/img/messi.png',
        imageWidth: 220,
        imageAlt: 'Custom image',
    });
}