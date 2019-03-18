import { Component, OnInit } from '@angular/core';
import {RegisterService} from "../../servicesshared/register.service";
import {RegistercompanyService} from "../../servicesshared/registercompany.service";

@Component({
  selector: 'app-child-receiver',
  templateUrl: './child-receiver.component.html',
  styleUrls: ['./child-receiver.component.css']
})
export class ChildReceiverComponent implements OnInit {
  DonorArray=[];
  ReceiverArray=[];

  model: any = {};
  submitted: boolean;
  showSuccessMessage: boolean;

  constructor(private RegisterService:RegisterService,
              private RegistercompanyService:RegistercompanyService) { }

  ngOnInit() {
      this.RegisterService.getuser().subscribe(res => {
          console.log(res)
      });
      this.RegisterService.getdata().subscribe(res=>{
          console.log(res)
      })
    this.RegistercompanyService.getCompany().subscribe(
        list => {
          this.DonorArray = list.map(item => {
            return {
              $key: item.key,
              ...item.payload.val()
            };
          });
        });
    this.RegisterService.getuser().subscribe(
        list => {
          this.ReceiverArray = list.map(item => {
            return {
              $key: item.key,
              ...item.payload.val()
            };
          });
        });
  }

    onSubmit() {
        console.log('Function called');
        console.log(JSON.stringify((this.model)));
        alert('Your details are successfully saved!');
        this.submitted= true;
        this.RegisterService.insertdata(this.model);
        this.showSuccessMessage = true;
        //this.router.navigate(['/login']);
        // setTimeout(handler: () => this.showSuccessMessage= false, timeout: 3000 );
        this.submitted = false;
        this.RegisterService.data.reset();
        this.RegisterService.data.setValue({
            $key: null,
            Reason: null,
            Email:null,
            Money:null,
            child:null,
            Description:null
        });
    }


}
