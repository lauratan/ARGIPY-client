const canvas = document.getElementById('argipy');
const ctx = canvas.getContext('2d');
const CELL_SIZE = 20;
const state = {
    me: 468, // Some id
    players: {
      468: {
        id: 468,
        name: 'Anon',
        x: 5,
        y: 5,
      },
      357: {
        id: 357,
        name: 'Anon',
        x: 8,
        y: 8,
      },
    },
    treasures: [
      { x: 6, y: 8 },
      { x: 7, y: 9 },
      { x: 8, y: 10 },
      { x: 9, y: 11 },
    ]
}

function drawCell(x, y, colour='red') {
    ctx.fillStyle = colour;
    ctx.fillRect( x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
}

function draw(state) {
    ctx.fillStyle = 'black';
    ctx.fillRect(0,0,canvas.width,canvas.height)
    drawPlayers(state.players);
    drawMe(state.players[state.me]);
    drawTreasure(state.treasures);
}

function drawPlayers(players) {    
    const allPlayers = Object.values(players)
    allPlayers.forEach((player) => {
        drawCell(player.x, player.y)
    })
}

function drawMe(me) {
    drawCell(me.x, me.y, 'green')
}

function drawTreasure(treasures) {
    treasures.forEach((treasure) => {
        drawCell(treasure.x, treasure.y, 'yellow')
    })
}

draw(state);