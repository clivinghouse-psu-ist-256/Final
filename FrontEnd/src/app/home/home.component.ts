import { Component} from '@angular/core';
import { FormGroup, FormBuilder } from  '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  contactForm!: FormGroup;
constructor(private formBuilder: FormBuilder, private apiserve:ApiService){
  this.createContactForm();
}
createContactForm(){
  this.contactForm = this.formBuilder.group({
    fullName: [''],  
    email: [''],
    message: ['']
  });
}
onSubmit() {
  console.log('Your form data : ', this.contactForm?.value );
  this.apiserve.postComment(this.contactForm?.value).subscribe((res)=>{
    
  })
}
}
