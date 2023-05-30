import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

constructor(private fb:FormBuilder, private auth:AuthService, private rtr:Router){}

fg: FormGroup;
ngOnInit(): void {
  this.fg = this.fb.group({
    email: ['', Validators.email],
    password: ['', Validators.required]
  })
}

submit(){
  console.log(this.fg.value.email);
  console.log(this.fg.value.password);
  if (this.auth.login(this.fg.value.email, this.fg.value.password)){
    this.rtr.navigate(['private']);

  } else {
    alert("Error en el Login");
  }
  
}
}
 