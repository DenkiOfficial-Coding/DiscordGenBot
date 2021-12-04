// npmjs packages
const Discord = require('discord.js');
// configuration
const config = require('../config.json');
// export command
module.exports = {
    // command name
	name: 'cachdung',
    // command description
	description: 'Cách dùng tài khoản đã generate',
    // command
	execute(message) {
        // const commands
		const { commands } = message.client;
        // send message to channel
        message.channel.send(
            // embed
            new Discord.MessageEmbed()
            .setColor(config.color.default)
            .setTitle('Cách dùng')
            .setDescription('Sau khi generate tài khoản sẽ có dạng Thể loại: mail:pass \n Ta chỉ cần copy chúng lên trên trang web của tài khoản đó và tải launcher về là ok')
            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true, size: 64 }))
            .setTimestamp()
        );
	},
};