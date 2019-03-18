
import { Component, OnInit } from '@angular/core';
import {RegisterService} from "../servicesshared/register.service";
import {RegistercompanyService} from "../servicesshared/registercompany.service";

@Component({
    selector: 'app-donorinfo',
    templateUrl: './donorinfo.component.html',
    styleUrls: ['./donorinfo.component.css']
})
export class DonorinfoComponent implements OnInit {
    openNav() {
        document.getElementById("mySidebar").style.width = "210px";
        document.getElementById("main").style.marginLeft = "210px";
    }

    closeNav() {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft= "0";
    }

    DonorArray = [];
    DonorArray1=[];
d="any";
    searchText = '';


    constructor(private RegisterService: RegisterService, private RegistercompanyService: RegistercompanyService) {
}

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
    filterDonor(donor)
    {
        return donor.q1==='Donor';
    }

}
