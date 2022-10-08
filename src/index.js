import { readFileSync } from 'fs';
import path from 'path';
import findDiff from '../src/findDiff.js';

const getFilePath = (file) => path.resolve(process.cwd(), file);

const genDiff = (file1, file2) => {
  const data1 = readFileSync(getFilePath(file1), 'utf-8');
  const data2 = readFileSync(getFilePath(file2), 'utf-8');

  const parseData1 = JSON.parse(data1);
  const parseData2 = JSON.parse(data2);
  return findDiff(parseData1, parseData2);
};

export default genDiff;
