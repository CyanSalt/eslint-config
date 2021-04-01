const { getOutdatedPackages } = require('./cli')

if (getOutdatedPackages().length) {
  console.warn([
    'Some ESLint packages are outdated. You can run the command below to update them:\n',
    '  npx @cyansalt/eslint-config --update\n',
  ].join('\n'))
}
