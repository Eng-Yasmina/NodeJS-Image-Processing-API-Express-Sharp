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
    const inputDirectory = path.join(__dirname, '../../../assets/') as string;
    const outputDir = path.join(__dirname, '../../../assets/test/') as string;

    const thumbnail: Thumbnail = {
      inputFile: `${inputDirectory}shape.jpg` as string,
      width: 200 as number,
      height: 200 as number,
      outputFile: `${outputDir}shape-200-200.png` as string,
    } as Thumbnail;

    await checkModel.isDirectoryFound(outputDir);
    await expect(resizeModel.create(thumbnail)).toBeDefined();
  });
});
