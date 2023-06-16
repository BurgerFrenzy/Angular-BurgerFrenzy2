import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  mostrarContrasena: boolean;

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      alert('Por favor, complete todos los campos correctamente.');
      return false;
    }

    const formData = this.registerForm.value;
    const { firstName, lastName, email, password } = formData;


    alert('Bienvenido a Burguer Frenzy ' + firstName + ' ' + lastName);

    fetch('http://localhost:8080/api/addUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ firstName, lastName, email, password }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));

    window.location.href = '/login';
    return true;
  }
  MostrarcontrasenaRegister() {
    this.mostrarContrasena = !this.mostrarContrasena;
  }
}




