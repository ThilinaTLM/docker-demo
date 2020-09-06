const express = require('express');

const PORT = process.env.PORT || 8080
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to Docker!')
})

app.listen(PORT, () => console.log(`app is listening on port ${PORT}`));