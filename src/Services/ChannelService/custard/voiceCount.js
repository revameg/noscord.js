const ChannelService = require('../index.js');
const { Soup } = require('stews');


ChannelService.newF("voiceCount", async function(guild=null) {
    return new Soup( await ( (guild) ? guild.channels : this.parent.shit.channels)
        .fetch()
        .catch(e=>{})
    )
		.filter( (id, channel) => { return channel.type == 2; })
		.length;
});