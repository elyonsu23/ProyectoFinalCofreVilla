import { Component } from '@angular/core';
import { ProductosService } from '../productos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent {

  producto:any

  constructor(private route: ActivatedRoute, public productoservice: ProductosService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.producto = this.productoservice.productos.find(producto => producto.id === id)
    })
  }
}
