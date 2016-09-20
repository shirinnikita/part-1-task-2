let request = require('request');
let SuperPromise = require('lib/SuperPromise');

module.exports = {
    findTwit: function loadTwit(query) {
        return new SuperPromise((resolve, reject) => {
            request.get(`https://twitter.com/search/?q=${query}`, (err, response) => {
                if (err) {
                    return reject(err);
                }
                // resolve(response.body);
                resolve('Oy la la! This is some twit :|');
            });
        });
    }
}
