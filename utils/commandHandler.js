const { readdirSync } = require('fs');
const { Collection, REST, Routes } = require('discord.js');
const config = require('../config/config.js')

class CommandHandler {
    constructor(client) {
        this.client = client;
        this.client.commands = new Collection();
        this.client.slashCommands = new Collection();
        this.loadCommands();
    }

    loadCommands() {
        // Load message commands
        const commandFolders = readdirSync('./commands/messageCommands');
        for (const folder of commandFolders) {
            const commandFiles = readdirSync(`./commands/messageCommands/${folder}`).filter(file => file.endsWith('.js'));
            for (const file of commandFiles) {
                const command = require(`../commands/messageCommands/${folder}/${file}`);
                this.client.commands.set(command.name, command);
            }
        }

        // Load slash commands
        const slashCommandFolders = readdirSync('./commands/slashCommands');
        const commands = [];
        for (const folder of slashCommandFolders) {
            const slashCommandFiles = readdirSync(`./commands/slashCommands/${folder}`).filter(file => file.endsWith('.js'));
            for (const file of slashCommandFiles) {
                const slashCommand = require(`../commands/slashCommands/${folder}/${file}`);
                this.client.slashCommands.set(slashCommand.data.name, slashCommand);
                commands.push(slashCommand.data.toJSON());
            }
        }

        
        const rest = new REST({ version: '10' }).setToken(config.token);

        (async () => {
            try {
                console.log(`Started refreshing ${config.guildId ? 'guild-specific' : 'global'} (/) commands.`);
        
                const route = config.guildId 
                    ? Routes.applicationGuildCommands(config.clientId, config.guildId)
                    : Routes.applicationCommands(config.clientId);
        
                await rest.put(route, { body: commands });
        
                console.log(`Successfully reloaded ${config.guildId ? 'guild-specific' : 'global'} (/) commands.`);
            } catch (error) {
                console.error(error);
            }
        })();
    }
}

module.exports = CommandHandler;
