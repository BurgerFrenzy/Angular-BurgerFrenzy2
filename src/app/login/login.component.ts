import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  mostrarContrasena: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  login() {
    if (this.loginForm.invalid) {
      alert('Por favor, complete todos los campos correctamente.');
      return false;
    }

    const { email, password } = this.loginForm.value;

    //alert('Iniciando sesión en Burguer Frenzy con ' + email);

    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    fetch('http://localhost:8080/api/login', {
      method: 'POST',
      body: formData
    })
      .then(response => response.text())
      .then(result => {
        alert(result);
        if (result === "Bienvenido de nuevo a Burguer Frenzy " + email + " !") {
          // redirigir a otra página si el inicio de sesión fue exitoso
          window.location.href = "/home";
        }
      })
      .catch(error => console.error(error));
      
    return true;
  }

  MostrarContrasenaLogin() {
    this.mostrarContrasena = !this.mostrarContrasena;
  }
}


