import { REST, Routes, Client, GatewayIntentBits, Role } from 'discord.js';
import * as dotenv from "dotenv";
dotenv.config({ path: __dirname+'/.env' });
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

const commands = [
  {
    name: 'status',
    description: 'Check your role in this family',
  },
];

const rest = new REST({ version: '10' }).setToken(process.env.CLIENT_TOKEN as string);

try {
  console.log('Started refreshing application (/) commands.');

  rest.put(Routes.applicationCommands(process.env.CLIENT_TOKEN as string), { body: commands });

  console.log('Successfully reloaded application (/) commands.');
} catch (error) {
  console.error(error);
}

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'status') {
    //console.log(new Role(client));
    
    await interaction.reply('Pong!');
  }
});

client.login(process.env.CLIENT_TOKEN as string);