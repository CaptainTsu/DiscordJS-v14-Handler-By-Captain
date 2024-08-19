# Discord.js v14 Command Handler - By [Captain](https://guns.lol/tooredcap)
A powerful and customizable command handler for Discord.js v14, made to be both flexible and efficient. Created by Captain (@toorecap - me ofc),  this handler supports message and slash commands, event handling, and advanced bot functionality with ease.

If you enjoyed the project, please give it a star (⭐️) by clicking the button at the top of the page. Thank you!

<details>
  <summary><strong>Configurations</strong></summary>

  Customize the behavior of the command handler by adjusting the configuration options. Below is a summary of each configuration category and its options:

 ```js
  // General Configs
  module.exports = {
    prefix: `$`,
    clientId: ``, // bot id
    token: ``, // bot token
    ownerID: ``, // your id (cannot add multiple)

    developerTeam: {
      memberIDs: [], // add the user IDs of the developer team (can add multiple)
      roleIDs: [],   // add the role IDs of the developer team (can add multiple)
    },

    // Bot Embed Configs
    EmbedConfig: {
      embedcolor: `#9b59b6`, // default embed color
    },

    // Cooldown Configs
    CooldownConfig: {
      defaultCooldown: 5, // default cooldown for commands (in seconds)
      autoDeleteCooldownMsg: 10 // auto delete the cooldown response (in seconds)
    },

    // Responses Config
    ResponsesConfig: {
      botowneronly: {
        reply: `This command is restricted to the bot owner.`,
        autoDelete: 10, // in seconds
        shouldAutoDelete: true
      },
      serverowneronly: {
        reply: `This command is restricted to the server owner.`,
        autoDelete: 10, // in seconds
        shouldAutoDelete: true
      },
      developerteamonly: {
        reply: `This command is restricted to the developer team.`,
        autoDelete: 10, // in seconds
        shouldAutoDelete: true
      },
      nsfw: {
        reply: `This command can only be used in NSFW channels.`,
        autoDelete: 10, // in seconds
        shouldAutoDelete: true
      },
      memberpermissions: {
        reply: `You don't have the necessary permissions to use this command.`,
        autoDelete: 10, // in seconds
        shouldAutoDelete: true
      },
      botpermissions: {
        reply: `I don't have the necessary permissions to execute this command.`,
        autoDelete: 10, // in seconds
        shouldAutoDelete: true
      },
      requiredroles: {
        reply: `You don't have the required role(s) to use this command.`,
        autoDelete: 10, // in seconds
        shouldAutoDelete: true
      },
      requiredchannels: {
        reply: `This command can only be used in specific channels.`,
        autoDelete: 10, // in seconds
        shouldAutoDelete: true
      },
      alloweduserids: {
        reply: `You are not allowed to use this command.`,
        autoDelete: 10, // in seconds
        shouldAutoDelete: true
      }
    }
  }

</details>

## Contributing

Contributions are welcome! Please follow these guidelines:

1. **Fork the Repository**:
   - Click the "Fork" button at the top-right of the repository page to create your copy.

2. **Create a New Branch**:
   - Create a new branch for your changes:
     ```bash
     git checkout -b my-feature-branch
     ```

3. **Make Your Changes**:
   - Implement your changes or new features.

4. **Commit and Push**:
   - Commit your changes and push to your forked repository:
     ```bash
     git add .
     git commit -m "Add new feature"
     git push origin my-feature-branch
     ```

5. **Submit a Pull Request**:
   - Open a pull request from your branch to the `main` branch of the original repository.

## Support
If you have any questions or need support with this project, feel free to join our Discord server. For issues or bugs, please visit the [issues section](https://github.com/CaptainTsu/DiscordJS-v14-Handler-captain/issues) and submit a new issue.

<a href="https://discord.gg/AkWYfFPVdj">
  <img src="https://cdn.discordapp.com/attachments/1176815431865090159/1275051369363148911/image.png?ex=66c47b9f&is=66c32a1f&hm=57bdc338956c03520b743dcdd8a208f78b739da9a2681e796ff16be19931c822&">
</a>

## License
This project is licensed under the **Apache License 2.0** - see the [LICENSE](./LICENSE) file for details.
