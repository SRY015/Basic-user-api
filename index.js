const app = require('./app');
const config = require('./config/config');


const PORT = config.app.port;  // This port is coming from config.js file.

app.listen(PORT, ()=>{
    console.log(`Server is running successfully at http://localhost:${PORT}`);
});