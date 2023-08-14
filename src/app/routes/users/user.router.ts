import { Router } from 'express';
import * as userContrl from '../../controllers/users/user.controller';
const router = Router();

router.get('/registers', userContrl.registers);

module.exports = router;
