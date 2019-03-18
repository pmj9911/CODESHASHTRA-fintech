import { Component, OnInit } from '@angular/core';
import {RegistercompanyService} from "../servicesshared/registercompany.service";


@Component({
  selector: 'app-company-register',
  templateUrl: './company-register.component.html',
  styleUrls: ['./company-register.component.css']
})
export class CompanyRegisterComponent implements OnInit {
  model: any = {};
  submitted: boolean;
  showSuccessMessage: boolean;
  constructor(private RegisterCompanyService: RegistercompanyService) { }

  ngOnInit() {
    this.RegisterCompanyService.getCompany().subscribe(res => {
      console.log(res)
    });
  }

  onSubmit() {
    console.log('Function called');
    console.log(JSON.stringify((this.model)));
    alert('Your details are successfully saved!');
    this.submitted= true;
    this.RegisterCompanyService.insertCompany(this.model);
    this.showSuccessMessage = true;
    // setTimeout(handler: () => this.showSuccessMessage= false, timeout: 3000 );
    this.submitted = false;
    this.RegisterCompanyService.Company.reset();
    this.RegisterCompanyService.Company.setValue({
      $key: null,
      CName: null,
      Address:null,
      ContactNo:null,
      AltContactNo:null,
      PocNo:null,
      Email:null,
      PocName:null,
      GstNo:null,
      q1:null,

    });
  }

}
