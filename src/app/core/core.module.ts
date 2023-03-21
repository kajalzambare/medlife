import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,FormsModule,
    ReactiveFormsModule,HttpClientModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    SignInComponent,
    SignUpComponent
  ]
})
export class CoreModule { }
