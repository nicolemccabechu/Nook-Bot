const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("bugs")
    .setDescription(`I smart cat that will tell you interesting facts!`),
  async execute(interaction, client) {
    try {
      const bugFound = Math.floor(Math.random() * 80);
      const url = await fetch(`https://acnhapi.com/v1/bugs/${bugFound}`).then(
        (res) => res.json()
      );

      const embed = new EmbedBuilder()
        .setTitle(url.name["name-USen"])
        .setImage(url.image_uri)
        .setThumbnail(url.icon_uri)
        .setDescription(url["catch-phrase"])
        .setColor("#9dffb0")
        .addFields([
          {
            name: `Months (North)`,
            value: `${url.availability["month-northern"]}`,
            inline: true,
          },
          {
            name: `Months (South)`,
            value: `${url.availability["month-southern"]}`,
            inline: true,
          },
          {
            name: `Time`,
            value: `${url.availability["time"]}`,
            inline: true,
          },
          {
            name: `Location`,
            value: `${url.availability["location"]}`,
            inline: true,
          },
          {
            name: `Bells Price`,
            value: `${url.price}`,
            inline: true,
          },
          {
            name: `Rarity`,
            value: `${url.availability["rarity"]}`,
            inline: true,
          },
        ])
        .setFooter({ text: url["museum-phrase"] });

      await interaction.reply({ embeds: [embed] });
    } catch (err) {
      console.log(err);
    }
  },
};
