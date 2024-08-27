import { Component } from '@angular/core';

import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent {
  constructor( public productosService: ProductosService){ }
  
  AgregarFavorito(producto:any) {
    producto.favorito= !producto.favorito;
    this.productosService.obtenerProductosFavoritos();
  }

  getElementosCarrito(item:any){
    this.productosService.agregarAlCarrito(item);
    console.log(this.productosService.carrito)
  }
}
