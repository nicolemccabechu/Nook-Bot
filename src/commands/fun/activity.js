const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("activity")
    .setDescription(`Give me something to do.`),
  async execute(interaction, client) {
    try {
      const data = await fetch("http://www.boredapi.com/api/activity/").then(
        (res) => res.json()
      );

      const embed = new EmbedBuilder()
        .setTitle("I think you should...")
        .setDescription(data.activity)
        .setColor("#9dffb0");

      await interaction.reply({ embeds: [embed] });
    } catch (err) {
      console.log(err);
    }
  },
};
