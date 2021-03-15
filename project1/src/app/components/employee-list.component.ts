import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DataService } from "../services/data.service";

@Component({
    selector: 'app-employee-list',
    template: `
        <div *ngFor="let item of employeeList" (click)="getEmployeeDetails(item.id)">
            {{item.id}}        {{item.name}}
        </div>
    `,
    styles:[]
})
export class EmployeeListComponent implements OnInit {

    employeeList = [];

    constructor(private d: DataService, private _router: Router){}

    ngOnInit(){
        this.getEmployeeList();
    }

    private getEmployeeList(){
        this.employeeList = this.d.getEmployeeList();
    }

    getEmployeeDetails(id: string){
        this._router.navigate(['/employee', id]);
    }

}