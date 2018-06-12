# TesraBot

**Packages REQUIRED**

`discord.js` (npm install discord.js)

`ms` (npm install ms)

`os` (npm install os)

**Setting up the BOT**

`CONFIG AND CREDENTIALS NEED TO BE RENAMED TO config.json and credentials.json`
`NOTE: bot token can be found from discordapp.com/developers/applications/me (tutorial in BOTAPP.md)`
`NOTE: Click the gear button at the bottom where your USER#0000 and status are at -
then go into Appearance and check Developer-Mode (then right click on your bot or yourself and click copy id`)

Fill in your details in:
Credentials (`settings/credentials.example.json`) 
**<RENAME FILE TO credentials.json>**
```js
  {
  "botID": "BOT ID",
  "ownerID": "OWNER ID",
  "botToken": "BOT TOKEN"
}
```
Fill in your details in: 
Config (`settings/config.example.json`) 
```js
  {
  "prefix": "PREFIX",
  "activity": "GAME NAME"
}
```
**<RENAME FILE TO config.json>**
