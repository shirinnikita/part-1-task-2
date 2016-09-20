var SuperPromise = require('lib/SuperPromise');
var promenade = require('lib/promenade');

SuperPromise.queue([
    promenade.release.bind(null, 'BEARS'),
    promenade.release.bind(null, 'CAT'),
    promenade.release.bind(null, 'MOSQUITOS'),
    promenade.release.bind(null, 'DOTA_2_PLAYERS'),
    promenade.release.bind(null, 'WOLVES'),
    promenade.release.bind(null, 'LIONS'),
    promenade.release.bind(null, 'HARES'),
    promenade.release.bind(null, 'TOAD'),
    promenade.finalize
]);
