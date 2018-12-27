const http = require("http");
const conf = require('./conf/default.conf');

const options = {
    host: "localhost",
    port: conf.express.port,
    timeout: 2000
};

let request = http.request(options, (res) => {
    console.info(`STATUS: ${res.statusCode}`);
    if (res.statusCode == 200) {
        process.exit(0);
    } else {
        process.exit(1);
    }
});

request.on('error', (err) => {
    console.error('ERROR: unexpected error, please check the logs');
    process.exit(1);
});

request.end();