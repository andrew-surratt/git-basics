import { executeCommand } from './childProcess.js';

executeCommand('git checkout main');
// delete all branches except main
executeCommand('git branch | grep -v "main" | xargs git branch -D ');
