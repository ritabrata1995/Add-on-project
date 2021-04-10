import express from 'express';
import controller from '../controllers/employee-controller';

const router = express.Router();

router.get('/ping', controller.serverHealthCheck);

router.get('/employess', controller.getEmployee);
router.post('/addemployee', (req, res) => {
    return res.status(200).json({
        employees: controller.addEmployee(req.body)
    });
});

router.delete('/deleteemployee', (req, res) =>{
    return res.status(200).json({
        employees: controller.deleteEmployee(req.body)
    });

});

router.put('/updateemployee', (req, res) =>{
    return res.status(200).json({
        employees: controller.updateEmployee(req.body)
    });

});

export = router;
