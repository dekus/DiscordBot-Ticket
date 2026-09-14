# Discord Ticket Bot

Discord bot that provides a full ticket / whitelist / staff-utility workflow for an Italian community server. Users open support tickets by button, the bot spins up a private text channel scoped to the requesting user plus a staff role, and posts a Close Ticket button that wipes the channel after 10 seconds. A whitelist flow runs alongside it: a prefix command in the staff whitelist channel kicks off a 10-minute DM application, staff accept or reject with buttons.

Built on `discord.js v13.14.0`. Node.js only. No database. All state lives in Discord itself (channel topics track ticket ownership).

## Features

* Five ticket entry points, each mapped to its own category (`CategoriaTicket`, `CategoriaTicket2`, `CategoriaTicket3`, `CategoriaTicket4`, plus the base handler). Use them for General, Report, Partner, Purchase, Bug, or whatever split makes sense for your server.
* Per-ticket permission wall: only the opener and the `RuoloStaff` role can read the channel.
* Duplicate-open guard: the bot searches existing ticket channels by topic before creating a new one.
* Close Ticket button. Only members with `RuoloStaff` can press it. Channel deletes after 10 seconds.
* Welcome message on member join in `CanaleBenvenuto`.
* Whitelist application system:
  * Prefix command in `ChatComandoWl` opens a DM form.
  * 10-minute answer window per user.
  * Completed answers post to `CanaleRisposteWl` with Accept / Reject buttons handled by the `RuoloVerifica` role.
* Staff utility commands: `ban`, `sban` (unban), `kick`, `clear` (bulk message purge).
* Assistance commands: `assistenza`, `help`, `twitch`.
* Global error handling via `unhandledRejection` / `uncaughtException` so a bad interaction does not kill the process.
* All intents enabled (`intents: 32767`). Message Content, Guild Members, and Presence intents are covered.

## Repository Layout

```
discord-ticket/
├── FPS.js                # entry point: gateway, event handlers, ticket + whitelist logic
├── package.json          # discord.js ^13.14.0
├── config.json           # all IDs, colors, role and category configuration
├── start.bat             # Windows launcher (cd + node .)
├── Procfile              # Heroku / Render worker declaration
├── .gitattributes
├── .gitignore
└── commands/
    ├── assistenza/
    │   ├── assistenza.js
    │   ├── help.js
    │   └── twitch.js
    ├── general/
    │   └── ticket.js     # slash command that posts the ticket panel
    └── staff/
        ├── ban.js
        ├── sban.js
        ├── kick.js
        └── clear.js
```

## Requirements

* Node.js 16.9 or newer (required by `discord.js` v13).
* A Discord application with a bot user. Create it at [https://discord.com/developers/applications](https://discord.com/developers/applications).
* **Privileged intents** enabled in the Developer Portal: `Server Members Intent`, `Message Content Intent`, `Presence Intent`. The bot requests all intents on startup and will fail to log in without these three checked.

## Installation

```bash
git clone https://github.com/dekus/discord-ticket.git
cd discord-ticket
npm install
```

`package.json` only declares `discord.js@^13.14.0`. No other runtime deps.

## Configuration

Everything lives in `config.json`. Every field is a string. Fill in each ID by enabling Developer Mode in Discord (`User Settings > Advanced > Developer Mode`) and right-clicking the target server, role, channel, or category to copy its ID.

```json
{
    "token": "",
    "prefix": "/",
    "serverId": "",
    "RuoloStaff": "",
    "ChatComandoWl": "",
    "coloreEmbed": "",
    "CategoriaTicket": "",
    "CategoriaTicket2": "",
    "CategoriaTicket3": "",
    "CategoriaTicket4": "",
    "CanaleRisposteWl": "",
    "PermessiInsufficienti": "",
    "RuoloVerifica": "",
    "CanaleBenvenuto": ""
}
```

| Field                   | Purpose                                                                                                                     |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `token`                 | Bot token from the Developer Portal.                                                                                        |
| `prefix`                | Prefix for the whitelist message command. Default `/` in the file; change if it conflicts with slash commands.              |
| `serverId`              | Guild ID where slash commands register.                                                                                     |
| `RuoloStaff`            | Role ID that can read every ticket channel and press the Close button.                                                      |
| `ChatComandoWl`         | Channel ID where the prefix whitelist command is accepted.                                                                  |
| `coloreEmbed`           | Hex color used on all bot embeds (e.g. `#4a90e2`).                                                                          |
| `CategoriaTicket`       | Category ID that new tickets from handler 1 land under.                                                                     |
| `CategoriaTicket2..4`   | Category IDs for the other four ticket types. Split them however you want (support, report, partner, purchase, bug).        |
| `CanaleRisposteWl`      | Channel ID that receives completed whitelist applications with Accept / Reject buttons.                                     |
| `PermessiInsufficienti` | Error message string shown when a member tries a staff-only action without the role.                                        |
| `RuoloVerifica`         | Role ID allowed to press Accept / Reject on whitelist applications.                                                         |
| `CanaleBenvenuto`       | Channel ID where the join welcome message is posted.                                                                        |

The upstream README also mentions a `.env` with `DISCORD_TOKEN`. In practice this repo reads from `config.json.token`, not from environment variables. Put the token in `config.json`.

## Running

### Local (Windows)

Adjust the path in `start.bat` to your checkout, then double-click:

```bat
cd C:\path\to\discord-ticket
node .
```

Or from any shell in the project root:

```bash
node .
```

### Local (Linux / macOS)

```bash
node FPS.js
```

Or `node .` since `package.json` sets `"main": "FPS.js"`.

### Hosted (Heroku, Render, Railway, any Procfile host)

`Procfile` declares:

```
worker: FPS.js
```

Deploy as a worker dyno / service. Do not use `web`, the bot has no HTTP listener.

## Ticket Workflow

1. A staff member runs the `ticket` slash command in the target support channel. The bot posts an embed with five buttons.
2. A user clicks a button. The bot:
   * Iterates existing channels in the mapped category and matches on the `topic` field to detect an already-open ticket for that user.
   * If none exists, creates a text channel in the category, denies `VIEW_CHANNEL` to `@everyone`, grants it to the opener and to `RuoloStaff`.
   * Posts the greeting embed and the Close Ticket button.
3. Staff hit Close Ticket. The bot verifies the pressing member has `RuoloStaff`, posts a countdown, and deletes the channel after 10 seconds.

## Whitelist Workflow

1. Staff run the prefix whitelist command in `ChatComandoWl` (`/whitelist` with the default prefix).
2. The bot DMs the target user with a form. The user answers within 10 minutes.
3. Answers post to `CanaleRisposteWl` as an embed with Accept and Reject buttons.
4. Members with `RuoloVerifica` press Accept or Reject. The user is notified of the outcome by DM.

## Command Reference

Slash commands loaded from `commands/`:

| Command      | Location             | Description                                                       |
| ------------ | -------------------- | ----------------------------------------------------------------- |
| `/ticket`    | `commands/general`   | Post the ticket panel embed with the five open-ticket buttons.    |
| `/assistenza`| `commands/assistenza`| Assistance command.                                               |
| `/help`      | `commands/assistenza`| Show command list.                                                |
| `/twitch`    | `commands/assistenza`| Post the Twitch link embed.                                       |
| `/ban`       | `commands/staff`     | Ban a member.                                                     |
| `/sban`      | `commands/staff`     | Unban a user by ID.                                               |
| `/kick`      | `commands/staff`     | Kick a member.                                                    |
| `/clear`     | `commands/staff`     | Bulk delete N messages from the current channel.                  |

Prefix command (works only in `ChatComandoWl`):

| Command       | Description                                              |
| ------------- | -------------------------------------------------------- |
| `/whitelist`  | Kick off a 10-minute DM whitelist application for a user. |

## Bot Permissions

Invite the bot with an OAuth2 URL that includes:

* Scopes: `bot`, `applications.commands`.
* Permissions (integer): calculate from `Manage Channels`, `Manage Roles`, `Kick Members`, `Ban Members`, `Manage Messages`, `View Channels`, `Send Messages`, `Embed Links`, `Read Message History`, `Use External Emojis`, `Add Reactions`.

The role assigned to the bot must sit above any role it manages permissions for, and the bot needs read access to the categories where tickets are created.

## Notes and Limits

* `discord.js` v13 is out of active maintenance. Discord's gateway v9 works for now, but a future breaking Discord change will require a v14 port. v14 renames a lot of enums (`PermissionsBitField`, `ChannelType.GuildText`, `ActionRowBuilder`, etc.). Budget for that if you plan to run this long term.
* All permission checks key off a single `RuoloStaff` role. Multi-tier support (junior staff, senior staff) needs code changes.
* No database. If you need history of who opened which ticket, add a channel-transcript step before deletion (log the messages to a mod channel).
* Duplicate-ticket detection relies on channel topics. If you rename or clear topics manually, the guard fails and a user can open multiple tickets.
* Error handling is process-level (`unhandledRejection`, `uncaughtException`). Any state built up in memory is lost on crash.
* Italian strings across the code. Translate to English in place if that fits your server.
