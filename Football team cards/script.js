const footballTeam = {
  team: "India",
  year: 2000,
  headCoach: "Adem bell",
  players: [
    { name: "Sunil pal", position: "goalkeeper", isCaptain: false },
    { name: "Rahul singh", position: "midfielder", isCaptain: false },
    { name: "Raka", position: "defender", isCaptain: false },
    {
      name: "Harmanpreet singh",
      position: "forward",
      isCaptain: true,
    },
  ],
};

const teamEl = document.querySelector("#team");
const HeadCoach = document.querySelector("#head-coach");
const yearEl = document.querySelector("#year");
const PlayerCardsEl = document.querySelector("#player-cards");
const dropdown = document.querySelector("#players");

teamEl.textContent = footballTeam.team;
HeadCoach.textContent = footballTeam.headCoach;
yearEl.textContent = footballTeam.year;
function displayPlayer(players) {
  PlayerCardsEl.innerHTML = players
    .map((player) => {
      return ` <div class="player-card">
          <h2>${player.isCaptain ? "(Captain) " : ""}${player.name}</h2>
          <p>Position: ${player.position}</p>
        </div>`;
    })
    .join("");
}

displayPlayer(footballTeam.players);

dropdown.addEventListener("change", (e) => {
  const selected = e.target.value;
  const filteredPlayers =
    selected === "all"
      ? footballTeam.players
      : footballTeam.players.filter((player) => player.position === selected);
  displayPlayer(filteredPlayers);
});
