module.exports = {
    name: "assistenza",
    data: {
        name: "assistenza",
        description: "Assistenza"
    },
    execute(interaction) {
        interaction.message.channel.send("Hey , hai appena chiesto supporto da parte di uno <@&1023957445002919997>  Appena sarà disponibile ti aiuterà")
    }
}