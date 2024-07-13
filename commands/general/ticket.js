const { RuoloStaff, PermessiInsufficienti } = require(`../../config.json`);

module.exports = {
    name: "ticket",
    data: {
        name: "ticket",
        description: "Pannello Ticket"
    },
    execute(interaction) {
        if (!interaction.member.roles.cache.has(RuoloStaff)) {
            return interaction.reply({ content: PermessiInsufficienti, ephemeral: true })
        }
        
        var embed = new Discord.MessageEmbed()
        .setAuthor({ name: 'FP$',iconURL: 'https://cdn.discordapp.com/attachments/1026064523221794877/1038073677629095976/XiolaEdits_Gif_Snail-V5.gif' })
            .setDescription(`
                Seleziona uno dei pulsanti presenti qui sotto in base alle tue esigenze!

                ❓**| Generale**
                Per qualsiasi dubbio apri questo ticket!
                📣**| Partner**
                Se vuoi iniziare una partner apri questo ticket!
                📋**| Match ** 
                Se vuoi chiedere una wager contro FP$ apri ticket!
                ✏️**| GFX - VFX**
                Se vuoi candidarti come GFX - VFX apri ticket!

            `)
            .setThumbnail("https://media.discordapp.net/attachments/1026064523221794877/1026065015796670594/FPS.png?width=1202&height=676")
            .setColor("36393F")
            .setFooter({ text: 'Developed by deku#0005', iconURL: 'https://cdn.discordapp.com/attachments/1026064523221794877/1038073677629095976/XiolaEdits_Gif_Snail-V5.gif'})
            .setTimestamp() 
            
        var button1 = new Discord.MessageButton()
            .setLabel("❓| Generale")
            .setCustomId("apriTicket")
            .setStyle("SECONDARY")
        var button2 = new Discord.MessageButton()
            .setLabel("📣| Partner")
            .setCustomId("apriTicket2")
            .setStyle("SECONDARY")
        var button3 = new Discord.MessageButton()
            .setLabel("📋| Match")
            .setCustomId("apriTicket3")
            .setStyle("SECONDARY")
        var button4 = new Discord.MessageButton()
            .setLabel("✏️| GFX")
            .setCustomId("apriTicket4")
            .setStyle("SECONDARY")

        var row = new Discord.MessageActionRow()
            .addComponents(button1)
            .addComponents(button2)
            .addComponents(button3)
            .addComponents(button4)

            interaction.channel.send({embeds: [embed], components: [row]})
    }
}