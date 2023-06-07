import child_process from 'child_process';

export const executeCommand = (command) => {
    child_process.execSync(
        command, {
            stdio: 'pipe',
            encoding: 'utf-8'
        });
}
