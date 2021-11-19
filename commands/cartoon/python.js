const { spawn } = require("child_process")

module.exports = {
    name: "python",
    alias: [],
    description: 'Send and recieve data from python',
    run: async (client, message, args) => { 

        const childPython = spawn('python', ['../CartoonBot/backend/ping.py', 'affordable healthcare'])

        childPython.stdout.on('data', (data) => {
            console.log(`stdout: ${data}`);
        });

        childPython.stderr.on('data', (data) => {
            console.log(`stderr: ${data}`);
        })

        childPython.on('close', (close) => {
            console.log(`child process exited with code ${close}`)
        })

    }
  }
  