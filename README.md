# TesraBot

**Modules REQUIRED**

[Node.js](www.nodejs.org)

**Packages REQUIRED**

`discord.js` (npm install discord.js)

`ms` (npm install ms)

`os` (npm install os)

**Setting up the BOT**

`CONFIG AND CREDENTIALS NEED TO BE RENAMED TO config.json and credentials.json`

`NOTE: bot token can be found from discordapp.com/developers/applications/me (tutorial in BOTAPP.md)`

`NOTE: id can be copied from right clicking on a user (tutorial in GETID.md)`

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
  "activity": "GAME NAME",
  "activityType": "PLAYING"
}
```
**<RENAME FILE TO config.json [click on file and press f2 to rename]>**
  
**Open command prompt, [shift + right click, you should see either "Open Command Prompt/Powershell here"] and type** ```node index```

The bot will be up and running.

## Licence
This repo is under MIT Licence [Click here for Licence File](https://github.com/faultyx/TesraBot/blob/master/LICENCE)
