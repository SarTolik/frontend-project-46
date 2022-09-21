import _ from 'lodash';
import { readFileSync } from 'fs';
import path from 'path';

const getFilePath = (filepath) => path.resolve(process.cwd(), filepath);

const findDiff = (data1, data2) => {
  const keys1 = _.keys(data1);
  const keys2 = _.keys(data2);
  const keys = _.union(keys1, keys2);
  const result = keys.sort().map((key) => {
    if (!_.has(data1, key)) {
      return `  + ${key} : ${data2[key]}`;
    }
    if (!_.has(data2, key)) {
      return `  - ${key} : ${data1[key]}`;
    }
    if (data1[key] !== data2[key]) {
      return `  - ${key} : ${data1[key]}\n  + ${key} : ${data2[key]}`;
    }
    return `   ${key} : ${data2[key]}`;
  });

  return `{\n${result.join('\n')}\n}`;
};

const genDiff = (file1, file2) => {
  const data1 = readFileSync(getFilePath(file1), 'utf-8');
  const data2 = readFileSync(getFilePath(file2), 'utf-8');

  const parseData1 = JSON.parse(data1);
  const parseData2 = JSON.parse(data2);
  return findDiff(parseData1, parseData2);
};

export default genDiff;
