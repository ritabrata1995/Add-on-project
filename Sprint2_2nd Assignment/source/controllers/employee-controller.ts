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

export default { serverHealthCheck, getEmployee };
