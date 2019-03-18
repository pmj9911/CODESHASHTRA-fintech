import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class RegistercompanyService {

  constructor(private firebase: AngularFireDatabase) {

  }
  CompanyList: AngularFireList<any>;
  Company = new FormGroup({
    $key: new FormControl(null),
    CName: new FormControl('', Validators.required),
    Address: new FormControl('', Validators.required),
    ContactNo: new FormControl('', Validators.required),
    AltContactNo: new FormControl('', [Validators.required, Validators.minLength(6)]),
    PocNo:new FormControl('', Validators.required),
    //Category: new FormControl('', Validators.required),
    Email: new FormControl('', Validators.required),
    PocName:new FormControl('', Validators.required),
    GstNo:new FormControl('', Validators.required),
    q1:new FormControl('',Validators.required),

  });
  getCompany() {
    this.CompanyList = this.firebase.list('/Company');
    return this.CompanyList.snapshotChanges();
  }
  insertCompany(Company) {
    console.log("inside survey");
    console.log(Company);


    this.CompanyList.push({
      CName: Company.CName ,
      Address: Company.Address,
      ContactNo: Company.ContactNo,
      AltContactNo : Company.AltContactNo,
      PocNo:Company.PocNo,
      Email:Company.Email,
      PocName:Company.PocName,
      GstNo:Company.GstNo,
      q1:Company.q1,

      //Category: user.Category,
    });
    // this.formList.push("reached data");
  }
}
