import { BaseCommandInteraction, Client, Message } from "discord.js";
import { CommandInteraction } from "../Types/CommandInteraction";
export const Help: CommandInteraction = {
  name: "help",
  description: "Help for Filthy Bot",
  type: "CHAT_INPUT",
  run: async (client: Client, interaction: BaseCommandInteraction | Message) => {
    interaction = interaction as BaseCommandInteraction;
    await interaction.followUp({
      embeds: [
        {
          color: 0x0099ff,
          author: {
            name: "Filthy Bot commands",
          },
          fields: [
            {
              name: "-f p ${query}",
              value: "Attempts to play the searched query. If player is active the queried result will be added to player queue.",
            },
            {
              name: "-f show ${query}",
              value: "returns a list of the searched query.",
            },
            {
              name: "-f skip",
              value: "Skips the current track.",
            },
            {
              name: "-f stop",
              value: "Deletes queue and leaves channel.",
            },
            {
              name: "-f q",
              value: "Lists the next 10 songs in player queue.",
            },
            {
              name: "/roll",
              value: "Random roll between 0 - 100",
            },
            {
              name: "/joke",
              value: "The Filthiest joke you ever heard.",
            },
            {
              name: "/stevesLatest",
              value: "Posts Steves latest stealth video.",
            },

          ],
        },
      ],
    });
  },
};
