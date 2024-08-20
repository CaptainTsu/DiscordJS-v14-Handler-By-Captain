const { Client, GatewayIntentBits, Collection } = require('discord.js');
const config = require('./config/config.js')
const fs = require('fs');
const CommandHandler = require('./utils/commandHandler');
const path = require('path');

// Initialize the bot client with the required intents
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessageReactions,
    ],
});

// Load commands and slash commands
new CommandHandler(client);

// Load event files and set event handlers
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
const eventCount = eventFiles.length;
for (const file of eventFiles) {
    const event = require(`./events/${file}`);
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args));
    } else {
        client.on(event.name, (...args) => event.execute(...args));
    }
}

// Log in to Discord
client.login(config.token)
    .then(() => console.log('Bot logged in successfully'))
    .catch(err => console.error('Error logging in:', err));

module.exports = client;
