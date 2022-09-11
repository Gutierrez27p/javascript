//Perfumeria

class perfume {
    constructor(nombre, categoria, autor, precio, disponibilidad){
        this.nombre=nombre
        this.categoria=categoria
        this.autor=autor
        this.precio=precio
        this.disponibilidad=disponibilidad
    }
    stock(){
        let error = "En stock"
        if(this.disponibilidad == false){
            this.disponibilidad = true
        }else{
            console.log(error)
        }
    }
    sinStock(){
        let error = "Sin stock"
        if(this.disponibilidad == true){
            this.disponibilidad = false
        }else{
            console.log(error)
        }
    }
}

const perfumeria = []

let perfume1 = new perfume("MISS DIOR A.B.","Floral","Dior", 30900, true)
let perfume2 = new perfume("This Love | Perfume de mujer","Frutal", "This Love", 7500,false)
let perfume3 = new perfume("GUCCI BLOOM EDP","Aromático","Gucci", 19750,true)
let perfume4 = new perfume("SCANDAL EDP","Cítrico","Jean Paul Gaultier", 20050, true)
let perfume5 = new perfume("Eros Femme","Amaderado","Versace", 21380,true)
let perfume6 = new perfume("Far Away Infinity","Oriental","Far Away", 4950, false)
let perfume7 = new perfume("PURE POISON","Musk","Dior", 30900, true)
let perfume8 = new perfume("BOSS THE SCENT FOR HER","Chipre","Hugo Boss", 21250, false)
let perfume9 = new perfume("Luna Confinante","Fougère","Natura", 6900, false)
let perfume10 = new perfume("Be Delicious","Verde","DONNA KARAN", 18427, true)

// resumido de lineas

perfumeria.push(perfume1,perfume2,perfume3,perfume4,perfume5,perfume6,perfume7,perfume8,perfume9,perfume10)

/* perfumeria.push(perfume1)
perfumeria.push(perfume2)
perfumeria.push(perfume3)
perfumeria.push(perfume4)
perfumeria.push(perfume5)
perfumeria.push(perfume6)
perfumeria.push(perfume7)
perfumeria.push(perfume8)
perfumeria.push(perfume9)
perfumeria.push(perfume10) */

console.log(perfumeria)

function agregarPerfume(){
    let nombrePerfumeNuevo = prompt("Ingrese nombre del perfume")
    let categoriaNuevo = prompt ("Ingrese la categoria")
    let autorNuevo = prompt ("Ingrese nombre del autor")
    let precioNuevo = prompt ("Ingrese precio")
    let disponibilidadNuevo = prompt ("Ingrese stock")
    let perfumeNuevo = new perfume(nombrePerfumeNuevo,categoriaNuevo,autorNuevo,precioNuevo,disponibilidadNuevo)
    perfumeria.push(perfumeNuevo)
}

const disponibles = perfumeria.filter(res=>{
    
    return res.disponibilidad === true ;
})

const precioMenorVeinte = perfumeria.filter(res=>{
    
    return res.precio < 20000 ;
})

const nombreConG = perfumeria.filter(res=>{
    
    if(res.nombre.includes('G')){
        return res.nombre
    }else{
        return undefined
    } 
})

console.log(disponibles)
console.log(precioMenorVeinte)
console.log(nombreConG)