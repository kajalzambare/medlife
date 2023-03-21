import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
signIn!:FormGroup;

constructor(private fb:FormBuilder){
}
  ngOnInit(): void {
  this.createForm();
  }

  createForm(){
    this.signIn=this.fb.group({
      uName:['',[Validators.required]],
      password:['',[Validators.required,Validators.maxLength(10)]],
    })
  }

  submit(){
    
  }

}
