import { Router } from 'express';
import * as controller from '../controller/resize.controller';

// instance of Router
const route = Router();

route.get('/', controller.create);

export default route;
