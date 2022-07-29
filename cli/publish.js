const { execSync } = require('child_process');
const minimist = require('minimist');

const argv = minimist(process.argv.slice(2)); // Get arg from command line

const { version, component } = argv;

console.log('version', version);
console.log('component', component);

execSync(`npm version ${version} --workspace=${component}`);
execSync(`npm publish --workspace=${component}  --registry http://localhost:4873/`);

