// npmjs packages
const Discord = require('discord.js');
// configuration
const config = require('../config.json');
// export command
module.exports = {
    // command name
	name: 'cachlay',
    // command description
	description: 'Cách lấy tài khoản',
    // command
	execute(message) {
        // const commands
		const { commands } = message.client;
        // send message to channel
        message.channel.send(
            // embed
            new Discord.MessageEmbed()
            .setColor(config.color.default)
            .setTitle('Cách lấy')
            .setDescription('Ghi && + thể loại \n Ví dụ: &&taikhoan minecraft và &&taikhoan nordvpn \n Sau đó nếu thành công, hãy check DMs để nhận tài khoản. Nếu thất bại, hãy DMs + gửi lỗi cho Denki để fix')
            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true, size: 64 }))
            .setTimestamp()
        );
	},
};