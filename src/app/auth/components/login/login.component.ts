import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import {AuthService} from "../../../core/services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formLogin!: FormGroup;

  constructor(private fb : FormBuilder,private router:Router,private authService:AuthService) {
    this.formLogin = fb.group({
      email: [null, Validators.required],
      password: [null, Validators.required]
    })

  }

  ngOnInit(): void {
  }

  onLogin() {
    console.log(this.formLogin.getRawValue())

    if(this.authService.login({email:this.formLogin?.get(['email'])?.value,password:this.formLogin?.get(['password'])?.value})){
      this.router.navigate(['/']);
    }else{
      alert("Login failed")
    }


  }
}
