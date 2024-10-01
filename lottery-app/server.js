const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 5000;

// Middleware to parse incoming requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files (HTML, CSS, JS)
app.use(express.static('public'));

// Predefined winning number (for demonstration purposes)
const winningNumber = 89;

// Route to handle lottery submission
app.post('/check-lottery', (req, res) => {
    const { lotteryNumber } = req.body;

    if (!lotteryNumber) {
        return res.status(400).json({ message: 'Please enter a lottery number.' });
    }

    // Check if user's number matches the winning number
    if (parseInt(lotteryNumber) === winningNumber) {
        res.json({ message: 'Congratulations! You are the winner!', winner: true });
    } else {
        res.json({ message: 'Sorry, better luck next time!', winner: false });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
