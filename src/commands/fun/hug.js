const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('hug')
        .setDescription('Hug Someone')
        .addUserOption(option =>
            option
                .setName('user')
                .setDescription('The user you want the cat to hug')
                .setRequired(true)
        ),
    async execute(interaction) {
        return interaction.reply(`Rosalind hugs ${interaction.options.getUser('user')}`)
    },
};