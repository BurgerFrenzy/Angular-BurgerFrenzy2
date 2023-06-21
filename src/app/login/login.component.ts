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
        if (result === "Bienvenido de nuevo a SimpleDigital" + email + " !") {
        }
        window.location.href='/'
      })
      .catch(error => console.error(error));
    return true;
  }

  MostrarContrasenaLogin() {
    this.mostrarContrasena = !this.mostrarContrasena;
  }
  mostrarNavbar: boolean = false;
  mostrarFooter: boolean = false;
}


