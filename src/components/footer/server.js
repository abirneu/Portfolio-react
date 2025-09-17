const express = require('express');
const fs = require('fs');
const cors = require('cors'); // Install with: npm install cors

const app = express();
const PORT = 3001;
const dbFilePath = './views.json';

app.use(cors());

// Check if views.json exists, if not, create it
if (!fs.existsSync(dbFilePath)) {
    fs.writeFileSync(dbFilePath, JSON.stringify({ count: 0 }));
}

// API endpoint to get and increment views
app.get('/api/views', (req, res) => {
    try {
        const data = JSON.parse(fs.readFileSync(dbFilePath, 'utf8'));
        let currentCount = data.count;

        // Increment the count
        currentCount += 1;

        // Save the new count
        fs.writeFileSync(dbFilePath, JSON.stringify({ count: currentCount }));

        res.json({ views: currentCount });
    } catch (error) {
        console.error('Error handling views:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});