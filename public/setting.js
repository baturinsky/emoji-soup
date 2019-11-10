const setting = {
  races: [
    ["\u{1F4BC}"],
    ["", "\u{1F472}", "\u{1f9d5}"],
    ["\u{1f473}"],
    ["\u{1f471}"],
    ["\u{1f9db}"],
    ["\u{1f9dd}"]
  ],

  skills: {
    charisma: ["\u{1F5E3}"],
    fitness: ["\u{1F938}"],
    logic: ["\u2797"],

    command: ["\u{1F448}", ["charisma", "logic", "law"]],
    seduction: ["\u{1F444}", ["charisma", "fitness", "fashion"]],
    literature: ["\u{1F4D6}", ["charisma", "history", "geography"]],
    art: ["\u{1F5BC}", ["charisma", "biology", "history"]],
    fashion: ["\u{1F457}", ["charisma", "art", "mechanics", "medicine"]],
    deception: ["\u{1F445}", ["charisma", "law"]],

    architecture: ["\u{1F3DB}", ["science", "art", "mechanics", "geography"]],
    seafaring: ["\u{26F5}", ["fitness", "geography"]],
    combat: ["\u{2694}", ["fitness", "logic", "medicine"]],
    gardening: ["\u{1F33E}", ["fitness", "biology", "geography"]],
    subterfuge: ["\u{1F5DD}", ["deception", "combat"]],
    survival: ["\u{1F3D5}", ["fitness", "geography", "cooking"]],

    science: ["\u{269B}", ["logic"]],
    geography: ["\u{1F3DE}", ["logic", "biology", "history"]],
    history: ["\u{1F3FA}", ["logic", "geography", "law", "economy"]],
    music: ["\u{1F3BC}", ["logic", "charisma"]],
    medicine: ["\u{2695}", ["logic", "biology"]],
    biology: ["\u{1F98E}", ["chemistry", "gardening"]],
    chemistry: ["\u{2697}", ["science"]],
    mechanics: ["\u{2699}", ["logic", "fitness", "science"]],
    cooking: ["\u{1F35C}", ["logic", "medicine"]],
    law: ["\u{2696}", ["logic", "history", "charisma"]],
    economy: ["\u{1F4B9}", ["logic", "geography", "law"]]
  },

  careers: {
    politician: ["\u{1F451}", ["command", "history", "economy"], 10, "ideology"],
    soldier: ["\u{1F6E1}", ["combat", "command", "survival"], 30, "strategy"],
    police: ["\u{1F985}", ["combat", "law", "command"], 30, "law"],
    criminal: ["\u{1F9E4}", ["subterfuge", "combat", "survival", "law"], 10, "fraud"],
    writer: ["\u{1F58B}", ["literature"], 1, "novel"],
    artist: ["\u{1F3A8}", ["art"], 1, "picture"],
    musician: ["\u{1F3BB}", ["music"], 3, "song"],
    actor: ["\u{1F3AD}", ["charisma", "seduction", "art"], 3, "play"],
    builder: ["\u{2692}", ["fitness", "architecture"], 20, "building"],
    sailor: ["\u{2693}", ["seafaring", "combat", "survival", "economy"], 20, "route"],
    medic: ["\u{1F489}", ["medicine", "fitness", "charisma"], 3, "cure"],
    historian: ["\u{1F4DC}", ["history"], 1, "chronicle"],
    explorer: ["\u{1F3D4}", ["geography", "survival", "history"], 1, "map"],
    merchant: ["\u{1F3A9}", ["economy", "command"], 10, "corporation"],
    farmer: ["\u{1F452}", ["gardening", "survival"], 50, "breed"],
    craftsman: ["\u{1F527}", ["fitness", "mechanics"], 40, "invention"],
    researcher: [
      "\u{1F52D}",
      ["science", "mechanics", "biology", "history"],
      3
    , "research"],
    chef: ["\u{1F373}", ["cooking", "charisma", "fitness"], 20, "recipe"],
    teacher: ["\u{1F5D2}", ["charisma", "science"], 5, "manual"],
  },

  qualities: {
    influence: "\u{1F396}",
    wealth: "\u{1F4B0}",
    happiness: "\u{2728}"
  },

  relations: {
    friend: "\u{1F91D}",
    lover: "\u{2764}",
    enemy: "\u{1F620}"
  }
};
