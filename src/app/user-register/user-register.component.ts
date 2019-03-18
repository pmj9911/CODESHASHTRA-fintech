import { Component, OnInit } from '@angular/core';
import {RegisterService} from '../servicesshared/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  model: any = {};
  submitted: boolean;
  showSuccessMessage: boolean;

  constructor(public router:Router , private RegisterService: RegisterService) {
  }

  ngOnInit() {
     this.RegisterService.getuser().subscribe(res => {
       console.log(res)
    });

  }


  onSubmit() {
    console.log('Function called');
    console.log(JSON.stringify((this.model)));
    alert('Your details are successfully saved!');
    this.submitted= true;
    this.RegisterService.insertuser(this.model);
    this.showSuccessMessage = true;
    this.router.navigate(['/login']);
    // setTimeout(handler: () => this.showSuccessMessage= false, timeout: 3000 );
    this.submitted = false;
    this.RegisterService.user.reset();
    this.RegisterService.user.setValue({
      $key: null,
      Name: null,
      Address:null,
      ContactNo:null,
      AltContactNo:null,
      Profession:null,
      Email:null,
      q1:null,
      Category:null,

    });
  }

}
