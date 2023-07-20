const { spawn } = require('child_process');
const fs = require('fs');

// Change this variable to change the path of the icon
const iconPath = './icon.svg';

const commands = [
  'npx tsc',
  'npx vite build',
  `npx pwa-asset-generator ${iconPath} ./dist/assets -i ./dist/index.html -m ./dist/manifest.webmanifest -f -w`
];




fs.access(iconPath, fs.constants.F_OK, (err) => {
  if (err) {
    console.log(`File ${iconPath} does not exist`);
  } else {
    // Run the third command only if the file exists
    commands.splice(2, 0, `if [ -f ${iconPath} ]; then echo "Icon file exists!"; fi`);
    const child = spawn('bash', ['-c', commands.join(' && ')]);
    let output = '';
    child.stdout.on('data', (data) => {
      output += data.toString();
      process.stdout.write(data);
    });
    child.stderr.on('data', (data) => {
      console.error(`Error: ${data.toString()}`);
    });
    child.on('close', (code) => {
      console.log(output);
    });
  }
});
