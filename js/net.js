let target_channel;

function say_in_chat() {
    var msg = document.getElementById('message').value;
    client.say(target_channel, msg);
    document.getElementById('message').value = '';
}

function login() {
    var user = document.getElementById('username').value;
    var pass = document.getElementById('password').value;
    var channel = document.getElementById('channel').value;
    new_sign_in(user, pass, channel);
}

function new_sign_in(user, pass, channel) {
    target_channel = channel;
    opt = {
        options: {
            debug: true
        },
        connection: {
            secure: true,
            reconnect: true
        },
        identity: {
            username: user,
            password: pass
        },
        channels: [channel]
    };
    client = new tmi.client(opt);
    client.connect();
}
