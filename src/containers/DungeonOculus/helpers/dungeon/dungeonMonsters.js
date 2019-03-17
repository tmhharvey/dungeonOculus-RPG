import AbilityHelpers from "../abilities/abilityHelpers";
import lizardPortrait from "../../../../assets/images/lizardMonster.jpg";
import pantherPortrait from "../../../../assets/images/blacktooth.PNG";
import corruptedAncientOne from "../../../../assets/images/corruptedAncientOne.jpg";
import corruptedForestCreature from "../../../../assets/images/corruptedForestCreature.jpg";
import banditScoundrel from "../../../../assets/images/Bandit1.jpg";
import banditMob from "../../../../assets/images/BanditMob.jpg";
import banditCutThroat from "../../../../assets/images/bandit2.png";
import banditLord from "../../../../assets/images/banditLord.jpg";
import necroSeductress from "../../../../assets/images/necroseduct.jpg";
import necroChamp from "../../../../assets/images/necroChamp.jpg";
import necroTempt from "../../../../assets/images/necroTempt.PNG";
import archNecro from "../../../../assets/images/archNecro.jpg";
import demonLord from "../../../../assets/images/demonLord.png";
import DungeonHelpers from "./dungeonHelpers";
import BossTheme from "../../../../assets/audio/bossTheme.mp3";

var Strike = new AbilityHelpers(
  "Strike",
  "damage",
  "You swing in a downward arc with your sword, dealing 3 base damage! <br/> Damage Type: <strong>Physical </strong>. <br/> Cooldown: <strong>none</strong>",
  3,
  "Physical",
  0,
  0,
  0,
  false
);
var Heal = new AbilityHelpers(
  "Heal Potion",
  "heal",
  "You quickly pop open and drink one of your health potions, healing you for 14. <br/> Cooldown: <strong> 2 Turns</strong>",
  0,
  "Magic",
  7,
  0,
  2,
  false
);
var EnchantedStrike = new AbilityHelpers(
  "Enchanted Strike",
  "damage",
  "You magically enchant your sword and then swing in an upward arc, dealing 7 base damage! <br/>Damage Type: <strong>Magic </strong> <br/> Cooldown: <strong>4</strong>",
  7,
  "Magic",
  0,
  0,
  4,
  false
);
var FalseLife = new AbilityHelpers(
  "False Life",
  "damage",
  "tooltip",
  3,
  "Magic",
  0,
  0,
  0,
  false
);

var DeathCoil = new AbilityHelpers(
  "Death Coil",
  "damage",
  "tooltip",
  5,
  "Magic",
  0,
  0,
  0,
  false
);

var BlackSiphon = new AbilityHelpers(
  "Black Siphon",
  "heal",
  "tooltip",
  0,
  "Magic",
  12,
  0,
  2,
  false
);

var Charge = new AbilityHelpers(
  "Charge",
  "damage",
  "You swing in a downward arc with your sword, dealing 3 base damage! <br/> Damage Type: <strong>Physical </strong>. <br/> Cooldown: <strong>none</strong>",
  4,
  "Physical",
  0,
  0,
  0,
  false
);

var CorruptedTouch = new AbilityHelpers(
  "Corrupted Touch",
  "damage",
  "You swing in a downward arc with your sword, dealing 3 base damage! <br/> Damage Type: <strong>Physical </strong>. <br/> Cooldown: <strong>none</strong>",
  5,
  "Piercing",
  0,
  0,
  0,
  false
);

var FelRejuvination = new AbilityHelpers(
  "FelRejuvination",
  "heal",
  "tooltip",
  0,
  "Magic",
  20,
  0,
  2,
  false
);

var FuriousSwipe = new AbilityHelpers(
  "Furious Swipe",
  "damage",
  "You swing in a downward arc with your sword, dealing 3 base damage! <br/> Damage Type: <strong>Physical </strong>. <br/> Cooldown: <strong>none</strong>",
  7,
  "Physical",
  0,
  0,
  0,
  false
);

var banditCoveAbilityTable = [
  {
    trueAbility: Strike
  },
  {
    trueAbility: Strike
  },
  {
    trueAbility: Strike
  },
  {
    trueAbility: Strike
  },
  {
    trueAbility: Strike
  },
  {
    trueAbility: Strike
  },
  {
    trueAbility: Strike
  },
  {
    trueAbility: Strike
  },
  {
    trueAbility: Heal
  },
  {
    trueAbility: Heal
  }
];

var banditCoveBossTable = [
  {
    trueAbility: EnchantedStrike
  },
  {
    trueAbility: Strike
  },
  {
    trueAbility: Strike
  },
  {
    trueAbility: Strike
  },
  {
    trueAbility: Strike
  },
  {
    trueAbility: Strike
  },
  {
    trueAbility: Strike
  },
  {
    trueAbility: Strike
  },
  {
    trueAbility: Heal
  },
  {
    trueAbility: Heal
  }
];

var necroDwellAbilityTable = [
  {
    trueAbility: Strike
  },
  {
    trueAbility: Strike
  },
  {
    trueAbility: FalseLife
  },
  {
    trueAbility: FalseLife
  },
  {
    trueAbility: FalseLife
  },
  {
    trueAbility: FalseLife
  },
  {
    trueAbility: FalseLife
  },
  {
    trueAbility: FalseLife
  },
  {
    trueAbility: FalseLife
  },
  {
    trueAbility: BlackSiphon
  }
];

var necroDwellBossTable = [
  {
    trueAbility: DeathCoil
  },
  {
    trueAbility: Strike
  },
  {
    trueAbility: FalseLife
  },
  {
    trueAbility: FalseLife
  },
  {
    trueAbility: FalseLife
  },
  {
    trueAbility: FalseLife
  },
  {
    trueAbility: FalseLife
  },
  {
    trueAbility: FalseLife
  },
  {
    trueAbility: FalseLife
  },
  {
    trueAbility: BlackSiphon
  }
];

var corruptedForestAbilityTable = [
  {
    trueAbility: Strike
  },
  {
    trueAbility: Strike
  },
  {
    trueAbility: Charge
  },
  {
    trueAbility: Charge
  },
  {
    trueAbility: Charge
  },
  {
    trueAbility: Charge
  },
  {
    trueAbility: CorruptedTouch
  },
  {
    trueAbility: CorruptedTouch
  },
  {
    trueAbility: CorruptedTouch
  },
  {
    trueAbility: FelRejuvination
  }
];

var corruptedForestBossAbilityTable = [
  {
    trueAbility: FuriousSwipe
  },
  {
    trueAbility: Strike
  },
  {
    trueAbility: Charge
  },
  {
    trueAbility: Charge
  },
  {
    trueAbility: Charge
  },
  {
    trueAbility: Charge
  },
  {
    trueAbility: CorruptedTouch
  },
  {
    trueAbility: CorruptedTouch
  },
  {
    trueAbility: CorruptedTouch
  },
  {
    trueAbility: FelRejuvination
  }
];

var demonLordAbilityTable = [
  {
    trueAbility: FuriousSwipe
  },
  {
    trueAbility: EnchantedStrike
  },
  {
    trueAbility: DeathCoil
  },
  {
    trueAbility: FalseLife
  },
  {
    trueAbility: FalseLife
  },
  {
    trueAbility: FalseLife
  },
  {
    trueAbility: CorruptedTouch
  },
  {
    trueAbility: CorruptedTouch
  },
  {
    trueAbility: CorruptedTouch
  },
  {
    trueAbility: BlackSiphon
  }
];

var DungeonMonsters = {
  darkForestEncounters: {
    monsters: [
      {
        name: "Measle",
        class: "Scavenger",
        health: 20,
        maxHealth: 20,
        attack: 9,
        attackType: "Physical",
        defense: 1,
        defenseType: "Light",
        portrait: lizardPortrait,
        ability: corruptedForestAbilityTable
      },
      {
        name: "Corrupted Forest Creature",
        class: "Forest Creature",
        health: 30,
        maxHealth: 30,
        attack: 6,
        attackType: "Piercing",
        defense: 3,
        defenseType: "Heavy",
        portrait: corruptedForestCreature,
        ability: corruptedForestAbilityTable
      },
      {
        name: "Ol' Blacktooth",
        class: "Forest Creature",
        health: 22,
        maxHealth: 22,
        attack: 6,
        attackType: "Piercing",
        defense: 2,
        defenseType: "Light",
        portrait: pantherPortrait,
        ability: corruptedForestAbilityTable
      }
    ],
    boss: {
      name: "Corrupted Ancient One",
      class: "Forest Spirit",
      boss: true,
      health: 45,
      maxHealth: 45,
      attack: 12,
      attackType: "Physical",
      defense: 4,
      defenseType: "Light",
      portrait: corruptedAncientOne,
      audio: BossTheme,
      ability: corruptedForestBossAbilityTable
    }
  },
  necroDwellEncounters: {
    monsters: [
      {
        name: "Necromancer Seductress",
        class: "Scavenger",
        health: 16,
        maxHealth: 16,
        attack: 12,
        attackType: "Magic",
        defense: 1,
        defenseType: "Enchanted",
        portrait: necroSeductress,
        ability: necroDwellAbilityTable
      },
      {
        name: "Skeletal Champion",
        class: "Forest Creature",
        health: 50,
        maxHealth: 50,
        attack: 6,
        attackType: "Physical",
        defense: 3,
        defenseType: "Light",
        portrait: necroChamp,
        ability: necroDwellAbilityTable
      },
      {
        name: "Temptor",
        class: "Forest Creature",
        health: 21,
        maxHealth: 21,
        attack: 7,
        attackType: "Magic",
        defense: 5,
        defenseType: "Light",
        portrait: necroTempt,
        ability: necroDwellAbilityTable
      }
    ],
    boss: {
      name: "Necro Magistar",
      class: "Forest Spirit",
      boss: true,
      health: 30,
      maxHealth: 30,
      attack: 17,
      attackType: "Magic",
      defense: 4,
      defenseType: "Enchanted",
      portrait: archNecro,
      audio: BossTheme,
      ability: necroDwellBossTable
    }
  },
  banditCoverEncounters: {
    monsters: [
      {
        name: "Scoundrel",
        class: "Scavenger",
        health: 14,
        maxHealth: 14,
        attack: 5,
        attackType: "Physical",
        defense: 2,
        defenseType: "Light",
        portrait: banditScoundrel,
        ability: banditCoveAbilityTable
      },
      {
        name: "Bandit Mob",
        class: "Forest Creature",
        health: 33,
        maxHealth: 33,
        attack: 5,
        attackType: "Piercing",
        defense: 1,
        defenseType: "Light",
        portrait: banditMob,
        ability: banditCoveAbilityTable
      },
      {
        name: "Cut Throat",
        class: "Forest Creature",
        health: 19,
        maxHealth: 19,
        attack: 6,
        attackType: "Piercing",
        defense: 1,
        defenseType: "Light",
        portrait: banditCutThroat,
        ability: banditCoveAbilityTable
      }
    ],
    boss: {
      name: "Bandit Lord",
      class: "Forest Spirit",
      boss: true,
      health: 15,
      maxHealth: 15,
      attack: 9,
      attackType: "Physical",
      defense: 5,
      defenseType: "Light",
      portrait: banditLord,
      audio: BossTheme,
      ability: banditCoveBossTable
    }
  },
  demonLairEncounters: {
    monsters: [],
    boss: {
      name: "Azal'yog",
      class: "Demon Lord",
      boss: true,
      health: 99,
      maxHealth: 99,
      attack: 18,
      attackType: "Magic",
      defense: 4,
      defenseType: "Enchanted",
      portrait: demonLord,
      audio: BossTheme,
      ability: demonLordAbilityTable
    }
  }
};

export default DungeonMonsters;
