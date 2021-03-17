import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Data } from "@angular/router";
import { DataService } from "../services/data.service";


@Component({
    selector: 'app-employee',
    template: `
    <div>
        {{employeeDetail.id}}    {{employeeDetail.name}}   {{employeeDetail.desc}}
    </div>
    `,
    styles:[]
})
export class EmployeeComponent  implements OnInit  {

    employeeDetail;

    constructor(private _router: ActivatedRoute, private _ds: DataService) {

    }

    ngOnInit() {

        this._router.params.subscribe(data => {
            this.getEmployeeDetails(data['id']);
        });


    }

    getEmployeeDetails(id: string) {
        this.employeeDetail = this._ds.getEmployee(id);

    }

}