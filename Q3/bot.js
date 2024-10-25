const chatbot = require("./chatbot");
const readline = require("readline");

const prompt = readline.createInterface(process.stdin, process.stdout);

console.log("Press ctrl+c or type 'exit' to exit");
console.log("Bot=>Welcome to BookMyTrain! Your one-stop solution for booking train tickets to any destination. How can I assist you with your travel plans today?")


prompt.setPrompt("User=>");
prompt.prompt();

prompt.on("line", (message) => {
    if (message.toLowerCase() == "exit") {
        prompt.close();
    }

    console.log(chatbot.getAnswer(message));
    prompt.prompt();
}).on("close", () => {
    console.log("\nBot=>Thank You for using Bot!!");
    process.exit(0);
})