import * as fs from 'fs';
import * as path from 'path';
import * as util from 'util';

const readdir = util.promisify(fs.readdir);
const readFile = util.promisify(fs.readFile);

export async function readFiles(dir: string): Promise<{[key: string]: string}> {
  const files: {[key: string]: string} = {};

  const foos = await readdir(dir, {withFileTypes: true});

  await Promise.all(foos.map(async file => {
    if (file.isFile()) {
      const content = await readFile(path.join(dir, file.name))
      const name = path.parse(file.name).name;
      files[name] = content.toString()
    }
  }));

  return files;
}
