const express = require('express');
const { connectToDatabase } = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes')
const cors = require('cors');
const crypto = require('crypto');
const os = require('os'); // Import the os module
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Generate a random JWT secret
const JWT_SECRET = crypto.randomBytes(64).toString('hex');
// Set the JWT secret as an environment variable
process.env.JWT_SECRET = JWT_SECRET;

connectToDatabase();

app.use('/api', userRoutes, adminRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(PORT, '0.0.0.0', () => {
  const networkInterfaces = os.networkInterfaces();
  let serverIpAddress;

  for (const interfaceName of Object.keys(networkInterfaces)) {
    const interfaces = networkInterfaces[interfaceName];
    for (const iface of interfaces) {
      if (iface.family === 'IPv4' && !iface.internal) {
        serverIpAddress = iface.address;
        break;
      }
    }
    if (serverIpAddress) {
      break;
    }
  }

  console.log(`Server is running on port ${PORT}`);
  console.log(`Server IP address: ${serverIpAddress}`);
});
