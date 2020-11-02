const Discord = require('discord.js');
const dotenv = require('dotenv').config( { path: './config/.env' } );

const prefix = process.env.PREFIX;
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
  const prefix = '!';

  if (message.author.bot) return;
  if (message.content.indexOf(prefix) !== 0) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // Simple hello world //
  if (message.content === '!helloworld') {
      message.channel.send("hello" + message.content);
  }

  // Command to distribute random items to players 
  if (command === "randophobia") {
    const numberOfPlayers = args[0];
    const playerArray = [];

    // No bots in the game so there must be at least one human player
    if (numberOfPlayers < 1) {
      message.reply("There must be at least one player");
      return;
    }

    // The game only supports 4 players so asking for more should not be allowed
    if (numberOfPlayers > 4) {
      message.reply("Max player count is 4");
      return;
    }

    // Players are allowed 3 items
    // Might change this in the future to be passed in as a command argument.
    let itemCap = 3;
    for (i = 0; i < numberOfPlayers ; i++) {
      let itemSet = new Set();

      // Pick the items for the players
      pickItems(itemSet, itemCap);

      // Head Cameras are considered a free item, so if it gets rolled, allow the player another item.
      if(itemSet.has('Head Camera (Bonus Item)')) {
        tempItemCap = itemCap + 1;
        pickItems(itemSet, tempItemCap);
      }

      playerArray.push(new LobbySlot(itemSet));
    }

    // Simple introductory instructions
    message.reply(`Here's your random items :)\n Each player gets ${itemCap} items.\nAn extra item is provided if Head Camera is rolled.\nHappy Hunting!\n==========`);

    // Compose the message to send to players
    let composedMessage = "";
    for (p = 0; p < numberOfPlayers; p++) {
      const interator = playerArray[p].items.values();

      composedMessage += `\nSlot ${p + 1}\n`;
      for (s = 0; s < playerArray[p].items.size; s++) {
        composedMessage += `Item ${s + 1}: ${interator.next().value}\n`
      }
    }
    // Let the players know what items they are receiving
    message.channel.send(composedMessage);
  }
});

client.login(dotenv.DISCORD_TOKEN);


class LobbySlot {
  constructor(items) {
    this.items = items;
  }
}

function pickItems(itemSet, itemCap) {
    let randomItem;
    do {
      randomItem = Math.floor(Math.random() * listOfItems().length);
      itemSet.add(listOfItems()[randomItem]);
    } while (itemSet.size < itemCap);

  return itemSet;
}

function listOfItems() {
  return [
    'Candle /w Ligther',
    'Flashlight',
    'Strong Flashlight',
    'Head Camera (Bonus Item)',
    'Glowstick',
    'Parabolic Mic',
    'Infared Light Sensor',
    'Ghost Writing Book',
    'Sanity Pills',
    'Thermo',
    'Sound Sensor',
    'Motion Sensor',
    'Video Camera /w Tripod',
    'Smudge Sticks /w Lighter',
    'Salt',
    'Spirit Box',
    'Crucifix',
    'UV Light',
    'Photo Camera',
    'EMF Reader',
  ];
}
