const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("advice")
    .setDescription(`Gives words of wisdom from Tom Nook!`),
  async execute(interaction, client) {
    try {
      const data = await fetch("https://api.adviceslip.com/advice").then(
        (res) => res.json()
      );

      const embed = new EmbedBuilder()
        .setTitle("Tom Nook's Words of Wisdom")
        .setDescription(data.slip.advice)
        .setColor("#9dffb0");

      await interaction.reply({ embeds: [embed] });
    } catch (err) {
      console.log(err);
    }
  },
};
