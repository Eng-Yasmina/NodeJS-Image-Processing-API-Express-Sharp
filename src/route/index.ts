import { Router } from "express";
import * as controller from '../controllers/resizedImages.controller'

// instance of Router
const route = Router();

route.post('/resizedImages', controller.creat);

export default route;