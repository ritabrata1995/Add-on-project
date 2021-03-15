import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class DataService{

    employees = [
        {
            id: '1',
            name: 'Shwetha',
            desc: 'Lead'
        },
        {
            id: '2',
            name: 'Ritab',
            desc: 'Developer'
        }
    ];

    public getEmployeeList(){
        let emp = [];
        
        this.employees.forEach(e => {
            emp.push({
                id: e.id, name: e.name
            });
        });

        return emp;
    }

    public getEmployee(id: string){
        let details;
        this.employees.forEach(e => {
                if(e.id === id) {
                    details = e;
                }
        });
        return details;
    }

}