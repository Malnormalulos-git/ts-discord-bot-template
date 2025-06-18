import { Events } from "discord.js";
import { Event } from "../types/types";

const ready: Event = {
    name: Events.ClientReady,
    once: true,
    execute: (client) => {
        console.log(`Ready! Logged in as ${client.user.tag}`);
        // client.user.setPresence({
        //     status: BOT_STATUS,
        //     activities: [BOT_ACTIVITY]
        // });
    }
};

export default ready;