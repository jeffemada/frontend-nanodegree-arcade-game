// Enemies our player must avoid
var Enemy = function (x, y, group) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.group = group;
    this.speed = speedsByGroup.find(s => s.id === this.group).value;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if (this.x <= 505) {
        this.x = this.x + this.speed * dt;
    } else {        
        let groupSpeed = speedsByGroup.find(s => s.id === this.group)
        this.x = 0;

        if (this.speed === groupSpeed.value) {
            let newSpeed = Math.floor(Math.random() * (300 - 150 + 1)) + 150;
            speedsByGroup.find(s => s.id === this.group).value = newSpeed;
            this.speed = newSpeed;
        } else {
            this.speed = groupSpeed.value;
        }
    }

    //TODO: Handles collision with the Player 
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function () {

};

Player.prototype.update = function () {

};

Player.prototype.render = function () {

};

Player.prototype.handleInput = function () {

};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var speedsByGroup = [{
    id: 1,
    value: 250
}, {
    id: 2,
    value: 150
}, {
    id: 3,
    value: 200
}];
var allEnemies = [
    new Enemy(1, 60, 1),
    new Enemy(250, 60, 1),
    new Enemy(100, 145, 2),
    new Enemy(200, 145, 2),
    new Enemy(300, 145, 2),
    new Enemy(200, 230, 3)
];
var player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});