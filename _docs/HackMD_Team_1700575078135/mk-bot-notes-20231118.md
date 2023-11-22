# mk-bot-notes-20231118

## steps 

for any basic bot, mk-bot-23.11, for instance. Some strangeness in here for ll-specific needs.

```
"@slack/bolt": "^3.15.0",
"airtable": "^0.12.2",
"clear": "^0.1.0",
"dotenv": "^16.3.1",
"figlet": "^1.7.0",
"midi": "^2.0.0",
"openai": "^4.19.0",
"yargs": "^17.7.2"
```

## notes

### names

if we have an array of bots, the names should be parallel in structure (or from the same world?).
- mk-bot
- elle-l-bot
- ll-moment-bot
    - ll-gif-bot
    - ll-transcript-bot
    - ll-social-bot
    - ll-segment-bot
- ll-work-bot
- ll-content-bot
    - ll-text2voice-bot
    - ll-image2text-bot
- 


## features

- ll-moment-bot
    - save moments
    - create transcripts for segments
        - gets requested from within slack
        - video accessed on synology?
        - or just constant transcription when launched?
        - 
    - 