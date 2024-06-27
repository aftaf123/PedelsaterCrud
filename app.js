const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require('./database/db');
const path = require("path");
const taskRoutes = require('./routes/tasks');



const app = express();
const PORT = process.env.PORT || 3000;

// Connect to the database
connectDB();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Routes
app.use('/', taskRoutes);

app.listen(PORT, (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log(`Server is started at port no ${PORT}`);
    }
})