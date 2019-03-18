import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../servicesshared/auth.service";

import { Router } from '@angular/router';
import {RegistercompanyService} from "../servicesshared/registercompany.service";
import {RegisterService} from "../servicesshared/register.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginForm: FormGroup;
  errorMessage = '';
  successMessage = '';
    DonorArray =[];
    DonorArray1=[];
    ReceiverArray=[];
    ReceiverArray1=[];

  constructor(public authService: AuthService,
              private router: Router,
              private fb: FormBuilder,
              private RegistercompanyService:RegistercompanyService,
              private RegisterService:RegisterService) {
    this.createLoginForm();
  }
  model: any = {};

  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
  }



  createLoginForm() {
    this.LoginForm = this.fb.group({
      email: ['', Validators.required ],
      password: ['', Validators.required],
      optradio:['',Validators.required]
    });
  }
  tryLogin(value) {
      this.authService.doLogin(value)
          .then(res => {
              this.successMessage="Logged in Successfully!";
            alert(this.successMessage);
            console.log("logined",);
            alert(value.email);

              for(let donor of this.DonorArray)
              {
                  console.log(donor.Email);
                  if(donor.q1 == "Donor" && donor.Email==value.email){
                      alert("Inside Donor");
                      this.router.navigate(['/insideDonor']);
                  }
              }

              for(let donor of this.DonorArray1)
              {
                  console.log(donor.Email);
                  if(donor.q1 == "Donor" && donor.Email==value.email){
                      alert("Inside Donor");
                      this.router.navigate(['/insideDonor']);
                  }
              }
              for(let donor of this.ReceiverArray)
              {
                  if (donor.q1 == "Receiver" && donor.Email==value.email)
                  {
                      alert("Inside Receiver");
                      this.router.navigate(['/donorinfo']);
                  }
              }

              for(let donor of this.ReceiverArray1)
              {
                  if (donor.q1 == "Receiver" && donor.Email==value.email)
                  {
                      alert("Inside Receiver");
                      this.router.navigate(['/donorinfo']);
                  }
              }
            //this.whereTo();
            // loginVerified=true;

          }, err => {
            console.log(err);
            this.errorMessage = err.message;
          });
  }
  // whereTo(compOrInd)
  // {
  //   console.log(compOrInd);
  //   if(compOrInd === "Company")
  //   {
  //     this.router.navigate(['/insideDonor']);
  //   }else
  //   {
  //     this.router.navigate(['/insideDonor']);
  //   }
  // }

    ngOnInit() {
        this.RegistercompanyService.getCompany().subscribe(
            list => {
                this.DonorArray = list.map(item => {
                    return {
                        $key: item.key,
                        ...item.payload.val()
                    };
                });
            });
        this.RegistercompanyService.getCompany().subscribe(
            list => {
                this.ReceiverArray= list.map(item => {
                    return {
                        $key: item.key,
                        ...item.payload.val()
                    };
                });
            });
        this.RegisterService.getuser().subscribe(
            list => {
                this.ReceiverArray1 = list.map(item => {
                    return {
                        $key: item.key,
                        ...item.payload.val()
                    };
                });
            });
        this.RegisterService.getuser().subscribe(
            list => {
                this.DonorArray1 = list.map(item => {
                    return {
                        $key: item.key,
                        ...item.payload.val()
                    };
                });
            });
      }

}
