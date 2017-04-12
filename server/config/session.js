const session = require('express-session');
const connection = require('./connection');
const MySQLStore = require('express-mysql-session')(session);

const options = {
    createDatabaseTable: true,// Whether or not to create the sessions database table, if one does not already exist.
    schema: {
        tableName: 'sessions',
        columnNames: {
            session_id: 'session_id',
            expires: 'expires',
            data: 'data'
        }
    }

};

var sessionStore = new MySQLStore(options, connection);
module.exports = session({
    key: 'session_cookie_name',
    secret: 'session_cookie_secret',
    store: sessionStore,
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: new Date(Date.now() + 8600000) }

});
