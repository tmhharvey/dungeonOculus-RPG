import DungeonMonsters from "../dungeon/dungeonMonsters";

var damageHelpers = {
  abilityActionObject: (ability, attacker, defender) => {
    switch (ability.type) {
      case "damage":
        var abilityActionObject = damageHelpers.damageAbilityHandler(
          ability,
          attacker,
          defender
        );

        return abilityActionObject;

        break;
      default:
    }
  },
  damageAbilityHandler: (ability, attacker, defender) => {
    let oldDefenderState = defender;
    let activeAbility = ability;
    let attackerAttack = attacker.attack;
    let defenderDef = defender.defense;
    let defenderDefType = defender.defenseType;
    let defenderCurrentHealth = defender.health;
    let abilityAction;
    let abilityCombatLog = "";

    var trueDamage = damageHelpers.damageCalculator(
      activeAbility,
      defenderDefType,
      attackerAttack,
      defenderDef
    );

    defenderCurrentHealth = defenderCurrentHealth - trueDamage;
    abilityCombatLog =
      attacker.name +
      " used " +
      ability.abilityName +
      " and did " +
      trueDamage +
      " damage to " +
      defender.name +
      "!";

    if (defenderCurrentHealth <= 0) {
      if (defender.boss) {
        oldDefenderState = {
          name: "",
          class: "",
          boss: true,
          health: "",
          attack: "",
          attackType: "",
          defense: "",
          defenseType: "",
          portrait: "",
          ability: ""
        };
      } else {
        oldDefenderState = {
          name: "",
          class: "",
          health: "",
          attack: "",
          attackType: "",
          defense: "",
          defenseType: "",
          portrait: "",
          ability: ""
        };
      }
    } else {
      oldDefenderState.health = defenderCurrentHealth;
    }

    abilityAction = {
      abilityCombatLog: abilityCombatLog,
      updatedDefender: oldDefenderState,
      type: ability.type
    };

    return abilityAction;
  },
  damageCalculator: (
    charAbility,
    defenderDefType,
    attackerAttack,
    defenderDefense
  ) => {
    var totalDamage =
      damageHelpers.useAbility(charAbility, defenderDefType) + attackerAttack;

    var actualDamage = totalDamage - defenderDefense;
    console.log(
      "attacker did " +
        totalDamage +
        " to the defender who blocked " +
        defenderDefense +
        " damage. The total damage is " +
        actualDamage
    );

    if (actualDamage < 0) {
      actualDamage = 0;
    }

    return Math.floor(actualDamage);
  },
  useAbility: (charAbility, defenderDefType) => {
    let damageMultiplier = damageHelpers.damageMultiplierCheck(
      charAbility,
      defenderDefType
    );

    var damageVariationArray = [0, 1, 2];
    var damageVariation = damageVariationArray[Math.floor(Math.random() * 3)];

    let damageRangeCalc = damageVariation + charAbility.damage;

    console.log(
      "the damage variation is " +
        damageVariation +
        ". The ability damage is " +
        charAbility.damage +
        ". So the ability damage after variation is: " +
        damageRangeCalc
    );

    let damage = damageRangeCalc * damageMultiplier;
    console.log(
      "The damage is " +
        damageRangeCalc +
        " and the multiplier is " +
        damageMultiplier +
        ". So the total damage before being blocked is " +
        damage
    );
    return damage;
  },
  damageMultiplierCheck: (charAbility, defenseType) => {
    let damageMultiplier = 1;

    if (charAbility.AttackType === "Physical") {
      switch (defenseType) {
        case "Heavy":
          damageMultiplier = 1;
          break;
        case "Light":
          damageMultiplier = 1.5;
          break;
        case "Enchanted":
          damageMultiplier = 1;
          break;
        default:
          damageMultiplier = 1;
      }
    }

    if (charAbility.AttackType === "Magic") {
      switch (defenseType) {
        case "Heavy":
          damageMultiplier = 2;
          break;
        case "Light":
          damageMultiplier = 1.5;
          break;
        case "Enchanted":
          damageMultiplier = 0.5;
          break;
        default:
          damageMultiplier = 1;
      }
    }

    if (charAbility.AttackType === "Piercing") {
      switch (defenseType) {
        case "Heavy":
          damageMultiplier = 0.5;
          break;
        case "Light":
          damageMultiplier = 2;
          break;
        case "Enchanted":
          damageMultiplier = 1;
          break;
        default:
          damageMultiplier = 1;
      }
    }

    console.log(
      "The attacker attack type is " +
        charAbility.AttackType +
        " and the defender defense type is " +
        defenseType +
        ". So the damage multiplier is " +
        damageMultiplier +
        "."
    );

    return damageMultiplier;
  }
};

export default damageHelpers;
