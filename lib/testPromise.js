let runner1 = require('part-1-task-2-test-1');
let runner2 = require('part-1-task-2-test-2');

function testPromise(runner, PromiseClass) {
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
        runner(adapter, (err) => resolve(err));
    });
}

module.exports = {
    run1: testPromise.bind(runner1),
    run2: testPromise.bind(runner2)
};
