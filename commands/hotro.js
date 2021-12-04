// npmjs packages
const Discord = require('discord.js');
// configuration
const config = require('../config.json');
// export command
module.exports = {
    // command name
	name: 'hotro',
    // command description
	description: 'List all commands.',
    // command
	execute(message) {
        // const commands
		const { commands } = message.client;
        // send message to channel
        message.channel.send(
            // embed
            new Discord.MessageEmbed()
            .setColor(config.color.default)
            .setTitle('Hỗ trợ')
            .setDescription(commands.map(c => `\`${config.prefix}${c.name}\` - \`${c.description ? c.description : 'No description provided!'}\``).join('\n'))
            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true, size: 64 }))
            .setTimestamp()
        );
	},
};