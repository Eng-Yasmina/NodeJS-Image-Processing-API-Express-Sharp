//import Types and Class from check model
import { CheckModel } from '../check.model';
import { Thumbnail, ResizeModel } from '../resize.model';
import path from 'path';
import { promises as fs } from "fs";

//instance from the CheckModel Class
const checkModel = new CheckModel();
//instance from the SharpModel Class
const resizeModel = new ResizeModel();

describe('image processing', () => {
  // test the async fn that ckecks if the file exists or not
    it('should check that Sharp resize images', async () => {
        const inputDirectory = path.join(__dirname, '../../assets/') as string;
        const outputDir = path.join(__dirname, '../../assets/thumbnails/') as string;
        const url =
      'https://raw.githubusercontent.com/Eng-Yasmina/NodeJS-Image-Processing-API-Express-Sharp/main/assets/shape.jpg';
        const response = await fetch(url);
        const blob = await response.blob();
        const arrayBuffer = await blob.arrayBuffer();
        const imgbuffer = Buffer.from(arrayBuffer);
        await fs.writeFile(`${inputDirectory}shape.jpg`, imgbuffer);

        const thumbnail: Thumbnail = {
        inputFile: `${inputDirectory}shape.jpg` as string,
        width: 200 as number,
        height: 200 as number,
        outputFile:
            `${outputDir}shape-200-200.png` as string,
        } as Thumbnail;
        
        await checkModel.isDirectoryFound(outputDir);
        await expect(resizeModel.create(thumbnail)).toBeDefined();
  });
});
