import express from 'express';

const app = express();
const PORT = 3000;

app.listen(PORT, (req, res) => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
