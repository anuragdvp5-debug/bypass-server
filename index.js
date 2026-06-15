const express = require('express');
const app = express();

app.get('/userinfo/.register', (req, res) => {
    // Ye tumhara permanent bypass response hai
    const bypassResponse = {
        "success": true
    };
    
    console.log("[+] Sending Bypass Response to App...");
    res.json(bypassResponse);
});

// Ye part zaruri hai Render ke liye
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is live on port ${PORT}`);
});
