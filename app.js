const Discord = require("discord.js");
require("dotenv").config();

const client = new Discord.Client();
client.login(process.env.BOT_TOKEN);

const prefix = "->";

client.on("ready", () => {
  console.log("Bot is ready");
});

client.on("message", (message) => {
  //   if (message.content.startsWith(prefix + "say")) {
  //     const text = message.toString().substring();
  //     message.reply(text[1]);
  //   }
  // test commit
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(" ");
  const command = args.shift().toLowerCase();

  if (command === "say") {
    let finalMsg = "";
    args.forEach((arg) => {
      finalMsg += arg + " ";
    });
    message.channel.send(finalMsg);
  }

  if (command === "avatar") {
    if (!message.mentions.users.size) {
      return message.reply(
        `Your avatar: <${message.author.displayAvatarURL({
          format: "png",
          dynamic: true,
        })}>`
      );
    }
  }
});
