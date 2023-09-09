export default class Character {
  constructor(name, attack, distance = 1, stoned = false) {
    this.name = name;
    this.attack = attack;
    this.stoned = stoned;
    this.distance = distance;
  }

  set stoned(stoned) {
    this.value = stoned;
  }

  get stoned() {
    return this.value;
  }

  set attack(attack) {
    this.attackValue = attack;
  }

  get attack() {
    let attackDatura = (this.attackValue - (this.distance - 1) * 10);
    if (this.stoned) {
      attackDatura -= Math.log2(this.distance) * 5;
    }
    if (attackDatura > 100) {
      attackDatura = 100;
    }
    if (attackDatura < 0) {
      attackDatura = 0;
    }
    return Math.round(attackDatura);
  }
}
