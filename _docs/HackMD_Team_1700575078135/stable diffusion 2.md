---
tags: ai 
---


# stable diffusion 2


* [link](https://stability.ai/)

## description
* Generic description: 
    * This is a mix of text-to-image and image-to-image generative AI applications. Unlike Dall-E 2, its source code, as well as details on the training data and weighting used by its algorithms, are openly available to the public, and the application can be downloaded and installed on your own computer rather than only being accessible through a proprietary cloud portal as is the case with OpenAI’s projects.
* User notes:
    * Unlike other AI image generators, you can choose from a variety of training models, as well as create training models of your own. This means that it doesn't necessarily have a set "style", the way you can often recognize something made from DALL-E or Midjourney. 
    * Additionally, it has a huge variety of additional tools that can be ported into the interface, like ControlNet, that allows you to refine the details of the image you're creating. Some of which are oriented towards accurately modeling faces, hands, depth information, posed information, extrapolating simple sketches, line segementation, line definition, and decomposing images. 
    * It also has a variety of inpainting tools, that allow you to go farther into specific details. Repainting the face of a character, because it doesn't accurately reflect the emotion you're hoping for. Or upscaling backgrounds with a finer detail. 
    * Additionally, since it is locally hosted and called from a Python script, it is possible that images could be programmatically generated -- from a database, or in response to an input. Meaning it can be used to output automatic renders. 
    * It should also be noted that, as an open source tool, there are less regulatory limits in use. So it is possible that SD will generate images with unexpected, and even inappropriate elements. This is largely determined by the model you are using.
    * All in all, it feels to have a larger set of tools for image generation and manipulation than most of the other image generators out there. But the failing element is that it is immensely finnicky to install and run. 

## tutorials

* [how to install](https://hackmd.io/md2Hjw7ASMigV1zmss5W-A?both)

## prompting tips

* Be as specific as you can
* add as many extra descriptors as you can manage
    * ex: 
    ```(Subject), (Environmental Description), cinematic, dramatic, composition, sunny sky, brutalist, hyper realistic, epic scale, sense of awe, hypermaximalist, insane level of details, artstation HQ```
* use weights in your prompts to help refine the image
    * `cute, grey cat:0.7` or, even more fine-grained `Cute:0.10, Grey Cat:0.60`

These are only true for the stock Stable Diffusion WebUI, plugins and extensions may change the way these work. [You can read more about this here.](https://www.howtogeek.com/833169/how-to-write-an-awesome-stable-diffusion-prompt/)

## examples of creations 
![a soldier taking a selfie with the Trojan Horse](https://i.redd.it/dqn67jxm9x4a1.png?s=7773852ed6f8ad11cdc4f8e7b3b7109635f57da7)
![an anime style painting of a young person sitting in an abandoned train car](https://i.redd.it/ghf6dxynj12b1.png)
![a realistic rendering of a lake](https://www.howtogeek.com/wp-content/uploads/2022/09/photograph-of-mount-katahdin-with-a-beautiful-lake-35mm-sharp-golden-hour.png?trim=1,1&bg-color=000&pad=1,1)
![an imaginary, brutalist skyline](https://www.howtogeek.com/wp-content/uploads/2022/09/city.png?trim=1,1&bg-color=000&pad=1,1)


## pedagogical use-case 