import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  constructor (private contactForm: FormBuilder) {}

  formUser = this.contactForm.group (
    {
      nombre: ['',[Validators.required,Validators.minLength(3)]],
      email: ['',[Validators.required,Validators.email]],
      mensaje: ['',[Validators.required]],
    }
  )
  get mensaje(){
    return this.formUser.get('mensaje') as FormControl;
  }
  get nombre(){
    return this.formUser.get('nombre') as FormControl;
  }
  get email(){
    return this.formUser.get('email') as FormControl;
  }

  enviarForm(){
    alert("El formulario ha sido enviado con exito");
    this.formUser.reset();
  }

}
