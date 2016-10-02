let request = require('request');
request.get('https://api.vk.com/method/users.get?user_ids=210700286&fields=bdate&v=5.53', (err, response) => {
    console.log(err, response.body);
});
request.get('https://api.vk.com/method/users.get?user_ids=210700287&fields=bdate&v=5.53', (err, response) => {
    console.log(err, response.body);
});
request.get('https://api.vk.com/method/users.get?user_ids=210700288&fields=bdate&v=5.53', (err, response) => {
    console.log(err, response.body);
});
request.get('https://api.vk.com/method/users.get?user_ids=210700289&fields=bdate&v=5.53', (err, response) => {
    console.log(err, response.body);
});
