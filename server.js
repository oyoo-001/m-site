const express = require('express');
const path = require('path');
const app = express();

// Port can be set via environment variable or default to 3000
const PORT = process.env.PORT || 3000;

/**
 * MUTSDA CHURCH Maintenance Server
 * * This server redirects all incoming traffic to the maintenance page
 * ensuring that no matter which route a user hits, they see the 
 * "Digital Sanctuary" update message.
 */

// If you have static assets (images, icons, etc.), serve them from a 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Serve the maintenance.html for all routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Maintenance.html'));
});

app.listen(PORT, () => {
    console.log(`-------------------------------------------`);
    console.log(`MUTSDA CHURCH Maintenance Page is Live`);
    console.log(`Server running at: http://localhost:${PORT}`);
    console.log(`Powered by McOkoth Technologies`);
    console.log(`-------------------------------------------`);
});