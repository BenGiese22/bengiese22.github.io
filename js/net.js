var tmi = require('tmi.js');

// Define configuration options
var opts = {
    identity: {
        username: "Leveled22",
        password: "oauth:qj26e9v99aulexeswqh681umrg1uli",
    },
    channels: [
        "kickinkinger"
    ]
};

var client = new tmi.client(opts);

client.connect();

client.say("kickinkinger","Hello world");