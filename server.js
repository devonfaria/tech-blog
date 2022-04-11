// Importing required modules
const path = require('path');
const routes = require('./controllers');
const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const sequelize = require('./config/connection')
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const helpers = require('./utils/helpers');

// Initializing Express, Handlebars, and PORT
const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: '15267899-eb9e-4b69-ba46-7a6a85efddba',
  cookie: {
    maxAge: 86400,
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

// Initializes the cookie session
app.use(session(sess));

// Setting Handlebars as the template engine
const hbs = exphbs.create({ helpers });
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Now listening at http://localhost:${PORT}`);
  });
});