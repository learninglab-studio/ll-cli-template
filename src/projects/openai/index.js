const fs = require('fs').promises;
const path = require('path');
const { OpenAI } = require('openai');

module.exports.tts = async ({ textFile }) => {
    const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY});

    // Read the text content from the textFile
    const textContent = await fs.readFile(textFile, 'utf8');

    // Extract the directory and the file name without extension from textFile
    const dir = path.dirname(textFile);
    const baseName = path.basename(textFile, path.extname(textFile));

    // Construct the output path with the same structure but with .m4a extension
    const outputPath = path.join(dir, `${baseName}.mp3`);

    const m4a = await openai.audio.speech.create({
        model: "tts-1",
        voice: "alloy",
        input: textContent, // Use the read text content as input
        // response_format: "aac"
    });
    console.log(outputPath);
    const buffer = Buffer.from(await m4a.arrayBuffer());
    await fs.writeFile(outputPath, buffer);
}
