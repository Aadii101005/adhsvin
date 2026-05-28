const fs = require('fs');
const path = require('path');

const dirs = [
  'backend/src/controllers',
  'backend/src/routes',
  'backend/src/middlewares',
  'backend/src/utils',
  'frontend/src/components',
  'frontend/src/pages',
  'frontend/src/redux',
  'frontend/src/assets',
  'frontend/src/hooks'
];

dirs.forEach(dir => {
  fs.mkdirSync(path.join(__dirname, dir), { recursive: true });
});

console.log('Directories created!');
