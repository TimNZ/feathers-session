
const expressSession = require('express-session');
const merge = require('lodash.merge');
const pick = require('lodash.pick');
const omit = require('lodash.omit');

const defaults = {
    secret: 'asecret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false}
}
function init(options = {})
{
    
    return function()
    {
        // Express app
        let opts = merge({},defaults,options);
        const app = this;
        app.set('trust proxy',1);
        app.use(expressSession(opts));
        let store = opts.store;
        app.on('login',(result,meta) => {
            let accessToken = result.accessToken;
            // Link to a session for caller
            // May not have a session if not called from browser
        })
        app.on('logout',(result,meta) => {
            let accessToken = result.accessToken;
            // Link to a session for caller
            // May not have a session if not called from browser
            
        })

    }
}
module.exports = init;
Object.assign(module.exports, {
    Store: expressSession.Store
})