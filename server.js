// Importing required modules
const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const sequelize = require('./config/connection')
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const routes = require('./controllers');

// Initializing Express, Handlebars, and PORT
const app = express();
const hbs = exphbs.create({});
const PORT = process.env.PORT || 3001;

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(routes);

// Defines the current session
const sess = {
  secret: '15267899-eb9e-4b69-ba46-7a6a85efddba',
  cookie: {
    // Length of each login session
    maxAge: 3600,
    // makes cross-site scripting attacks (XSS) impossible
    httpOnly: true,
    // requires https or not
    secure: false,
    // cookie only applies to this application
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  // Sets up session store
  store: new SequelizeStore({
    db: sequelize,
  }),
};

// Initializes the cookie session
app.use(session(sess));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Now listening at http://localhost:${PORT}`);
  });
});