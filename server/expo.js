const { spawn } = require('child_process');

const pythonProcess = spawn('C:/Users/hp/AppData/Local/Programs/Python/Python311/python.exe', ['SQLI.py']);

pythonProcess.stdout.on('data', (data) => {
  console.log(`Python stdout: ${data}`);
});

pythonProcess.stderr.on('data', (data) => {
  console.error(`Python stderr: ${data}`);
});

pythonProcess.on('close', (code) => {
  console.log(`Python process closed with code ${code}`);
});
