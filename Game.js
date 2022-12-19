var score = [100, 100];
var s1 = localStorage.getItem("player1");
var s2 = localStorage.getItem("player2");
s2 = s2 ? s2 : 0;
s1 = s1 ? s1 : 0;
localStorage.setItem("wins", JSON.stringify([parseInt(s1), parseInt(s2)]));
var wins = JSON.parse(localStorage.getItem("wins"));




function updateScore(player) {

    console.log(`called with ${player}`)
    var num = Math.floor(Math.random() * 100) + 1;
    score[player] = Math.max(0, score[player] - num + 1);

    document.getElementById(`score${player + 1}`).innerHTML = score[player];
    if (score[player] == 0) {
        wins[player ^ 1] += 1;
        localStorage.setItem("wins", JSON.stringify(wins));
        document.location.reload();
        alert(`Player ${1 + (player ^ 1)} wins`);
        window.location.href = 'Home.html';

    }

}

