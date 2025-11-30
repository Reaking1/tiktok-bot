import textToSpeech from "@google-cloud/text-to-speech";
import fs from "fs";
import util from "util";
import path from "path";
import logger from "../utils/logger.js";

// Create Google TTS client
const client = new textToSpeech.TextToSpeechClient();

// Where TTS audio files will be stored
const AUDIO_OUTPUT = "./audio";

if (!fs.existsSync(AUDIO_OUTPUT)) {
    fs.mkdirSync(AUDIO_OUTPUT);
}

/**
 * Generate TTS audio from text.
 * @param {string} text - The text to convert to speech
 * @param {string} voiceName - (Optional) Google TTS voice
 * @returns {string} filePath - Path to generated audio file
 */
export async function speak(text, voiceName = "en-US-Wavenet-D") {
    try {
        logger.info(`TTS generating audio for text: "${text}"`);

        const request = {
            input: { text },
            voice: { languageCode: "en-US", name: voiceName },
            audioConfig: { audioEncoding: "mp3" },
        };

        // Convert text to speech
        const [response] = await client.synthesizeSpeech(request);

        // File name
        const fileName = `tts_${Date.now()}.mp3`;
        const filePath = path.join(AUDIO_OUTPUT, fileName);

        // Save audio file
        const writeFile = util.promisify(fs.writeFile);
        await writeFile(filePath, response.audioContent, "binary");

        logger.success(`TTS generated: ${filePath}`);
        return filePath;

    } catch (err) {
        logger.error(`TTS error: ${err.message}`);
        return null;
    }
}
