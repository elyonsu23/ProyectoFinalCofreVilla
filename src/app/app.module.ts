import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { ContactoComponent } from './contacto/contacto.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductosComponent } from './productos/productos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { CarritoComponent } from './carrito/carrito.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSidenavModule} from '@angular/material/sidenav';


const rutas : Routes = [
  {
    path: "inicio",
    component: InicioComponent
  },
  {
    path: "productos",
    component: ProductosComponent
  },
  {
    path: "productos/:id",
    component: DetalleProductoComponent
  },
  {
    path: "contacto",
    component: ContactoComponent
  },
  {
    path: "nosotros",
    component: SobreNosotrosComponent
  },
  {
    path: "favorito",
    component: FavoritosComponent
  },
  {
    path: "carrito",
    component: CarritoComponent
  },
  {
    path: "",
    redirectTo: "/inicio",
    pathMatch: "full"
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    SobreNosotrosComponent,
    ContactoComponent,
    PageNotFoundComponent,
    ProductosComponent,
    FavoritosComponent,
    CarritoComponent,
    DetalleProductoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas),
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatSlideToggleModule,
    FormsModule,
    MatDividerModule,
    MatToolbarModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatSidenavModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
