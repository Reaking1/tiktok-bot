import { speak } from "../services/ttsService";

async function onCaht(user, message) {
    if(message.includes("hi")) {
        await speak(`Hello ${user}, Welcome ro the live!`);
    }
}