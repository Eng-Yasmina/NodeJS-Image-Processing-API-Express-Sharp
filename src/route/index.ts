import { Router } from 'express';
import * as controller from '../controller/resize.controller';
import multer from 'multer';
// use multer storage to store the uploaded images there before calling it for resizing
const storage = multer.memoryStorage();
const uploads = multer({ storage });

// instance of Router
const route = Router();

route.post('/resizedImages', uploads.single('thumbnail'), controller.create);
route.get('/resizedImages/500_500', controller.get_500_500);
route.get('/resizedImages/300_300', controller.get_300_300);
route.get('/resizedImages/200_200', controller.get_200_200);

export default route;
