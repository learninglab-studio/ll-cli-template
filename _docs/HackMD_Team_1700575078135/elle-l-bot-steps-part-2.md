# elle-l-bot-steps-part-2

In [part-1](https://hackmd.io/bVlqWx4FTTeEYyf7CfTY3A) we initialized our npm package, connected it to a Github repo and initialized our app in the api.slack.com web interface.

Now let's do a basic hello-world-ish thing to make sure we have the basics all connected properly.

## .env variables

We need to store all of our secret Slack info in the `.env` file so that it doesn't get exposed to the web. So create a file at the root of your app called `.env` and put in the values for

```
SLACK_BOT_TOKEN=
SLACK_SIGNING_SECRET= 
SLACK_APP_TOKEN= 

SLACK_APP_TESTS_CHANNEL=

OPENAI_API_TOKEN=
```

The tests channel is optional--but if you are working in a Slack you share with other people you may want to use a tests channel so that you don't annoy them with all the messages you generate while you're building the app. The channel's id is visible if you go to the channel, then click on the H1-looking iteration of the channel's name that shows up at the top left of your screen, then scroll down to the bottom of the modal that pops up.

## app.js

The file of code that will run when your app launches is going to be called `app.js` and it's going to be in the root of your app folder. So go ahead and create it, and add the most basic code there.

```
const { App } = require('@slack/bolt');
require('dotenv').config()

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN,
  // Socket Mode doesn't listen on a port, but in case you want your app to respond to OAuth,
  // you still need to listen on some port!
  port: process.env.PORT || 3000
});

// Listens to incoming messages that contain "hello"
app.message('hello', async ({ message, say }) => {
  // say() sends a message to the channel where the event was triggered
  await say(`Hey there <@${message.user}>!`);
});

(async () => {
  // Start your app
  await app.start();

  console.log('⚡️ Bolt app is running!');
})();
```

You should now be able to 
1. start the app with 

```
npm run dev
```

2. then invite the bot to a channel 
3. say "hello" in that channel and it should write back

You may want to invite your bot only to your testing channel to start.

You can also upload your code to github at this point if you have been careful not to expose your API keys.


## add to this step

- listen for different messages
- write to tests channel on start


## next steps

All of the interesting logic is yet to be added. We'll do that over in this doc: [elle-l-bot-steps-part-3](/PP5ewV6zT52xKLBbrYIgyg).