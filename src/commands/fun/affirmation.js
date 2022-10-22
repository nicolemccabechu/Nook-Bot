const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("affirmation")
    .setDescription(`Gives an affirmation to cheer you up!`),
  async execute(interaction, client) {
    try {
      const url = await fetch("https://www.affirmations.dev/").then(
        (res) => res.json()
      );

      const embed = new EmbedBuilder()
        .setDescription(url.affirmation)
        .setColor("#9dffb0");

      await interaction.reply({ embeds: [embed] });
    } catch (err) {
      console.log(err);
    }
  },
};
