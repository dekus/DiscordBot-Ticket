global.Discord = require('discord.js');
const client = new Discord.Client({
    intents: 32767
})
const { token, ChatComandoWl, prefix, coloreEmbed, CategoriaTicket, CategoriaTicket2, CategoriaTicket3, CategoriaTicket4, RuoloVerifica, RuoloStaff, CanaleBenvenuto } = require(`./config.json`);


client.login(token);

client.on("ready", () => {
    console.log("ONLINE");
})
client.on('ready', () => {
    //Stato classico (Sta guardando..., Sta giocando a...)


})

/*client.on('interactionCreate', async (interaction) => {
    if (interaction.customId == 'VeriUtente') {
        interaction.reply({ content: `Sei stato verificato!`, ephemeral: true });
        const role = interaction.guild.roles.cache.get(RuoloVerifica)
        const member = interaction.member
        await member.roles.add(role)
    }
})*/

client.on("interactionCreate", interaction => {
    if (interaction.customId == "apriTicket") {
        interaction.deferUpdate()
        if (interaction.guild.channels.cache.find(canale => canale.topic == `User ID: ${interaction.user.id}`)) {
            interaction.user.send("Hai gia un ticket aperto").catch(() => { })
            return
        }
        interaction.guild.channels.create(`ticket-${interaction.user.username}`, {
            type: "GUILD_TEXT",
            topic: `User ID: ${interaction.user.id}`,
            parent: CategoriaTicket, //Settare la categoria,
            permissionOverwrites: [
                {
                    id: interaction.guild.id,
                    deny: ["VIEW_CHANNEL"]
                },
                {
                    id: interaction.user.id,
                    allow: ["VIEW_CHANNEL"]
                },
                { 
                    id: RuoloStaff,
                    allow: ["VIEW_CHANNEL"]
                }
            ]
        }).then(canale => {


            const embed2 = new Discord.MessageEmbed()

            .setDescription(`Ticket Aperto con successo! \nVai nel seguente Canale: <#${canale.id}>`)
            .setColor("#ff0000")
            .setFooter({ text: 'FP$', iconURL: 'https://media.discordapp.net/attachments/1026064523221794877/1038073677629095976/XiolaEdits_Gif_Snail-V5.gif'})
            .setTimestamp() 


            interaction.followUp({ embeds: [embed2], ephemeral: true })

            
            var button1 = new Discord.MessageButton()
            .setLabel("Chiudi Ticket")
            .setCustomId("chiudiTicket")
            .setStyle("DANGER")
            var embed = new Discord.MessageEmbed()
            .setTitle("Hai aperto un ticket")
            .setDescription("Grazie per aver aperto il ticket!\n Aspetta che uno <@&1023957445002919997>  ti assista, nel mentre esponi la motivazione del perchè hai aperto il ticket!")
            .setThumbnail(`https://media.discordapp.net/attachments/1026064523221794877/1038073677629095976/XiolaEdits_Gif_Snail-V5.gif`)
            .setColor("#23272a")
            var row = new Discord.MessageActionRow()
            .addComponents(button1)
            canale.send({embeds: [embed], components: [row]})
        })
    }

    if (interaction.customId == "apriTicket2") {
        interaction.deferUpdate()
        if (interaction.guild.channels.cache.find(canale => canale.topic == `User ID: ${interaction.user.id}`)) {
            interaction.user.send("Hai gia un ticket aperto").catch(() => { })
            return
        }
        interaction.guild.channels.create(`ticket-${interaction.user.username}`, {
            type: "GUILD_TEXT",
            topic: `User ID: ${interaction.user.id}`,
            parent: CategoriaTicket2, //Settare la categoria,
            permissionOverwrites: [
                {
                    id: interaction.guild.id,
                    deny: ["VIEW_CHANNEL"]
                },
                {
                    id: interaction.user.id,
                    allow: ["VIEW_CHANNEL"]
                },
                { 
                    id: RuoloStaff,
                    allow: ["VIEW_CHANNEL"]
                }
            ]
        }).then(canale => {

            const embed2 = new Discord.MessageEmbed()

            .setDescription(`Ticket Aperto con successo! \nVai nel seguente Canale: <#${canale.id}>`)
            .setColor("#ff0000")
            .setFooter({ text: 'FP$', iconURL: 'https://media.discordapp.net/attachments/1026064523221794877/1038073677629095976/XiolaEdits_Gif_Snail-V5.gif'})
            .setTimestamp() 


            interaction.followUp({ embeds: [embed2], ephemeral: true })

            var button1 = new Discord.MessageButton()
            .setLabel("Chiudi Ticket")
            .setCustomId("chiudiTicket")
            .setStyle("DANGER")
            var embed = new Discord.MessageEmbed()
            .setTitle("Hai aperto un ticket")
            .setDescription("Grazie per aver aperto il ticket!\n Aspetta che uno <@&1023957445002919997>  ti assista, nel mentre esponi la motivazione del perchè hai aperto il ticket!")
            .setThumbnail(`https://media.discordapp.net/attachments/1026064523221794877/1038073677629095976/XiolaEdits_Gif_Snail-V5.gif`)
            .setColor("#23272a")
            var row = new Discord.MessageActionRow()
            .addComponents(button1)
            canale.send({embeds: [embed], components: [row]})
        })
    }

    if (interaction.customId == "apriTicket3") {
        interaction.deferUpdate()
        if (interaction.guild.channels.cache.find(canale => canale.topic == `User ID: ${interaction.user.id}`)) {
            interaction.user.send("Hai gia un ticket aperto").catch(() => { })
            return
        }
        interaction.guild.channels.create(`ticket-${interaction.user.username}`, {
            type: "GUILD_TEXT",
            topic: `User ID: ${interaction.user.id}`,
            parent: CategoriaTicket3, //Settare la categoria,
            permissionOverwrites: [
                {
                    id: interaction.guild.id,
                    deny: ["VIEW_CHANNEL"]
                },
                {
                    id: interaction.user.id,
                    allow: ["VIEW_CHANNEL"]
                },
                { 
                    id: RuoloStaff,
                    allow: ["VIEW_CHANNEL"]
                }
            ]
        }).then(canale => {

            const embed2 = new Discord.MessageEmbed()

            .setDescription(`Ticket Aperto con successo! \nVai nel seguente Canale: <#${canale.id}>`)
            .setColor("#ff0000")
            .setFooter({ text: 'FP$', iconURL: 'https://media.discordapp.net/attachments/1026064523221794877/1038073677629095976/XiolaEdits_Gif_Snail-V5.gif'})
            .setTimestamp() 


            interaction.followUp({ embeds: [embed2], ephemeral: true })

            var button1 = new Discord.MessageButton()
            .setLabel("Chiudi Ticket")
            .setCustomId("chiudiTicket")
            .setStyle("DANGER")
            var embed = new Discord.MessageEmbed()
            .setTitle("Hai aperto un ticket")
            .setDescription("Grazie per aver aperto il ticket!\n Aspetta che uno <@&1023957445002919997>  ti assista, nel mentre esponi la motivazione del perchè hai aperto il ticket!")
            .setThumbnail(`https://media.discordapp.net/attachments/1026064523221794877/1038073677629095976/XiolaEdits_Gif_Snail-V5.gif`)
            .setColor("#23272a")
            var row = new Discord.MessageActionRow()
            .addComponents(button1)
            canale.send({embeds: [embed], components: [row]})
        })
    }

    if (interaction.customId == "apriTicket4") {
        interaction.deferUpdate()
        if (interaction.guild.channels.cache.find(canale => canale.topic == `User ID: ${interaction.user.id}`)) {
            interaction.user.send("Hai gia un ticket aperto").catch(() => { })
            return
        }
        interaction.guild.channels.create(`ticket-${interaction.user.username}`, {
            type: "GUILD_TEXT",
            topic: `User ID: ${interaction.user.id}`,
            parent: CategoriaTicket4, //Settare la categoria,
            permissionOverwrites: [
                {
                    id: interaction.guild.id,
                    deny: ["VIEW_CHANNEL"]
                },
                {
                    id: interaction.user.id,
                    allow: ["VIEW_CHANNEL"]
                },
                { 
                    id: RuoloStaff,
                    allow: ["VIEW_CHANNEL"]
                }
            ]
        }).then(canale => {


            const embed2 = new Discord.MessageEmbed()

            .setDescription(`Ticket Aperto con successo! \nVai nel seguente Canale: <#${canale.id}>`)
            .setColor("#ff0000")
            .setFooter({ text: 'FP$', iconURL: 'https://media.discordapp.net/attachments/1026064523221794877/1038073677629095976/XiolaEdits_Gif_Snail-V5.gif'})
            .setTimestamp() 


            interaction.followUp({ embeds: [embed2], ephemeral: true })

            var button1 = new Discord.MessageButton()
            .setLabel("Chiudi Ticket")
            .setCustomId("chiudiTicket")
            .setStyle("DANGER")
            var embed = new Discord.MessageEmbed()
            .setTitle("Hai aperto un ticket")
            .setDescription("Grazie per aver aperto il ticket!\n Aspetta che uno <@&1023957445002919997>  ti assista, nel mentre esponi la motivazione del perchè hai aperto il ticket!")
            .setThumbnail(`https://media.discordapp.net/attachments/1026064523221794877/1038073677629095976/XiolaEdits_Gif_Snail-V5.gif`)
            .setColor("#23272a")
            var row = new Discord.MessageActionRow()
            .addComponents(button1)
            canale.send({embeds: [embed], components: [row]})
        })
    }

    if (interaction.customId == "apriTicket5") {
        interaction.deferUpdate()
        if (interaction.guild.channels.cache.find(canale => canale.topic == `User ID: ${interaction.user.id}`)) {
            interaction.user.send("Hai gia un ticket aperto").catch(() => { })
            return
        }
        interaction.guild.channels.create(`ticket-${interaction.user.username}`, {
            type: "GUILD_TEXT",
            topic: `User ID: ${interaction.user.id}`,
            parent: CategoriaTicket5, //Settare la categoria,
            permissionOverwrites: [
                {
                    id: interaction.guild.id,
                    deny: ["VIEW_CHANNEL"]
                },
                {
                    id: interaction.user.id,
                    allow: ["VIEW_CHANNEL"]
                },
                { 
                    id: RuoloStaff,
                    allow: ["VIEW_CHANNEL"]
                }
            ]
        }).then(canale => {


            const embed2 = new Discord.MessageEmbed()

            .setDescription(`Ticket Aperto con successo! \nVai nel seguente Canale: <#${canale.id}>`)
            .setColor("#ff0000")
            .setFooter({ text: 'FP$', iconURL: 'https://media.discordapp.net/attachments/1026064523221794877/1038073677629095976/XiolaEdits_Gif_Snail-V5.gif'})
            .setTimestamp() 


            interaction.followUp({ embeds: [embed2], ephemeral: true })

            var button1 = new Discord.MessageButton()
            .setLabel("Chiudi Ticket")
            .setCustomId("chiudiTicket")
            .setStyle("DANGER")
            var embed = new Discord.MessageEmbed()
            .setTitle("Hai aperto un ticket")
            .setDescription("Grazie per aver aperto il ticket!\n Aspetta che uno <@&1023957445002919997>  ti assista, nel mentre esponi la motivazione del perchè hai aperto il ticket!")
            .setThumbnail(`https://media.discordapp.net/attachments/1026064523221794877/1038073677629095976/XiolaEdits_Gif_Snail-V5.gif`)
            .setColor("#23272a")
            var row = new Discord.MessageActionRow()
            .addComponents(button1)
            canale.send({embeds: [embed], components: [row]})
        })
    }
})

client.on("interactionCreate", interaction => {
    if (interaction.customId == "chiudiTicket") {
        if (!interaction.member.roles.cache.some(role => role.id === RuoloStaff)) return interaction.reply({content: "Non puoi chiudere questo ticket", ephemeral: true})
        interaction.reply({
           content: "**Chiusura ticket fra 10 secondi...**"
        })
        setTimeout(() => {
            interaction.channel.delete();
        }, 10000)
    }
})

//Module export
const fs = require("fs")
client.commands = new Discord.Collection();

const commandsFolder = fs.readdirSync("./commands");
for (const folder of commandsFolder) {
    const commandsFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith(".js"));
    for (const file of commandsFiles) {
        const command = require(`./commands/${folder}/${file}`);
        client.commands.set(command.name, command);
    }
}

// Events
const eventFiles = fs.readdirSync(`./events/`).filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
  const event = require(`./events/${file}`);
  client.on(event.name, (...args) => event.execute(...args, client));
};

client.on("ready", () => {
    client.guilds.cache.forEach(guild => {
        client.commands.forEach(command => {
            guild.commands.create(command.data)
        })
    })
})

client.on("interactionCreate", interaction => {
    if (!interaction.isCommand()) return

    const command = client.commands.get(interaction.commandName)
    if (!command) return

    command.execute(interaction)
})
client.on("messageCreate", async (message) => {
    if (message.author.bot) return
    let messaggio = message.content.toLowerCase().split(' ')
    if (messaggio[0].startsWith(prefix)) {
        if (messaggio[0].length < 2) return
        if (message.channel.type !== "GUILD_TEXT") return
        if (message.channel.id === ChatComandoWl) {
            let comando = messaggio[0].replace(prefix, '')
            let test = false
            if (comando === "whitelist") {
                const embed1 = new MessageEmbed()
                    .setColor(coloreEmbed)
                    .setTitle('Modulo inviato in DM!')
                    .setTimestamp()
                    .setFooter({ text: `${client.user.username}`, iconURL: `${client.user.displayAvatarURL()}` });
                let a = await message.channel.send({ content: `${message.author.toString()}`, embeds: [embed1] })
                setTimeout(async () => {
                    a.delete()
                    message.delete()
                }, 5000)
                await message.author.createDM({ force: true })
                const { domanda1, domanda2, domanda3, domanda4, domanda5, domanda6, domanda7, domanda8, domanda9, domanda10 } = require('./config.json')
                const embed = new MessageEmbed()
                    .setColor(coloreEmbed)
                    .setTitle('Benvenuto! Rispondi a queste 10 domande per provare a ottenere la Whitelist.\nAttenzione: rispondi in un solo messaggio.')
                    .setDescription(`${domanda1}${domanda2}${domanda3}${domanda4}${domanda5}${domanda6}${domanda7}${domanda8}${domanda9}${domanda10}`)
                    .setTimestamp()
                    .setFooter({ text: `${client.user.username}`, iconURL: `${client.user.displayAvatarURL()}` });
                const embed2 = new MessageEmbed()
                    .setColor(coloreEmbed)
                    .setTitle('ATTENZIONE! Hai 10 minuti per rispondere.')
                    .setTimestamp()
                    .setFooter({ text: `${client.user.username}`, iconURL: `${client.user.displayAvatarURL()}` });
                let membro = await message.guild.members.fetch(message.author.id)
                message.channel.permissionOverwrites.edit(membro, { 'SEND_MESSAGES': false }).catch(() => { })
                let b = await message.author.send({ content: `${message.author.toString()}`, embeds: [embed, embed2] }).catch(async (error) => {
                    if (error) {
                        const embed = new MessageEmbed()
                            .setColor(coloreEmbed)
                            .setTitle('Errore! Devi attivare i DM.')
                            .setDescription('*Fai tasto destro sul server e premi "Impostazioni privacy".*')
                            .setImage('https://i.imgur.com/7WZPlgz.png')
                            .setTimestamp()
                            .setFooter({ text: `${client.user.username}`, iconURL: `${client.user.displayAvatarURL()}` });
                        let a = await message.channel.send({ content: `${message.author.toString()}`, embeds: [embed] })
                        while (a) {
                            setTimeout(async () => {
                                await a.delete()
                                await message.delete()
                            }, 5000)
                        }
                    }
                })
                setTimeout(async () => {
                    let a = await message.author.dmChannel.messages.fetch({ force: true })
                    let b = a.filter(message => message.author.id === client.user.id)
                    const title = b.at(0).embeds[0].title
                    if (title !== `Modulo inviato! Gli staffer decideranno l'esito.`) {
                        if (title !== `Modulo inviato! Gli staffer decideranno l'esito.`) {
                            if (title !== `Modulo inviato! Gli staffer decideranno l'esito.`) {
                                await b.delete()
                                const embed3 = new MessageEmbed()
                                    .setColor(coloreEmbed)
                                    .setTitle('Hai finito il tempo!')
                                    .setTimestamp()
                                    .setFooter({ text: `${client.user.username}`, iconURL: `${client.user.displayAvatarURL()}` });
                                await message.author.createDM({ force: true }).catch(() => { })
                                await message.author.send({ embeds: [embed3] }).catch(() => { })
                            }
                        }
                    }
                }, 600000)
            } else {
                await message.delete()
            }
        } else {
            await message.delete()
        }
    }
    if (message.channel.type === "DM") {
        let a = await message.channel.messages.fetch({ force: true })
        let b = a.filter(message => message.author.id === client.user.id)
        if (b.at(0).content === `<@${message.author.id}>`) {
            const embed4 = new MessageEmbed()
                .setColor(coloreEmbed)
                .setTitle('Modulo inviato! Gli staffer decideranno l\'esito.')
                .setTimestamp()
                .setFooter({ text: `${client.user.username}`, iconURL: `${client.user.displayAvatarURL()}` });
            await message.author.createDM({ force: true }).catch(() => { })
            await message.author.send({ embeds: [embed4] }).catch(() => { })
            const { CanaleRisposteWl, RuoloStaff, serverId } = require('./config.json')
            const embed5 = new MessageEmbed()
                .setColor(coloreEmbed)
                .setTitle(`Nuova Whitelist`)
                .setDescription(`**Da ${message.author.toString()} **\n*${message.content}*`)
                .setTimestamp()
                .setFooter({ text: `${client.user.username}`, iconURL: `${client.user.displayAvatarURL()}` });
            const row = new MessageActionRow()
                .addComponents(
                    new MessageButton()
                        .setCustomId('accetta')
                        .setLabel('Accetta')
                        .setStyle('SUCCESS'),
                )
                .addComponents(
                    new MessageButton()
                        .setCustomId('rifiuta')
                        .setLabel('Rifiuta')
                        .setStyle('DANGER'),
                )
            let canale = await client.channels.fetch(CanaleRisposteWl)
            canale.send({ content: `<@&${RuoloStaff}>`, embeds: [embed5], components: [row] })
        }
    }
})
client.on("interactionCreate", async (interaction) => {
    const { roleWhitelisted } = require('./config.json')
    if (!interaction.isButton) return
    const { ruoloWhitelister } = require('./config.json')
    if (!interaction.member.roles.cache.has(ruoloWhitelister)) return
    if (interaction.customId === "accetta") {
        let a = await interaction.message.embeds[0].description.split(' ')
        let b = a[1].replace('<@', '')
        let c = b.replace('>', '')
        let membro = await interaction.guild.members.fetch(c).catch(() => { })
        if (membro.roles.cache.has(roleWhitelisted)) return
        membro.roles.add(roleWhitelisted, "Whitelist").catch(() => { })
        const embed6 = new MessageEmbed()
            .setColor(coloreEmbed)
            .setTitle(`Whitelist con ID messaggio ${interaction.message.id} accettata da ${interaction.member.user.tag}`)
            .setTimestamp()
            .setFooter({ text: `${client.user.username}`, iconURL: `${client.user.displayAvatarURL()}` });
        await interaction.reply({ content: `Ok!`, ephemeral: true })
        await interaction.channel.send({ embeds: [embed6], components: [] })
        await membro.createDM()
        const embed7 = new MessageEmbed()
            .setColor(coloreEmbed)
            .setTitle(`La tua Whitelist è stata accettata da ${interaction.member.user.tag}, buon divertimento!`)
            .setTimestamp()
            .setFooter({ text: `${client.user.username}`, iconURL: `${client.user.displayAvatarURL()}` });
        await membro.send({ embeds: [embed7] })
    } else if (interaction.customId === "rifiuta") {
        let a = await interaction.message.embeds[0].description.split(' ')
        let b = a[1].replace('<@', '')
        let c = b.replace('>', '')
        let membro = await interaction.guild.members.fetch(c).catch(() => { })
        if (membro.roles.cache.has(roleWhitelisted)) return
        const embed6 = new MessageEmbed()
            .setColor(coloreEmbed)
            .setTitle(`Whitelist con ID messaggio ${interaction.message.id} rifiutata da ${interaction.member.user.tag}`)
            .setTimestamp()
            .setFooter({ text: `${client.user.username}`, iconURL: `${client.user.displayAvatarURL()}` });
        await interaction.reply({ content: `Ok!`, ephemeral: true })
        await interaction.channel.send({ embeds: [embed6], components: [] })
        await membro.createDM()
        const embed8 = new MessageEmbed()
            .setColor(coloreEmbed)
            .setTitle(`La tua Whitelist è stata rifiutata da ${interaction.member.user.tag}, ritenta!`)
            .setTimestamp()
            .setFooter({ text: `${client.user.username}`, iconURL: `${client.user.displayAvatarURL()}` });
        await membro.send({ embeds: [embed8] })
        const { ChatComandoWl } = require('./config.json')
        let canale = await interaction.guild.channels.fetch(ChatComandoWl)
        canale.permissionOverwrites.edit(membro, { 'SEND_MESSAGES': null }).catch(() => { })
    }
})    
client.on("guildMemberAdd", member => {
    if (member.user.bot) return

    var embed = new Discord.MessageEmbed()
        .setTitle("FP$")
        .setDescription(`Ciao ${member.toString()}, Join\u200b\n`)
        .addField("Per una buona permanenza nel server leggi il","<#1039963075543048232>")
        .setThumbnail("")
        .setFooter({ text: 'Developed by FP$', iconURL: ''})
        .setTimestamp() 
    client.channels.cache.get(CanaleBenvenuto).send({embeds: [embed]});
})



process.on('unhandledRejection', (reason, p) => {
    console.log('PROBLEMA RILEVATO'); 
    console.log(reason, p); 
  }); 
  
  process.on("uncaughtException", (err, origin) => {
    console.log('ERRORE RILEVATO'); 
    console.log(err, origin); 
  });
  
  process.on('uncaughtExceptionMonitor', (err, origin) => {
    console.log('CRASH RILEVATO'); 
    console.log(err, origin); 
  }); 
  
  process.on('multipleResolves', (type, promise, reason) => {
    console.log('ERRORI RILEVATI'); 
    console.log(type, promise, reason); 
  });