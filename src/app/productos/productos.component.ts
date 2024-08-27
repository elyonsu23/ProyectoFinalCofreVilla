import { Component } from '@angular/core';

import { ProductosService } from '../productos.service';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  constructor( public productosService: ProductosService){ }

  // AgregarFavorito(curso:any) {
  //   curso.favorito=!curso.favorito;
  //   this.productoservice.contarCursosFavoritos();
  //   this.productosService.getCursosFavoritos();
  // }

  AgregarFavorito(producto:any) {
    producto.favorito= !producto.favorito;
    this.productosService.obtenerProductosFavoritos();
  }

  getElementosCarrito(item:any){
    this.productosService.agregarAlCarrito(item);
    console.log(this.productosService.carrito)
  }

  filtros(categoria:any){
    this.productosService.aplicarFiltros(categoria);
  }

}
