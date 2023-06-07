import fs from 'fs';
import { executeCommand } from './childProcess.js';

executeCommand('git checkout -b develop');
fs.writeFileSync('./index.js', `console.log('Hi');`);
executeCommand('git add --all');
executeCommand('git commit -m "Implemented greeting"');

fs.writeFileSync('./README.md', `Git Basics`);
executeCommand('git add --all');
executeCommand('git commit -m "Added Readme"');

executeCommand('git checkout develop~1');
executeCommand('git checkout -b feature/use-formal-greeting');
fs.writeFileSync('./index.js', `console.log('Helo');`);
executeCommand('git add --all');
executeCommand('git commit -m "Updated to formal greeting"');
fs.writeFileSync('./index.js', `console.log('Hello');`);
executeCommand('git add --all');
executeCommand('git commit -m "Fixed typo"');

executeCommand('git checkout feature/use-formal-greeting~1');
executeCommand('git checkout -b feature/get-greeting-subject');
fs.writeFileSync('./subject.js', `//TODO: get subject`);
executeCommand('git add --all');
executeCommand('git commit -m "Get greeting subject"');
