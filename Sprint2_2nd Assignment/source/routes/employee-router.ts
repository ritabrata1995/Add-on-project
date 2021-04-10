import express from 'express';
import controller from '../controllers/employee-controller';

const router = express.Router();

router.get('/ping', controller.serverHealthCheck);
router.get('/employess', controller.getEmployee);

export = router;
