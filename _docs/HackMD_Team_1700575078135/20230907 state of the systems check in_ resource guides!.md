# 20230907 state of the systems check in: resource guides!
## goal
MDFs, LLUFs, MPAs, and staff will make resources docs over the course of the term - let’s brainstorm ways of doing this (in general, but also using chatgpt).
## references
* [_the-resource-base-22.1](https://airtable.com/appdQo5coTiivkIWP/tblzXyLj5FOAH9fEL/viw5TmeNWyVPtHsLI?blocks=hide)
* http://resources.learninglab.xyz/
* [USING VIDEO GAME FONTS AND ELEMENTS IN FCPX on github](https://github.com/learninglab-dev/the-resources/blob/master/data/resources/help/video-game-fonts-and-elements.md)
## messy notes
* in the covid era, we provided a lot of async support, so a lot of markdown docs were created
* we stopped doing this bit. but this year, we want to get back to creating resources at a larger scale
* we reuse a lot of the markdown docs that were created, which can be found in the references linked above
* various elements of the resource
    * hero image
    * texts separated into sections
    * links to specific things they can use
        * maybe things we generate ourselves, maybe tutorials we find online
    * gifs
* we'd love to get all of the old resources into a new repository, and think about how to develop this. develop style guides
* staff, mpas, mdfs, and llufs will be making resources; labs will be making resources
    * if we do this well, we can start promoting the help form more to courses we're working with and we can create more resources in response
* potentially designLabs for each labs where we work at basic prompting tips to use in chatgpt 
    * and things to look out for. - chatgpt doesn't know anything about the new next.js that is being used
    * lab leaders' role is to make lab members experts. can use chatgpt
* keep in mind accessibility issues
### chatgpt
* the key thing is for our work to be launched with expertise, by people, and then use chatgpt to clean up 

### past experiments 
* annual report workflow from the past: 
    * dd used text from other spaces, as well as other recordings into chagpt, while also giving it the former annual report as a style guide. 
    * this created an excellent first draft/template. this still required polishing, BUT: 
        * it was a successful workflow that mirrors our goals with these resource docs. 
* potentially creating a how-to for how to develop this workflow 
    * helping students use chatgpt corretly, when formulating specific content
        * chatGPT still requires expertise to use well, as it is so often wrong 
* also keeping a log of chatgpt does poorly or does well. 
* marlon's goal/ethos: 
    * "assisting experts"
        * not a co-creator, but a way to save time and resources
## looking ahead, to figure out
* we want airtable to have the central repository of all resources (which includes google docs). but anything we want to as part of a website should be in markdown - so hackMD still works
* figure out the workflow of using the old resources
## to do
* develop an airtable script, that pulls all of the markdown for every single resource that exists in the old base into the new base. and create a set of buttons that achieve a different set of outcomes from that text.
    * two sentence summary of what each resource is about
    * what elements of this are outdated after your training date, or if i were to revise this what are the suggestions you would make
* launch this project - create a new resource base. bring in eevrything that has existed. then start playing around with adding augmented fields. dream is to connect to moment base to do this in real time
    * + airtable base
    * + a resource slack-bot
    * + the resources - next app will be a front end view of the database
    * github repository for the bot and for the next app
* project-resources (special team) will tackle this at first. 
* we'll talk about this during SOTS, and we'll involve others as content producers 
## next steps: 
* "where to get started?"
    * dd says designLabs would be great
        * especially around asks we've already had 
* come up with 5 basic FAQs in the lab zone
    * how to connect a nextJS app to airtable
    * how do i make a gallery website that i want to keep updating
* other things not in the lab zone
    * so you want to make a graphical abstract
    * so you want to ... 
    * music207 wanted more handouts this year, so we could create resources from each workshop
    * after helping a student in office hours, llufs could write up a resource that explains how to do what they explained


--- 

# example of old resource guide 


## USING VIDEO GAME FONTS AND ELEMENTS IN FCPX

Today we received a request from a student hoping to create something like the following in Final Cut Pro:

![help-0095-reference.png](https://ll-show.s3.amazonaws.com/public/help/0095/help-0095-reference.png)

The student indicated an interest in incorporating fonts and graphics that felt like retro 2D video game elements.  So we pulled together these resources to get things started!

## FONTS

[Google Fonts](https://fonts.google.com/) is a reliable and safe place to go searching for fonts, and for this project, their [Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P) looks promising.

There are also quite a number of free font sites you can check out, just be careful! We've had pretty good luck with [dafont](https://www.dafont.com/) and [1001fonts](https://www.1001fonts.com/). [Joystix](https://www.1001fonts.com/joystix-font.html) is available on these sites and is free for commmercial use.

![arcade-fonts.png](https://ll-show.s3.amazonaws.com/public/help/0095/arcade-fonts.png)

Just download the fonts, unzip the `.zip` file, and drag the font files into "Font Book" on your Mac to install them.

## OTHER ELEMENTS

You can find reference stills from all the classic games all over the web, but another interesting option would be to record a screencast of yourself playing one of the many web-based classic game emulators, like [this version of PacMan](https://www.webretrogames.com/pacman-html5.php).

![pacman-gif_480.gif](https://ll-show.s3.amazonaws.com/public/help/0095/pacman-gif_480.gif)

Go ahead and start up Quicktime, select `File => New Screen Recording`, and play away.

## PUTTING THINGS TOGETHER IN FINAL CUT

Once in Final Cut, you'll be able to create text in any of the fonts you've installed, and you can use Final Cut's built in tools to recreate some of simple elements from these games, or to crop and manipulate found footage and stills. Here is a short video tutorial to get you started:

<iframe width="560" height="315" src="https://www.youtube.com/embed/X-dPWTKPgVY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

And that should get you started! Like we say in the video, please get in touch with any more questions you may have!

![demo-titles-for-gif_360.gif](https://ll-show.s3.amazonaws.com/public/help/0095/demo-titles-for-gif_360.gif)