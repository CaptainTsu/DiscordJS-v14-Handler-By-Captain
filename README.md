# Discord.js v14 Command Handler - By [Captain](https://guns.lol/tooredcap)
A powerful and customizable command handler for Discord.js v14, made to be both flexible and efficient. Created by Captain (@toorecap - me ofc),  this handler supports message and slash commands, event handling, and advanced bot functionality with ease.

If you enjoyed the project, please give it a star (⭐️) by clicking the button at the top of the page. Thank you!

## Configurations

Customize the behavior of the command handler by adjusting the configuration options. Below is a summary of each configuration category and its options:

### General Configs

- **`prefix`**: The prefix used to trigger commands (default: `$`).
- **`clientId`**: Your bot's client ID (leave empty if not applicable).
- **`token`**: Your bot's token (leave empty if not applicable).
- **`ownerID`**: Your Discord user ID (only one ID allowed).

### Developer Team

- **`developerTeam.memberIDs`**: An array of user IDs who are part of the developer team (multiple IDs allowed).
- **`developerTeam.roleIDs`**: An array of role IDs assigned to the developer team (multiple IDs allowed).

### Bot Embed Configs

- **`EmbedConfig.embedcolor`**: Default color for embeds (default: `#9b59b6`).

### Cooldown Configs

- **`CooldownConfig.defaultCooldown`**: Default cooldown for commands in seconds (default: 5 seconds).
- **`CooldownConfig.autoDeleteCooldownMsg`**: Time in seconds before auto-deleting the cooldown message (default: 10 seconds).

### Responses Config

- **`ResponsesConfig.botowneronly.reply`**: Message for commands restricted to the bot owner.
- **`ResponsesConfig.botowneronly.autoDelete`**: Time in seconds to auto-delete the response (default: 10 seconds).
- **`ResponsesConfig.botowneronly.shouldAutoDelete`**: Whether the response should auto-delete (default: true).

- **`ResponsesConfig.serverowneronly.reply`**: Message for commands restricted to the server owner.
- **`ResponsesConfig.serverowneronly.autoDelete`**: Time in seconds to auto-delete the response (default: 10 seconds).
- **`ResponsesConfig.serverowneronly.shouldAutoDelete`**: Whether the response should auto-delete (default: true).

- **`ResponsesConfig.developerteamonly.reply`**: Message for commands restricted to the developer team.
- **`ResponsesConfig.developerteamonly.autoDelete`**: Time in seconds to auto-delete the response (default: 10 seconds).
- **`ResponsesConfig.developerteamonly.shouldAutoDelete`**: Whether the response should auto-delete (default: true).

- **`ResponsesConfig.nsfw.reply`**: Message for commands that can only be used in NSFW channels.
- **`ResponsesConfig.nsfw.autoDelete`**: Time in seconds to auto-delete the response (default: 10 seconds).
- **`ResponsesConfig.nsfw.shouldAutoDelete`**: Whether the response should auto-delete (default: true).

- **`ResponsesConfig.memberpermissions.reply`**: Message for insufficient permissions.
- **`ResponsesConfig.memberpermissions.autoDelete`**: Time in seconds to auto-delete the response (default: 10 seconds).
- **`ResponsesConfig.memberpermissions.shouldAutoDelete`**: Whether the response should auto-delete (default: true).

- **`ResponsesConfig.botpermissions.reply`**: Message for missing bot permissions.
- **`ResponsesConfig.botpermissions.autoDelete`**: Time in seconds to auto-delete the response (default: 10 seconds).
- **`ResponsesConfig.botpermissions.shouldAutoDelete`**: Whether the response should auto-delete (default: true).

- **`ResponsesConfig.requiredroles.reply`**: Message for missing required roles.
- **`ResponsesConfig.requiredroles.autoDelete`**: Time in seconds to auto-delete the response (default: 10 seconds).
- **`ResponsesConfig.requiredroles.shouldAutoDelete`**: Whether the response should auto-delete (default: true).

- **`ResponsesConfig.requiredchannels.reply`**: Message for commands that can only be used in specific channels.
- **`ResponsesConfig.requiredchannels.autoDelete`**: Time in seconds to auto-delete the response (default: 10 seconds).
- **`ResponsesConfig.requiredchannels.shouldAutoDelete`**: Whether the response should auto-delete (default: true).

- **`ResponsesConfig.alloweduserids.reply`**: Message for users not allowed to use the command.
- **`ResponsesConfig.alloweduserids.autoDelete`**: Time in seconds to auto-delete the response (default: 10 seconds).
- **`ResponsesConfig.alloweduserids.shouldAutoDelete`**: Whether the response should auto-delete (default: true).

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
