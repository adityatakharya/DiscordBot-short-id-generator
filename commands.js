const { REST, Routes } = require('discord.js');

// Can be run for updating available [slash] commands
const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
];

const rest = new REST({ version: '10' }).setToken("MTIzODg0NzgzNjA5MTU4MDU1OA.GGqe2v.s6AL7Xmg59hCevYGifY9fvKN2tN85yazP8NMlI");

(async () => {try {
  console.log('Started refreshing application (/) commands.');

  await rest.put(Routes.applicationCommands("1238847836091580558"), { body: commands });

  console.log('Successfully reloaded application (/) commands.');
} catch (error) {
  console.error(error);
}})();