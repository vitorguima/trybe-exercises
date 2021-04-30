const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// dano do dragão
const dragonDamage = (dragon) => {
  return Math.floor(Math.random() * (dragon.strength - 15)) + 15;
}

// dano do warrior
const warriorDamage = (warrior) => {
  return Math.floor(Math.random() * (60 - warrior.strength)) + warrior.strength;
}

// dano mago + mana usada
const manaStatus = (obj) => {
  const mageDamage = {};
  if (obj.mana < 15) {
    mageDamage.damage = 'Não possui mana suficiente';
  } else {mageDamage.mana = obj.mana - 15;
  mageDamage.damage = Math.floor(Math.random() * (mage.intelligence * 2 - 45)) + 45;
  }
  return mageDamage;
}

const mageAction = (mage) => {
  const mageStatus = manaStatus(mage);
  return mageStatus;
}

console.log(mageAction(mage));
