import * as fs from 'fs';
import * as path from 'path';

export function readFilesSync(dir: string): {[key: string]: string} {
  const files: {[key: string]: string} = {};

  fs.readdirSync(dir).forEach(filename => {
    const name = path.parse(filename).name;
    const filepath = path.resolve(dir, filename);
    const stat = fs.statSync(filepath);
    const isFile = stat.isFile();

    if (isFile) {
         const content = fs.readFileSync(path.join(dir, filename))
         files[name] = content.toString()
    }
  });

  return files;
}
