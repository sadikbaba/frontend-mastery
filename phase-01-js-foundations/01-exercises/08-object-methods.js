const player = {
  name: "sadik",
  health: 80,
  coins: 700,

  showStats() {
    return (
      "name : " +
      this.name +
      ", health : " +
      this.health +
      ", coins : " +
      this.coins
    );
  },

  heal() {
    return (this.health += 20);
  },

  earnCoins(amount) {
    return (this.coins += amount);
  },
};

console.log("show stats:", player.showStats());

console.log("heal.", player.heal());

console.log("earn coins.", player.earnCoins(50));


console.log("show stats", player.showStats()) ;