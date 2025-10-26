const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('public'));

app.post('/subscribe', (req, res) => {
  const { email } = req.body;

  if (!email || !email.includes('@')) {
    return res.json({ success: false, message: 'Please enter a valid email.' });
  }

  const filePath = path.join(__dirname, emails.txt);
  fs.appendFile(filePath, `${email}\n`, (err) => {
    if (err) {
      console.error('Error writing to file:', err);
      return res.json({ success: false, message: 'Server error. Try again later.' });
    }

    res.json({ success: true, message: '✅ Thanks! You’ll be notified when we launch.' });
  });
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
