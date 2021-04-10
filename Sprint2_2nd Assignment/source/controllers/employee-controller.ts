import { NextFunction, Request, Response } from 'express';

import employeeList  from '../service/employee-service';

const serverHealthCheck = (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json({
        message: 'pong'
    });
};

const getEmployee = (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json({
        employees: employeeList
    });
}

const addEmployee = (employee: any) => {
    let emp = employeeList;
    emp.employeeList.push(employee);
    return emp;
}

const deleteEmployee = (employee: any) => {
    let emp = employeeList;
    emp.employeeList.forEach((element, index)=> {
            if(element.name === employee.name){
                emp.employeeList.splice(index, 1);
            }
    });
    return emp;
}


const updateEmployee = (employee: any) => {
    let emp = employeeList;
    emp.employeeList.forEach((element, index)=> {
            if(element.name === employee.name){
                emp.employeeList[index] = employee;
            }
    });
    return emp;
}
export default { serverHealthCheck, getEmployee, addEmployee, deleteEmployee, updateEmployee };
