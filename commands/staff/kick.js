module.exports = {
    name: "kick",
    data: {
        name: "kick",
        description: "Espellere un utente",
        options: [
            {
                name: "user",
                description: "L'utente da espellere",
                type: "USER",
                required: true
            },
            {
                name: "reason",
                description: "Motivazione",
                type: "STRING",
                required: false
            }
        ]
    },
    execute(interaction) {

        var utente = interaction.options.getUser("user")
        var reason = interaction.options.getString("reason") || "Nessun motivo"

        var member = interaction.guild.members.cache.get(utente.id)
        if (!member?.kickable) {
            return interaction.reply({ content: "Non posso kickare questo utente", ephemeral: true })
        }

        member.kick()

        var embed = new Discord.MessageEmbed()
            .setTitle("Utente kickato")
            .setThumbnail(utente.displayAvatarURL())
            .addField("User", utente.toString())
            .addField("Reason", reason)

        interaction.reply({ embeds: [embed] })
    }
}