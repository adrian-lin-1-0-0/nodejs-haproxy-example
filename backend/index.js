const express = require('express');
const app = express();
const PORT = 4000
app.get('/data', (req, res) => {
    const data = { message: 'example data' };
    res.status(401).json(data);
});
app.listen(PORT, () => {
    console.log(`api server starts listening on http://localhost:${PORT}`);
});
