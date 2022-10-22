const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription(`I smart cat that will tell you interesting facts!`),
  async execute(interaction, client) {
    try {

      const embed = new EmbedBuilder()
        .setTitle("Bot Commands")
        .setThumbnail('https://i.pinimg.com/originals/38/64/36/386436f77be1cad1dada76ea35c6fb77.gif')
        .setColor("#9dffb0")
        .addFields([
          {
            name: `/fish`,
            value: `Gives list of fish`,
            inline: false,
          },
          {
            name: `/villager`,
            value: `Gives list of villagers`,
            inline: false,
          },
          {
            name: `/bugs`,
            value: `Gives list of bugs`,
            inline: true,
          },
          {
            name: `/wholesome`,
            value: `Gives wholesome fact`,
            inline: false,
          },
          {
            name: `/fortune`,
            value: `Gives fortune reading`,
            inline: true,
          },
        ]);

      await interaction.reply({ embeds: [embed] });
    } catch (err) {
      console.log(err);
    }
  },
};
