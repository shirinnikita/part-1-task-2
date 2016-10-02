let emailer = require('lib/emailer');
let homeCollection = require('lib/homeCollection');
let SuperPromise = require('lib/SuperPromise');
let vkApi = require('lib/vkApi');

let vkApiRequest = vkApi.vkProfile('eandreyf');
let saving = vkApiRequest.then(twit => homeCollection.save(twit));
let emailSending = vkApiRequest.then(twit => emailer.sendEmail('granny666@gmail.com', twit));

SuperPromise
    .all([vkApiRequest, saving, emailSending])
    .catch(err => { console.error(err); });
