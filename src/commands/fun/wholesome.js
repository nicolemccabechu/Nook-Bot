const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("wholesome")
    .setDescription(`Show me a wholesome meme!`),
  async execute(interaction, client) {
    try {
      const url = await fetch("https://www.reddit.com/r/wholesomememes/random/.json");
      const random = await url.json();

      const embed = new EmbedBuilder()
        .setTitle(`Here is your wholesome meme!`)
        .setDescription(`${random[0].data.children[0].data.title}`)
        .setImage(random[0].data.children[0].data.url)
        .setColor("#9dffb0");

      await interaction.reply({ embeds: [embed] });
    } catch (err) {
      console.log(err);
    }
  },
};
