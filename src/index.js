import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import findDiff from './findDiff.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const getFixturePath = (filename) => path.resolve(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf8');

const genDiff = (file1, file2) => {
  const data1 = readFile(file1);
  const data2 = readFile(file2);

  const parseData1 = JSON.parse(data1);
  const parseData2 = JSON.parse(data2);
  return findDiff(parseData1, parseData2);
};

export default genDiff;
