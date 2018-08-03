const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');
const users = require('./routes/api/users');

var router = express.Router();

//const UserSession = require('./models/UserSession');

// import Profile from './pages/Profile';
// import Past from './pages/Past';
// import Upcoming from './pages/Upcoming';
// import Connection from './pages/Connection';

const app = express();

//Bodyparser Middleware
app.use(bodyParser.json());


//DB Config
const db = require('./config/keys').mongoURI;

//connect to mongo
mongoose
	.connect(db)
	.then(() => console.log('MongoDB Connected...'))
	.catch(err => console.log(err));


//use routes
app.use('/api/items', items);
app.use('/api/users', users);
// app.use('/AppRouter', appRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));



// //Profile page
// app.get('/profile', function (req, res) { 
//   res.render('profile', {
//   	title: 'Home'
//   });
// });
// //Past event page
// app.get('/past', function (req, res) { 
//   res.render('past', {
//   	title: 'past'
//   });
// });
// //Upcoming event (future event list)
// app.get('/upcoming', function (req, res) { 
//   res.render('upcoming', {
//   	title: 'upcoming'
//   });
// });
// //Connections (single list)
// app.get('/connection', function (req, res) { 
//   res.render('connection', {
//   	title: 'connection'
//   });
// });