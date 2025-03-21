console.log("Cricket Application");
const game = {
  team1: "India",
  team2: "Australia",
  players: [
    [
      "Dhoni",
      "Sharma",
      "Kohli",
      "Rahul",
      "Jadeja",
      "Pandey",
      "Ashwin",
      "Chahal",
      "Khan",
      "Bhumra",
      "Shami",
    ],
    [
      "Wade",
      "Cummins",
      "Green",
      "Maxwell",
      "Finch",
      "Hazelwood",
      "Marsh",
      "Stoinis",
      "Richardson",
      "Starc",
      "Warner",
    ],
  ],
  Century: ["Kohli", "Sharma", "Warner", "Maxwell"],
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
//1. Create one player array for each team (variables 'players1' and 'players2')
//Solution: Destructuring Array
let [players1, players2] = game.players;
console.log(players1);
console.log(players2);

//2. The first player in any player array is the wicketkeeper and the others are field players.
//For India (team 1) create one variable ('captain') with the wicketkeeper name,
//and one array ('fieldPlayers') with all the remaining 10 field players
//Solution: Rest Operator
let [captain, ...fieldPlayers] = players1;
console.log("captain", captain);
console.log("fieldPlayers", fieldPlayers);

//3. Create an array 'allPlayers' containing all players of both teams (22 players)
//Solution: Spread Operator
let allPlayers = [...players1, ...players2];
console.log(allPlayers);

//4. During the game, India (team 1) used 3 substitute players. So create a new array ('players1Final')
//containing all the original team1 players plus 'Sandeep', 'John' and 'Sunil'
//Solution: Spread Operator
let players1Final = [...players1, "Sandeep", "John", "Sunil"];
console.log(players1Final);

//5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
//Solution: Destructuring Object
let { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

//6. The team with the lower odd is more likely to win.
//Print to the console which team is more likely to win,
//WITHOUT using an if/else statement or the ternary operator.
//Solution1 : Using Ternary Operator
console.log(
  team1 < team2
    ? `${team1} is more likely to win.`
    : `${team2} is more likely to win.`
);

//Solution2: Logical Opertator
team1 < team2 && console.log("Team1 will win"); 
team2 < team1 && console.log("Team2 will win"); 


//7. Loop over the game.Century array and print each player name to the
//console, along with the Century number (Example: "Century 1: Kohli")
//Solution1 : Traditional for loop
for (let i = 0; i < game.Century.length; i++) {
  console.log(`Century ${i + 1}: ${game.Century[i]}`);
}

//Solution2: For of loop
for(let [index, value] of game.Century.entries()){
  console.log(`Century ${index + 1}: ${value}`);
}

//8. Use a loop to calculate the average odd and log it to the console
let gameOddsSize = Object.keys(game.odds).length;
let sum = 0;
for (let currItem of Object.values(game.odds)) {
  sum = sum + currItem;
}
console.log(sum / gameOddsSize);
