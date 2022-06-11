const team = require("./team");

function findTeams() {
  teams = [
    new team.Team("Dallas", "Cowboys", 55),
    new team.Team("New York", "Giants", 60),
    new team.Team("Washington", "Commanders", 52),
    new team.Team("Philadelphia", "Eagles", 58),
    new team.Team("Green Bay", "Packers", 62),
  ];

  return teams;
}

console.log(findTeams());
