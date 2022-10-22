const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("villager")
    .setDescription(`I smart cat that will tell you interesting facts!`),
  async execute(interaction, client) {
    try {
      const villagerFound = Math.floor(Math.random() * 414);
      const url = await fetch(
        `https://acnhapi.com/v1/villagers/${villagerFound}`
      ).then((res) => res.json());

      const embed = new EmbedBuilder()
        .setTitle(url.name["name-USen"])
        .setImage(url.image_uri)
        .setThumbnail(url.icon_uri)
        .setDescription(url.saying)
        .setColor("#9dffb0")
        .addFields([
          {
            name: `Species`,
            value: `${url.species}`,
            inline: true,
          },
          {
            name: `Birthday`,
            value: `${url[`birthday-string`]}`,
            inline: true,
          },
          {
            name: `Personality`,
            value: `${url.personality}`,
            inline: true,
          },
          {
            name: `Catch-Phrase`,
            value: `${url[`catch-phrase`]}`,
            inline: true,
          },
          {
            name: `Hobby`,
            value: `${url.hobby}`,
            inline: true,
          },
          {
            name: `Gender`,
            value: `${url.gender}`,
            inline: true,
          },
        ]);

      await interaction.reply({ embeds: [embed] });
    } catch (err) {
      console.log(err);
    }
  },
};
