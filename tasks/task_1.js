let emailer = require('lib/emailer');
let homeCollection = require('lib/homeCollection');
let SuperPromise = require('lib/SuperPromise');
let twitterApi = require('lib/twitterApi');

let twitterLoading = twitterApi.findTwit('frontend');
let saving = twitterLoading.then(twit => homeCollection.save(twit));
let emailSending = twitterLoading.then(twit => emailer.sendEmail('granny666@gmail.com', twit));

SuperPromise
    .all([twitterLoading, saving, emailSending])
    .catch(err => { console.error(err); });
