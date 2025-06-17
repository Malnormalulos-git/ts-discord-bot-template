import {
    AutocompleteInteraction,
    Client,
    Collection,
    CommandInteraction,
    SlashCommandBuilder,
    SlashCommandOptionsOnlyBuilder,
    SlashCommandSubcommandsOnlyBuilder
} from "discord.js";

export interface command {
    data: SlashCommandBuilder | SlashCommandOptionsOnlyBuilder | SlashCommandSubcommandsOnlyBuilder,
    execute: (interaction: CommandInteraction) =>  Promise<void>,
    autocomplete?: (interaction: AutocompleteInteraction) => Promise<void>
}

export interface event {
    name: string,
    once?: boolean,
    execute: (...args: any[]) => Promise<void> | void,
}

export interface ClientWithCommands extends Client {
    commands: Collection<string, any>
}