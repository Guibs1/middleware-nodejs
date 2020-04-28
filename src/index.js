const jobs = require('./scheduler');

function start(element, index, array) {
    return element.start();
}

jobs.every(start);