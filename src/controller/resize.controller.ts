import path from 'path';
import { Request, Response, NextFunction } from 'express';
import { Thumbnail, ResizeModel } from '../models/resize.model';
import { CheckModel } from '../models/check.model';

//instance from the ResizeModel class
const resizeModel = new ResizeModel();
//instance from the CheckModel class
const checkModel = new CheckModel();

const inputDirectory = path.join(
  __dirname,
  '../../assets/'
  ) as string;
const outputDirectory = path.join(
  __dirname,
  '../../assets/thumbnails/'
) as string;



//create images and resize them
export const create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    //At first check if the thumbnail directory exists and create if it doesn't
    await checkModel.isDirectoryFound(outputDirectory);
    const extension = req.query.ext as string;
    const imagName = req.query.img as string;
    const inputWidth = req.query.w as string;
    const inputHeight = req.query.h as string;

    const t: Thumbnail = {
      inputFile: `${inputDirectory}${imagName}.${extension}` as string,
      width: parseInt(inputWidth) as number,
      height: parseInt(inputHeight) as number,
      outputFile:
        `${outputDirectory}${imagName}-${inputWidth}-${inputHeight}.${extension}` as string,
    } as Thumbnail;

    const expectedExtensions = ['jpg', 'jpeg', 'png'];
    // make sure that the entered image's extension is 'jpg' or 'jpej' or 'png'
    if (!expectedExtensions.includes(extension)) {
        if (extension === undefined || imagName === undefined || inputWidth === undefined || inputHeight === undefined) {
          res.status(400).send('Missing query parameter, try again');
      } else {
        res.status(400).send('Sorry, not a supported image format');
      }
    } else {
      resizeModel.create(t).then(() => { res.status(200).sendFile(`${t.outputFile}`) });
    }
  } catch (error) {
    next(error);
  }
};


