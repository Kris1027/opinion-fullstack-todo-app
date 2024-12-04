import { app } from './index.js';

const startServer = () => {
    const PORT = 3000;

    app.listen(PORT, () => {
        console.log(`Server is running at http://localhost:${PORT}`);
    });
};

export default startServer;
