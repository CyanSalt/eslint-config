const { getNPMClient, getOutdatedPackages } = require('./cli');

(async () => {
  const outdated = await getOutdatedPackages()
  if (outdated.length) {
    const npmClient = getNPMClient({})
    console.warn([
      'Some ESLint packages are outdated. You can run the command below to update them:\n',
      `  ${npmClient === 'yarn' ? 'yarn ' : 'npx @cyansalt/'}eslint-config --update\n`,
    ].join('\n'))
  }
})()
