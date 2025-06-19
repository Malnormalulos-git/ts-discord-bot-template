import {SlashCommandBuilder} from "discord.js";
import {Command} from "../../types/types";

const ping: Command = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with Pong!'),
    execute: async (interaction) => {
        await interaction.reply('Pong!');
    }
};

export default ping;