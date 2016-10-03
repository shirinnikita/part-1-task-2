let homeCollection = require('lib/homeCollection');
let SuperPromise = require('lib/SuperPromise');
let vkApi = require('lib/vkApi');

vkApi
    .then((user) => {
        if (!user.bdate) {
            return SuperPromise.complete;
        }

        return user;
    })
    .then((user) => homeCollection.save(user))
    .catch(err => console.error(err));

// Или

new SuperPromise((resolve, reject, complete) => {
    vkApi
        .then((user) => {
            if (!user.bdate) {
                complete();
            }

            resolve(user);
        })
        .catch((err) => reject(err));
})
    .then((user) => homeCollection.save(user))
    .catch(err => console.error(err));
