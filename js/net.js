var tmi = require('tmi.js');

// Define configuration options
var opts = {
    options: {
        debug: true
    },
    connection: {
        reconnect: true
    },
    identity: {
        username: "Leveled22",
        password: "oauth:qj26e9v99aulexeswqh681umrg1uli",
    },
    channels: ['kickinkinger']
};

var client = new tmi.client(opts);

client.connect();

client.on("chat", (channel, user, message, self) => {
    if(self) return
})

function onInputEnter() {
    client.say('kickinkinger','hello world');
}