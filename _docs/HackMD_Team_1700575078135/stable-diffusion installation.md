# stable-diffusion installation

## first steps 

- [READ THIS TO START, IT'S A LOT, BUT WORTH IT.](https://stable-diffusion-art.com/beginners-guide/) 
_____________
- WebUI github: https://github.com/AUTOMATIC1111/stable-diffusion-webui
- `git clone https://github.com/AUTOMATIC1111/stable-diffusion-webui.git`
- [Apple Silicon related installs](https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Installation-on-Apple-Silicon)
	- If Homebrew is not installed, follow the instructions at https://brew.sh to install it. Keep the terminal window open and follow the instructions under "Next steps" to add Homebrew to your PATH.
	- Open a new terminal window and run `brew install cmake protobuf rust python@3.10 git wget`
	- Clone the web UI repository by running git clone https://github.com/AUTOMATIC1111/stable-diffusion-webui
Place Stable Diffusion models/checkpoints you want to use into stable-diffusion-webui/models/Stable-diffusion. If you don't have any, see Downloading Stable Diffusion Models below.
	- cd stable-diffusion-webui and then ./webui.sh to run the web UI. A Python virtual environment will be created and activated using venv and any remaining missing dependencies will be automatically downloaded and installed.
	- To relaunch the web UI process later, run ./webui.sh again. Note that it doesn't auto update the web UI; to update, run git pull before running ./webui.sh.

# Unfortunately, you're not done yet

Stable Diffusion only really excels because it allows the installation of extensions and plugins. These are where the real magic happens, up until this point, its largely just an engine that runs Models. Now, you need to choose what models and LoRAs you'd like to use that will generate the image/video you're looking to create.

## Extensions

- [Extension Install guide](https://blog.runpod.io/using-scripts-and-extensions-in-stable-diffusion/?utm_term=&utm_campaign=Serverless+GPU&utm_source=adwords&utm_medium=ppc&hsa_acc=4558579452&hsa_cam=20156995097&hsa_grp=&hsa_ad=&hsa_src=x&hsa_tgt=&hsa_kw=&hsa_mt=&hsa_net=adwords&hsa_ver=3&gclid=EAIaIQobChMIkrbBiZqWgQMVSPXICh0cZA8DEAAYASAAEgKNVfD_BwE), installing Extensions start about 2/3rds of the way down the page. 
	- [Filter for NSFW content](https://github.com/AUTOMATIC1111/stable-diffusion-webui-nsfw-censor)
	- [Top 5 Extensions](https://colingallagher.me/2023/04/08/top-5-web-ui-plugins/) and a pretty good rundown of what makes them valuable additions
		- [ControlNet](https://github.com/Mikubill/sd-webui-controlnet)
		- [DreamBooth](https://github.com/d8ahazard/sd_dreambooth_extension)
		- [Deforum](https://github.com/deforum-art/sd-webui-deforum)
		- [Dynamic Prompts](https://github.com/adieyal/sd-dynamic-prompts)
		- [CLIP interrogator](https://github.com/pharmapsychotic/clip-interrogator)

## Models(checkpoint files)

Unlike Midjourney or DALL-E, Stable Diffusion doesn't come with any styling methods, these Models have to be installed. Without them, they won't function. These also determine how accurate faces and hands tend to be, or how it manages with words/lettering. They also tend to determine the style of the image. 

[Model List](https://huggingface.co/models?other=stable-diffusion)

If you don't have any models to use, Stable Diffusion models can be downloaded from Hugging Face. To download, click on a model and then click on the Files and versions header. Look for files listed with the ".ckpt" or ".safetensors" extensions, and then click the down arrow to the right of the file size to download them.

Some popular official Stable Diffusion models are:

```
Stable DIffusion 1.4 (sd-v1-4.ckpt)
Stable Diffusion 1.5 (v1-5-pruned-emaonly.ckpt)
Stable Diffusion 1.5 Inpainting (sd-v1-5-inpainting.ckpt)
```
	
- Stable Diffusion 2.0 and 2.1 require both a model and a configuration file, and image width & height will need to be set to 768 or higher when generating images:

```
Stable Diffusion 2.0 (768-v-ema.ckpt)
Stable Diffusion 2.1 (v2-1_768-ema-pruned.ckpt)
```

For the configuration file, hold down the option key on the keyboard and click here to download v2-inference-v.yaml (it may download as v2-inference-v.yaml.yml). In Finder select that file then go to the menu and select File > Get Info. In the window that appears select the filename and change it to the filename of the model, except with the file extension .yaml instead of .ckpt, press return on the keyboard (confirm changing the file extension if prompted), and place it in the same folder as the model (e.g. if you downloaded the 768-v-ema.ckpt model, rename it to 768-v-ema.yaml and put it in stable-diffusion-webui/models/Stable-diffusion along with the model).

Also available is a Stable Diffusion 2.0 depth model (512-depth-ema.ckpt). Download the v2-midas-inference.yaml configuration file by holding down option on the keyboard and clicking here, then rename it with the .yaml extension in the same way as mentioned above and put it in stable-diffusion-webui/models/Stable-diffusion along with the model. Note that this model works at image dimensions of 512 width/height or higher instead of 768.

## LoRA(Low-Rank Adaptation) Models

These are guidance models, they push your styling in one direction or another -- want all your images to be styled like Tarot Cards, find the right LoRA. Or want your renders to be in the style of Ink painting? There's a LoRA for that. 

* First, launch the Automatic1111 web UI.
* Open the "Extensions" tab, and click on "Install from URL" from the available options.
	* Paste the following link into the "URL for extension's git repository" input field, and then press the "Install" button: https://github.com/kohya-ss/sd-webui-additional-networks.git
	* install lora extension
* Switch to the "Installed" tab, and click on the "Apply and restart UI" button. Now, wait for the Automatic1111 web UI to restart.
	* restart ui
* After performing these steps, you should notice some new subfolders in your "models" folder. These models will store your LoRAs. However, you need to configure this folder so that the Automatic1111 web UI can read it.
* Open the "Settings" tab, and switch to the "Additional Networks" tab. Locate the "Extra paths to scan for LoRA models" input field and paste in the correct folder. You'll find it in the "stable-diffusion-webui/models/Lora" directory.
* After inputting the correct, full path to your LoRA folder, click "Apply settings."
* This takes care of installing the LoRA extension, however, it's not enough to start generating images just yet. You need to install your actual LoRA models to the correct folder as well. To do that, grab the downloaded LoRA file and place it in your "stable-diffusion-webui/models/Lora" folder.

