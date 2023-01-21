//import Types and Class from check model
import { CheckModel } from '../check.model';
import path from 'path';

//instance from the CheckModel Class
const checkModel = new CheckModel();

describe('Check Model', () => {
  // test the async fn that ckecks if the file exists or not
  it('should check if the file exists or not', async () => {
    const testFile = path.join(__dirname, '../../assets/shape.jpg') as string;
    await expect(checkModel.isFileFound(testFile)).toBeDefined();
  });

  // test the async fn that ckecks if the directory exists or not
  it('should check if the directory exists or not', async () => {
    const inputDir = path.join(__dirname, '../../assets/') as string;
    await expect(checkModel.isDirectoryFound(inputDir)).toBeDefined();
  });
});
