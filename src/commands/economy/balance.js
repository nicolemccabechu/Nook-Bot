const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const Balance = require("../../schemas/balance");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("balance")
    .setDescription("Returns info based on a user's balance.")
     .addUserOption(
        option => option
        .setName("target")
        .setDescription("Person whose balance you want to check")
    ),

  async execute(interaction, client) {
    let user = interaction.options.getUser("target")
      ? interaction.options.getUser("target")
      : interaction.user;
    interaction.options.getUser("target");
    const balanceProfile = await client.createBalance(interaction.member);
    await interaction.reply({
      content: `${interaction.user.tag} has ${balanceProfile.amount} bells.`,
    });
  },
};
