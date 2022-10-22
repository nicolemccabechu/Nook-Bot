const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("catfact")
    .setDescription(`I smart cat that will tell you interesting facts!`),
  async execute(interaction, client) {
    try {
      const url = await fetch("https://some-random-api.ml/facts/cat");
      const random = (await url.json()).fact;

      const embed = new EmbedBuilder()
        .setTitle("Did you know?")
        .setDescription(`${random}`)
        .setColor("#9dffb0");

      await interaction.reply({ embeds: [embed] });
    } catch (err) {
      console.log(err);
    }
  },
};
