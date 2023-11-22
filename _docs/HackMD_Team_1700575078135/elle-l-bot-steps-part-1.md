# elle-l-bot-steps-part-1


steps for making a slack app in September of 2023.

## create the Slack App on the Slack side

- log in to a slack workspace you are comfortable messing with. If you don't have one of these, then create a free one. In the LL you can join one of our dev slacks.
- then head to api.slack.com, click "your apps" and create an app
    - choose "from scratch"
    - give it a unique name
    - pick your dev workspace
    - we're going to use "socket mode," so click that in the lefthand sidebar, then click "enable socket mode," then you'll need to give your app-level-token a name like `my-app-token-20230928`, then you'll get a long complex password-like string. We'll need to copy this and keep it safe in a bit. You can copy it and put it somewhere safe already if you know how, but you can also just wait for some later steps because we'll come back to it
    - next up is "OAuth & Permissions." Go ahead and click this in the left sidebar and give your app some permissions. If you are in the development workspace add as much as you want, but typically you'll only want to add what you really need. We'll add
        - `channels:history`
        - `chat:write`
        - `reactions:read`
        - `reactions:write`
        - and more ultimately
    - then click "install to workspace" and you'll get some tokens (again, we'll use these later)
    - you'll probably want to subscribe to some events, so click "Event Subscriptions" and add
        - `reaction_added`
        - `reaction_removed`
        - `message.channels`
        - `message.im`
        - and maybe more
    - let's also add at least one slash command to see how these things work


## initialize the app and connect to Github

- create a new repository on Github with the name of your app
- create a folder in your Development folder with the same name, I'll do `mkdir elle-l-bot-24`.
- change directories into that folder and run 

```
npm init
npm install dotenv openai airtable @slack/bolt
```
- then open it up in your code editor
```
code .
```
- then add a new file called `.gitignore` that will prevent you from uploading things to github that shouldn't go there. In the file you'll want something like this:

```
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
lerna-debug.log*

# Diagnostic reports (https://nodejs.org/api/report.html)
report.[0-9]*.[0-9]*.[0-9]*.[0-9]*.json

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# node-waf configuration
.lock-wscript

# Compiled binary addons (https://nodejs.org/api/addons.html)
build/Release

# Dependency directories
node_modules/
jspm_packages/

_exports/
_temp/

# TypeScript cache
*.tsbuildinfo

# Optional npm cache directory
.npm

# Optional eslint cache
.eslintcache

# Optional REPL history
.node_repl_history

# Output of 'npm pack'
*.tgz

# Yarn Integrity file
.yarn-integrity

# dotenv environment variables file
.env
.env.*

.DS_Store

# parcel-bundler cache (https://parceljs.org/)
.cache

# Next.js build output
.next

# Nuxt.js build / generate output
.nuxt
dist

_tests

# misc
.DS_Store
*.pem
```

it is really really really really REALLY important that you have `.env` in there, because this is where we will be storing our API tokens. And unless you want every DM you've ever written exposed to the internet---or your slack workspace to be spammed with bad content---or your boss to be sent weird AI-generated messages from your account---etc etc etc---you just don't want your API keys exposed.

Then go ahead and commit what you've done so far to Github.

This won't be your exact code, but it will look something like this:

```
git remote add origin https://github.com/your-account/your-app.git
git branch -M main
git push -u origin main
```

OK. Now you have a place to put your code on your machine, a place to store it on Github, and a place for it to work on Slack. That's enough for now.

Let's start a new file where we'll actually get the app running: [elle-l-bot-steps-part-2](/StEezi9HQUSfiJX-iX6iOg)



## to add to this:

- slash command unpacking
- additional github notes or links to tutorials?