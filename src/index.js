import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import findDiff from './findDiff.js';
import parse from './parsers.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const getFixturePath = (filename) => path.resolve(__dirname, '..', '__fixtures__', filename);
const getFormat = (file) => path.extname(file).slice(1);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf8');

const genDiff = (file1, file2) => {
  const data1 = readFile(file1);
  const data2 = readFile(file2);
  const fileFormat1 = getFormat(file1);
  const fileFormat2 = getFormat(file2);

  const parseData1 = parse(data1, fileFormat1);
  const parseData2 = parse(data2, fileFormat2);
  return findDiff(parseData1, parseData2);
};

export default genDiff;
