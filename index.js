const app = require('./app');
const db = require('./config/db');
const UserModel = require('./model/user.model');
const port = 3000;

app.get('/',(req,res)=>{
    res.send('Welcome Priyansh Srivastava!')
});

app.listen(port, () => {
    console.log(`Server Listening on Port http://localhost:${port}`);
});