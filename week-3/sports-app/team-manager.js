const moment = require("moment");
const team = require("./team");

//  teams list
let teamOne = new team.Team("Dallas ", "Cowboys ", 55);
let teamTwo = new team.Team("New York ", "Giants ", 60);
let teamThree = new team.Team("Washington ", "Commanders ", 52);
let teamFour = new team.Team("Philadelphia ", "Eagles ", 58);
let teamFive = new team.Team("Green Bay ", "Packers ", 62);

// let teamsArray = [
//   new team.Team("Dallas ", "Cowboys ", 55),
//   new team.Team("New York ", "Giants ", 60),
//   new team.Team("Washington ", "Commanders ", 52),
//   new team.Team("Philadelphia ", "Eagles ", 58),
//   new team.Team("Green Bay ", "Packers ", 62),
// ];

//  function to return the list of teams
function findTeams() {
  let teamOne = new team.Team("Dallas ", "Cowboys ", 55);
  let teamTwo = new team.Team("New York ", "Giants ", 60);
  let teamThree = new team.Team("Washington ", "Commanders ", 52);
  let teamFour = new team.Team("Philadelphia ", "Eagles ", 58);
  let teamFive = new team.Team("Green Bay ", "Packers ", 62);
}

//  function to return the championship game string
function getGame() {
  return (
    teamOne.name +
    teamOne.mascot +
    "is playing " +
    teamThree.name +
    teamThree.mascot +
    "on " +
    moment().format("MM-DD-yyyy") +
    " at 7:30 PM CST"
  );
}

//  html style display
let teamDisplay = `-- DISPLAYING TEAMS --
Name: ${teamOne.name}
Mascot: ${teamOne.mascot}
Player Count: ${teamOne.playerCount}

Name: ${teamTwo.name}
Mascot: ${teamTwo.mascot}
Player Count: ${teamTwo.playerCount}

Name: ${teamThree.name}
Mascot: ${teamThree.mascot}
Player Count: ${teamThree.playerCount}

Name: ${teamFour.name}
Mascot: ${teamFour.mascot}
Player Count: ${teamFour.playerCount}

Name: ${teamFive.name}
Mascot: ${teamFive.mascot}
Player Count: ${teamFive.playerCount}


-- CHAMPIONSHIP GAME --`;

// display console output
console.log(teamDisplay);
console.log(getGame());

module.exports = getGame();
module.exports = findTeams();
