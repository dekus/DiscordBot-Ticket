const { RuoloStaff, PermessiInsufficienti } = require(`../../config.json`);

module.exports = {
    name: "sban",
    data: {
        name: "sban",
        description: "Bannare un utente",
        options: [
            {
                name: "user",
                description: "L'utente da bannare",
                type: "USER",
                required: true
            }
        ]
    },
    execute(interaction) {

        if (!interaction.member.roles.cache.has(RuoloStaff)) {
            return interaction.reply({ content: PermessiInsufficienti, ephemeral: true })
        }

        var utente = interaction.options.getUser("user")
        var member = interaction.guild.members.cache.get(utente.id)

        member.ban().then(() => interaction.reply("<@" + member + ">" + " è stato bannato"))
    }
}