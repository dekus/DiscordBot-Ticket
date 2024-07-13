const { RuoloStaff, PermessiInsufficienti } = require(`../../config.json`);

module.exports = {
    name: "clear",
    data: {
        name: "clear",
        description: "Cancella dei messaggi!",
        options: [
            {
                name: "text",
                description: "Cancella chat",
                type: "NUMBER",
                required: true
            }
        ]
    },
    execute(interaction) {
        if (!interaction.member.roles.cache.has(RuoloStaff)) {
            return interaction.reply({ content: PermessiInsufficienti, ephemeral: true })
        }

        let count = interaction.options.getNumber(`text`)

        interaction.channel.bulkDelete(count, true)
        interaction.reply({content: `${count.toString()} messaggi eliminati`, ephemeral: true})
    }
}