import { CheckModel } from './check.model';
import sharp from 'sharp';

// instance from the CheckModel class
const checkModel = new CheckModel();

export type Thumbnail = {
  buffer: Buffer;
  width: number;
  height: number;
  outputFile: string;
};

export class ResizeModel {
  //async fn to resize the uploaded image and create a new thumbnail
  async create(t: Thumbnail): Promise<string | undefined> {
    try {
      //Check if the thumbnail is already exist
      const thumbnailIsFound = await checkModel.isFileFound(t.outputFile);
      if (!thumbnailIsFound) {
        // use sharp to resize the uploaded image and create a thumbnail
        await sharp(t.buffer).resize(t.width, t.height).toFile(t.outputFile);
        return t.outputFile as string;
      }
      return t.outputFile as string;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
}
