import path from 'path';
import { Request, Response, NextFunction } from 'express';
import { Thumbnail, ResizeModel } from '../models/resize.model';
import { CheckModel } from '../models/check.model';

//instance from the ResizeModel class
const resizeModel = new ResizeModel();
//instance from the CheckModel class
const checkModel = new CheckModel();

const outputDirectory = path.join(
  __dirname,
  '../../assets/thumbnails/'
) as string;
let imageName: string | undefined = '';
const dimensions = [
  { w: 500 as number, h: 500 as number },
  { w: 300 as number, h: 300 as number },
  { w: 200 as number, h: 200 as number },
];

//create images and resize them
export const create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    //At first check if the thumbnail directory exists and create if it doesn't
    await checkModel.isDirectoryFound(outputDirectory);
    // catch the name of the uploaded image and store it in imageNamge variable to use it in the get route also
    imageName = req.file?.originalname;
    console.log(imageName);
    res.send('the uploaded image is recieved');
    //loop over the dimensions arrey to resize the image to each (w×h) pair
    for (const dimension of dimensions) {
      const t: Thumbnail = {
        buffer: req.file?.buffer as Buffer,
        width: dimension.w,
        height: dimension.h,
        outputFile:
          `${outputDirectory}${dimension.w}-${dimension.h}-${imageName}` as string,
      } as Thumbnail;
      resizeModel.create(t);
    }
  } catch (error) {
    next(error);
  }
};

//get the image of dimension (500 × 500)
export const get_500_500 = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await resizeModel.create;
    res.status(200).sendFile(`${outputDirectory}500-500-${imageName}`);
  } catch (error) {
    next(error);
  }
};

//get the image of dimension (300 × 300)
export const get_300_300 = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await resizeModel.create;
    res.status(200).sendFile(`${outputDirectory}300-300-${imageName}`);
  } catch (error) {
    next(error);
  }
};

//get the image of dimension (200 × 200)
export const get_200_200 = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await resizeModel.create;
    res.status(200).sendFile(`${outputDirectory}200-200-${imageName}`);
  } catch (error) {
    next(error);
  }
};
