import * as fs from 'node:fs/promises';

export type File = {
  name: string;
};

export type Directory = {
  name: string;
};

export class CheckModel {
  // async fn to ckeck if the file exists or not
  async isFileFound(f: File['name']): Promise<boolean> {
    try {
      const file = await fs.open(f, 'r');
      file.close();
      return true;
    } catch (error) {
      return false;
    }
  }

  // async fn to ckeck if the directory exists or not
  async isDirectoryFound(d: Directory['name']): Promise<void> {
    try {
      await fs.readdir(d);
    } catch (error) {
      await fs.mkdir(d);
    }
    return Promise.resolve();
  }
}
