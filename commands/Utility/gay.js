const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const Color = `RANDOM`;

    module.exports = {
    name: "gay",
    aliases: null,
    category: "utility",
    description: "Pride Image",
    usage: "gay",
    accessableby: "everyone",
    run: async (client, message, args) => {

        //Start

        let Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        if (!Member) return message.channel.send(`Invalid User!`);

        let Embed = new MessageEmbed()
        .setColor(Color)
        .setImage(`https://some-random-api.ml/canvas/gay?avatar=${Member.user.displayAvatarURL({ format: "png" })}`)
        .setTimestamp();

        return message.channel.send(Embed);

        //End

    }
};