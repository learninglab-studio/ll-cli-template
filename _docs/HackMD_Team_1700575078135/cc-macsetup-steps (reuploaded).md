# cc-macsetup-steps (reuploaded)

* start with Erase All Content and Settings
	* enter the password and let it run
	* it may prompt for logins, just follow all the dialogue boxes
* progress through the macOS screens on restart
	* DON'T log in to an iCloud account
	* don't set up
		* screentime
		* accessibility settings
		* fingerprint security
	* otherwise, confirm your way through everything else
* install homebrew
    - don't forget to then enter the two lines near the end of the installers logs on newer Macs.  They will look something like this:
    ```
    echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> /Users/YOUR_USER_ACCOUNT_NAME/.zprofile
    eval "$(/opt/homebrew/bin/brew shellenv)"
    ```
	*	once Homebrew is done, install these: 
- once homebrew is installed
    - `brew install git`
    - `brew install visual-studio-code`
    - `brew install node`
* open the App Store and log into `studio@learninglab.xyz`
	* install these apps
```
Excel
Compressor
Motion
Xcode
Numbers
iMovie
Pages
Logic Pro
Final Cut
Garageband
BetterSnapTool
DaisyDisk
Keynote
Word
PowerPoint
Davinci Resolve
Slack
Blackmagic Speed Test
```
- Open FCPX for the first time
- sign in to [Adobe](https://www.adobe.com) or [Creative Cloud](https://creativecloud.adobe.com/cc/), download and install (first Photoshop, then everything else through the Creative Cloud App)
- 
    - Photoshop
    - Illustrator
    - InDesign
    - XD
    - Premiere Pro
    - After Effects
    - Lightroom Classic
    - Dimension
    - Character Animator
    - Audition
    - Substance 3D Painter
    - Substance 3D Sampler
    - Substance 3D Designer
    - Substance 3D Stager
    - UXP Developer Tools?

____________

- `brew install node`
- `brew install visual-studio-code`

- open Terminal 
	- `mkdir Development`
	- `cd Development`
- log in to github as learninglab-studio (using password from 1Password)
- click settings, then developer settings
- then create a classic token
	- give it permissions
- `git clone https://github.com/mkuzmick/ll-studio-bot-23.git`
- if prompted for password, use `learninglab-studio` as your account id and then the personal access token as the password
- `cd ll-studio-bot-23`

- `npm i`
- `code .`
- open _scripts/macsetup
	- in "02_mainbrew.sh", add the line `brew install qgis` anywhere, except the top
- don't run initial_setup as a script, instead run these commands from it:

```
ZSHRC_PATH=~/.zshrc
cd ~/Development/ll-studio-bot-23/_scripts/ex
SCRIPTS_DIR=$(pwd)
echo "export PATH=/usr/local/bin:${SCRIPTS_DIR}:\$PATH" >> $ZSHRC_PATH
echo "PROMPT='%2~ %# '" >> $ZSHRC_PATH
```
- then `cd ..`
- then `cd macsetup`
- then run `/02_mainbrew.sh` (after looking it over)
- add to `./03_preferences.sh`
`defaults write "$HOME/Library/Preferences/ByHost/com.apple.coreservices.useractivityd.plist" ActivityAdvertisingAllowed -bool no`
`defaults write "$HOME/Library/Preferences/ByHost/com.apple.coreservices.useractivityd.plist" ActivityReceivingAllowed -bool no `
- then run `./03_preferences.sh` (after looking it over)
- 

### Individual installations
- Maxon One
	- https://www.maxon.net/en/downloads
	- Download Cinema4D
	- Zbrush
	- Redshift
- Open Epic Game Store and install Unreal Engine
- Open Unity Hub and download a the most recent version of Unity
	- also, download all the Unity templates
- Open Logic Pro and start downloading the sounds library
- Open Garageband and start downloading the sounds library 
- open BetterSnapTool and give it permission, then set to open on startup
- Spotify
    - open, login (just with email and password, not with google)
    - disable open on login
- Chrome
	- log in to the Studio@learninglab.xyz account


If prompted to install Rosetta 2, you can either agree to Install it, or run this code: 
`/usr/sbin/softwareupdate --install-rosetta --agree-to-license
`

Set up the wifi: 
- connect to the `Harvard University` wifi
	- this will only allow access to one website: 
	- [getonline.harvard.edu](http://getonline.harvard.edu)
- log in with your HarvardKey
	- progress through the prompted steps
	- it'll ask you several times to confirm a "profile" in setting, this should pop up for you automatically, just either "confirm" or "install"
	- Once it says Done, it should be connected to the `Harvard Secure` network and have wifi available.