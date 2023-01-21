//import Types and Class from check model
import { CheckModel } from '../check.model';
import { Thumbnail, ResizeModel } from '../resize.model';
import path from 'path';

//instance from the CheckModel Class
const checkModel = new CheckModel();
//instance from the SharpModel Class
const resizeModel = new ResizeModel();

describe('image processing', () => {
  // test the async fn that ckecks if the file exists or not
  it('should check that Sharp resize images', async () => {
    const outputDir = path.join(__dirname, '../../assets/thumbnails/');
    const url =
      'https://raw.githubusercontent.com/Eng-Yasmina/NodeJS-Image-Processing-API-Express-Sharp/main/assets/shape.jpg';
    const response = await fetch(url);

    const blob = await response.blob();

    const arrayBuffer = await blob.arrayBuffer();

    const imgbuffer = Buffer.from(arrayBuffer);

    const thumbnail = {
      buffer: imgbuffer as Buffer,
      width: 100,
      height: 100,
      outputFile: `${outputDir}100-100-shap.jpg` as string,
    } as Thumbnail;
    await checkModel.isDirectoryFound(outputDir);
    await expect(resizeModel.create(thumbnail)).toBeDefined();
  });
});
