require('dotenv').config();
const app = require('./src/app');
const { ensureCoreTables } = require('./src/bootstrap/ensureCoreTables');

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    await ensureCoreTables();
    console.log('Core tables are ready.');
  } catch (error) {
    console.error('Failed to ensure core tables:', error.message);
  }

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

startServer();
