// npmjs packages
const Discord = require('discord.js');
// configuration
const config = require('../config.json');
// export command
module.exports = {
    // command name
	name: 'danhsach',
    // command description
	description: 'Danh sách tài khoản có thể generate',
    // command
	execute(message) {
        // const commands
		const { commands } = message.client;
        // send message to channel
        message.channel.send(
            // embed
            new Discord.MessageEmbed()
            .setColor(config.color.default)
            .setTitle('Danh sách')
            .setDescription('Các tài khoản có thể generate gồm: Minecraft, NordVPN')
            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true, size: 64 }))
            .setTimestamp()
        );
	},
};