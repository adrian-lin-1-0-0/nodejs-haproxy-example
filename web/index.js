const express = require('express');
const web = express();
const PORT = 8000
web.use(express.static('public'))
web.listen(PORT, () => {
    console.log(`web server starts listening on http://localhost:${PORT}`);
})