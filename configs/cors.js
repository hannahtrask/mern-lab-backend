//whitelist is what is allowed to make API requests in production mode
//app is currently in DEVELOPMENT!!!
//in npm run dev, any source can make a request
let whiteList = ['url that is allowed', 'other url that is allowed']
const corsOptions = {
    origin: function (origin, callback) {
        //this if statement just checks if whitelist exists, if it returns -1, it doesn't
        if (whiteList.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('You\'ve been denied permission by CORS'))
        }
    }
}

module.exports = corsOptions