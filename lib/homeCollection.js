let fs = require('fs');
let path = require('path');
let SuperPromise = require('lib/SuperPromise');

const TWI_COLLECTION_FILE_PATH = path.join(__dirname, '..', 'home-collection.txt');

module.exports = {
    save: function (data) {
        return new SuperPromise((resolve, reject) => {
            fs.appendFile(TWI_COLLECTION_FILE_PATH, `${data}\n`, (err) => {
                if (err) {
                    return reject(err);
                }

                resolve();
            });
        });
    }
}
