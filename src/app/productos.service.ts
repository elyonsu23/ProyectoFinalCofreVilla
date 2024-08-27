import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor() { }

  productos:any []=[
    //zapatillas
    {
      nombre: "NIKE TEAM HUSTLE D10 “BLACK/WHITE”",
      precio: 36900,
      imagen: "../../assets/Productos/Zapatillas/Zapatillas-Nike-BlackWhite.jpeg",
      favorito: false,
      destacado: "",
      categoria: "Calzado",
      id: 1,
      cantidad: 1,
      marca: "Nike"
    },
    {
      nombre: "NIKE GIANNIS INMORTALITY 2 “OREO”",
      precio: 134900,
      imagen: "../../assets/Productos/Zapatillas/Zapatillas-Nike-Oreo.jpg",
      favorito: false,
      destacado: "",
      categoria: "Calzado",
      id: 2,
      cantidad: 1,
      marca: "Nike"
    },
    {
      nombre: "NIKE GIANNIS INMORTALITY 2 “HOLOGRAPHIC SWOOSH”",
      precio: 134900,
      imagen: "../../assets/Productos/Zapatillas/Zapatillas-Nike-Holographic.jpeg",
      favorito: false,
      destacado: "",
      categoria: "Calzado",
      id: 3,
      cantidad: 1,
      marca: "Nike"
    },
    {
      nombre: "JORDAN LUKA 1 “NEO TURQUOISE”",
      precio: 139990,
      imagen: "../../assets/Productos/Zapatillas/Zapatillas-Jordan-Luka1.jpeg",
      favorito: false,
      destacado: "",
      categoria: "Calzado",
      id: 4,
      cantidad: 1,
      marca: "Jordan"
    },
    {
      nombre: "UNDER ARMOUR FLOW FUTR X 2 “LIME SURGE”",
      precio: 109900,
      imagen: "../../assets/Productos/Zapatillas/Zapatillas-UnderArmour-LimeSurge.jpeg",
      favorito: false,
      destacado: "",
      categoria: "Calzado",
      id: 5,
      cantidad: 1,
      marca: "Under Armour"
    },
    {
      nombre: "ADIDAS HARDEN STEPBACK 3 “SKY”",
      precio: 109990,
      imagen: "../../assets/Productos/Zapatillas/Zapatillas-Adidas-HardenSky.png",
      favorito: false,
      destacado: "",
      categoria: "Calzado",
      id: 6,
      cantidad: 1,
      marca: "Adidas"
    },
    {
      nombre: "UNDER ARMOUR CURRY SPLASH 2 “SHOCK”",
      precio: 119900,
      imagen: "../../assets/Productos/Zapatillas/Zapatillas-UnderArmour-Shock.jpeg",
      favorito: false,
      destacado: "",
      categoria: "Calzado",
      id: 7,
      cantidad: 1,
      marca: "Under Armour"
    },
    {
      nombre: "NIKE LEBRON 20 “THE DEBUT”",
      precio: 139990,
      imagen: "../../assets/Productos/Zapatillas/Zapatillas-Nike-Lebron20.jpeg",
      favorito: false,
      destacado: "",
      categoria: "Calzado",
      id: 8,
      cantidad: 1,
      marca: "Nike"
    },
    {
      nombre: "ADIDAS HARDEN VOL.4 “SU CASA”",
      precio: 129900,
      imagen: "../../assets/Productos/Zapatillas/Zapatillas-Adidas-Harden4.jpeg",
      favorito: false,
      destacado: "",
      categoria: "Calzado",
      id: 9,
      cantidad: 1,
      marca: "Adidas"
    },
    {
      nombre: "NIKE PRECISION 6 “MIDNIGHT NAVY”",
      precio: 114990,
      imagen: "../../assets/Productos/Zapatillas/Zapatillas-Nike-Precision6.jpeg",
      favorito: false,
      destacado: "",
      categoria: "Calzado",
      id: 10,
      cantidad: 1,
      marca: "Nike"
    },
    //indumentaria
    {
      nombre: "MANGA DE PIERNA COMPRESS BLANCA",
      precio: 12900,
      imagen: "../../assets/Productos/Indumentaria/Indumentaria-MangaPierna-Blanca.png",
      favorito: false,
      destacado: "",
      categoria: "Indumentaria",
      id: 11,
      cantidad: 1
    },
    {
      nombre: "Nike Elite Crew Socks “Black Mamba”",
      precio: 13500,
      imagen: "../../assets/Productos/Indumentaria/Indumentaria-Medias-Black Mamba.jpg",
      favorito: false,
      destacado: "",
      categoria: "Indumentaria",
      id: 12,
      cantidad: 1,
      marca: "Nike"
    },
    {
      nombre: "Nike Elite Crew Socks “Team USA”",
      precio: 13490,
      imagen: "../../assets/Productos/Indumentaria/Indumentaria-Medias-TeamUSA.jpg",
      favorito: false,
      destacado: "",
      categoria: "Indumentaria",
      id: 13,
      cantidad: 1,
      marca: "Nike"
    },
    {
      nombre: "MUSCULOSA COMPRESS ETNIA32",
      precio: 16900,
      imagen: "../../assets/Productos/Indumentaria/Indumentaria-Musculosa-Etnia32.png",
      favorito: false,
      destacado: "",
      categoria: "Indumentaria",
      id: 14,
      cantidad: 1,
      marca: "Etnia"
    },
    {
      nombre: "CALZA 3/4 COMPRESS ETNIA32 BLANCA",
      precio: 18500,
      imagen: "../../assets/Productos/Indumentaria/Indumentaria-Calza-Blanca.png",
      favorito: false,
      destacado: "",
      categoria: "Indumentaria",
      id: 15,
      cantidad: 1,
      marca: "Etnia"
    },
    {
      nombre: "REMERA COMPRESS NEGRA",
      precio: 19500,
      imagen: "../../assets/Productos/Indumentaria/Indumentaria-Remera-Negra.png",
      favorito: false,
      destacado: "",
      categoria: "Indumentaria",
      id: 16,
      cantidad: 1
    },
    {
      nombre: "Short oficial de juego Argentina Kelme visitante",
      precio: 18790,
      imagen: "../../assets/Productos/Indumentaria/Indumentaria-Short-ArgentinaVisitante.png",
      favorito: false,
      destacado: "",
      categoria: "Indumentaria",
      id: 17,
      cantidad: 1
    },
    {
      nombre: "Camiseta oficial de juego Argentina Kelme visitante",
      precio: 23990,
      imagen: "../../assets/Productos/Indumentaria/Indumentaria-Camiseta-ArgentinaVisitante.jpg",
      favorito: false,
      destacado: "",
      categoria: "Indumentaria",
      id: 18,
      cantidad: 1
    },
    {
      nombre: "CALZA 3/4 COMPRESS ETNIA32 NEGRA",
      precio: 18500,
      imagen: "../../assets/Productos/Indumentaria/Indumentaria-Calza-Negra.jpg",
      favorito: false,
      destacado: "",
      categoria: "Indumentaria",
      id: 19,
      cantidad: 1
    },
    {
      nombre: "CALZA CORTA TECHWEAR ETNIA32",
      precio: 15900,
      imagen: "../../assets/Productos/Indumentaria/Indumentaria-Calza-Corta.jpg",
      favorito: false,
      destacado: "",
      categoria: "Indumentaria",
      id: 20,
      cantidad: 1
    },
    //pelotas
    {
      nombre: "PELOTA DE BASQUET SPALDING SILVER SERIES NUMERO 7 NARANJA",
      precio: 24800,
      imagen: "../../assets/Productos/Pelotas/Pelota-Spalding-Numero 7.jpg",
      favorito: false,
      destacado: "",
      categoria: "Pelota",
      id: 21,
      cantidad: 1
    },
    {
      nombre: "PELOTA BASQUET EZ LIFE ALL COURT 1000 NUMERO 5 NARANJA",
      precio: 15330,
      imagen: "../../assets/Productos/Pelotas/Pelota-Ez life-Numero 5.jpg",
      favorito: false,
      destacado: "",
      categoria: "Pelota",
      id: 22,
      cantidad: 1
    },
    {
      nombre: "PELOTA DE BASQUET SPALDING STREET PHANTOM NUMERO 7 NEGRA",
      precio: 35000,
      imagen: "../../assets/Productos/Pelotas/Pelota-Spalding-Phantom.jpg",
      favorito: false,
      destacado: "",
      categoria: "Pelota",
      id: 23,
      cantidad: 1
    },
    {
      nombre: "PELOTA DE BASQUET SPALDING VARSITY NUMERO 6 VIOLETA",
      precio: 27600,
      imagen: "../../assets/Productos/Pelotas/Pelota-Spalding-Violeta.jpg",
      favorito: false,
      destacado: "",
      categoria: "Pelota",
      id: 24,
      cantidad: 1
    },
    {
      nombre: "PELOTA DE BASQUET WILSON NBA DRV NUMERO 7 VERDE",
      precio: 27199,
      imagen: "../../assets/Productos/Pelotas/Pelota-Wilson-Verde.jpg",
      favorito: false,
      destacado: "",
      categoria: "Pelota",
      id: 25,
      cantidad: 1
    },
    {
      nombre: "PELOTA DE BASQUET SPALDING VARSITY NUMERO 7 AZUL",
      precio: 27600,
      imagen: "../../assets/Productos/Pelotas/Pelota-Spalding-Azul.jpg",
      favorito: false,
      destacado: "",
      categoria: "Pelota",
      id: 26,
      cantidad: 1
    },
    {
      nombre: "PELOTA DE BASQUET SPALDING HIGHLIGHT NUMERO 7 NEGRA",
      precio: 31800,
      imagen: "../../assets/Productos/Pelotas/Pelota-Spalding-Highlight.jpg",
      favorito: false,
      destacado: "",
      categoria: "Pelota",
      id: 27,
      cantidad: 1
    },
    {
      nombre: "PELOTA DE BASQUET NASSAU APOLLO NUMERO 5 NEGRA",
      precio: 15800,
      imagen: "../../assets/Productos/Pelotas/Pelota-Apollo-Negra.jpg",
      favorito: false,
      destacado: "",
      categoria: "Pelota",
      id: 28,
      cantidad: 1
    },
    {
      nombre: "PELOTA DE BASQUET EZ LIFE NUMERO 5 AZUL",
      precio: 16170,
      imagen: "../../assets/Productos/Pelotas/Pelota-Ez life-Azul.jpg",
      favorito: false,
      destacado: "",
      categoria: "Pelota",
      id: 29,
      cantidad: 1
    },
    {
      nombre: "PELOTA DE BASQUET NIKE PLAYGROUND NEGRA",
      precio: 20689,
      imagen: "../../assets/Productos/Pelotas/Pelota-Nike-Negra.jpg",
      favorito: false,
      destacado: "",
      categoria: "Pelota",
      id: 30,
      cantidad: 1
    },
  ]
    //Metodo para obtener cursos favoritos
    // cursosFavoritos: any[] = [];
    // getCursosFavoritos(){
    //   this.cursosFavoritos = this.cursos.filter(curso => curso.favorito === true)
    // }

    //Metodo para contar cursos favoritos
    // cantidadCursosFavoritos: number = 0;
    // contarCursosFavoritos(){
    //   this.cantidadCursosFavoritos = this.cursos.filter(curso => curso.favorito === true).length    
    // }
  
    //metodo para agregar o actualizar un elemento en el carrito
    // agregarAlCarrito(item: any){
    //   const index = this.carrito.findIndex((element) => element.nombre === item.nombre);

    //   if( index !== -1) {
    //     this.carrito[index].cantidad = item.cantidad;
    //   }else {
    //     const elemento = {
    //       ...item
    //     };
    //     this.carrito.push(elemento);
    //   }
    //   this.cantItemsCarrito=this.agregarAlCarrito.length
    // //calculando el total
    //  this.carrito.forEach((element) => {
    //   element.subtotal = element.precio * element.cantidad;
    //   this.total+=element.subtotal
    //   this.total = +this.total.toFixed(2);
    // });

    // }
    vistaCarrito:boolean=false;
    carrito: any [] = [];
    cantItemsCarrito:number=0
    total:number=0
    calcularTotal(){
      this.total=0;
      this.carrito.forEach((element) => {
        element.subtotal = element.precio * element.cantidad;
        this.total += element.subtotal
        this.total = +this.total.toFixed(2);
      });
    }
//metodo para agregar o actualizar un elemento en el carrito
    agregarAlCarrito(item: any){
      const index = this.carrito.findIndex((element) => element.nombre === item.nombre);

      if( index !== -1) {
        this.carrito[index].cantidad = item.cantidad;//agregar cantidad como propiedad
      }else {
      const   elemento = {
          ...item
        };
        this.carrito.push(elemento);
      }
      this.cantItemsCarrito=this.agregarAlCarrito.length
    //calculando el total
    this.calcularTotal()

    if (this.carrito.length>0){
      this.vistaCarrito = true;
    }else{
      this.vistaCarrito = false;
    }
    }
    
    eliminarItem(item:any){
      const index = this.carrito.indexOf(item);
      if (index !== -1) {
        this.carrito.splice(index, 1);
      }
      this.calcularTotal()
      console.log(this.carrito)

      if (this.carrito.length>0){
        this.vistaCarrito = true;
      }else{
        this.vistaCarrito = false;
      }
    }

    productosFavoritos: any[] = [];
    obtenerProductosFavoritos(){
      this.productosFavoritos = this.productos.filter(producto => producto.favorito === true)
    }

    //ngmodelchange para actualizar el carro en el componente carrito

  vistaProductos:boolean=true;
  vistaFiltrada:boolean=false;
 

  productosFiltrados: any[]=[]; //arreglo que guarda los cursos filtrados
  categorias: string []=[]; //Arreglo para almacenar los niveles seleccionados
  //Funcion para aplicar los filtros
  aplicarFiltros(categoria: string){
    // Verifica si el nivel ya està en el arreglo de niveles seleccionados
    if(this.categorias.includes(categoria)){
      //si ya esta en el arreglo, obten su indice
      const index = this.categorias.indexOf(categoria);
      //Verifica si se encontro el nivel en el arreglo
      if (index > -1){
        //Si se encontro, quita el nivel del arreglo utilizando splice
        this.categorias.splice(index, 1);
      }
    } else {
      //Si el nivel no esta en el arreglo, agregalo al arreglo
      this.categorias.push(categoria)
    }
  // Filtra los cursos segun los niveles seleccionados
  this.productosFiltrados = this.productos.filter(producto => this.categorias.includes(producto.categoria))

  
   if (this.productosFiltrados.length>0){
     this.vistaFiltrada = true;
     this.vistaProductos = false;
   }else{
     this.vistaFiltrada = false;
     this.vistaProductos = true;
   }
  
  
  
  
  
  
  }
}
