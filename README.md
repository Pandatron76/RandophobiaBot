# RandophobiaBot

RandophobiaBot allows players to experience [Phasmophobia](https://store.steampowered.com/app/739630/Phasmophobia/) in a unique way by limiting player lobby loadouts by declaring a random set of items each player is allow to bring with them.

## Getting Started (local development)
1. Clone the repository.
2. Run the command ```npm install```
3. Add the `.env` file to the `config` folder and add the following line to it:
```
DISCORD_TOKEN=[DISCORD_BOT_TOKEN_GOES_HERE]
```
4. From the root directory, run the following command
```
node ./client/bot.js
```

## Add bot to your server
To be updated.

## Commands
!randophobia [NumberOfPlayers]

Generates two text outputs. One which greets the user and a second message that list which player (slot) gets what items

### Example Output
```
@User, Here are your random items :)
Each player gets 3 items.
An extra item is provided if Head Camera is rolled.
Happy Hunting!
```

```
Slot 1
Item 1: Strong Flashlight
Item 2: Video Camera /w Tripod
Item 3: Salt

Slot 2
Item 1: Head Camera (Bonus Item)
Item 2: Motion Sensor
Item 3: Flashlight
Item 4: Smudge Sticks /w Lighter

Slot 3
Item 1: Flashlight
Item 2: Crucifix
Item 3: Parabolic Mic

Slot 4
Item 1: UV Light
Item 2: Infared Light Sensor
Item 3: Smudge Sticks /w Lighter
```
## F.A.Q
Question: Bot appears to be offline
Answer: The bot at this point in time does not have a home. It will in the near future. As such it may sometimes be offline


## Contributing

There is no contribution process at this time.