Примерные трудозатраты: 1-2 часа.

#### Часть 1
Вернемся на секундочку к истокам. Допустим, нам нужно сделать http-запрос за твитом, сохранить его к себе в коллекцию и переслать бабушке по email. Как это будет выглядеть на коллбеках? Откровенно говоря, не очень:
```
let fs = require('fs');
let http = require('http');
let emailer = require('emailer');
let path = require('path');

const TWI_COLLECTION_FILE_PATH = path.join(__dirname, 'my_precious.txt');

http.get('https://twitter.com/twit/123', (err, response) => {
    if (err) {
        return console.error(err);
    }

    fs.writeFile(TWI_COLLECTION_FILE_PATH, response.body.twit, (err) => {
        if (err) {
            return console.error(err);
        }

        emailer.email('granny666@gmail.com', twit, (err) => {
            if (err) {
                return console.error(err);
            }
        });
    });
});
```

В первую очередь, обидно за такую большую связность компонентов. Мы строго задали последовательность шагов, и менять порядок действий не очень сподручно.

Кроме того, обработку ошибок (в нашем случае это просто логгирование) приходится всовывать прямо в основную логику, что в какой-то момент тоже надоест.

Поэтому ученые изобрели промисы. Они не только позволяют делать вызовы независимыми друг от друга, но и добавляют им смысла.

По сути, Promise — это обертка над данными, которые получаются в результате каких-то операций. Это своего рода `Result` тип, который может содержать либо данные, либо ошибку, доступ к которым слегка неудобен из-за того, что операции выполняются асинхронно.


```
let fs = require('fs');
let http = require('http');
let emailer = require('emailer');
let path = require('path');

const TWI_COLLECTION_FILE_PATH = path.join(__dirname, 'my_precious.txt');

var twitterReceiving = loadTwit('123');
var twitterSaving = twitterReceiving.then(saveTwitToCollection);
var twitterSending = twitterSaving.then(sendToGrandma);

function loadTwit(twitId) {
    return new SuperPromise((resolve, reject) => {
        http.get(`https://twitter.com/twit/${twitId}`, (err, response) => {
            if (err) {
                return reject(err);
            }

            resolve(response);
        });
    });
}

function saveTwitToCollection(twit) {
    return new SuperPromise((resolve, reject) => {
        fs.writeFile(TWI_COLLECTION_FILE_PATH, response.body.twit, (err) => {
            if (err) {
                return reject(err);
            }

            resolve();
    });
}

function sendToGrandma() {
    return new SuperPromise((resolve, reject) => {
        emailer.email('granny666@gmail.com', twit, (err) => {
            if (err) {
                return reject(err);
            }

            resolve();
        });
    });
}
```

Получилось немного громоздко, но теперь функция sendToGrandma подходит не только для отправки твитов, но и гифок!
