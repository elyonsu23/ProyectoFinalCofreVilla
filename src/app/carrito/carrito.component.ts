import { Component } from '@angular/core';
import { ProductosService } from '../productos.service';
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {

  constructor( public productosService: ProductosService){ }

  displayedColumns: string[] = ['Nombre','Imagen', 'Precio', 'Cantidad','Subtotal','Eliminar'];
  dataSource = this.productosService.carrito;

  getEliminarItem(item:any){
    this.productosService.eliminarItem(item);
  }

  actualizarTotal(item:any){
    this.productosService.agregarAlCarrito(item)
  }

}
