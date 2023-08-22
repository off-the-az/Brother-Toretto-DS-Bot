import { REST, Routes, Client, GatewayIntentBits, Role } from 'discord.js';
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

const commands = [
  {
    name: 'status',
    description: 'Check your role in this family',
  },
];

const rest = new REST({ version: '10' }).setToken('MTE0MzY2NzYxMjQxMzMzNzY4Mw.GIxDOy.sj3kqbtpfOuEPknOHCuWTCEpe_ZV6S-Q6nWzRg');

try {
  console.log('Started refreshing application (/) commands.');

  rest.put(Routes.applicationCommands('1143667612413337683'), { body: commands });

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

client.login('MTE0MzY2NzYxMjQxMzMzNzY4Mw.GIxDOy.sj3kqbtpfOuEPknOHCuWTCEpe_ZV6S-Q6nWzRg');