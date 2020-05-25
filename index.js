const Discord = require('discord.js');
const { prefix, token, } = require('./config.json');
const client = new Discord.Client();
const { accounts, } = require('./accounts.json');
const { droppingaccounts, } = require('./droppingaccounts.json');
const { accounts1, } = require('./accounts1.json');
const { lotteries, } = require('./lotteries.json');
const { premiumaccounts1, } = require('./premiumaccounts1.json');
const { premiumaccounts2, } = require('./premiumaccounts2.json');
// Dec End...

client.once('ready', () => {
    console.log('The bot is Online!')
})

client.on("message", message => {
    console.log(message.content);
})


client.on('message', message => {
    if(message.content.startsWith(`${prefix}gennfa`)) {
        if(message.channel.type == "text") {

            let result = Math.floor((Math.random() * accounts.length))

            message.reply("Generated! Check Your DM's For It.")
            message.author.send('Here is your account: \"' + accounts[result] + "\"")
            
            .catch()
        }
    }

    if(message.content.startsWith(`${prefix}gennitro`)) {
        if(message.channel.type == "text") {

            let result = Math.floor((Math.random() * accounts1.length))

            message.reply("Generated! Check Your DM's For It.")
            message.author.send('Here is your account: \"' + accounts1[result] + "\"")

            .catch()
        }
    }

    if(message.content.startsWith(`${prefix}luckydraw`)) {
        if(message.channel.type == "text") {

            let result = Math.floor((Math.random() * lotteries.length))

            message.reply("Good Luck! Check your DM's...")
            message.author.send('Good Luck! Here is your draw: \"' + lotteries[result] + "\"")

            .catch()
        }
    }
    if(message.content.startsWith(`${prefix}dontudareexecutethiscommand`))  {
        if(message.channel.type == "text") {

            message.reply("CURIOUS???~?!!!?!?? U SUCK!!!")

            .catch()
        }
    }
    if(message.content.startsWith(`this server is a scam`))  {
        if(message.channel.type == "text") {

            message.reply("No u peanut brain")

            .catch()
        }
    }
    if(message.content.startsWith(`XD`))  {
        if(message.channel.type == "text") {

            message.reply("Is too happy, spraying fire extinguisher......")

            .catch()
        }
    }
    if(message.content.startsWith(`${prefix}drop`))  {
        if(message.channel.type == "text") {
            if (!message.member.roles.cache.has('704563266629926933')) {
                message.channel.send("You Don't Have Permission To Do That!")
            }
            else {

                let mention = message.mentions.users.first();
                
                if (mention == null) { return; }
                let Amount = message.content.slice (29);
                for (let i = 0; i < Amount; i++) {
                    let result = Math.floor((Math.random() * droppingaccounts.length));
                    mention.send (droppingaccounts[result]);
                }
                message.channel.send ("Done!");
                
                
        }
        }  
    }
    if(message.content.startsWith(`${prefix}spam`))  {
        if(message.channel.type == "text") {
            if (!message.member.roles.cache.has('708290012281569362')) {
                message.channel.send("You Don't Have Permission To Do That!")
            }
            else {

                let mention = message.mentions.users.first();
                
                if (mention == null) { return; }
                let Amount = message.content.slice (29);
                for (let i = 0; i < Amount; i++) {
                    mention.send ("This is Spam Message Spam Spam Spam")
                }
                message.channel.send ("Done!");
                
                
        }
        }  
    }
    if(message.content.startsWith(`${prefix}ffff`))  {
        if(message.channel.type == "text") {
            if (!message.member.roles.cache.has('708290012281569362')) {
                message.channel.send("You Don't Have Permission To Do That!")
            }
            else {

                let mention = message.mentions.users.first();
                
                if (mention == null) { return; }
                let Amount = message.content.slice (29);
                for (let i = 0; i < Amount; i++) {
                    mention.send ("f")
                }
                message.channel.send ("Done!");
                
                
        }
        }  
    }
    if(message.content.startsWith(`${prefix}stock`))  {
        const NFANumber = accounts.length
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Current Stock')
            .setDescription('NFA: ' + `${NFANumber}
            SFA: Coming Soon
            UFA: Limited Time, Unavaliable 
            Netflix: Coming Soon`)
        message.channel.send(exampleEmbed);
    }
    if(message.content.startsWith(`${prefix}genhelp`))  {
        if(message.channel.type == "text") {

            message.author.send("**!gennfa** = Checked Minecraft Account")
            message.author.send("**!gennetflix** = Netflix Account")
            message.author.send("**!dontudareexecutethiscommand** = TOP SECRET")
            message.author.send("**!help** = This Madness")
            message.author.send("More Coming Soon, There are more hidden commands!")
            message.reply("Help Sent To DM's.")

            .catch()
        }
    }
})

client.login(token);