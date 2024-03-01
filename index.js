const getUserInput = require('./lib/userInput');
const generateLogo = require('./lib/logoGenerator');
const saveToFile = require('./lib/fileHandler');

async function run() {
  try {
    const userInput = await getUserInput();
    const logoContent = generateLogo(userInput);
    saveToFile(logoContent);
    console.log('Generated logo.svg');
  } catch (error) {
    console.error('Error:', error.message);
  }
}

run();
