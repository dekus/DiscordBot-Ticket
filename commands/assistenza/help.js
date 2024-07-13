module.exports = {
    name: "help",
    data: {
        name: "help",
        description: "Info comandi del Bot"
    },
    execute(interaction) {
        var embed = new Discord.MessageEmbed()
        .setTitle("SMOKE")
        .setDescription(` COMANDI PER GLI UTENTI

**・!help**
ᴄᴏᴍᴀɴᴅɪ ᴘᴇʀ ɢʟɪ ᴜᴛᴇɴᴛɪ

**・!youtube**
ʏᴏᴜᴛᴜʙᴇ

**・!tiktok**
ᴄᴀɴᴀʟᴇ ᴛᴡɪᴛᴄʜ

`)
        

    interaction.reply({ embeds: [embed] })
    }
}