class Channel {
  constructor(username, password, channel) {
    this.username = username;
    this.password = password;
    this.channel = channel;
    this.client;
  }

  login() {
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

  message(message) {
    client.say(this.channel, message);
  }

}
