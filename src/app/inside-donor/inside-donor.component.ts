import { Component, OnInit } from '@angular/core';
import {RegisterService} from "../servicesshared/register.service";



@Component({
  selector: 'app-inside-donor',
  templateUrl: './inside-donor.component.html',
  styleUrls: ['./inside-donor.component.css']
})
export class InsideDonorComponent implements OnInit {


  openNav() {
    document.getElementById("mySidebar").style.width = "200px";
    document.getElementById("main").style.marginLeft = "200px";
  }

   closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }


    DataArray = [];





    constructor(private RegisterService: RegisterService) {
    }

    ngOnInit() {
        this.RegisterService.getdata().subscribe(
            list => {
                this.DataArray = list.map(item => {
                    return {
                        $key: item.key,
                        ...item.payload.val()
                    };
                });
            });
    }
    filterData(data)
    {
        return data.child===true;
    }
}
