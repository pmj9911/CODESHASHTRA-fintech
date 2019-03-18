import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
//import {log} from 'util'

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(private firebase: AngularFireDatabase) { }
  userList: AngularFireList<any>;
  dataList:AngularFireList<any>;

  user = new FormGroup({
    $key: new FormControl(null),
    Name: new FormControl('', Validators.required),
    Address: new FormControl('', Validators.required),
    ContactNo: new FormControl('', Validators.required),
    AltContactNo: new FormControl('', [Validators.required, Validators.minLength(6)]),
    Profession: new FormControl('', Validators.required),
    Category: new FormControl('', Validators.required),
    Email: new FormControl('', Validators.required),
    q1:new FormControl('',Validators.required),

  });

  getuser() {
    this.userList = this.firebase.list('/users');
    return this.userList.snapshotChanges();
  }


  insertuser(user) {
    console.log("inside survey");
    console.log(user);


    this.userList.push({
      Name: user.Name ,
      Address: user.Address,
      ContactNo: user.ContactNo,
      AltContactNo : user.AltContactNo,
      Profession: user.Profession,
      //Category: user.Category,
      Email: user.Email,
      q1:user.q1,
      Category: user.Category,

    });
    // this.formList.push("reached data");
  }
    data= new FormGroup(
    {
                  $key: new FormControl(null),
                  Reason:new FormControl('',Validators.required),
                  Email:new FormControl('',Validators.required),
                  Money:new FormControl('',Validators.required),
                  child:new FormControl('',Validators.required),
                  Description:new FormControl('',Validators.required)
    });
  getdata(){
    this.dataList = this.firebase.list('/Requests');
    return this.dataList.snapshotChanges();
  }
  insertdata(data)
  {
    this.dataList.push({
      Reason:data.Reason ,
      Email:data.Email,
      Money:data.Money,
      child:true,
      Description:data.Description
    });
  }
}
