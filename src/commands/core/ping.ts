import { SlashCommandBuilder } from "discord.js";
import { command } from "../../types/types";

const ping: command = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with Pong!'),
    execute: async (interaction) => {
        await interaction.reply('Pong!');
    }
};

export default ping;