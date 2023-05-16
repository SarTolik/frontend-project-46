import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
import genDiff from '../src/index.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const getFixturePath = (filename) => path.resolve(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf8');

const filepath1 = getFixturePath('file1.json');
const filepath2 = getFixturePath('file2.json');
const expected = readFile('true.txt');

test('genDiff', () => {
  expect(genDiff(filepath1, filepath2)).toEqual(expected);
});
