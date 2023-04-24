import { Component, Input, OnInit } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit{
  @Input('message') message:any;

  ngOnInit(): void {
    var myToastEl = document.getElementById('toast')
   // var myToast = toast.getInstance(myToastEl);
// var myToast = bootstrap.Toast.getInstance(myToastEl) // Returns a Bootstrap toast instance
//   
console.log(myToastEl)
}

}
