// Soldier
class Soldier {
  constructor(health, strength) {
    (this.health = health), (this.strength = strength);
  }
  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else if (this.health <= 0) {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else if (this.health <= 0) {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  vikingArmy = [];
  saxonArmy = [];

  addViking(vikings) {
    this.vikingArmy.push(vikings);
  }

  addSaxon(saxons) {
    this.saxonArmy.push(saxons);
  }

  vikingAttack() {
    this.saxonArmy[
      Math.floor(Math.random() * this.saxonArmy.length)
    ].receiveDamage(
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        .strength
    );

    console.log(this.saxonArmy.filter((saxon) => saxon.health > 0));

    let result = JSON.parse(JSON.stringify(this.saxonArmy));

    return result.filter((saxon) => saxon.health > 0);
  }

  saxonAttack() {
    this.vikingArmy[
      Math.floor(Math.random() * this.vikingArmy.length)
    ].receiveDamage(
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)].strength
    );
    return this.vikingArmy.filter((viking) => viking.health > 0);
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}
