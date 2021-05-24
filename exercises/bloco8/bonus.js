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

// gera dano do dragão
const dragonAtack = (dragon) => {
  return Math.floor(Math.random() * (dragon.strength - 15)) + 15;
}

// gera dano do warrior
const warriorAtack = (warrior) => {
  return Math.floor(Math.random() * (60 - warrior.strength)) + warrior.strength;
}

// gera dano do mage
const mageAtack = (obj) => {
  const mageDamage = {};
  if (obj.mana < 15) {
    mageDamage.damage = 'Não possui mana suficiente';
  } else {mageDamage.manaSpent = 15;
  mageDamage.damage = Math.floor(Math.random() * (mage.intelligence * 2 - 45)) + 45;
  }
  return mageDamage;
}

// atualiza personagens após atack do warrior
const warriorDamage = (monster) => {
  const warriorDamageHit = warriorAtack(warrior);

  warrior.damage = warriorDamageHit;
  monster.healthPoints = monster.healthPoints - warriorDamageHit;
}

// atualiza personagens após atack do mage
const mageDamage = (monster) => {
  const mageDamageHit = mageAtack(mage).damage;

  mage.damage = mageDamageHit;
  monster.healthPoints = monster.healthPoints - mageDamageHit;
}

// atualiza personagens após atack do dragão
const dragonDamage = (arrayOfCharacters) => {
  const dragonDamageHit = dragonAtack(dragon);
  dragon.damage = dragonDamageHit;
  for (index of arrayOfCharacters) {
    index.healthPoints = index.healthPoints - dragonDamageHit;
  }
}

const gameActions = {
  warriorTurn: (monster) => warriorDamage(monster),
  mageTurn: (monster) => mageDamage(monster),
  dragonTurn: (Characters) => dragonDamage(Characters),
  battleMembers: () => console.log(battleMembers),
};

gameActions.warriorTurn(dragon);
gameActions.mageTurn(dragon);
gameActions.dragonTurn([mage, warrior]);
gameActions.battleMembers();

