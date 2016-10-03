let promisesTestRunner = require('promises-aplus-tests');

function testPromise(PromiseClass) {
    // Создаем адаптер для запуска базовых тестов
    let adapter = {
        resolved: (value) => PromiseClass.resolve(value),
        rejected: (value) => PromiseClass.reject(value),
        deferred: () => {
            let deferred = {};

            deferred.promise = new PromiseClass((resolve, reject) => {
                deferred.resolve = resolve;
                deferred.reject = reject;
            });

            return deferred;
        }
    };

    return new Promise((resolve, reject) => {
        promisesTestRunner(adapter, (err) => resolve(err));
    });
}

module.exports = testPromise;
