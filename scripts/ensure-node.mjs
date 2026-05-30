const minimum = [20, 9, 0];
const current = process.version.slice(1).split(".").map(Number);

const isSupported =
  current[0] > minimum[0] ||
  (current[0] === minimum[0] && current[1] > minimum[1]) ||
  (current[0] === minimum[0] &&
    current[1] === minimum[1] &&
    current[2] >= minimum[2]);

if (!isSupported) {
  console.error(
    `\nNode.js ${minimum.join(".")} or later is required for Next.js.\n` +
      `You are running ${process.version}.\n\n` +
      `Fix it with one of these:\n` +
      `  nvm install 20 && nvm use\n` +
      `  fnm use\n` +
      `  brew install node@20\n`,
  );
  process.exit(1);
}
