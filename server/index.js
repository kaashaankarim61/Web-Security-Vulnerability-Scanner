const express = require('express');
const cors = require('cors');
const fs =require('fs')

const app = express();
app.use(express.json());
app.use(cors());
app.post('/sqli/', (req, res) => {
    const {url} =req.body
    fs.writeFile('input_sqli.txt', url, (err) => {
        if (err) {
        console.error('Error writing to file:', err);
        } else {
        console.log('URL saved successfully!');
        const { spawn } = require('child_process');
  
        const pythonProcess = spawn('C:/Users/hp/AppData/Local/Programs/Python/Python311/python.exe', ['SQLI.py']);
        let output = ''; // Accumulator for Python output
      
        pythonProcess.stdout.on('data', (data) => {
          output += data.toString(); // Collect data from stdout
          console.log(`Python stdout: ${data}`);
        });
      
        pythonProcess.stderr.on('data', (data) => {
          console.error(`Python stderr: ${data}`);
        });
      
        pythonProcess.on('close', (code) => {
          console.log(`Python process closed with code ${code}`);
          res.json({ output }); // Send accumulated output as JSON response
        });
        }
    });
  
  });
  



  app.post('/csrf/', (req, res) => {
    const {url} =req.body
    fs.writeFile('input_csrf.txt', url, (err) => {
        if (err) {
        console.error('Error writing to file:', err);
        } else {
        console.log('URL saved successfully!');
        const { spawn } = require('child_process');
  
        const pythonProcess = spawn('C:/Users/hp/AppData/Local/Programs/Python/Python311/python.exe', ['CSRF.py']);
        let output = ''; // Accumulator for Python output
      
        pythonProcess.stdout.on('data', (data) => {
          output += data.toString(); // Collect data from stdout
          console.log(`Python stdout: ${data}`);
        });
      
        pythonProcess.stderr.on('data', (data) => {
          console.error(`Python stderr: ${data}`);
        });
      
        pythonProcess.on('close', (code) => {
          console.log(`Python process closed with code ${code}`);
          res.json({ output }); 
        });
        }
    });
  
  });
  

  app.post('/xss/', (req, res) => {
    const {url} =req.body
    fs.writeFile('input_xss.txt', url, (err) => {
        if (err) {
        console.error('Error writing to file:', err);
        } else {
        console.log('URL saved successfully!');
        const { spawn } = require('child_process');
  
        const pythonProcess = spawn('C:/Users/hp/AppData/Local/Programs/Python/Python311/python.exe', ['XSS.py']);
        let output = ''; // Accumulator for Python output
      
        pythonProcess.stdout.on('data', (data) => {
          output += data.toString(); // Collect data from stdout
          console.log(`Python stdout: ${data}`);
        });
      
        pythonProcess.stderr.on('data', (data) => {
          console.error(`Python stderr: ${data}`);
        });
      
        pythonProcess.on('close', (code) => {
          console.log(`Python process closed with code ${code}`);
          res.json({ output }); // Send accumulated output as JSON response
        });
        }
    });
  
  });
  







const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
































// app.post('/api/data', (req, res) => {
//     const requestData = req.body;
//     res.json({ receivedData: requestData });
//   });