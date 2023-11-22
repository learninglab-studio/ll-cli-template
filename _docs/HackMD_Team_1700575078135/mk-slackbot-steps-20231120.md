# mk-slackbot-steps-20231120

follow [these steps](https://slack.dev/bolt-js/tutorial/getting-started#create-an-app)

1. create a repository on github
    2. initialize with a readme.md
    3. and a .gitignore (use the node template)
    4. select MIT for the license
3. clone the repository and open it in vscode
    4. git clone (paste)
    5. cd your-app
    6. code .
5. in the repo folder, type `npm init`
6. then install the necessary dependencies:
```
npm i @slack/bolt airtable dotenv openai
```

7. then create a .env file, create the app on slack and add all the necessary environment variables
8. then you can finally create your app.js file and start up the app with `npm run dev`

```
const { App } = require('@slack/bolt');

// Initializes your app with your bot token and signing secret
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET
});

(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000);

  console.log('⚡️ Bolt app is running!');
})();
```