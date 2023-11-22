#!/usr/bin/env node

var figlet = require('figlet');
var clear = require('clear');

const llog = require('./src/utils/ll-logs')
const { whisper, vision, tts } = require('./src/projects/openai')

require("dotenv").config({ path: __dirname + `/.env.cli` });
var yargs = require('yargs').argv;

clear()
llog.cyan(figlet.textSync("my command."))
llog.gray(`launching with yargs`, yargs)

if (yargs.whisper) {
    whisper({audioFile: yargs.whisper})
} else if (yargs.vision) {
    vision({imageFile: yargs.vision})
} else if (yargs.tts) {
    llog.red({textFile: yargs.tts})
    tts({textFile: yargs.tts})
} else {
    console.log(`sorry, you didn't enter a recognized command.`)
}