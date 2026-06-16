const characters = [
    {
        name: "The Trapper",
        role: "killer",
        source: "original",
        year: 2016,
        wikiTitle: "Evan MacMillan",
        portrait: "https://deadbydaylight.wiki.gg/images/K01_TheTrapper_Portrait.png?564c1d",
        kind: "OG",
        license: "Dead by Daylight",
        origin: "American",
        country: "United States",
        power: "Bear Trap",
        lore: "Armed with a bag of Bear Traps, The Trapper specialises in catching unsuspecting Survivors.",
        perks: [
            "Agitation",
            "Brutal Strength",
            "Unnerving Presence"
        ]
    },
    {
        name: "The Wraith",
        role: "killer",
        source: "original",
        year: 2016,
        wikiTitle: "Philip Ojomo",
        portrait: "https://deadbydaylight.wiki.gg/images/K02_TheWraith_Portrait.png?fbb21b",
        kind: "OG",
        license: "Dead by Daylight",
        origin: "Nigerian",
        country: "Nigeria",
        power: "Wailing Bell",
        lore: "Using his Wailing Bell to render himself invisible, The Wraith tracks his prey and strikes with little warning.",
        perks: [
            "Bloodhound",
            "Predator",
            "Shadowborn"
        ]
    },
    {
        name: "The Hillbilly",
        role: "killer",
        source: "original",
        year: 2016,
        wikiTitle: "Max Thompson Jr.",
        portrait: "https://deadbydaylight.wiki.gg/images/K03_TheHillbilly_Portrait.png?b1fa3b",
        kind: "OG",
        license: "Dead by Daylight",
        origin: "American",
        country: "United States",
        power: "Chainsaw",
        lore: "The sound of a revving motor, followed by a bloodthirsty scream of rage.",
        perks: [
            "Enduring",
            "Lightborn",
            "Tinkerer"
        ]
    },
    {
        name: "The Nurse",
        role: "killer",
        source: "original",
        year: 2016,
        wikiTitle: "Sally Smithson",
        portrait: "https://deadbydaylight.wiki.gg/images/K04_TheNurse_Portrait.png?f00131",
        kind: "OG",
        license: "Dead by Daylight",
        origin: "American / English",
        country: "United States / England",
        power: "Spencer's Last Breath",
        lore: "Using her Blink ability, The Nurse can teleport great distances in moments, predicting and cutting off Survivor routes.",
        perks: [
            "A Nurse's Calling",
            "Stridor",
            "Thanatophobia"
        ]
    },
    {
        name: "The Hag",
        role: "killer",
        source: "original",
        year: 2016,
        wikiTitle: "Lisa Sherwood",
        portrait: "https://deadbydaylight.wiki.gg/images/K06_TheHag_Portrait.png?60f88f",
        kind: "OG",
        license: "Dead by Daylight",
        origin: "African American",
        country: "United States",
        power: "Blackened Catalyst",
        lore: "The Hag specialises in creating a dangerous web of Phantasm Traps, to be triggered by unsuspecting Survivors.",
        perks: [
            "Hex: Devour Hope",
            "Hex: Ruin",
            "Hex: The Third Seal"
        ]
    },
    {
        name: "The Shape",
        role: "killer",
        source: "licensed",
        year: 2016,
        wikiTitle: "Michael Myers",
        portrait: "https://deadbydaylight.wiki.gg/images/K05_TheShape_Portrait.png?f9bf22",
        kind: "Licensed",
        license: "Halloween",
        origin: "American",
        country: "United States",
        power: "Evil Within",
        lore: "The Shape lurks in the distance, patiently biding his time.",
        perks: [
            "Dying Light",
            "Play with Your Food",
            "Save the Best for Last"
        ]
    },
    {
        name: "The Doctor",
        role: "killer",
        source: "original",
        year: 2017,
        wikiTitle: "Herman Carter",
        portrait: "https://deadbydaylight.wiki.gg/images/K07_TheDoctor_Portrait.png?9b025f",
        kind: "OG",
        license: "Dead by Daylight",
        origin: "African American",
        country: "United States",
        power: "Carter's Spark",
        lore: "Even the simplest tasks become exceedingly difficult in the clutches of madness.",
        perks: [
            "Monitor & Abuse",
            "Overcharge",
            "Overwhelming Presence"
        ]
    },
    {
        name: "The Huntress",
        role: "killer",
        source: "original",
        year: 2017,
        wikiTitle: "Anna",
        portrait: "https://deadbydaylight.wiki.gg/images/K08_TheHuntress_Portrait.png?194544",
        kind: "OG",
        license: "Dead by Daylight",
        origin: "Russian",
        country: "Russia",
        power: "Hunting Hatchets",
        lore: "Armed with throwable hatchets, The Huntress is a constant threat to Survivors, even those at a great distance.",
        perks: [
            "Beast of Prey",
            "Hex: Huntress Lullaby",
            "Territorial Imperative"
        ]
    },
    {
        name: "The Cannibal",
        role: "killer",
        source: "licensed",
        year: 2017,
        wikiTitle: "Bubba Sawyer",
        portrait: "https://deadbydaylight.wiki.gg/images/K09_TheCannibal_Portrait.png?2b9b38",
        kind: "Licensed",
        license: "Texas Chain Saw Massacre",
        origin: "American",
        country: "United States",
        power: "Bubba's Chainsaw",
        lore: "Leatherface knows a thing or two about chainsaw massacres.",
        perks: [
            "Barbecue & Chilli",
            "Franklin's Demise",
            "Knock Out"
        ]
    },
    {
        name: "The Nightmare",
        role: "killer",
        source: "licensed",
        year: 2017,
        wikiTitle: "Freddy Krueger",
        portrait: "https://deadbydaylight.wiki.gg/images/K10_TheNightmare_Portrait.png?8dfa33",
        kind: "Licensed",
        license: "Nightmare on Elm Street",
        origin: "American",
        country: "United States",
        power: "Dream Demon",
        lore: "Over time, The Nightmare forces Survivors into the Dream World.",
        perks: [
            "Blood Warden",
            "Fire Up",
            "Remember Me"
        ]
    },
    {
        name: "The Pig",
        role: "killer",
        source: "licensed",
        year: 2018,
        wikiTitle: "Amanda Young",
        portrait: "https://deadbydaylight.wiki.gg/images/K11_ThePig_Portrait.png?893de3",
        kind: "Licensed",
        license: "Saw",
        origin: "American",
        country: "United States",
        power: "Jigsaw's Baptism",
        lore: "Creep up and ambush Survivors with The Pig, the stealthy successor to the legendary Jigsaw.",
        perks: [
            "Make Your Choice",
            "Scourge Hook: Hangman's Trick",
            "Surveillance"
        ]
    },
    {
        name: "The Clown",
        role: "killer",
        source: "original",
        year: 2018,
        wikiTitle: "Kenneth Chase alias Jeffrey Hawk",
        portrait: "https://deadbydaylight.wiki.gg/images/K12_TheClown_Portrait.png?26bd2a",
        kind: "OG",
        license: "Dead by Daylight",
        origin: "American",
        country: "United States",
        power: "The Afterpiece Tonic",
        lore: "Using his Afterpiece concoctions, The Clown can steer Survivors into dangerous areas and shorten chases.",
        perks: [
            "Bamboozle",
            "Coulrophobia",
            "Pop Goes the Weasel"
        ]
    },
    {
        name: "The Spirit",
        role: "killer",
        source: "original",
        year: 2018,
        wikiTitle: "Rin Yamaoka",
        portrait: "https://deadbydaylight.wiki.gg/images/K13_TheSpirit_Portrait.png?c6efeb",
        kind: "OG",
        license: "Dead by Daylight",
        origin: "Japanese",
        country: "Japan",
        power: "Yamaoka's Haunting",
        lore: "While using her Yamaoka's Haunting Power, both The Spirit and Survivors cannot be seen by one another.",
        perks: [
            "Hex: Haunted Ground",
            "Rancor",
            "Spirit Fury"
        ]
    },
    {
        name: "The Legion",
        role: "killer",
        source: "original",
        year: 2018,
        wikiTitle: "Frank, Julie, Susie, Joey",
        portrait: "https://deadbydaylight.wiki.gg/images/K14_TheLegion_Portrait.png?f9a179",
        kind: "OG",
        license: "Dead by Daylight",
        origin: "Canadian",
        country: "Canada",
        power: "Feral Frenzy",
        lore: "The Legion are a close-knit group of murderous Killers, linked by the desire to dole out pain in equal measure.",
        perks: [
            "Discordance",
            "Iron Maiden",
            "Mad Grit"
        ]
    },
    {
        name: "The Plague",
        role: "killer",
        source: "original",
        year: 2019,
        wikiTitle: "Adiris",
        portrait: "https://deadbydaylight.wiki.gg/images/K15_ThePlague_Portrait.png?e5926a",
        kind: "OG",
        license: "Dead by Daylight",
        origin: "Babylonia (Iraq)",
        country: "Ancient Mesopotamia",
        power: "Vile Purge",
        lore: "Traditional healing methods are ineffective against The Plague's vile Purge, which can infect generators and Survivors.",
        perks: [
            "Corrupt Intervention",
            "Dark Devotion",
            "Infectious Fright"
        ]
    },
    {
        name: "The Ghost Face",
        role: "killer",
        source: "licensed",
        year: 2019,
        wikiTitle: "Danny Johnson alias Jed Olsen",
        portrait: "https://deadbydaylight.wiki.gg/images/K16_TheGhostFace_Portrait.png?5a4629",
        kind: "Licensed",
        license: "Ghost Face",
        origin: "American",
        country: "United States",
        power: "Night Shroud",
        lore: "A stealth-focused Killer capable of approaching unseen, The Ghost Face is adept at stalking his prey.",
        perks: [
            "Furtive Chase",
            "I'm All Ears",
            "Thrilling Tremors"
        ]
    },
    {
        name: "The Demogorgon",
        role: "killer",
        source: "licensed",
        year: 2019,
        wikiTitle: "The Demogorgon",
        portrait: "https://deadbydaylight.wiki.gg/images/K17_TheDemogorgon_Portrait.png?20c7d0",
        kind: "Licensed",
        license: "Stranger Things",
        origin: "Upside Down",
        country: "Extradimensional",
        power: "Of the Abyss",
        lore: "The Demogorgon is an unidentified Killer, able to open multiple Portals and traverse between them to cover large distances.",
        perks: [
            "Cruel Limits",
            "Mindbreaker",
            "Surge"
        ]
    },
    {
        name: "The Oni",
        role: "killer",
        source: "original",
        year: 2019,
        wikiTitle: "Kazan Yamaoka",
        portrait: "https://deadbydaylight.wiki.gg/images/K18_TheOni_Portrait.png?22e37f",
        kind: "OG",
        license: "Dead by Daylight",
        origin: "Japanese",
        country: "Japan",
        power: "Yamaoka's Wrath",
        lore: "Redefine wrath with The Oni, a truly formidable force.",
        perks: [
            "Blood Echo",
            "Nemesis",
            "Zanshin Tactics"
        ]
    },
    {
        name: "The Deathslinger",
        role: "killer",
        source: "original",
        year: 2020,
        wikiTitle: "Caleb Quinn",
        portrait: "https://deadbydaylight.wiki.gg/images/K19_TheDeathslinger_Portrait.png?52fc47",
        kind: "OG",
        license: "Dead by Daylight",
        origin: "American / Irish",
        country: "United States / Ireland",
        power: "The Redeemer",
        lore: "Upon catching prey unaware, the Deathslinger uses his handmade gun - The Redeemer - to skewer fleeing Survivors with a long-distance harpoon.",
        perks: [
            "Dead Man's Switch",
            "Gearhead",
            "Hex: Retribution"
        ]
    },
    {
        name: "The Executioner",
        role: "killer",
        source: "licensed",
        year: 2020,
        wikiTitle: "Pyramid Head",
        portrait: "https://deadbydaylight.wiki.gg/images/K20_TheExecutioner_Portrait.png?286cd2",
        kind: "Licensed",
        license: "Silent Hill",
        origin: "Silent Hill",
        country: "Manifestation of guilt",
        power: "Rites of Judgement",
        lore: "Merciless and unforgiving, The Executioner brings his own form of twisted justice to The Fog, tormenting Survivors with hazards around the map.",
        perks: [
            "Deathbound",
            "Forced Penance",
            "Trail of Torment"
        ]
    },
    {
        name: "The Blight",
        role: "killer",
        source: "original",
        year: 2020,
        wikiTitle: "Talbot Grimes",
        portrait: "https://deadbydaylight.wiki.gg/images/K21_TheBlight_Portrait.png?bb5b92",
        kind: "OG",
        license: "Dead by Daylight",
        origin: "Scottish",
        country: "United Kingdom",
        power: "Blighted Corruption",
        lore: "Capable of gaining ground on Survivors in mere moments, The Blight's lethal efficiency must never be underestimated.",
        perks: [
            "Dragon's Grip",
            "Hex: Blood Favour",
            "Hex: Undying"
        ]
    },
    {
        name: "The Twins",
        role: "killer",
        source: "original",
        year: 2020,
        wikiTitle: "Charlotte & Victor Deshayes",
        portrait: "https://deadbydaylight.wiki.gg/images/K22_TheTwins_Portrait.png?71ef1c",
        kind: "OG",
        license: "Dead by Daylight",
        origin: "French",
        country: "France",
        power: "Blood Bond",
        lore: "Charlotte Deshayes can unleash her conjoined twin brother Victor, falling dormant until he's finished hunting.",
        perks: [
            "Coup de Grâce",
            "Hoarder",
            "Oppression"
        ]
    },
    {
        name: "The Trickster",
        role: "killer",
        source: "original",
        year: 2021,
        wikiTitle: "Hak Ji-woon",
        portrait: "https://deadbydaylight.wiki.gg/images/K23_TheTrickster_Portrait.png?e4204c",
        kind: "OG",
        license: "Dead by Daylight",
        origin: "South Korean",
        country: "South Korea",
        power: "Showstopper",
        lore: "Armed with an arsenal of throwing knives, The Trickster overwhelms fleeing Survivors with a relentless barrage of blades.",
        perks: [
            "Hex: Crowd Control",
            "No Way Out",
            "Starstruck"
        ]
    },
    {
        name: "The Nemesis",
        role: "killer",
        source: "licensed",
        year: 2021,
        wikiTitle: "Nemesis T-Type",
        portrait: "https://deadbydaylight.wiki.gg/images/K24_TheNemesis_Portrait.png?891941",
        kind: "Licensed",
        license: "Resident Evil",
        origin: "Raccoon City",
        country: "Umbrella Europe bio-weapon",
        power: "T-Virus",
        lore: "An unstoppable force relentless in his pursuit, nothing can stop The Nemesis from achieving his goal.",
        perks: [
            "Eruption",
            "Hysteria",
            "Lethal Pursuer"
        ]
    },
    {
        name: "The Cenobite",
        role: "killer",
        source: "licensed",
        year: 2021,
        wikiTitle: "Elliot Spencer",
        portrait: "https://deadbydaylight.wiki.gg/images/K25_TheCenobite_Portrait.png?6b9046",
        kind: "Licensed",
        license: "Hellraiser",
        origin: "English",
        country: "United Kingdom",
        power: "Summons of Pain",
        lore: "The Cenobite, also known as Pinhead, specializes in inflicting map-wide suffering.",
        perks: [
            "Deadlock",
            "Hex: Plaything",
            "Scourge Hook: Gift of Pain"
        ]
    },
    {
        name: "The Artist",
        role: "killer",
        source: "original",
        year: 2021,
        wikiTitle: "Carmina Mora",
        portrait: "https://deadbydaylight.wiki.gg/images/K26_TheArtist_Portrait.png?594628",
        kind: "OG",
        license: "Dead by Daylight",
        origin: "Chilean",
        country: "Chile",
        power: "Birds of Torment",
        lore: "No matter the distance, The Artist and her murder of Dire Crows pose a constant threat to Survivors.",
        perks: [
            "Grim Embrace",
            "Hex: Pentimento",
            "Scourge Hook: Pain Resonance"
        ]
    },
    {
        name: "The Onryo",
        role: "killer",
        source: "licensed",
        year: 2022,
        wikiTitle: "Sadako Yamamura",
        portrait: "https://deadbydaylight.wiki.gg/images/K27_TheOnryo_Portrait.png?50d2b8",
        kind: "Licensed",
        license: "Ringu / Sadako",
        origin: "Japanese",
        country: "Japan",
        power: "Deluge of Fear",
        lore: "Capable of condemning Survivors to death through a powerful cursed videotape, Sadako's wrath is inevitable.",
        perks: [
            "Call of Brine",
            "Merciless Storm",
            "Scourge Hook: Floods of Rage"
        ]
    },
    {
        name: "The Dredge",
        role: "killer",
        source: "original",
        year: 2022,
        wikiTitle: "The Dredge",
        portrait: "https://deadbydaylight.wiki.gg/images/K28_TheDredge_Portrait.png?66319e",
        kind: "OG",
        license: "Dead by Daylight",
        origin: "The Fold",
        country: "Manifestation of Malthink",
        power: "Reign of Darkness",
        lore: "A twisted abomination too disturbing to bear, The Dredge's malevolence is palpable.",
        perks: [
            "Darkness Revealed",
            "Dissolution",
            "Septic Touch"
        ]
    },
    {
        name: "The Mastermind",
        role: "killer",
        source: "licensed",
        year: 2022,
        wikiTitle: "Albert Wesker",
        portrait: "https://deadbydaylight.wiki.gg/images/K29_TheMastermind_Portrait.png?84582c",
        kind: "Licensed",
        license: "Resident Evil",
        origin: "American",
        country: "United States",
        power: "Virulent Bound",
        lore: "A visionary as brilliant as he is ruthless, Albert Wesker's strategic mind is unrivalled.",
        perks: [
            "Awakened Awareness",
            "Superior Anatomy",
            "Terminus"
        ]
    },
    {
        name: "The Knight",
        role: "killer",
        source: "original",
        year: 2022,
        wikiTitle: "Tarhos Kov cs",
        portrait: "https://deadbydaylight.wiki.gg/images/K30_TheKnight_Portrait.png?b89c9d",
        kind: "OG",
        license: "Dead by Daylight",
        origin: "Hungarian",
        country: "Hungary",
        power: "Guardia Compagnia",
        lore: "The Knight is a strategic Killer, able to send his faithful Guards to hunt for Survivors and damage objects on the battlefield.",
        perks: [
            "Hex: Face the Darkness",
            "Hubris",
            "Nowhere to Hide"
        ]
    },
    {
        name: "The Skull Merchant",
        role: "killer",
        source: "original",
        year: 2023,
        wikiTitle: "Adriana Imai",
        portrait: "https://deadbydaylight.wiki.gg/images/K31_TheSkullMerchant_Portrait.png?91edf3",
        kind: "OG",
        license: "Dead by Daylight",
        origin: "Brazilian / Japanese",
        country: "Brazil / Japan",
        power: "Eyes in the Sky",
        lore: "The Skull Merchant is a tactical Killer, able to place Drones that detect and debilitate her targets.",
        perks: [
            "Game Afoot",
            "Leverage",
            "THWACK!"
        ]
    },
    {
        name: "The Singularity",
        role: "killer",
        source: "original",
        year: 2023,
        wikiTitle: "HUX-A7-13",
        portrait: "https://deadbydaylight.wiki.gg/images/K32_TheSingularity_Portrait.png?3d6300",
        kind: "OG",
        license: "Dead by Daylight",
        origin: "Dvarka",
        country: "Huxlee Industries android",
        power: "Quantum Instantiation",
        lore: "The Singularity is a relentless Killer, able to launch Biopods to move quickly across the map.",
        perks: [
            "Forced Hesitation",
            "Genetic Limits",
            "Machine Learning"
        ]
    },
    {
        name: "The Xenomorph",
        role: "killer",
        source: "licensed",
        year: 2023,
        wikiTitle: "The Xenomorph",
        portrait: "https://deadbydaylight.wiki.gg/images/K33_TheXenomorph_Portrait.png?17ff7e",
        kind: "Licensed",
        license: "Alien",
        origin: "Space",
        country: "Extraterrestrial",
        power: "Hidden Pursuit",
        lore: "A relentless specimen from a distant planet, The Xenomorph is vicious, agile, and cunning.",
        perks: [
            "Alien Instinct",
            "Rapid Brutality",
            "Ultimate Weapon"
        ]
    },
    {
        name: "The Good Guy",
        role: "killer",
        source: "licensed",
        year: 2023,
        wikiTitle: "Charles Lee Ray",
        portrait: "https://deadbydaylight.wiki.gg/images/K34_TheGoodGuy_Portrait.png?4dc7a9",
        kind: "Licensed",
        license: "Chucky",
        origin: "American",
        country: "United States",
        power: "Playtime's Over",
        lore: "The Good Guy is an elusive Killer, capable of deceiving Survivors with his illusory Footfalls and deadly Slice & Dice.",
        perks: [
            "Batteries Included",
            "Friends 'til the End",
            "Hex: Two Can Play"
        ]
    },
    {
        name: "The Unknown",
        role: "killer",
        source: "original",
        year: 2024,
        wikiTitle: "The Unknown",
        portrait: "https://deadbydaylight.wiki.gg/images/K35_TheUnknown_Portrait.png?88bbed",
        kind: "OG",
        license: "Dead by Daylight",
        origin: "Unknown",
        country: "Unknown",
        power: "UVX",
        lore: "The Unknown is a being beyond understanding, though many have tried.",
        perks: [
            "Unbound",
            "Undone",
            "Unforeseen"
        ]
    },
    {
        name: "The Lich",
        role: "killer",
        source: "licensed",
        year: 2024,
        wikiTitle: "Vecna",
        portrait: "https://deadbydaylight.wiki.gg/images/K36_TheLich_Portrait.png?25df98",
        kind: "Licensed",
        license: "Dungeons & Dragons",
        origin: "Oerth (D&D)",
        country: "Oerth (Dungeons & Dragons)",
        power: "Vile Darkness",
        lore: "Few dare speak The Lich's true name, for fear that he may hear - or worse.",
        perks: [
            "Dark Arrogance",
            "Languid Touch",
            "Weave Attunement"
        ]
    },
    {
        name: "The Dark Lord",
        role: "killer",
        source: "licensed",
        year: 2024,
        wikiTitle: "Dracula",
        portrait: "https://deadbydaylight.wiki.gg/images/K37_TheDarkLord_Portrait.png?d391a7",
        kind: "Licensed",
        license: "Castlevania",
        origin: "Wallachian (Romania)",
        country: "Romania",
        power: "Vampiric Shift",
        lore: "The Dark Lord, Dracula , is the embodiment of darkness and tragedy.",
        perks: [
            "Dominance",
            "Hex: Wretched Fate",
            "Human Greed"
        ]
    },
    {
        name: "The Houndmaster",
        role: "killer",
        source: "original",
        year: 2024,
        wikiTitle: "Portia Maye",
        portrait: "https://deadbydaylight.wiki.gg/images/K38_TheHoundmaster_Portrait.png?6e438f",
        kind: "OG",
        license: "Dead by Daylight",
        origin: "Caribbean",
        country: "Caribbean",
        power: "Scent of Blood",
        lore: "The Houndmaster is a force to be feared, with an equally fearsome dog at her side.",
        perks: [
            "All-Shaking Thunder",
            "No Quarter",
            "Scourge Hook: Jagged Compass"
        ]
    },
    {
        name: "The Ghoul",
        role: "killer",
        source: "licensed",
        year: 2025,
        wikiTitle: "Ken Kaneki",
        portrait: "https://deadbydaylight.wiki.gg/images/K39_TheGhoul_Portrait.png?fbb95c",
        kind: "Licensed",
        license: "Tokyo Ghoul",
        origin: "Japanese",
        country: "Japan",
        power: "One-Eyed Terror",
        lore: "The Ghoul has been pushed to his limits and he's hungry for more.",
        perks: [
            "Forever Entwined",
            "Hex: Nothing but Misery",
            "None Are Free"
        ]
    },
    {
        name: "The Animatronic",
        role: "killer",
        source: "licensed",
        year: 2025,
        wikiTitle: "William Afton",
        portrait: "https://deadbydaylight.wiki.gg/images/K40_TheAnimatronic_Portrait.png?636799",
        kind: "Licensed",
        license: "Five Nights at Freddy's",
        origin: "American / English",
        country: "United States / England",
        power: "Fazbear's Fright",
        lore: "A monstrosity of flesh and metal, Springtrap's bloodstained past is littered with the innocent dead.",
        perks: [
            "Haywire",
            "Help Wanted",
            "Phantom Fear"
        ]
    },
    {
        name: "The Krasue",
        role: "killer",
        source: "original",
        year: 2025,
        wikiTitle: "Burong Sukapat",
        portrait: "https://deadbydaylight.wiki.gg/images/K41_TheKrasue_Portrait.png?3513ba",
        kind: "OG",
        license: "Dead by Daylight",
        origin: "Thai",
        country: "Thailand",
        power: "Unbodied Flesh",
        lore: "A shape-changing Killer, able to inflict Survivors with an effect that weakens them to her Intestinal Whip attack.",
        perks: [
            "Hex: Overture of Doom",
            "Ravenous",
            "Wandering Eye"
        ]
    },
    {
        name: "The First",
        role: "killer",
        source: "licensed",
        year: 2026,
        wikiTitle: "Henry Creel",
        portrait: "https://deadbydaylight.wiki.gg/images/K42_TheFirst_Portrait.png?e12bf6",
        kind: "Licensed",
        license: "Stranger Things",
        origin: "American",
        country: "United States",
        power: "Test Subject #001",
        lore: "The First is a cunning and cruel former test subject, whose powers were sharpened in an alternate dimension.",
        perks: [
            "Hex: Hive Mind",
            "Secret Project",
            "Turn Back the Clock"
        ]
    },
    {
        name: "The Slasher",
        role: "killer",
        source: "licensed",
        year: 2026,
        wikiTitle: "Jason Voorhees",
        portrait: "https://deadbydaylight.wiki.gg/images/K43_TheSlasher_Portrait.png?2fe4c9",
        kind: "Licensed",
        license: "Friday the 13th / Jason",
        origin: "American",
        country: "United States",
        power: "Omnipresent Evil",
        lore: "The Slasher is the embodiment of horror, a relentless Killer who is always on the hunt.",
        perks: [
            "Hex: Scared to Death",
            "Rampage",
            "Silent Shadow"
        ]
    },
    {
        name: "Dwight Fairfield",
        role: "survivor",
        source: "original",
        year: 2016,
        wikiTitle: "Dwight Fairfield",
        portrait: "https://deadbydaylight.wiki.gg/images/S01_DwightFairfield_Portrait.png?d6dcf3",
        kind: "OG",
        license: "Dead by Daylight",
        origin: "American",
        country: "United States",
        survivorRole: "Nervous Leader",
        power: "",
        lore: "An unlikely leader forced to rise to the occasion, Dwight Fairfield's reluctant bravery inspires those around him.",
        perks: [
            "Bond",
            "Leader",
            "Prove Thyself"
        ]
    },
    {
        name: "Meg Thomas",
        role: "survivor",
        source: "original",
        year: 2016,
        wikiTitle: "Meg Thomas",
        portrait: "https://deadbydaylight.wiki.gg/images/S02_MegThomas_Portrait.png?7eab9a",
        kind: "OG",
        license: "Dead by Daylight",
        origin: "American",
        country: "United States",
        survivorRole: "Energetic Athlete",
        power: "",
        lore: "Driven by reckless courage, the athletic Meg Thomas has never been afraid to push her limits.",
        perks: [
            "Adrenaline",
            "Quick & Quiet",
            "Sprint Burst"
        ]
    },
    {
        name: "Claudette Morel",
        role: "survivor",
        source: "original",
        year: 2016,
        wikiTitle: "Claudette Morel",
        portrait: "https://deadbydaylight.wiki.gg/images/S03_ClaudetteMorel_Portrait.png?5063f0",
        kind: "OG",
        license: "Dead by Daylight",
        origin: "Canadian",
        country: "Canada",
        survivorRole: "Studious Botanist",
        power: "",
        lore: "Claudette understands the value of altruism, using her aptitude for botany to ensure her teammates are prepared for the challenges ahead.",
        perks: [
            "Botany Knowledge",
            "Empathy",
            "Self-Care"
        ]
    },
    {
        name: "Jake Park",
        role: "survivor",
        source: "original",
        year: 2016,
        wikiTitle: "Jake Park",
        portrait: "https://deadbydaylight.wiki.gg/images/S04_JakePark_Portrait.png?f66ca9",
        kind: "OG",
        license: "Dead by Daylight",
        origin: "South Korean",
        country: "South Korea",
        survivorRole: "Solitary Survivalist",
        power: "",
        lore: "A solitary specialist, Jake Park's time in the wilderness has sharpened his survival instincts.",
        perks: [
            "Calm Spirit",
            "Iron Will",
            "Saboteur"
        ]
    },
    {
        name: "Nea Karlsson",
        role: "survivor",
        source: "original",
        year: 2016,
        wikiTitle: "Nea Karlsson",
        portrait: "https://deadbydaylight.wiki.gg/images/S05_NeaKarlsson_Portrait.png?7ab379",
        kind: "OG",
        license: "Dead by Daylight",
        origin: "Swedish",
        country: "Sweden",
        survivorRole: "Urban Artist",
        power: "",
        lore: "Years of evading authorities and navigating the streets of Sweden have kept the elusive Nea Karlsson one step ahead.",
        perks: [
            "Balanced Landing",
            "Streetwise",
            "Urban Evasion"
        ]
    },
    {
        name: "Laurie Strode",
        role: "survivor",
        source: "licensed",
        year: 2016,
        wikiTitle: "Laurie Strode",
        portrait: "https://deadbydaylight.wiki.gg/images/S06_LaurieStrode_Portrait.png?cb4f55",
        kind: "Licensed",
        license: "Halloween",
        origin: "American",
        country: "United States",
        survivorRole: "Determined Survivor",
        power: "",
        lore: "The epitome of a Survivor, Laurie Strode exemplifies determination in the face of pure evil.",
        perks: [
            "Decisive Strike",
            "Object of Obsession",
            "Sole Survivor"
        ]
    },
    {
        name: "Ace Visconti",
        role: "survivor",
        source: "original",
        year: 2016,
        wikiTitle: "Ace Visconti",
        portrait: "https://deadbydaylight.wiki.gg/images/S07_AceVisconti_Portrait.png?78a415",
        kind: "OG",
        license: "Dead by Daylight",
        origin: "Argentinian / Italian",
        country: "Argentina / Italy",
        survivorRole: "Lucky Gambler",
        power: "",
        lore: "Ace Visconti could be playing high-stakes poker with The Entity, and he'd still be the first to push all-in.",
        perks: [
            "Ace in the Hole",
            "Open-Handed",
            "Up the Ante"
        ]
    },
    {
        name: "William \"Bill\" Overbeck",
        role: "survivor",
        source: "licensed",
        year: 2017,
        wikiTitle: "William \"Bill\" Overbeck",
        portrait: "https://deadbydaylight.wiki.gg/images/S08_BillOverbeck_Portrait.png?ea4263",
        kind: "Licensed",
        license: "Left 4 Dead",
        origin: "American",
        country: "United States",
        survivorRole: "Old Soldier",
        power: "",
        lore: "Hardened by years of experience, Bill Overbeck knows that survival rarely comes without sacrifice.",
        perks: [
            "Borrowed Time",
            "Left Behind",
            "Unbreakable"
        ]
    },
    {
        name: "Feng Min",
        role: "survivor",
        source: "original",
        year: 2017,
        wikiTitle: "Feng Min",
        portrait: "https://deadbydaylight.wiki.gg/images/S09_FengMin_Portrait.png?4858fc",
        kind: "OG",
        license: "Dead by Daylight",
        origin: "Chinese",
        country: "China",
        survivorRole: "Focused Competitor",
        power: "",
        lore: "A lifelong gamer and fierce e-sports competitor, Feng Min's drive to complete her objective is second to none.",
        perks: [
            "Alert",
            "Lithe",
            "Technician"
        ]
    },
    {
        name: "David King",
        role: "survivor",
        source: "original",
        year: 2017,
        wikiTitle: "David King",
        portrait: "https://deadbydaylight.wiki.gg/images/S10_DavidKing_Portrait.png?6e4e99",
        kind: "OG",
        license: "Dead by Daylight",
        origin: "English",
        country: "United Kingdom",
        survivorRole: "Rugged Scrapper",
        power: "",
        lore: "Some say misunderstood, others say arrogant - though never to his face.",
        perks: [
            "Dead Hard",
            "No Mither",
            "We're Gonna Live Forever"
        ]
    },
    {
        name: "Kate Denson",
        role: "survivor",
        source: "original",
        year: 2018,
        wikiTitle: "Kate Denson",
        portrait: "https://deadbydaylight.wiki.gg/images/S13_KateDenson_Portrait.png?1d9a18",
        kind: "OG",
        license: "Dead by Daylight",
        origin: "American",
        country: "United States",
        survivorRole: "Hopeful Songbird",
        power: "",
        lore: "Driven by memories of performing on stage, Kate Denson knows what it's like to be graceful under pressure.",
        perks: [
            "Boil Over",
            "Dance With Me",
            "Windows of Opportunity"
        ]
    },
    {
        name: "Quentin Smith",
        role: "survivor",
        source: "licensed",
        year: 2017,
        wikiTitle: "Quentin Smith",
        portrait: "https://deadbydaylight.wiki.gg/images/S11_QuentinSmith_Portrait.png?61f716",
        kind: "Licensed",
        license: "Nightmare on Elm Street",
        origin: "American",
        country: "United States",
        survivorRole: "Resolute Dreamwalker",
        power: "",
        lore: "As resolute as he is sleep-deprived, Quentin Smith knows all about the value of cooperation.",
        perks: [
            "Pharmacy",
            "Vigil",
            "Wake Up!"
        ]
    },
    {
        name: "Detective Tapp",
        role: "survivor",
        source: "licensed",
        year: 2018,
        wikiTitle: "Detective David Tapp",
        portrait: "https://deadbydaylight.wiki.gg/images/S12_DavidTapp_Portrait.png?451c59",
        kind: "Licensed",
        license: "Saw",
        origin: "African American",
        country: "United States",
        survivorRole: "Obsessed Detective",
        power: "",
        lore: "Haunted by the failures of his past, Detective David Tapp has resolved to make a difference this time around.",
        perks: [
            "Detective's Hunch",
            "Stake Out",
            "Tenacity"
        ]
    },
    {
        name: "Adam Francis",
        role: "survivor",
        source: "original",
        year: 2018,
        wikiTitle: "Adam Francis",
        portrait: "https://deadbydaylight.wiki.gg/images/S14_AdamFrancis_Portrait.png?41f88f",
        kind: "OG",
        license: "Dead by Daylight",
        origin: "Jamaican",
        country: "Jamaica",
        survivorRole: "Resourceful Teacher",
        power: "",
        lore: "The clever and selfless Adam Francis is no stranger to heroism, boldly risking his own life to save others.",
        perks: [
            "Autodidact",
            "Deliverance",
            "Diversion"
        ]
    },
    {
        name: "Jeff Johansen",
        role: "survivor",
        source: "original",
        year: 2018,
        wikiTitle: "Jeffrey \"Jeff\" Johansen",
        portrait: "https://deadbydaylight.wiki.gg/images/S15_JeffJohansen_Portrait.png?d2bdb8",
        kind: "OG",
        license: "Dead by Daylight",
        origin: "Canadian / Norwegian",
        country: "Canada / Norway",
        survivorRole: "Quiet Artist",
        power: "",
        lore: "With a reserved nature often mistaken for stoicism, Jeff Johansen found solace in artistic expression.",
        perks: [
            "Aftercare",
            "Breakdown",
            "Distortion"
        ]
    },
    {
        name: "Jane Romero",
        role: "survivor",
        source: "original",
        year: 2019,
        wikiTitle: "Jane Romero",
        portrait: "https://deadbydaylight.wiki.gg/images/S16_JaneRomero_Portrait.png?e2acd3",
        kind: "OG",
        license: "Dead by Daylight",
        origin: "Latin American",
        country: "Latin America",
        survivorRole: "Influential Celebrity",
        power: "",
        lore: "Celebrity status never changed Jane Romero, who always preferred to tackle a challenge head on.",
        perks: [
            "Head On",
            "Poised",
            "Solidarity"
        ]
    },
    {
        name: "Ashley J. Williams",
        role: "survivor",
        source: "licensed",
        year: 2019,
        wikiTitle: "Ashley J. Williams",
        portrait: "https://deadbydaylight.wiki.gg/images/S17_AshWilliams_Portrait.png?ece61f",
        kind: "Licensed",
        license: "Evil Dead",
        origin: "American",
        country: "United States",
        survivorRole: "Alone Wolf",
        power: "",
        lore: "Though he proudly identifies as a self-described 'alone wolf,' Ash's shockingly high pain tolerance and scathing wit have proven invaluable.",
        perks: [
            "Buckle Up",
            "Flip-Flop",
            "Mettle of Man"
        ]
    },
    {
        name: "Nancy Wheeler",
        role: "survivor",
        source: "licensed",
        year: 2019,
        wikiTitle: "Nancy Wheeler",
        portrait: "https://deadbydaylight.wiki.gg/images/S18_NancyWheeler_Portrait.png?d61f81",
        kind: "Licensed",
        license: "Stranger Things",
        origin: "American",
        country: "United States",
        survivorRole: "Aspiring Journalist",
        power: "",
        lore: "Nancy Wheeler is an aspiring journalist, able to make acute observations and gain insights that others may miss.",
        perks: [
            "Better Together",
            "Fixated",
            "Inner Strength"
        ]
    },
    {
        name: "Steve Harrington",
        role: "survivor",
        source: "licensed",
        year: 2019,
        wikiTitle: "Steve Harrington",
        portrait: "https://deadbydaylight.wiki.gg/images/S19_SteveHarrington_Portrait.png?9a11aa",
        kind: "Licensed",
        license: "Stranger Things",
        origin: "American",
        country: "United States",
        survivorRole: "Former Jock",
        power: "",
        lore: "Steve Harrington is a former jock, able to protect and support his fellow Survivors while providing his own brand of humour.",
        perks: [
            "Babysitter",
            "Camaraderie",
            "Second Wind"
        ]
    },
    {
        name: "Yui Kimura",
        role: "survivor",
        source: "original",
        year: 2019,
        wikiTitle: "Yui Kimura",
        portrait: "https://deadbydaylight.wiki.gg/images/S20_YuiKimura_Portrait.png?830cf2",
        kind: "OG",
        license: "Dead by Daylight",
        origin: "Japanese",
        country: "Japan",
        survivorRole: "Hardened Streetracer",
        power: "",
        lore: "Quick decisions are second nature to Yui Kimura, who lives the majority of her life at a breakneck pace.",
        perks: [
            "Any Means Necessary",
            "Breakout",
            "Lucky Break"
        ]
    },
    {
        name: "Zarina Kassir",
        role: "survivor",
        source: "original",
        year: 2020,
        wikiTitle: "Zarina Kassir",
        portrait: "https://deadbydaylight.wiki.gg/images/S21_ZarinaKassir_Portrait.png?9ff369",
        kind: "OG",
        license: "Dead by Daylight",
        origin: "Lebanese / American",
        country: "United States / Lebanon",
        survivorRole: "Plucky Documentarian",
        power: "",
        lore: "Zarina Kassir stands determined to uncover the truth, regardless of any peril that might arise.",
        perks: [
            "For the People",
            "Off the Record",
            "Red Herring"
        ]
    },
    {
        name: "Cheryl Mason",
        role: "survivor",
        source: "licensed",
        year: 2020,
        wikiTitle: "Cheryl Mason",
        portrait: "https://deadbydaylight.wiki.gg/images/S22_CherylMason_Portrait.png?50c77e",
        kind: "Licensed",
        license: "Silent Hill",
        origin: "American",
        country: "United States",
        survivorRole: "Young Veteran of Terror",
        power: "",
        lore: "No stranger to indescribable terror, Cheryl Mason has grown emboldened by the looming presence of evil.",
        perks: [
            "Blood Pact",
            "Repressed Alliance",
            "Soul Guard"
        ]
    },
    {
        name: "Felix Richter",
        role: "survivor",
        source: "original",
        year: 2020,
        wikiTitle: "Felix Richter",
        portrait: "https://deadbydaylight.wiki.gg/images/S23_FelixRichter_Portrait.png?39eafa",
        kind: "OG",
        license: "Dead by Daylight",
        origin: "German",
        country: "Germany",
        survivorRole: "Visionary Architect",
        power: "",
        lore: "Often called a visionary for his brilliant architectural work, Felix Richter is as determined as he is debonair.",
        perks: [
            "Built to Last",
            "Desperate Measures",
            "Visionary"
        ]
    },
    {
        name: "Elodie Rakoto",
        role: "survivor",
        source: "original",
        year: 2020,
        wikiTitle: "Elodie Rakoto",
        portrait: "https://deadbydaylight.wiki.gg/images/S24_ElodieRakoto_Portrait.png?6be1d2",
        kind: "OG",
        license: "Dead by Daylight",
        origin: "French / Malagasy",
        country: "France / Madagascar",
        survivorRole: "Occult Investigator",
        power: "",
        lore: "Occult investigator Elodie Rakoto has seen first-hand that things are not always as they seem.",
        perks: [
            "Appraisal",
            "Deception",
            "Power Struggle"
        ]
    },
    {
        name: "Yun-Jin Lee",
        role: "survivor",
        source: "original",
        year: 2021,
        wikiTitle: "Lee Yun-jin",
        portrait: "https://deadbydaylight.wiki.gg/images/S25_LeeYun-jin_Portrait.png?1d1ab0",
        kind: "OG",
        license: "Dead by Daylight",
        origin: "South Korean",
        country: "South Korea",
        survivorRole: "Music Producer",
        power: "",
        lore: "What some call selfish, Yun-jin Lee calls practical.",
        perks: [
            "Fast Track",
            "Self-Preservation",
            "Smash Hit"
        ]
    },
    {
        name: "Jill Valentine",
        role: "survivor",
        source: "licensed",
        year: 2021,
        wikiTitle: "Jill Valentine",
        portrait: "https://deadbydaylight.wiki.gg/images/S26_JillValentine_Portrait.png?5e137b",
        kind: "Licensed",
        license: "Resident Evil",
        origin: "American",
        country: "United States",
        survivorRole: "Founding Member of STARS",
        power: "",
        lore: "Bravery comes natural to Jill Valentine, whose heroism proved invaluable during her harrowing time in Raccoon City.",
        perks: [
            "Blast Mine",
            "Counterforce",
            "Resurgence"
        ]
    },
    {
        name: "Leon S. Kennedy",
        role: "survivor",
        source: "licensed",
        year: 2021,
        wikiTitle: "Leon Scott Kennedy",
        portrait: "https://deadbydaylight.wiki.gg/images/S27_LeonScottKennedy_Portrait.png?5f9ae0",
        kind: "Licensed",
        license: "Resident Evil",
        origin: "American",
        country: "United States",
        survivorRole: "Rookie Police Officer",
        power: "",
        lore: "Leon Kennedy might be a Rookie, but during that one fateful night, he faced an entire lifetime of horror and brutality.",
        perks: [
            "Bite the Bullet",
            "Flashbang",
            "Rookie Spirit"
        ]
    },
    {
        name: "Mikaela Reid",
        role: "survivor",
        source: "original",
        year: 2021,
        wikiTitle: "Mikaela Reid",
        portrait: "https://deadbydaylight.wiki.gg/images/S28_MikaelaReid_Portrait.png?f67900",
        kind: "OG",
        license: "Dead by Daylight",
        origin: "American",
        country: "United States",
        survivorRole: "Young Mystic",
        power: "",
        lore: "A passion for the mystic arts has proven invaluable for Mikaela Reid.",
        perks: [
            "Boon: Circle of Healing",
            "Boon: Shadow Step",
            "Clairvoyance"
        ]
    },
    {
        name: "Jonah Vasquez",
        role: "survivor",
        source: "original",
        year: 2021,
        wikiTitle: "Jonah Vasquez",
        portrait: "https://deadbydaylight.wiki.gg/images/S29_JonahVasquez_Portrait.png?d4931a",
        kind: "OG",
        license: "Dead by Daylight",
        origin: "American / Hispanic",
        country: "United States / Hispanic descent",
        survivorRole: "Mathematical Mastermind",
        power: "",
        lore: "Jonah Vasquez can tell you first-hand that there's strength in numbers - literally.",
        perks: [
            "Boon: Exponential",
            "Corrective Action",
            "Overcome"
        ]
    },
    {
        name: "Yoichi Asakawa",
        role: "survivor",
        source: "licensed",
        year: 2022,
        wikiTitle: "Yoichi Asakawa",
        portrait: "https://deadbydaylight.wiki.gg/images/S30_YoichiAsakawa_Portrait.png?9d121b",
        kind: "Licensed",
        license: "Ringu / Sadako",
        origin: "Japanese",
        country: "Japan",
        survivorRole: "Brilliant Marine Biologist",
        power: "",
        lore: "A marine biologist scarred by the haunting memories of his past encounter with Sadako, Yoichi Asakawa has stared into the depths of evil.",
        perks: [
            "Boon: Dark Theory",
            "Empathic Connection",
            "Parental Guidance"
        ]
    },
    {
        name: "Haddie Kaur",
        role: "survivor",
        source: "original",
        year: 2022,
        wikiTitle: "Haddie Kaur",
        portrait: "https://deadbydaylight.wiki.gg/images/S31_HaddieKaur_Portrait.png?f3b1ae",
        kind: "OG",
        license: "Dead by Daylight",
        origin: "Canadian / Indian",
        country: "Canada / India",
        survivorRole: "Determined Podcaster",
        power: "",
        lore: "Plagued by chilling visions of the inexplicable, Haddie Kaur is driven to brave the perils of the unknown.",
        perks: [
            "Inner Focus",
            "Overzealous",
            "Residual Manifest"
        ]
    },
    {
        name: "Ada Wong",
        role: "survivor",
        source: "licensed",
        year: 2022,
        wikiTitle: "Ada Wong",
        portrait: "https://deadbydaylight.wiki.gg/images/S32_AdaWong_Portrait.png?1073d0",
        kind: "Licensed",
        license: "Resident Evil",
        origin: "Chinese / American",
        country: "China / United States",
        survivorRole: "Mysterious Secret Agent",
        power: "",
        lore: "Sometimes it's safer to keep people guessing, and no one knows this better than Ada Wong.",
        perks: [
            "Low Profile",
            "Reactive Healing",
            "Wiretap"
        ]
    },
    {
        name: "Rebecca Chambers",
        role: "survivor",
        source: "licensed",
        year: 2022,
        wikiTitle: "Rebecca Chambers",
        portrait: "https://deadbydaylight.wiki.gg/images/S33_RebeccaChambers_Portrait.png?d5461f",
        kind: "Licensed",
        license: "Resident Evil",
        origin: "American",
        country: "United States",
        survivorRole: "Gifted Medic & Squad Member",
        power: "",
        lore: "Never underestimate the value of an experienced field medic.",
        perks: [
            "Better than New",
            "Hyperfocus",
            "Reassurance"
        ]
    },
    {
        name: "Vittorio Toscano",
        role: "survivor",
        source: "original",
        year: 2022,
        wikiTitle: "Vittorio Toscano",
        portrait: "https://deadbydaylight.wiki.gg/images/S34_VittorioToscano_Portrait.png?273309",
        kind: "OG",
        license: "Dead by Daylight",
        origin: "Italian",
        country: "Italy",
        survivorRole: "Endless Wanderer",
        power: "",
        lore: "Vittorio Toscano has endlessly wandered through The Fog, attempting to learn its secrets, for ages.",
        perks: [
            "Fogwise",
            "Potential Energy",
            "Quick Gambit"
        ]
    },
    {
        name: "Thalita Lyra",
        role: "survivor",
        source: "original",
        year: 2023,
        wikiTitle: "Thalita Lyra",
        portrait: "https://deadbydaylight.wiki.gg/images/S35_ThalitaLyra_Portrait.png?fcbd38",
        kind: "OG",
        license: "Dead by Daylight",
        origin: "Brazilian",
        country: "Brazil",
        survivorRole: "Competitive Daredevil",
        power: "",
        lore: "Thalita Lyra has mastered the art of competitive flair, fighting kites with skill and flourish.",
        perks: [
            "Cut Loose",
            "Friendly Competition",
            "Teamwork: Power of Two"
        ]
    },
    {
        name: "Renato Lyra",
        role: "survivor",
        source: "original",
        year: 2023,
        wikiTitle: "Renato Lyra",
        portrait: "https://deadbydaylight.wiki.gg/images/S36_RenatoLyra_Portrait.png?d20521",
        kind: "OG",
        license: "Dead by Daylight",
        origin: "Brazilian",
        country: "Brazil",
        survivorRole: "Agile Team Player",
        power: "",
        lore: "Renato Lyra always keeps his eyes on the prize, and he expects the same from his teammates.",
        perks: [
            "Background Player",
            "Blood Rush",
            "Teamwork: Collective Stealth"
        ]
    },
    {
        name: "Gabriel Soma",
        role: "survivor",
        source: "original",
        year: 2023,
        wikiTitle: "Gabriel Soma",
        portrait: "https://deadbydaylight.wiki.gg/images/S37_GabrielSoma_Portrait.png?44827f",
        kind: "OG",
        license: "Dead by Daylight",
        origin: "Proxima Centauri C",
        country: "Proxima Centauri C",
        survivorRole: "Resourceful Engineer",
        power: "",
        lore: "Gabriel Soma is a resourceful engineer, ready to make the most out of any situation.",
        perks: [
            "Made for This",
            "Scavenger",
            "Troubleshooter"
        ]
    },
    {
        name: "Nicolas Cage",
        role: "survivor",
        source: "licensed",
        year: 2023,
        wikiTitle: "Nicolas Cage",
        portrait: "https://deadbydaylight.wiki.gg/images/S38_NicolasCage_Portrait.png?756bb9",
        kind: "Licensed",
        license: "Nicolas Cage",
        origin: "American",
        country: "United States",
        survivorRole: "Superstar",
        power: "",
        lore: "Nicolas Cage is a superstar, trapped in the role of a lifetime.",
        perks: [
            "Dramaturgy",
            "Plot Twist",
            "Scene Partner"
        ]
    },
    {
        name: "Ellen Ripley",
        role: "survivor",
        source: "licensed",
        year: 2023,
        wikiTitle: "Ellen Ripley",
        portrait: "https://deadbydaylight.wiki.gg/images/S39_EllenRipley_Portrait.png?9966b6",
        kind: "Licensed",
        license: "Alien",
        origin: "American",
        country: "United States",
        survivorRole: "Nostromo Warrant Officer",
        power: "",
        lore: "Ellen Ripley , Warrant Officer of the Nostromo, is capable and pragmatic.",
        perks: [
            "Chemical Trap",
            "Light-Footed",
            "Lucky Star"
        ]
    },
    {
        name: "Alan Wake",
        role: "survivor",
        source: "licensed",
        year: 2024,
        wikiTitle: "Alan Wake",
        portrait: "https://deadbydaylight.wiki.gg/images/S40_AlanWake_Portrait.png?600f97",
        kind: "Licensed",
        license: "Alan Wake",
        origin: "American",
        country: "United States",
        survivorRole: "Bestselling Author",
        power: "",
        lore: "Alan Wake , bestselling author, knows what it means to push back the darkness.",
        perks: [
            "Boon: Illumination",
            "Champion of Light",
            "Deadline"
        ]
    },
    {
        name: "Sable Ward",
        role: "survivor",
        source: "original",
        year: 2024,
        wikiTitle: "Sable Ward",
        portrait: "https://deadbydaylight.wiki.gg/images/S41_SableWard_Portrait.png?78936e",
        kind: "OG",
        license: "Dead by Daylight",
        origin: "American",
        country: "United States",
        survivorRole: "Embracer of Darkness",
        power: "",
        lore: "Sable Ward is not afraid to embrace the darkness, or the power that lies within it.",
        perks: [
            "Invocation: Weaving Spiders",
            "Strength in Shadows",
            "Wicked"
        ]
    },
    {
        name: "Aestri Yazar",
        role: "survivor",
        source: "licensed",
        year: 2024,
        wikiTitle: "Aestri Yazar & Baermar Uraz",
        portrait: "https://deadbydaylight.wiki.gg/images/S42_TheTroupe_Portrait.png?9f592a",
        kind: "Licensed",
        license: "Dungeons & Dragons",
        origin: "Oerth (D&D World)",
        country: "Oerth (Dungeons & Dragons)",
        survivorRole: "Bard Troupe",
        power: "",
        lore: "Aestri , fellow bard Baermar , and their troupe never back down from any adventure.",
        perks: [
            "Bardic Inspiration",
            "Mirrored Illusion",
            "Still Sight"
        ]
    },
    {
        name: "Lara Croft",
        role: "survivor",
        source: "licensed",
        year: 2024,
        wikiTitle: "Lara Croft",
        portrait: "https://deadbydaylight.wiki.gg/images/S43_LaraCroft_Portrait.png?1e338f",
        kind: "Licensed",
        license: "Tomb Raider",
        origin: "English",
        country: "United Kingdom",
        survivorRole: "Harded Archaeologist",
        power: "",
        lore: "Lara Croft's instincts have been honed by her many dangerous expeditions.",
        perks: [
            "Finesse",
            "Hardened",
            "Specialist"
        ]
    },
    {
        name: "Trevor Belmont",
        role: "survivor",
        source: "licensed",
        year: 2024,
        wikiTitle: "Trevor Belmont",
        portrait: "https://deadbydaylight.wiki.gg/images/S44_TrevorBelmont_Portrait.png?f68391",
        kind: "Licensed",
        license: "Castlevania",
        origin: "Wallachian (Romania)",
        country: "Romania",
        survivorRole: "Vampire Hunter",
        power: "",
        lore: "Trevor Belmont , vampire hunter, knows his destiny is to vanquish evil.",
        perks: [
            "Exultation",
            "Eyes of Belmont",
            "Moment of Glory"
        ]
    },
    {
        name: "Taurie Cain",
        role: "survivor",
        source: "original",
        year: 2024,
        wikiTitle: "Taurie Cain",
        portrait: "https://deadbydaylight.wiki.gg/images/S45_TaurieCain_Portrait.png?44fce2",
        kind: "OG",
        license: "Dead by Daylight",
        origin: "Scottish",
        country: "United Kingdom",
        survivorRole: "Disciple of the Black Talon",
        power: "",
        lore: "Taurie Cain was raised as a Disciple of the Black Talon, condemned to be a sacrifice.",
        perks: [
            "Clean Break",
            "Invocation: Treacherous Crows",
            "Shoulder the Burden"
        ]
    },
    {
        name: "Orela Rose",
        role: "survivor",
        source: "original",
        year: 2025,
        wikiTitle: "Orela Rose",
        portrait: "https://deadbydaylight.wiki.gg/images/S46_OrelaRose_Portrait.png?c845fe",
        kind: "OG",
        license: "Dead by Daylight",
        origin: "African American",
        country: "United States",
        survivorRole: "Calming Paramedic",
        power: "",
        lore: "Orela Rose is a paramedic with a love for horror and a calming demeanor.",
        perks: [
            "Do No Harm",
            "Duty of Care",
            "Rapid Response"
        ]
    },
    {
        name: "Rick Grimes",
        role: "survivor",
        source: "licensed",
        year: 2025,
        wikiTitle: "Rick Grimes",
        portrait: "https://deadbydaylight.wiki.gg/images/S47_RickGrimes_Portrait.png?7a0363",
        kind: "Licensed",
        license: "The Walking Dead",
        origin: "American",
        country: "United States",
        survivorRole: "Post-Apocalyptic Leader",
        power: "",
        lore: "Rick Grimes is the leader of a group of post-apocalyptic survivors.",
        perks: [
            "Apocalyptic Ingenuity",
            "Come and Get Me!",
            "Teamwork: Toughen Up"
        ]
    },
    {
        name: "Michonne Grimes",
        role: "survivor",
        source: "licensed",
        year: 2025,
        wikiTitle: "Michonne Grimes",
        portrait: "https://deadbydaylight.wiki.gg/images/S48_MichonneGrimes_Portrait.png?388e9f",
        kind: "Licensed",
        license: "The Walking Dead",
        origin: "African American",
        country: "United States",
        survivorRole: "Relentless Protector",
        power: "",
        lore: "Michonne Grimes is a relentless protector living in a community of post-apocalyptic survivors.",
        perks: [
            "Conviction",
            "Last Stand",
            "Teamwork: Throw Down"
        ]
    },
    {
        name: "Vee Boonyasak",
        role: "survivor",
        source: "original",
        year: 2025,
        wikiTitle: "Vee Boonyasak",
        portrait: "https://deadbydaylight.wiki.gg/images/S49_VeeBoonyasak_Portrait.png?b7d2d9",
        kind: "OG",
        license: "Dead by Daylight",
        origin: "Thai",
        country: "Thailand",
        survivorRole: "Energetic Drummer",
        power: "",
        lore: "Vee Boonyasak is an energetic drummer whose adventurous nature led to a doomed concert.",
        perks: [
            "Ghost Notes",
            "One-Two-Three-Four!",
            "Road Life"
        ]
    },
    {
        name: "Dustin Henderson",
        role: "survivor",
        source: "licensed",
        year: 2026,
        wikiTitle: "Dustin Henderson",
        portrait: "https://deadbydaylight.wiki.gg/images/S50_DustinHenderson_Portrait.png?4e9836",
        kind: "Licensed",
        license: "Stranger Things",
        origin: "American",
        country: "United States",
        survivorRole: "Brillant High School Student",
        power: "",
        lore: "Dustin Henderson is a brilliant and somewhat nerdy high school student.",
        perks: [
            "Bada Bada Boom",
            "Change of Plan",
            "Teamwork: Full Circuit"
        ]
    },
    {
        name: "Eleven",
        role: "survivor",
        source: "licensed",
        year: 2026,
        wikiTitle: "Eleven",
        portrait: "https://deadbydaylight.wiki.gg/images/S51_Eleven_Portrait.png?f6af5a",
        kind: "Licensed",
        license: "Stranger Things",
        origin: "American",
        country: "United States",
        survivorRole: "Former Test Subject",
        power: "",
        lore: "Eleven is a former test subject with extrasensory abilities.",
        perks: [
            "Extrasensory Perception",
            "Teamwork: Soft-Spoken",
            "We See You"
        ]
    },
    {
        name: "Kwon Tae-young",
        role: "survivor",
        source: "original",
        year: 2026,
        wikiTitle: "Kwon Tae-young",
        portrait: "https://deadbydaylight.wiki.gg/images/S52_KwonTae-young_Portrait.png?d6bd6f",
        kind: "OG",
        license: "Dead by Daylight",
        origin: "South Korean",
        country: "South Korea",
        survivorRole: "Hard-Working Perfectionist",
        power: "",
        lore: "Kwon Tae-young is a hard-working perfectionist who does not rest until he gets results.",
        perks: [
            "A Place For Us",
            "Five Moves Ahead",
            "Flow State"
        ]
    }
];

const bodyAttackKillers = new Set([
    "The Hag",
    "The Demogorgon",
    "The Nemesis",
    "The Dredge",
    "The Mastermind",
    "The Singularity",
    "The Xenomorph",
    "The Ghoul",
    "The Animatronic",
    "The Dark Lord",
    "The Twins",
    "The Krasue"
]);

const weaponAttackKillers = new Set([
    "The Twins",
    "The Krasue"
]);

const speedByName = new Map([
    ["The Nurse", "95% | 3.8 m/s"],
    ["The Hag", "110% | 4.4 m/s"],
    ["The Huntress", "110% | 4.4 m/s"],
    ["The Clown", "110% | 4.4 m/s"],
    ["The Spirit", "110% | 4.4 m/s"],
    ["The Deathslinger", "110% | 4.4 m/s"],
    ["The Artist", "110% | 4.4 m/s"],
    ["The Trickster", "110% | 4.4 m/s"],
    ["The Twins", "110% | 4.4 m/s"],
    ["The Houndmaster", "110% | 4.4 m/s"]
]);

const speedOptions = [
    "110% | 4.4 m/s",
    "115% | 4.6 m/s"
];

const hairOptions = [
    ["bald", "Bald"],
    ["black", "Black hair"],
    ["brunette", "Brown hair"],
    ["blonde", "Blonde hair"],
    ["ginger", "Ginger hair"],
    ["dyed", "Dyed hair"],
    ["purple", "Purple"],
    ["notclear", "Not clear"],
    ["white", "White hair"]
];

const ethnicityOptions = [
    ["white", "Caucasian / White"],
    ["black", "Black / African"],
    ["latino", "Hispanic / Latino"],
    ["asian", "Asian (Entire Asia)"]
];

function splitCountryValues(value) {
    return String(value || "")
        .split(/\s*\/\s*/)
        .flatMap(part => part.split(/\s*,\s*/))
        .map(part => part.trim())
        .filter(Boolean);
}

function uniqueSorted(values) {
    return [...new Set(values.filter(Boolean))].sort((a, b) => a.localeCompare(b));
}

const realCountryNames = new Set([
    "Argentina",
    "Brazil",
    "Canada",
    "Chile",
    "China",
    "France",
    "Germany",
    "Hungary",
    "Italy",
    "Jamaica",
    "Japan",
    "Lebanon",
    "Madagascar",
    "Nigeria",
    "Norway",
    "Romania",
    "Russia",
    "South Korea",
    "Thailand",
    "United Kingdom",
    "United States"
]);

const roleOptions = [
    ["killer", "Killer"],
    ["survivor", "Survivor"]
];

const genderOptions = [
    ["female", "Female"],
    ["male", "Male"],
    ["unknown", "Unknown"]
];

const questionBlocks = [
    ["isKiller"],
    ["licensed"],
    ["releasedAfter", "releasedIn"],
    ["genderFemale"],
];

const manualCrossOutQuestionIds = new Set([
    "customYesNo"
]);

const subjectiveNameLengthCharacters = new Set([
    "The Good Guy",
    "The Skull Merchant",
    "Yun-Jin Lee",
    "Kwon Tae-young",
    "The Ghost Face"
]);

function countNameLettersForQuestion(character) {
    let name = character.name.replace(/^The\s+/i, "").replace(/["']/g, "");
    if (character.role === "survivor") {
        const parts = name.trim().split(/\s+/);
        if (parts.length > 1) name = parts.slice(0, -1).join(" ");
    }
    return name
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z]/gi, "")
        .length;
}

const facialHairCharacters = new Set([
    "William \"Bill\" Overbeck",
    "Ace Visconti",
    "Detective Tapp",
    "Jeff Johansen",
    "Nicolas Cage",
    "Jonah Vasquez",
    "Vittorio Toscano",
    "Gabriel Soma",
    "Alan Wake",
    "Rick Grimes",
    "The Deathslinger"
]);

const over40Characters = new Set([
    "The Hillbilly",
    "The Hag",
    "The Wraith",
    "The Shape",
    "The Doctor",
    "The Oni",
    "The Blight",
    "The Nemesis",
    "The Cenobite",
    "The Mastermind",
    "The Houndmaster",
    "The First",
    "The Slasher",
    "Ace Visconti",
    "Adam Francis",
    "Ashley J. Williams",
    "Felix Richter",
    "Jonah Vasquez",
    "Haddie Kaur",
    "Vittorio Toscano",
    "Nicolas Cage",
    "Alan Wake"
]);

const subjectiveOver40Characters = new Set([
    "The Plague",
    "The Demogorgon",
    "The Dredge",
    "The Knight",
    "The Singularity",
    "The Xenomorph",
    "The Good Guy",
    "The Unknown",
    "The Animatronic"
]);

const headAccessoryCharacters = new Set([
    "The Doctor",
    "The Nightmare",
    "The Legion",
    "The Plague",
    "The Deathslinger",
    "The Blight",
    "The Twins",
    "The Houndmaster",
    "Nea Karlsson",
    "Ace Visconti",
    "William \"Bill\" Overbeck",
    "Detective Tapp",
    "Mikaela Reid",
    "Aestri Yazar",
    "Michonne Grimes",
    "Dustin Henderson"
]);

const subjectiveHeadAccessoryCharacters = new Set([
    "The Wraith",
    "The Huntress",
    "The Nurse",
    "The Executioner",
    "The Cenobite",
    "The Onryo",
    "The Knight",
    "The Singularity",
    "The Skull Merchant",
    "Yui Kimura",
    "Thalita Lyra",
    "The Hag"
]);

const yesOnlyHeadAccessoryCharacters = new Set([
    "The Shape",
    "The Ghost Face",
    "The Mastermind",
    "The Lich"
]);

function questionOrderGroup(id) {
    if (id === "isKiller") return 0;
    if (id === "licensed") return 1;
    if (id === "genderFemale") return 2;
    if (id === "releasedAfter" || id === "releasedIn") return 3;
    if (id === "customYesNo") return 4;
    if (id === "speed") return 5;
    if (id === "mask" || id === "ethnicity") return 6;
    if (id === "hair") return 7;
    if (id === "animal" || id === "facialHair" || id === "dashBlink" || id === "weaponAttack" || id === "bodyAttack" || id === "detachableWeapon" || id === "rangedInjury" || id === "sideQuest" || id === "rangedUtility") return 8;
    if (id === "headAccessory") return 9;
    if (id === "perkKeyword") return 10;
    if (id === "license" || id === "country") return 11;
    return 99;
}

const nonHumanKillers = new Set([
    "The Xenomorph",
    "The Animatronic",
    "The Dredge",
    "The Unknown",
    "The Blight",
    "The Demogorgon",
    "The Singularity",
    "The Krasue",
    "The Wraith",
    "The Hag",
    "The Nightmare",
    "The Twins",
    "The Nemesis",
    "The Cenobite",
    "The Lich",
    "The First"
]);

const humanShapedExceptions = new Set([
    "The Krasue",
    "The Wraith",
    "The Hag",
    "The Nightmare",
    "The Twins",
    "The Nemesis",
    "The Cenobite",
    "The Lich",
    "The First",
    "The Unknown",
    "The Animatronic"
]);

const removableMaskKillers = new Set([
    "The Trapper",
    "The Nurse",
    "The Shape",
    "The Huntress",
    "The Cannibal",
    "The Pig",
    "The Legion",
    "The Ghost Face",
    "The Oni",
    "The Knight",
    "The Skull Merchant",
    "The Ghoul",
    "The Slasher"
]);

const subjectiveRemovableMaskKillers = new Set([
    "The Nurse",
    "The Executioner",
    "The Wraith"
]);

const visibleDisfigurementCharacters = new Set([
    "The Trapper",
    "The Wraith",
    "The Hillbilly",
    "The Nurse",
    "The Hag",
    "The Clown",
    "The Spirit",
    "The Legion",
    "The Plague",
    "The Ghost Face",
    "The Oni",
    "The Executioner",
    "The Blight",
    "The Twins",
    "The Skull Merchant",
    "The Houndmaster",
    "The Animatronic",
    "The Lich",
    "The First",
    "The Dark Lord",
    "The Deathslinger",
    "David King",
    "Nea Karlsson",
    "Zarina Kassir"
]);

const subjectiveDisfigurementCharacters = new Set([
    "The Lich",
    "The First"
]);

const animalAssociationKillers = new Set([
    "The Demogorgon",
    "The Xenomorph",
    "The Animatronic",
    "The Dark Lord",
    "The Houndmaster",
    "The Pig",
    "The Huntress",
    "The Artist"
]);

const dashBlinkKillers = new Set([
    "The Hillbilly",
    "The Nurse",
    "The Hag",
    "The Shape",
    "The Nightmare",
    "The Pig",
    "The Demogorgon",
    "The Oni",
    "The Blight",
    "The Twins",
    "The Cenobite",
    "The Onryo",
    "The Dredge",
    "The Mastermind",
    "The Singularity",
    "The Xenomorph",
    "The Good Guy",
    "The Unknown",
    "The Lich",
    "The Dark Lord",
    "The Ghoul",
    "The Animatronic",
    "The Krasue",
    "The Slasher"
]);

const subjectiveDashBlinkKillers = new Set([
    "The Spirit"
]);

const nonInjuringRangedKillers = new Set([
    "The Cenobite",
    "The Doctor",
    "The Clown",
    "The Singularity"
]);

const detachableWeaponExceptions = new Set([
    "The Hag",
    "The Demogorgon",
    "The Nemesis",
    "The Dredge",
    "The Artist",
    "The Onryo",
    "The Xenomorph",
    "The Singularity",
    "The Dark Lord",
    "The Ghoul",
    "The First"
]);

const subjectiveDetachableWeaponKillers = new Set([
    "The Cenobite"
]);

const femaleCharacters = new Set([
    "The Nurse",
    "The Hag",
    "The Huntress",
    "The Pig",
    "The Spirit",
    "The Plague",
    "The Artist",
    "The Onryo",
    "The Skull Merchant",
    "The Houndmaster",
    "The Krasue",
    "Meg Thomas",
    "Claudette Morel",
    "Nea Karlsson",
    "Laurie Strode",
    "Feng Min",
    "Kate Denson",
    "Jane Romero",
    "Nancy Wheeler",
    "Yui Kimura",
    "Zarina Kassir",
    "Cheryl Mason",
    "Elodie Rakoto",
    "Yun-Jin Lee",
    "Mikaela Reid",
    "Ellen Ripley",
    "Jill Valentine",
    "Ada Wong",
    "Rebecca Chambers",
    "Thalita Lyra",
    "Sable Ward",
    "Lara Croft",
    "Taurie Cain",
    "Haddie Kaur",
    "Orela Rose",
    "Michonne Grimes",
    "Vee Boonyasak",
    "Eleven"
]);

const bothGenderCharacters = new Set([
    "Aestri Yazar",
    "The Legion",
    "The Twins",
    "The Trickster"
]);

const unknownGenderCharacters = new Set([
    "The Demogorgon",
    "The Singularity",
    "The Dredge",
    "The Unknown",
    "The Xenomorph"
]);


const maleOnlyCharacters = new Set([
    "The Animatronic",
    "The Ghoul"
]);

const baldHairCharacters = new Set([
    "The Trapper",
    "The Wraith",
    "The Doctor",
    "The Nightmare",
    "The Demogorgon",
    "The Nemesis",
    "The Blight",
    "The Dredge",
    "The Singularity",
    "The Lich",
    "The First",
    "The Animatronic",
    "The Slasher",
    "The Xenomorph"
]);

const blackBrownHairCharacters = new Set([
    "Claudette Morel",
    "Jake Park",
    "Nea Karlsson",
    "Ace Visconti",
    "David King",
    "Jeff Johansen",
    "Zarina Kassir",
    "Jonah Vasquez",
    "Gabriel Soma",
    "Taurie Cain",
    "Orela Rose",
    "Dwight Fairfield",
    "Adam Francis",
    "Steve Harrington",
    "Yui Kimura",
    "Kwon Tae-young",
    "Trapper",
    "The Legion",
    "The Pig",
    "The Clown",
    "The Spirit",
    "The Plague",
    "The Dark Lord",
    "The Houndmaster",
    "The Unknown"
]);

const blackHairCharacters = new Set([
    "Feng Min",
    "Ada Wong",
    "Sable Ward",
    "Elodie Rakoto",
    "Yun-Jin Lee",
    "Thalita Lyra",
    "Vee Boonyasak",
    "The Artist",
    "The Onryo",
    "The Skull Merchant",
    "The Krasue"
]);

const brunetteHairCharacters = new Set([
    "Meg Thomas"
]);

const gingerHairCharacters = new Set([
    "Meg Thomas",
    "The Good Guy"
]);

const blondeHairCharacters = new Set([
    "Laurie Strode",
    "Kate Denson",
    "Jill Valentine",
    "Rebecca Chambers",
    "Leon Scott Kennedy",
    "F lix Richter",
    "Nicolas Cage",
    "The Trickster"
]);

const grayHairCharacters = new Set([
    "Bill Overbeck",
    "Ash Williams",
    "The Blight"
]);

const hairTagOverrides = new Map([
    ["Meg Thomas", ["ginger"]],
    ["Thalita Lyra", ["brunette"]],
    ["Laurie Strode", ["blonde"]],
    ["Nea Karlsson", ["black"]],
    ["Claudette Morel", ["brunette"]],
    ["Dwight Fairfield", ["black"]],
    ["William \"Bill\" Overbeck", ["white"]],
    ["David King", ["brunette"]],
    ["Ashley J. Williams", ["black"]],
    ["Ash Williams", ["black"]],
    ["The Hillbilly", ["brunette"]],
    ["The Cannibal", ["brunette"]],
    ["The Twins", ["brunette"]],
    ["Quentin Smith", ["brunette"]],
    ["Nancy Wheeler", ["brunette"]],
    ["Jane Romero", ["brunette"]],
    ["Leon Scott Kennedy", ["blonde"]],
    ["Sable Ward", ["white"]],
    ["Gabriel Soma", ["blonde"]],
    ["Nicolas Cage", ["brunette"]],
    ["Taurie Cain", ["brunette", "ginger"]],
    ["Ada Wong", ["black"]],
    ["Rebecca Chambers", ["brunette"]],
    ["Vittorio Toscano", ["white"]],
    ["Jill Valentine", ["brunette"]],
    ["Mikaela Reid", ["ginger"]],
    ["Cheryl Mason", ["blonde"]],
    ["F lix Richter", ["blonde"]],
    ["Yoichi Asakawa", ["black"]],
    ["Yui Kimura", ["blonde"]],
    ["Zarina Kassir", ["brunette"]],
    ["Jeff Johansen", ["brunette"]],
    ["Steve Harrington", ["brunette"]],
    ["Detective Tapp", ["black"]],
    ["Ellen Ripley", ["brunette"]],
    ["Alan Wake", ["black"]],
    ["Aestri Yazar", ["brunette"]],
    ["Lara Croft", ["brunette"]],
    ["Trevor Belmont", ["brunette"]],
    ["Rick Grimes", ["brunette"]],
    ["Michonne Grimes", ["brunette"]],
    ["Eleven", ["brunette"]],
    ["Dustin Henderson", ["brunette"]],
    ["Vee Boonyasak", ["black", "dyed"]],
    ["Yun-Jin Lee", ["dyed"]],
    ["Orela Rose", ["black", "dyed"]],
    ["The Trickster", ["dyed"]],
    ["Haddie Kaur", ["black", "dyed"]],
    ["The Shape", ["black"]],
    ["The Clown", ["white"]],
    ["The Plague", ["brunette"]],
    ["The Oni", ["white"]],
    ["The Blight", ["bald"]],
    ["The Deathslinger", ["white"]],
    ["The Cenobite", ["bald"]],
    ["The Mastermind", ["blonde"]],
    ["The Knight", ["black"]],
    ["The Ghoul", ["white"]],
    ["The Dark Lord", ["white"]],
    ["The Hag", ["white", "notclear"]],
    ["The Nurse", ["notclear"]],
    ["The Huntress", ["notclear"]],
    ["The Ghost Face", ["notclear"]],
    ["The Legion", ["notclear"]],
    ["The Executioner", ["notclear"]],
    ["The Unknown", ["brunette"]],
    ["William \"Bill\" Overbeck", ["white"]],
    ["Ashley J. Williams", ["black"]],
    ["The Blight", ["white"]],
    ["The Good Guy", ["ginger"]]
]);

const subjectiveHairDetailCharacters = new Map([]);

function isSubjectiveHairDetail(character, detail) {
    const subjectiveTags = subjectiveHairDetailCharacters.get(character?.name);
    const normalizedDetail = normalized(detail);
    return Array.isArray(subjectiveTags)
        && subjectiveTags.includes(normalizedDetail)
        && !(character?.hairTags || []).includes(normalizedDetail);
}

function hairTagsForName(character) {
    const names = [character?.name, character?.wikiTitle].filter(Boolean);
    const normalizedNames = names.map(normalized);
    if (normalizedNames.includes("leon scott kennedy")) return ["blonde"];
    if (normalizedNames.includes("felix richter")) return ["blonde"];
    if (normalizedNames.includes("renato lyra")) return ["brunette"];
    for (const candidate of names) {
        if (hairTagOverrides.has(candidate)) return hairTagOverrides.get(candidate);
    }
    if (names.some(name => baldHairCharacters.has(name))) return ["bald"];
    if (names.some(name => blackBrownHairCharacters.has(name))) return ["black"];
    if (names.some(name => blackHairCharacters.has(name))) return ["black"];
    if (names.some(name => brunetteHairCharacters.has(name))) return ["brunette"];
    if (names.some(name => gingerHairCharacters.has(name))) return ["ginger"];
    if (names.some(name => blondeHairCharacters.has(name))) return ["blonde"];
    if (names.some(name => grayHairCharacters.has(name))) return ["white"];
    if (names.some(name => normalized(name) === "ash williams" || normalized(name) === "ashley j williams")) return ["black"];
    return [];
}

const rangedInjuryKillers = new Set([
    "The Huntress",
    "The Nightmare",
    "The Plague",
    "The Deathslinger",
    "The Executioner",
    "The Trickster",
    "The Nemesis",
    "The Artist",
    "The Knight",
    "The Skull Merchant",
    "The Xenomorph",
    "The Unknown",
    "The Lich",
    "The Dark Lord",
    "The Animatronic",
    "The First",
    "The Slasher"
]);

const bothAnswerRangedInjuryKillers = new Set([
    "The Ghoul",
    "The Krasue",
    "The Pig",
    "The Trapper",
    "The Twins"
]);

const sideQuestKillers = new Set([
    "The Trapper",
    "The Doctor",
    "The Nightmare",
    "The Pig",
    "The Plague",
    "The Demogorgon",
    "The Cenobite",
    "The Nemesis",
    "The Twins",
    "The Onryo",
    "The Dredge",
    "The Mastermind",
    "The Skull Merchant",
    "The Singularity",
    "The Xenomorph",
    "The Unknown",
    "The Lich",
    "The Animatronic",
    "The Krasue",
    "The First"
]);

const subjectiveSideQuestKillers = new Set([
    "The Artist",
    "The Ghost Face",
    "The Executioner"
]);

const survivorHealingPerkCharacters = new Set([
    "Meg Thomas",
    "Claudette Morel",
    "David King",
    "Adam Francis",
    "Jeff Johansen",
    "Jane Romero",
    "Nancy Wheeler",
    "Steve Harrington",
    "Zarina Kassir",
    "Ashley J. Williams",
    "Cheryl Mason",
    "Felix Richter",
    "Jill Valentine",
    "Leon S. Kennedy",
    "Mikaela Reid",
    "Yoichi Asakawa",
    "Ada Wong",
    "Rebecca Chambers",
    "Thalita Lyra",
    "Renato Lyra",
    "Gabriel Soma",
    "Sable Ward",
    "Trevor Belmont",
    "Taurie Cain",
    "Orela Rose",
    "Vee Boonyasak",
    "Kwon Tae-young"
]);

const subjectiveSurvivorHealingPerkCharacters = new Set([
    "Dwight Fairfield",
    "Alan Wake",
    "Aestri Yazar"
]);

const survivorAuraPerkCharacters = new Set([
    "Dwight Fairfield",
    "Claudette Morel",
    "Jake Park",
    "William \"Bill\" Overbeck",
    "Ace Visconti",
    "Laurie Strode",
    "Feng Min",
    "Kate Denson",
    "Quentin Smith",
    "Detective Tapp",
    "Jeff Johansen",
    "Jane Romero",
    "Ashley J. Williams",
    "Nancy Wheeler",
    "Steve Harrington",
    "Yui Kimura",
    "Zarina Kassir",
    "Cheryl Mason",
    "Felix Richter",
    "Elodie Rakoto",
    "Jill Valentine",
    "Leon S. Kennedy",
    "Mikaela Reid",
    "Jonah Vasquez",
    "Yoichi Asakawa",
    "Haddie Kaur",
    "Ada Wong",
    "Vittorio Toscano",
    "Gabriel Soma",
    "Nicolas Cage",
    "Ellen Ripley",
    "Alan Wake",
    "Sable Ward",
    "Aestri Yazar",
    "Lara Croft",
    "Trevor Belmont",
    "Taurie Cain"
]);

const survivorAccessoryCharacters = new Set([
    "Dwight Fairfield",
    "Claudette Morel",
    "Ace Visconti",
    "Kate Denson",
    "David King",
    "Jonah Vasquez",
    "Yui Kimura",
    "Nancy Wheeler",
    "Jane Romero",
    "Elodie Rakoto",
    "F lix Richter",
    "Jill Valentine",
    "Mikaela Reid",
    "Thalita Lyra",
    "Ada Wong",
    "Haddie Kaur",
    "Nicolas Cage",
    "Renato Lyra",
    "Vittorio Toscano",
    "Lara Croft",
    "Orela Rose",
    "Michonne Grimes",
    "Vee Boonyasak",
    "Kwon Tae-young"
]);

const subjectiveSurvivorAccessoryCharacters = new Set([
    "Detective Tapp",
    "Ashley J. Williams",
    "Sable Ward",
    "Aestri Yazar",
    "Taurie Cain",
    "Rebecca Chambers",
    "Meg Thomas"
]);

const survivorPalletPerkCharacters = new Set([
    "Feng Min",
    "Kate Denson",
    "Yui Kimura",
    "Elodie Rakoto",
    "Yun-Jin Lee",
    "Yoichi Asakawa",
    "Ellen Ripley",
    "Lara Croft",
    "Trevor Belmont",
    "Rick Grimes",
    "Michonne Grimes",
    "Eleven",
    "Kwon Tae-young"
]);

const subjectiveSurvivorPalletPerkCharacters = new Set([
    "Meg Thomas",
    "Ace Visconti"
]);

const survivorHandVisibleCharacters = new Set([
    "Dwight Fairfield",
    "Claudette Morel",
    "David King",
    "Feng Min",
    "Kate Denson",
    "Detective Tapp",
    "Yui Kimura",
    "Mikaela Reid",
    "Haddie Kaur",
    "Rebecca Chambers",
    "Vittorio Toscano",
    "Thalita Lyra",
    "Ellen Ripley",
    "Taurie Cain",
    "Sable Ward",
    "Orela Rose",
    "Vee Boonyasak",
    "Kwon Tae-young"
]);

const subjectiveSurvivorHandVisibleCharacters = new Set([
    "Leon S. Kennedy",
    "Eleven"
]);

const survivorEyeContactCharacters = new Set([
    "William \"Bill\" Overbeck",
    "Kate Denson",
    "Jane Romero",
    "Ashley J. Williams",
    "Steve Harrington",
    "Felix Richter",
    "Yun-Jin Lee",
    "Leon S. Kennedy",
    "Mikaela Reid",
    "Yoichi Asakawa",
    "Ada Wong",
    "Vittorio Toscano",
    "Renato Lyra",
    "Ellen Ripley",
    "Lara Croft",
    "Trevor Belmont",
    "Taurie Cain",
    "Orela Rose",
    "Vee Boonyasak",
    "Kwon Tae-young"
]);

const subjectiveSurvivorEyeContactCharacters = new Set([
    "Ace Visconti",
    "Jonah Vasquez",
    "Haddie Kaur",
    "Aestri Yazar"
]);

const perkKeywordExtraCharacters = new Set([
    "Eleven",
    "Rick Grimes",
    "Michonne Grimes",
    "Dustin Henderson",
    "Alan Wake",
    "Renato Lyra",
    "Thalita Lyra",
    "Mikaela Reid",
    "Taurie Cain",
    "Sable Ward"
]);

const ethnicityBothDetailsByName = new Map([
    ["The Unknown", ["white"]],
    ["Gabriel Soma", ethnicityOptions.map(([value]) => value)]
]);

const noOnlyEthnicityCharacters = new Set([
    "The Demogorgon",
    "The Xenomorph",
    "The Singularity",
    "The Dredge",
    "The Nemesis"
]);

const ethnicityByName = new Map([
    ["The Trapper", ["white"]],
    ["The Hillbilly", ["white"]],
    ["The Nurse", ["white"]],
    ["The Shape", ["white"]],
    ["The Huntress", ["white"]],
    ["The Cannibal", ["white"]],
    ["The Nightmare", ["white"]],
    ["The Pig", ["white"]],
    ["The Clown", ["white"]],
    ["The Legion", ["white"]],
    ["The Ghost Face", ["white"]],
    ["The Deathslinger", ["white"]],
    ["The Executioner", ["white"]],
    ["The Blight", ["white"]],
    ["The Twins", ["white"]],
    ["The Cenobite", ["white"]],
    ["Ace Visconti", ["white", "latino"]],
    ["The Mastermind", ["white"]],
    ["The Knight", ["white"]],
    ["The Good Guy", ["white"]],
    ["The Dark Lord", ["white"]],
    ["The Animatronic", ["white"]],
    ["The First", ["white"]],
    ["The Slasher", ["white"]],
    ["Dwight Fairfield", ["white"]],
    ["Meg Thomas", ["white"]],
    ["Nea Karlsson", ["white"]],
    ["Laurie Strode", ["white"]],
    ["William \"Bill\" Overbeck", ["white"]],
    ["David King", ["white"]],
    ["Kate Denson", ["white"]],
    ["Quentin Smith", ["white"]],
    ["Jeff Johansen", ["white"]],
    ["Ashley J. Williams", ["white"]],
    ["Nancy Wheeler", ["white"]],
    ["Steve Harrington", ["white"]],
    ["Cheryl Mason", ["white"]],
    ["Felix Richter", ["white"]],
    ["Jill Valentine", ["white"]],
    ["Leon S. Kennedy", ["white"]],
    ["Mikaela Reid", ["white"]],
    ["Rebecca Chambers", ["white"]],
    ["Vittorio Toscano", ["white"]],
    ["Nicolas Cage", ["white"]],
    ["Ellen Ripley", ["white"]],
    ["Alan Wake", ["white"]],
    ["Sable Ward", ["white"]],
    ["Lara Croft", ["white"]],
    ["Trevor Belmont", ["white"]],
    ["Taurie Cain", ["white"]],
    ["Rick Grimes", ["white"]],
    ["Dustin Henderson", ["white"]],
    ["Eleven", ["white"]],
    ["The Wraith", ["black"]],
    ["The Hag", ["black"]],
    ["The Doctor", ["black"]],
    ["The Houndmaster", ["black"]],
    ["Claudette Morel", ["black"]],
    ["Detective Tapp", ["black"]],
    ["Adam Francis", ["black"]],
    ["Elodie Rakoto", ["black"]],
    ["Orela Rose", ["black"]],
    ["Michonne Grimes", ["black"]],
    ["The Artist", ["latino"]],
    ["The Skull Merchant", ["latino", "asian"]],
    ["Jane Romero", ["latino"]],
    ["Jonah Vasquez", ["latino"]],
    ["Thalita Lyra", ["latino"]],
    ["Renato Lyra", ["latino"]],
    ["Aestri Yazar", ["latino"]],
    ["The Spirit", ["asian"]],
    ["The Plague", ["asian"]],
    ["The Oni", ["asian"]],
    ["The Trickster", ["asian"]],
    ["The Onryo", ["asian"]],
    ["The Ghoul", ["asian"]],
    ["The Krasue", ["asian"]],
    ["Jake Park", ["asian"]],
    ["Feng Min", ["asian"]],
    ["Yui Kimura", ["asian"]],
    ["Zarina Kassir", ["asian"]],
    ["Yun-Jin Lee", ["asian"]],
    ["Yoichi Asakawa", ["asian"]],
    ["Haddie Kaur", ["asian"]],
    ["Ada Wong", ["asian"]],
    ["Vee Boonyasak", ["asian"]],
    ["Kwon Tae-young", ["asian"]]
]);

const licenseOptions = [
    ["game", "A game that's not DBD"],
    ["screen", "Movies / Shows"]
];

const licenseCategoryCharacters = {
    game: new Set([
        "The Nemesis",
        "The Mastermind",
        "The Executioner",
        "The Lich",
        "The Dark Lord",
        "William \"Bill\" Overbeck",
        "Ashley J. Williams",
        "Jill Valentine",
        "Leon S. Kennedy",
        "Ada Wong",
        "Rebecca Chambers",
        "Alan Wake",
        "Aestri Yazar",
        "Lara Croft",
        "Trevor Belmont"
    ]),
    screen: new Set([
        "The Shape",
        "The Cannibal",
        "The Nightmare",
        "The Pig",
        "The Ghost Face",
        "The Demogorgon",
        "The Cenobite",
        "The Onryo",
        "The Xenomorph",
        "The Good Guy",
        "The Ghoul",
        "The First",
        "The Slasher",
        "Laurie Strode",
        "Quentin Smith",
        "Detective Tapp",
        "Nancy Wheeler",
        "Steve Harrington",
        "Cheryl Mason",
        "Yoichi Asakawa",
        "Nicolas Cage",
        "Ellen Ripley",
        "Rick Grimes",
        "Michonne Grimes",
        "Dustin Henderson",
        "Eleven"
    ])
};

function licenseCategoryMatches(character, category) {
    const key = normalized(category);
    return licenseCategoryCharacters[key]?.has(character.name) || false;
}

const goatStreamerCharacters = [
    {
        name: "Hens",
        role: "survivor",
        source: "community",
        year: 2020,
        portrait: "https://static-cdn.jtvnw.net/jtv_user_pictures/660f33a8-ec1b-40b7-ba1f-f0b12e51f3b3-profile_image-300x300.png",
        kind: "Streamer",
        license: "Twitch",
        origin: "German",
        country: "Germany",
        survivorRole: "Streamer",
        lore: "One of the Dead by Daylight community GOATs.",
        perks: ["Old Friend of the Fog", "Calculated Pressure", "Both Sides Read"]
    },
    {
        name: "OtzDarva",
        role: "survivor",
        source: "community",
        year: 2014,
        portrait: "https://static-cdn.jtvnw.net/jtv_user_pictures/d557ad13-96ec-4116-9217-faad45e9d742-profile_image-300x300.png",
        kind: "Streamer",
        license: "Twitch",
        origin: "Spanish",
        country: "Spain",
        survivorRole: "Streamer",
        lore: "One of the Dead by Daylight community GOATs.",
        perks: ["A Lesson Learned", "Never Give Up", "Patience Rewarded"]
    },
    {
        name: "Jakkage",
        role: "survivor",
        source: "community",
        year: 2023,
        portrait: "https://static-cdn.jtvnw.net/jtv_user_pictures/86203ce2-aa75-4d9c-adef-163f122a3c8e-profile_image-300x300.png",
        kind: "Streamer",
        license: "Twitch",
        origin: "American",
        country: "United States",
        survivorRole: "Streamer",
        lore: "One of the Dead by Daylight community GOATs.",
        perks: ["No Panic", "In Complete Control", "A Perfect Path"]
    },
    {
        name: "Zerbs",
        role: "survivor",
        source: "community",
        year: 2016,
        portrait: "https://static-cdn.jtvnw.net/jtv_user_pictures/6ad41123-4e7f-4269-9f25-c58bf7c8e28d-profile_image-300x300.png",
        kind: "Streamer",
        license: "Twitch",
        origin: "American",
        country: "United States",
        survivorRole: "Streamer",
        lore: "One of the Dead by Daylight community GOATs.",
        perks: ["No Trial Wasted", "Against the Odds", "Until the Last Escape"]
    },
    {
        name: "Skermz",
        role: "survivor",
        source: "community",
        year: 2014,
        portrait: "https://static-cdn.jtvnw.net/jtv_user_pictures/58f82d32-db49-48ae-a914-cbcd61a9c27b-profile_image-300x300.png",
        kind: "Streamer",
        license: "Twitch",
        origin: "American",
        country: "United States",
        survivorRole: "Streamer",
        lore: "One of the Dead by Daylight community GOATs.",
        perks: ["Wrong Turn", "Somehow Still Safe", "Made You Swing"]
    },
    {
        name: "Socksish",
        role: "survivor",
        source: "community",
        year: 2025,
        portrait: "https://static-cdn.jtvnw.net/jtv_user_pictures/ddd85273-607c-4996-b718-9d07ce555074-profile_image-300x300.png",
        kind: "Streamer",
        license: "Twitch",
        origin: "American",
        country: "United States",
        survivorRole: "Streamer",
        lore: "One of the Dead by Daylight community GOATs.",
        perks: ["Baited Again", "Nothing Personal", "One Chase Too Long"]
    },
    {
        name: "SwehYT",
        role: "survivor",
        source: "community",
        year: 2020,
        portrait: "https://static-cdn.jtvnw.net/jtv_user_pictures/808c071c-7623-473e-991d-0b70cf59a0f4-profile_image-300x300.png",
        kind: "Streamer",
        license: "Twitch",
        origin: "Swedish",
        country: "Sweden",
        survivorRole: "Streamer",
        lore: "One of the Dead by Daylight community GOATs.",
        perks: ["Quiet Precision", "Held Until the End", "Veteran's Timing"]
    },
    {
        name: "MomoSeventh",
        role: "survivor",
        source: "community",
        year: 2021,
        portrait: "https://static-cdn.jtvnw.net/jtv_user_pictures/93fadfd1-06aa-44fb-8aad-3f4c94290fdb-profile_image-300x300.png",
        kind: "Streamer",
        license: "Twitch",
        origin: "Lebanese / American",
        country: "Lebanon / United States",
        survivorRole: "Streamer",
        lore: "One of the Dead by Daylight community GOATs.",
        perks: ["Lethal Streak", "Rush of Ruin", "No Room to Breathe"]
    },
    {
        name: "InvicPedro",
        role: "survivor",
        source: "community",
        year: 2018,
        portrait: "https://static-cdn.jtvnw.net/jtv_user_pictures/447abb05-cb90-4dbe-9024-95dc848d958f-profile_image-300x300.png",
        kind: "Streamer",
        license: "Twitch",
        origin: "Portuguese",
        country: "Portugal",
        survivorRole: "Streamer",
        lore: "One of the Dead by Daylight community GOATs.",
        perks: ["Two-Sided Threat", "No Weak Side", "Role Mastery"]
    },
    {
        name: "Bronx",
        role: "survivor",
        source: "community",
        year: 2013,
        portrait: "https://static-cdn.jtvnw.net/jtv_user_pictures/9dc05e7f-4bff-4d45-8e41-181fd3ad0b08-profile_image-300x300.png",
        kind: "Streamer",
        license: "Twitch",
        origin: "American",
        country: "United States",
        survivorRole: "Streamer",
        lore: "One of the Dead by Daylight community GOATs.",
        perks: ["Abyssal Instinct", "From the Abyss", "Whatever It Takes"]
    },
    {
        name: "Spitzz",
        role: "survivor",
        source: "community",
        year: 2023,
        portrait: "https://static-cdn.jtvnw.net/jtv_user_pictures/9591693f-69a7-4d5e-be15-7af90de55b01-profile_image-300x300.png",
        kind: "Streamer",
        license: "Twitch",
        origin: "German",
        country: "Germany",
        survivorRole: "Streamer",
        lore: "One of the Dead by Daylight community GOATs.",
        perks: ["Only the Strong Remain", "Selfless Burden", "No Backup Needed"]
    },
    {
        name: "CocoaKissies",
        role: "survivor",
        source: "community",
        year: 2025,
        portrait: "https://static-cdn.jtvnw.net/jtv_user_pictures/ba7ac007-5f62-4a13-9f79-4d7df90520bf-profile_image-300x300.png",
        kind: "Streamer",
        license: "Twitch",
        origin: "American",
        country: "USA",
        survivorRole: "Streamer",
        lore: "One of the Dead by Daylight community GOATs.",
        perks: ["Eyes on Me", "Right Where I Want You", "A Dangerous Game"]
    }
].map(character => {
    const twitchSlugs = {
        Bronx: "bronx",
        CocoaKissies: "cocoakissies",
        Hens: "hens",
        InvicPedro: "invicpedro",
        Jakkage: "jakkage",
        MomoSeventh: "momoseventh",
        OtzDarva: "otzdarva",
        Skermz: "skermz",
        Socksish: "socksish",
        Spitzz: "spitzz",
        SwehYT: "swehyt",
        Zerbs: "zerbs"
    };
    const speedTags = {
        Bronx: ["115% | 4.6 m/s"],
        Hens: ["100% | 4.0 m/s", "115% | 4.6 m/s"],
        InvicPedro: ["100% | 4.0 m/s", "115% | 4.6 m/s"],
        MomoSeventh: ["115% | 4.6 m/s"],
        OtzDarva: ["100% | 4.0 m/s", "115% | 4.6 m/s"]
    };
    const streamerSummaries = {
        Bronx: "A Demogorgon specialist known for strong killer gameplay across the whole roster.",
        CocoaKissies: "A survivor streamer who keeps every chase feeling like a dangerous game.",
        Hens: "The smart comp-style hybrid who breaks down DBD like a strategy game.",
        InvicPedro: "The comp two-sider who can play survivor or killer at a scary level.",
        Jakkage: "The survivor movement/looping specialist who makes chase look technical.",
        MomoSeventh: "The killer raid boss known for Blight 1992 game winstreak.",
        OtzDarva: "The wholesome killer professor and walking DBD encyclopedia.",
        Skermz: "The chaotic survivor main known for funny chases and gremlin gameplay.",
        Socksish: "The survivor menace who mixes looping with killer tilt content.",
        Spitzz: "A survivor streamer who proves only the strong remain under pressure.",
        SwehYT: "The clean veteran survivor looper with polished chase gameplay.",
        Zerbs: "The challenge-run streamer who turns DBD into gauntlets and endurance arcs."
    };
    const streamerRoleLabels = {
        Bronx: "Killer",
        Hens: "Killer / Survivor",
        InvicPedro: "Killer / Survivor",
        MomoSeventh: "Killer",
        OtzDarva: "Killer / Survivor"
    };
    return {
        ...character,
        survivorRole: streamerRoleLabels[character.name] || "Survivor",
        lore: streamerSummaries[character.name],
        twitchUrl: `https://www.twitch.tv/${twitchSlugs[character.name]}`,
        customSpeedTags: speedTags[character.name],
        bonusSearchOnly: true
    };
}).sort((a, b) => a.name.localeCompare(b.name));

characters.push(...goatStreamerCharacters);
const playableCharacters = characters.filter(character => !character.bonusSearchOnly);

characters.forEach((item, index) => {
    item.id = index;
    item.eliminated = false;
    item.solved = false;
    item.gender = unknownGenderCharacters.has(item.name)
        ? null
        : bothGenderCharacters.has(item.name)
            ? "both"
            : maleOnlyCharacters.has(item.name)
                ? "male"
                : femaleCharacters.has(item.name)
                    ? "female"
                    : "male";
    item.genderTags = item.gender === "both"
        ? ["Female", "Male"]
        : [item.gender ? item.gender[0].toUpperCase() + item.gender.slice(1) : "Unknown"];
    item.genderLabel = item.gender === "both" ? "Female / Male" : (item.gender ? item.gender[0].toUpperCase() + item.gender.slice(1) : "Unknown");
    item.genderTag = item.genderLabel;
    item.speedTags = item.customSpeedTags || [item.role === "killer" ? (speedByName.get(item.name) || "115% | 4.6 m/s") : "100% | 4.0 m/s"];
    item.speedLabel = item.speedTags.join(" / ");
    item.speedTag = item.speedLabel;
if (item.name === "CocoaKissies" && item.bonusSearchOnly) {
    item.gender = "female";
    item.genderTags = ["Female"];
    item.genderLabel = "Female";
    item.genderTag = "Female";
}
    item.hairTags = hairTagsForName(item);
    item.attackTypes = item.role === "killer"
        ? [
            ...new Set([
                bodyAttackKillers.has(item.name) ? "body" : "weapon",
                weaponAttackKillers.has(item.name) ? "weapon" : ""
            ].filter(Boolean))
        ]
        : [];
});

const detachableWeaponKillers = new Set(
    characters
        .filter(c => c.role === "killer" && !detachableWeaponExceptions.has(c.name))
        .map(c => c.name)
);

const countryOptions = uniqueSorted(playableCharacters.flatMap(c => splitCountryValues(c.country).filter(part => realCountryNames.has(part))));
const releaseYears = [...new Set(playableCharacters.map(c => c.year).filter(year => Number.isFinite(year)))].sort((a, b) => a - b);
const baseYearOptions = releaseYears.map(year => [String(year), String(year)]);
const advancedYearOptions = releaseYears.slice(0, -2).map((year, index) => {
    const group = releaseYears.slice(index, index + 3);
    return [group.join("|"), group.join("  |  ")];
});

const questions = [
    { id: "isKiller", tier: "general", label: "Is your character's role being a:", needsDetail: false, usesRoleSelect: true, test: (c, d) => c.role === d },
    { id: "licensed", tier: "general", label: "Is your character licensed?", needsDetail: false, test: c => c.source === "licensed" },
    { id: "releasedAfter", tier: "general", label: "Was your character released this year or after?", needsDetail: false, usesYearSelect: true, test: (c, d) => c.year >= Number(d) },
    { id: "genderFemale", tier: "general", label: "Is your character's gender:", needsDetail: false, usesGenderSelect: true, skipUnknown: true, test: (c, d) => d === "unknown" ? unknownGenderCharacters.has(c.name) : c.gender === "both" ? "both" : unknownGenderCharacters.has(c.name) ? null : c.gender == null ? null : d === "female" ? c.gender === "female" : c.gender === "male" },
    { id: "mask", tier: "advanced", label: "(if killer) are they wearing a mask?", needsDetail: false, skipUnknown: true, test: c => c.role !== "killer" ? null : subjectiveRemovableMaskKillers.has(c.name) ? "both" : removableMaskKillers.has(c.name) },
    { id: "customYesNo", tier: "advanced", label: "Ask any yes/no question", needsDetail: true, placeholder: "Type your question", manualOnly: true },
    { id: "speed", tier: "advanced", label: "(if killer) is their movement speed:", needsDetail: false, usesSpeedSelect: true, skipUnknown: true, test: (c, d) => c.role !== "killer" ? null : c.speedLabel === d },
    { id: "ethnicity", tier: "advanced", label: "Is your character's ethnicity:", needsDetail: false, usesEthnicitySelect: true, skipUnknown: true, test: (c, d) => ethnicityBothDetailsByName.get(c.name)?.includes(d) ? "both" : noOnlyEthnicityCharacters.has(c.name) ? null : (ethnicityByName.get(c.name) || []).includes(d) },
    { id: "hair", tier: "advanced", label: "Is your character's hair color:", needsDetail: false, usesHairSelect: true, skipUnknown: true, test: (c, d) => isSubjectiveHairDetail(c, d) ? "both" : (c.hairTags || []).includes(normalized(d)) },
    { id: "animal", tier: "advanced", label: "(if killer) do they have any known animal association?", needsDetail: false, skipUnknown: true, test: c => c.role !== "killer" ? null : animalAssociationKillers.has(c.name) },
    { id: "facialHair", tier: "advanced", label: "(if survivor) do they have facial hair?", needsDetail: false, skipUnknown: true, test: c => c.role !== "survivor" ? null : facialHairCharacters.has(c.name) },
    { id: "dashBlink", tier: "advanced", label: "(if killer) does their power include a dash, blink, or teleport?", needsDetail: false, skipUnknown: true, test: c => c.role !== "killer" ? null : subjectiveDashBlinkKillers.has(c.name) ? "both" : dashBlinkKillers.has(c.name) },
    { id: "headAccessory", tier: "advanced", label: "Is there anything covering their head or face? (Not a mask)", needsDetail: false, skipUnknown: true, test: c => subjectiveHeadAccessoryCharacters.has(c.name) ? "both" : yesOnlyHeadAccessoryCharacters.has(c.name) ? "yesOnly" : headAccessoryCharacters.has(c.name) },
    { id: "detachableWeapon", tier: "advanced", label: "(if killer) do they have a detachable weapon they can hold?", needsDetail: false, skipUnknown: true, test: c => c.role !== "killer" ? null : subjectiveDetachableWeaponKillers.has(c.name) ? "both" : detachableWeaponKillers.has(c.name) },
    { id: "rangedInjury", tier: "advanced", label: "(if killer) do they have a power that can injure from a distance?", needsDetail: false, skipUnknown: true, test: c => c.role !== "killer" ? null : bothAnswerRangedInjuryKillers.has(c.name) ? "both" : rangedInjuryKillers.has(c.name) },
    { id: "sideQuest", tier: "advanced", label: "(if killer) can they give survivors any side objective?", needsDetail: false, skipUnknown: true, test: c => c.role !== "killer" ? null : subjectiveSideQuestKillers.has(c.name) ? "both" : sideQuestKillers.has(c.name) },
    { id: "survivorHealing", tier: "advanced", label: "(if survivor) do they have a direct healing related perk?", needsDetail: false, skipUnknown: true, test: c => c.role !== "survivor" ? null : subjectiveSurvivorHealingPerkCharacters.has(c.name) ? "both" : survivorHealingPerkCharacters.has(c.name) },
    { id: "survivorAura", tier: "advanced", label: "(if survivor) do they have any sort of aura perk?", needsDetail: false, skipUnknown: true, test: c => c.role !== "survivor" ? null : survivorAuraPerkCharacters.has(c.name) },
    { id: "survivorPallet", tier: "advanced", label: "(if survivor) do they have a pallet related perk?", needsDetail: false, skipUnknown: true, test: c => c.role !== "survivor" ? null : subjectiveSurvivorPalletPerkCharacters.has(c.name) ? "both" : survivorPalletPerkCharacters.has(c.name) },
    { id: "survivorAccessory", tier: "advanced", label: "(if survivor) are they wearing any (non hat-like) accessory?", needsDetail: false, skipUnknown: true, test: c => c.role !== "survivor" ? null : subjectiveSurvivorAccessoryCharacters.has(c.name) ? "both" : survivorAccessoryCharacters.has(c.name) },
    { id: "survivorHandVisible", tier: "advanced", label: "(if survivor) can you see their hand on the portrait?", needsDetail: false, skipUnknown: true, test: c => c.role !== "survivor" ? null : subjectiveSurvivorHandVisibleCharacters.has(c.name) ? "both" : survivorHandVisibleCharacters.has(c.name) },
    { id: "survivorEyeContact", tier: "advanced", label: "(if survivor) are they keeping eye contact right now?", needsDetail: false, skipUnknown: true, test: c => c.role !== "survivor" ? null : subjectiveSurvivorEyeContactCharacters.has(c.name) ? "both" : survivorEyeContactCharacters.has(c.name) },
    { id: "perkKeyword", tier: "advanced", label: "Do they have a Hex/Boon, SH, INV or a TW perk?", needsDetail: false, test: c => perkKeywordExtraCharacters.has(c.name) || c.perks.some(perk => /hex:|scourge hook:|scourage|boon|team-'work|teamwork|invocation:|invo/i.test(perk)) },
    { id: "license", tier: "advanced", label: "If your character's licensed is it from:", needsDetail: false, usesLicenseSelect: true, test: (c, d) => c.source === "licensed" && licenseCategoryMatches(c, d) },
    { id: "country", tier: "advanced", label: "Is your character's origin:", needsDetail: false, usesCountrySelect: true, test: (c, d) => splitCountryValues(c.country).some(part => normalized(part) === normalized(d)) },
    { id: "releasedIn", tier: "advanced", label: "Were they released in any of these three years?", needsDetail: false, usesYearSelect: true, test: (c, d) => String(d).split("|").map(Number).includes(c.year) }
];

const els = {
    grid: document.querySelector("#grid"),
    searchInput: document.querySelector("#searchInput"),
    searchClearBtn: document.querySelector("#searchClearBtn"),
    searchSuggestions: document.querySelector("#searchSuggestions"),
    questionSelect: document.querySelector("#questionSelect"),
    detailInput: document.querySelector("#detailInput"),
    roleSelect: document.querySelector("#roleSelect"),
    speedSelect: document.querySelector("#speedSelect"),
    licenseSelect: document.querySelector("#licenseSelect"),
    countrySelect: document.querySelector("#countrySelect"),
    genderSelect: document.querySelector("#genderSelect"),
    hairSelect: document.querySelector("#hairSelect"),
    ethnicitySelect: document.querySelector("#ethnicitySelect"),
    yearSelect: document.querySelector("#yearSelect"),
    stageStatus: document.querySelector("#stageStatus"),
    stageModeLabel: document.querySelector("#stageModeLabel"),
    stageModeText: document.querySelector("#stageModeText"),
    skipBaseBtn: document.querySelector("#skipBaseBtn"),
    customUnlockGroup: document.querySelector(".custom-unlock-group"),
    customUnlockBtn: document.querySelector("#customUnlockBtn"),
    customUnlockPopover: document.querySelector("#customUnlockPopover"),
    howToBtn: document.querySelector("#howToBtn"),
    howToPopover: document.querySelector("#howToPopover"),
    yesBtn: document.querySelector("#yesBtn"),
    noBtn: document.querySelector("#noBtn"),
    newGameBtn: document.querySelector("#newGameBtn"),
    rollCharacterBtn: document.querySelector("#rollCharacterBtn"),
    targetPanel: document.querySelector("#targetPanel"),
    minimizeTargetBtn: document.querySelector("#minimizeTargetBtn"),
    undoBtn: document.querySelector("#undoBtn"),
    actionUndoBtn: document.querySelector("#actionUndoBtn"),
    questionUndoBtn: document.querySelector("#questionUndoBtn"),
    answerBox: document.querySelector("#answerBox"),
    actionLog: document.querySelector("#actionLog"),
    log: document.querySelector("#log"),
    totalCount: document.querySelector("#totalCount"),
    leftCount: document.querySelector("#leftCount"),
    targetBox: document.querySelector("#targetBox"),
    targetSummary: document.querySelector("#targetSummary"),
    resultDialog: document.querySelector("#resultDialog"),
    resultTitle: document.querySelector("#resultTitle"),
    resultText: document.querySelector("#resultText"),
    closeDialogBtn: document.querySelector("#closeDialogBtn"),
    correctGuessBtn: document.querySelector("#correctGuessBtn"),
    wrongGuessBtn: document.querySelector("#wrongGuessBtn"),
    dialogNewGameBtn: document.querySelector("#dialogNewGameBtn"),
    newGameDialog: document.querySelector("#newGameDialog"),
    cancelNewGameBtn: document.querySelector("#cancelNewGameBtn"),
    confirmNewGameBtn: document.querySelector("#confirmNewGameBtn")
};

function positionHowToPopover() {
    if (!els.howToBtn || !els.howToPopover || els.howToPopover.hidden) return;
    const margin = window.innerWidth <= 520 ? 8 : 10;
    const gridRect = els.grid?.getBoundingClientRect();
    const boardRight = gridRect && gridRect.width > 80
        ? Math.min(window.innerWidth - margin, gridRect.right)
        : window.innerWidth - margin;
    const availableWidth = Math.max(180, boardRight - margin);
    els.howToPopover.style.width = "max-content";
    els.howToPopover.style.maxWidth = `${Math.round(availableWidth)}px`;
    els.howToPopover.style.setProperty("--howto-popover-max", `${Math.round(availableWidth)}px`);
    const naturalWidth = els.howToPopover.scrollWidth || els.howToPopover.offsetWidth || 320;
    const targetWidth = Math.max(180, Math.min(naturalWidth, availableWidth));
    els.howToPopover.style.width = `${Math.round(targetWidth)}px`;

    const buttonRect = els.howToBtn.getBoundingClientRect();
    const popupHeight = Math.min(
        els.howToPopover.scrollHeight || els.howToPopover.offsetHeight || 220,
        Math.max(160, window.innerHeight - margin * 2)
    );

    let left = buttonRect.left + buttonRect.width / 2 - targetWidth / 2;
    left = Math.max(margin, Math.min(left, boardRight - targetWidth));

    let top = buttonRect.bottom + 8;
    const lowestTop = window.innerHeight - popupHeight - margin;
    if (top > lowestTop) {
        top = buttonRect.top - popupHeight - 8;
    }
    top = Math.max(margin, Math.min(top, Math.max(margin, lowestTop)));

    els.howToPopover.style.setProperty("--howto-popover-left", `${Math.round(left)}px`);
    els.howToPopover.style.setProperty("--howto-popover-top", `${Math.round(top)}px`);
}

function closeHowToPopover() {
    if (!els.howToPopover || !els.howToBtn) return;
    els.howToPopover.hidden = true;
    els.howToBtn.setAttribute("aria-expanded", "false");
}

function activeQuestionLogItems() {
    return questionLog.filter(item => !item.undone);
}

function getCustomQuestionUnlockCount() {
    return Math.min(
        customQuestionUnlockGoal,
        activeQuestionLogItems().filter(item => item.questionId !== "customYesNo" && item.questionTier === "advanced").length
    );
}

function advancedQuestionsUnlocked() {
    return baseSkipped || activeQuestionLogItems().length >= generalQuestionLimit;
}

function customQuestionUnlocked() {
    return advancedQuestionsUnlocked() && getCustomQuestionUnlockCount() >= customQuestionUnlockGoal;
}

function hardModeCanBeToggled() {
    return activeQuestionLogItems().length === 0;
}

function clearCustomUnlockAutoCloseTimer() {
    if (!customUnlockAutoCloseTimer) return;
    clearTimeout(customUnlockAutoCloseTimer);
    customUnlockAutoCloseTimer = null;
}

function closeCustomUnlockPopover() {
    clearCustomUnlockAutoCloseTimer();
    if (!els.customUnlockPopover || !els.customUnlockBtn) return;
    els.customUnlockPopover.hidden = true;
    els.customUnlockBtn.setAttribute("aria-expanded", "false");
}

function positionCustomUnlockPopover(anchor = els.customUnlockBtn) {
    if (!els.customUnlockPopover || els.customUnlockPopover.hidden || !anchor) return;
    const margin = window.innerWidth <= 520 ? 8 : 10;
    const anchorRect = anchor.getBoundingClientRect();
    const viewportWidth = window.visualViewport?.width || window.innerWidth || document.documentElement.clientWidth || 360;
    const viewportHeight = window.visualViewport?.height || window.innerHeight || document.documentElement.clientHeight || 640;
    const offsetLeft = window.visualViewport?.offsetLeft || 0;
    const offsetTop = window.visualViewport?.offsetTop || 0;
    const maxWidth = Math.max(180, viewportWidth - margin * 2);

    els.customUnlockPopover.style.width = "max-content";
    els.customUnlockPopover.style.maxWidth = `${Math.round(maxWidth)}px`;
    const naturalWidth = els.customUnlockPopover.scrollWidth || els.customUnlockPopover.offsetWidth || 260;
    const targetWidth = Math.max(180, Math.min(naturalWidth, maxWidth));
    const popoverHeight = Math.min(
        els.customUnlockPopover.scrollHeight || els.customUnlockPopover.offsetHeight || 120,
        Math.max(100, viewportHeight - margin * 2)
    );

    let left = anchorRect.left + offsetLeft + anchorRect.width / 2 - targetWidth / 2;
    left = Math.max(offsetLeft + margin, Math.min(left, offsetLeft + viewportWidth - targetWidth - margin));

    let top = anchorRect.bottom + offsetTop + 8;
    const lowestTop = offsetTop + viewportHeight - popoverHeight - margin;
    if (top > lowestTop) top = anchorRect.top + offsetTop - popoverHeight - 8;
    top = Math.max(offsetTop + margin, Math.min(top, Math.max(offsetTop + margin, lowestTop)));

    els.customUnlockPopover.style.setProperty("position", "fixed", "important");
    els.customUnlockPopover.style.setProperty("left", `${Math.round(left)}px`, "important");
    els.customUnlockPopover.style.setProperty("top", `${Math.round(top)}px`, "important");
    els.customUnlockPopover.style.setProperty("right", "auto", "important");
    els.customUnlockPopover.style.setProperty("bottom", "auto", "important");
    els.customUnlockPopover.style.setProperty("width", `${Math.round(targetWidth)}px`, "important");
}

function autoShowCustomUnlockPopover() {
    if (!els.customUnlockGroup || !els.customUnlockBtn || !els.customUnlockPopover) return;
    customCounterExplained = true;
    updateCustomQuestionCounter();
    els.customUnlockPopover.hidden = false;
    els.customUnlockBtn.setAttribute("aria-expanded", "true");
    positionCustomUnlockPopover();
    requestAnimationFrame(() => positionCustomUnlockPopover());
    clearCustomUnlockAutoCloseTimer();
    customUnlockAutoCloseTimer = setTimeout(() => {
        if (!els.customUnlockPopover || !els.customUnlockBtn) return;
        els.customUnlockPopover.hidden = true;
        els.customUnlockBtn.setAttribute("aria-expanded", "false");
        customUnlockAutoCloseTimer = null;
    }, 4000);
}

function updateCustomQuestionCounter() {
    if (!els.customUnlockGroup || !els.customUnlockBtn || !els.customUnlockPopover) return;
    const count = getCustomQuestionUnlockCount();
    const ready = customQuestionUnlocked();
    els.customUnlockGroup.hidden = false;
    const showCounter = customCounterExplained || count > 0 || ready;
    els.customUnlockBtn.textContent = showCounter ? `${count}/${customQuestionUnlockGoal}` : "i";
    els.customUnlockBtn.classList.toggle("is-counter", showCounter);
    els.customUnlockBtn.classList.toggle("ready", ready);
    els.customUnlockBtn.setAttribute("aria-label", ready
        ? "Custom yes/no question unlocked"
        : showCounter
            ? `Custom yes/no question progress: ${count} of ${customQuestionUnlockGoal}`
            : "Custom yes/no question unlock info");
}

let target;
let history = [];
let questionLog = [];
let actionLog = [];
let guesses = 0;
let boardFilter = "all";
let statusFilter = null;
let roleFilter = null;
let autoSwitchedToRemainingThisGame = false;
let searchQuery = "";
let baseSkipped = false;
let gameOver = false;
const generalQuestionLimit = 1;
let activeLoreId = null;
let activeQuestionElimIndex = null;
let targetLoreOpen = false;
let targetRevealed = false;
let targetRevealLabel = "Your Pick";
let bulkGroupEliminatedIds = new Map();
let targetMinimized = false;
let pendingGuess = null;
const manualEliminationAnimationIds = new Set();
let activeManualEliminationAnimations = 0;
let pendingManualEliminationRender = false;
let pendingGridTransition = null;
let transitionInteractionBlockTimer = null;
function blockTransitionInteractions(duration = 900) {
    if (!document.body || shouldUseFastBoardUpdates()) return;
    duration = Math.min(Number(duration) || 0, 160);
    if (duration <= 0) return;
    let shield = document.getElementById("transitionInputShield");
    if (!shield) {
        shield = document.createElement("div");
        shield.id = "transitionInputShield";
        shield.className = "transition-input-shield";
        shield.setAttribute("aria-hidden", "true");
        document.body.appendChild(shield);
    }
    document.body.classList.add("transition-input-blocking");
    window.clearTimeout(transitionInteractionBlockTimer);
    transitionInteractionBlockTimer = window.setTimeout(() => {
        document.body.classList.remove("transition-input-blocking");
        document.getElementById("transitionInputShield")?.remove();
        transitionInteractionBlockTimer = null;
    }, duration);
}
let lastEyebrowBurstQuery = "";
let entityWatchTimer = null;
let queuedEntityWatchMessage = null;
let initialEntityWatchChecked = false;
let manualEliminateClickCounts = new Map();
let mastermindPortraitClickCount = 0;
let mastermindBurgerUnlocked = false;
let tricksterCutieUnlocked = false;
const tricksterCutiePortraitUrl = "assets/trickster-cutie-portrait.png";
const tricksterCutiePortraitCuteUrl = "assets/trickster-cutie-portrait-cute.png";
let manualScreenEffectTimer = null;
let hoverMessageTimers = new Map();
let logoErrorTimer = null;
let wrongGuessStreak = 0;
let usedQuestionIds = new Set();
let permanentlyUsedManualQuestionIds = new Set();
let undoFloor = -1;
const customQuestionUnlockGoal = 5;
let customCounterExplained = false;
let customUnlockAutoCloseTimer = null;
let customUnlockAdvancedWasUnlocked = false;
let roleQuestionActive = false;
let speedQuestionActive = false;
let licenseQuestionActive = false;
let countryQuestionActive = false;
let genderQuestionActive = false;
let hairQuestionActive = false;
let ethnicityQuestionActive = false;
let yearQuestionActive = false;

function normalized(value) {
    return String(value || "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim();
}

const searchAliasGroups = [
    [["goat", "goats"], ["Hens", "OtzDarva", "Jakkage", "Zerbs", "Skermz", "Socksish", "SwehYT", "MomoSeventh", "InvicPedro", "Bronx"]],
    [["otz", "not otz"], ["OtzDarva"]],
    [["daddy", "papi"], ["The Shape", "The Ghost Face", "The Executioner", "The Mastermind", "Leon S. Kennedy", "Renato Lyra", "Gabriel Soma"]],
    [["mommy", "mami"], ["Ada Wong", "Sable Ward", "The Skull Merchant", "The Plague", "The Spirit"]],
    [["wesker", "albert", "burger", "burgers"], ["The Mastermind"]],
    [["myers", "michael"], ["The Shape"]],
    [["vecna"], ["The First", "The Lich"]],
    [["henry"], ["The First"]],
    [["springtrap"], ["The Animatronic"]],
    [["larry"], ["The Singularity"]],
    [["bubba", "leatherface"], ["The Cannibal"]],
    [["freddy"], ["The Nightmare"]],
    [["anna"], ["The Huntress"]],
    [["bing bong"], ["The Wraith"]],
    [["gunslinger", "dickslinger", "dihslinger", "cockslinger"], ["The Deathslinger"]],
    [["pyramidhead", "pyramid head", "dorito", "doritohead", "dorito head", "conehead", "cone head"], ["The Executioner"]],
    [["cringe"], ["The Twins", "The Hag", "The Knight", "The Krasue"]],
    [["disabled"], ["Sable Ward"]],
    [["lesbian"], ["Mikaela Reid", "Sable Ward"]],
    [["gay", "locker", "lockers"], ["Dwight Fairfield", "David King"]],
    [["dracula"], ["The Dark Lord"]],
    [["dogmaster"], ["The Houndmaster"]],
    [["kaneki", "rize", "naruto"], ["The Ghoul"]],
    [["chucky", "tiffany", "charles"], ["The Good Guy"]],
    [["xenokitty", "kitty"], ["The Xenomorph"]],
    [["demopuppy", "puppy"], ["The Demogorgon"]],
    [["sadako"], ["The Onryo", "The Onryo"]],
    [["yorick"], ["The Blight"]],
    [["pinhead"], ["The Cenobite"]],
    [["onichan", "oni-chan", "oni chan"], ["The Oni"]],
    [["amanda"], ["The Pig"]],
    [["mina"], ["The Trickster"]],
    [["jason"], ["The Slasher"]],
    [["ghostie", "scary", "scarymovie", "scary movie"], ["The Ghost Face"]]
].map(([aliases, names]) => ({
    aliases: aliases.map(normalized),
    names: new Set(names.map(normalized))
}));

const daddyGlowCharacters = new Set(["The Shape", "The Ghost Face", "The Executioner", "The Mastermind", "Leon S. Kennedy", "Renato Lyra", "Gabriel Soma"]);
const mommyGlowCharacters = new Set(["Ada Wong", "Sable Ward", "The Skull Merchant", "The Plague", "The Spirit"]);
const EASTER_EGG_POPUP_CHANCE = 0.4;
const MASS_ELIMINATION_ANIMATION_MAX = 1;
const MASS_ELIMINATION_ANIMATION_MIN_WHEN_PLENTY = 1;
const cinematicShakeCharacters = new Set(["The Shape", "The Executioner", "The Mastermind"]);
const timedCustomEliminationChanceCharacters = new Set([
    "The Cenobite",
    "The Artist",
    "The Knight",
    "The Skull Merchant",
    "The Singularity",
    "The Xenomorph",
    "The Good Guy",
    "The Lich",
    "The Dark Lord",
    "The Houndmaster",
    "The Ghoul",
    "The Animatronic",
    "The Krasue",
    "The First",
    "The Slasher"
]);

const manualEliminationScreenEffects = new Map([
    ["The Trapper", "playTrapperBearTrapJaw"],
    ["The Wraith", "playWraithEmberVeil"],
    ["The Hillbilly", "playHillbillySpringBlur"],
    ["The Nurse", "playNurseTeleportSmear"],
    ["The Hag", "playHagMudSinkNoBrown"],
    ["The Doctor", "playDoctorHallucinationCopies"],
    ["The Huntress", "playHuntressMusicNotesRedSlash"],
    ["The Nightmare", "playNightmareDreamMelt"],
    ["The Pig", "playPigTimerSnap"],
    ["The Clown", "playClownFastPopThrow"],
    ["The Spirit", "playSpiritPhaseSplit"],
    ["The Legion", "playLegionFourFrenzySlashes"],
    ["The Plague", "playPlagueEmberCurtain"],
    ["The Ghost Face", "playGhostfaceNewestPhotoEvidence"],
    ["The Demogorgon", "playDemogorgonPounceSnap"],
    ["The Oni", "playOniBloodOrbBurst"],
    ["The Deathslinger", "playDeathslingerHardImpactReel"],
    ["The Blight", "playBlightHeavySerumBurst"],
    ["The Trickster", "playTricksterStageNeonPulse"],
    ["The Nemesis", "playNemesisTentacleStrike"],
    ["The Cenobite", "playCenobiteAbyssHaze"],
    ["The Artist", "playArtistBlackFeatherRush"],
    ["The Onryo", "playOnryoHairCurtainBlackout"],
    ["The Dredge", "playDredgeNightfallVoidSmother"],
    ["The Knight", "playKnightGuardFogRise"],
    ["The Skull Merchant", "playSkullMerchantTargetPingSequence"],
    ["The Singularity", "playSingularityCyanTrackWhiteConfirm"],
    ["The Xenomorph", "playXenomorphPredatorVenomFade"],
    ["The Good Guy", "playGoodGuyHideyHoPanicCut"],
    ["The Unknown", "unknown"],
    ["The Mastermind", "playMastermindVirulentCorruptionExit"],
    ["The Twins", "playTwinsSplitFlopRuin"],
    ["The Executioner", "playExecutionerOppressiveRiseStrike"],
    ["The Cannibal", "playCannibalChainsawPressure"],
    ["The Shape", "playShapeQuietStalkVanish"],
    ["The Lich", "playLichEldritchNebulaEnd"],
    ["The Dark Lord", "playDarkLordVampireEclipse"],
    ["The Houndmaster", "playHoundmasterBloodScentPull"],
    ["The Ghoul", "playGhoulCarnageStain"],
    ["The Animatronic", "playAnimatronicStageScareBurst"],
    ["The Krasue", "playKrasueDistortSplitDrop"],
    ["The First", "playFirstScarletPoolOblivion"],
    ["The Slasher", "playSlasherFinalSceneEnd"]
]);

const hoverSpookMessages = new Map([
    ["The Shape", "He has been watching you too.. Before you even opened the game."],
    ["The Ghost Face", "Smile. He wants to take another screenshot of your pretty face."],
    ["The Unknown", "Stop looking. It noticed."],
    ["The Doctor", "That thought was not yours."],
    ["The Onryo", "Seven days."],
    ["The Skull Merchant", "The drone saw your browser history."],
    ["The Cenobite", "He came."],
    ["OtzDarva", "A 39-minute explanation has spawned."],
    ["The Nightmare", "You are still asleep. The game just hasn't told you yet."],
    ["The Mastermind", "Seven seconds. Seven seconds is what you spent hovering me."],
    ["The Singularity", "It scanned you and found mostly bad decisions."],
    ["The Trickster", "Staring is not mutual."],
    ["The Oni", "He wants to know how your blood type tastes.."],
    ["The Dredge", "The locker opened half an inch. Close it."],
    ["Dwight Fairfield", "He's asking if you wanna join him in the locker."],
    ["Meg Thomas", "She is about to Sprint Burst directly into your house."],
    ["Claudette Morel", "Did you see something moving in the bush?"],
    ["Adam Francis", "Deliverance value."],
    ["Jeff Johansen", "He came back with a tattoo and a grudge. Not THE GRUDGE.. wrong movie.."],
    ["Yun-Jin Lee", "Did you restore her because the trial needed better PR?"],
    ["Yoichi Asakawa", "He survived the tape. Now he has to survive your decision-making. Take that cursor away from him."],
    ["Rebecca Chambers", "She can heal wounds. She cannot fix whatever this is. Stop hovering her already."],
    ["Nicolas Cage", "He came back for the sequel nobody was ready for.. or asked for.."],
    ["Ellen Ripley", "She came back because aliens were somehow less annoying than you."],
    ["Alan Wake", "The manuscript edited him back in. Are you the editor? Astronaut? Lawyer? Johnny..?"],
    ["Sable Ward", "Stop putting your mouse there.. You know goth girls get easily attached.."],
    ["Taurie Cain", "She came back like the Entity forgot to lock the door.. or did they.."],
    ["Michonne Grimes", "She restored herself. You were just nearby. Conviction value."],
    ["Laurie Strode", "She survived babysitting in Haddonfield. Your cursor is not the scariest thing she's seen."],
    ["William \"Bill\" Overbeck", "Are you checking for pulse? Don't worry, old man's still got it. He just breathes funny. It's the cigarettes.."],
    ["Trevor Belmont", "Did you smell whiskey, monster blood, and unresolved family trauma.. or why are you hovering him for so long?"]
]);

const portraitSpookMessages = new Map([
    ["The Pig", "Boop denied. Reverse Bear Trap approved."],
    ["The Shape", "He does not blink."],
    ["The Ghost Face", "He liked one of your old posts."],
    ["The Good Guy", "Stop clicking. He can reach the mouse. He bit the cursor."],
    ["The Dredge", "Something inside the locker knocked back."],
    ["The Legion", "Four people just said 'ew' at once."],
    ["The Clown", "Do not tap the glass. He likes that."],
    ["The Plague", "You clicked her. Wash the mouse."],
    ["The Xenomorph", "It heard the click. Start running."],
    ["The Blight", "You clicked him and he bounced into a wall anyways. No chase for you."],
    ["The Executioner", "Watch your hand placement."],
    ["Dwight Fairfield", "You can stop. He won't come out of the locker.. or the closet.."],
    ["Ace Visconti", "He bet against your click and somehow won."],
    ["William \"Bill\" Overbeck", "You clicked him and he coughed up a perk. Yes. I meant it like that."],
    ["Claudette Morel", "You clicked her bush. -I uh... I mean like the bush she was hiding in. Forget it. Don't click it again.."],
    ["David King", "You clicked him and now he's trying to fistfight the interface."],
    ["Nancy Wheeler", "Don't click her.. She might add you to the conspiracy board."],
    ["Leon S. Kennedy", "You clicked him and he fumbled with government-issued confidence. Are you Ada Wong?"],
    ["Ada Wong", "I would also click her if I could. I don't blame you."],
    ["Rebecca Chambers", "You clicked her and received a medical diagnosis: dumbass."],
    ["Sable Ward", "I wish you knew how many times she got clicked on by the creator of this website as well. Both pictures and videos."],
    ["Trevor Belmont", "Don't click him, he's hungover."]
]);

const restoreSpookMessages = new Map([
    ["The Ghost Face", "He took a screenshot. It's going in the private album."],
    ["The Shape", "He was waiting for you to do that.."],
    ["The Pig", "The trap timer stopped when you made eye contact."],
    ["The Skull Merchant", "The drone scanned your device and said you needed more RAM."],
    ["The Dredge", "The locker is wet. Do not ask why."],
    ["The Huntress", "The lullaby stopped. That means she's close, or happy.. or.. both?"],
    ["The Clown", "He offered you a bottle, but it's not FDA approved."],
    ["The Artist", "The crows brought receipts."],
    ["The Oni", "The blood trail led him right back."],
    ["The Blight", "MomoSeventh would be proud!"],
    ["The Good Guy", "He came back shorter and angrier."],
    ["Nicolas Cage", "Why is he back? Did we forget his paycheck?"],
    ["Sable Ward", "The basement spit her back out. Even it needed a break. I don't though, hand her over next time."],
    ["Ace Visconti", "He scammed elimination and cashed out."],
    ["Quentin Smith", "He woke up. Unfortunately."],
    ["Jake Park", "You brought him back.. the hooks are already shaking."],
    ["Dwight Fairfield", "Finally.. Someone made him come out of the clos- I mean elimination bracket.. thing.. or something.. Whatever."],
    ["William \"Bill\" Overbeck", "The entity gave him back. Probably because he kept smoking indoors."],
    ["Ashley J. Williams", "He came back! Aaaand still has only one hand.. You'll help him out, right?"],
    ["Yun-Jin Lee", "She would've uneliminated herself anyways, because dying tested poorly with the target demographic."],
    ["Ada Wong", "It's cute if you think YOU were the one restoring her.."],
    ["Rebecca Chambers", "Was she hiding from Wesker again? Or did you actually eliminate her..?"],
    ["Vittorio Toscano", "Did you restore him because centuries of suffering apparently weren't enough?"],
    ["Mikaela Reid", "Do you think she wanted to come back to look for Sable? I think their friendship.. thing.. is one-sided.."],
    ["Alan Wake", "The manuscript edited him back in, probably out of spite."],
    ["Lara Croft", "Is she still looking for that cursed relic or something? Women want only one thing and it's disgusting.."],
    ["Trevor Belmont", "Did you promise him Whiskey or why is he back again?"]
]);
function aliasMatchesForQuery(query) {
    if (!query || query.length < 2) return new Set();
    const matches = new Set();
    searchAliasGroups.forEach(group => {
        const exactOnly = group.aliases.includes("goat") || group.aliases.includes("goats");
        const hasMatch = exactOnly
            ? group.aliases.includes(query)
            : group.aliases.some(alias => alias.startsWith(query) || query.startsWith(alias));
        if (hasMatch) {
            group.names.forEach(name => matches.add(name));
        }
    });
    return matches;
}

function regularCharacterMatchesSearch(character, query, aliasMatches = aliasMatchesForQuery(query)) {
    if (!query) return true;
    const name = normalized(character.name);
    return !character.bonusSearchOnly && (name.includes(query) || aliasMatches.has(name));
}

function characterMatchesSearch(character, query, aliasMatches = aliasMatchesForQuery(query), regularMatchesExist = false) {
    if (!query) return true;
    const name = normalized(character.name);
    if (!character.bonusSearchOnly) return regularCharacterMatchesSearch(character, query, aliasMatches);
    if (query === "goat" || query === "goats" || query === name || aliasMatches.has(name)) return true;
    if (regularMatchesExist) return false;
    return query.length >= 2 && (name.includes(query) || "goat".startsWith(query) || "goats".startsWith(query));
}

function characterVisibleForSearch(character, query, aliasMatches = aliasMatchesForQuery(query), regularMatchesExist = false) {
    if (character.bonusSearchOnly && !query) return false;
    return !character.bonusSearchOnly || characterMatchesSearch(character, query, aliasMatches, regularMatchesExist);
}

function clearCharacterSearch(options = {}) {
    const { focus = false, renderBoard = false } = options;
    searchQuery = "";
    if (els.searchInput) {
        els.searchInput.value = "";
        els.searchInput.setAttribute("aria-expanded", "false");
        if (focus) els.searchInput.focus();
    }
    if (els.searchSuggestions) {
        els.searchSuggestions.innerHTML = "";
        els.searchSuggestions.hidden = true;
    }
    if (els.searchClearBtn) els.searchClearBtn.hidden = true;
    if (renderBoard) render();
}

function isDaddyMommyQuery(query) {
    return ["daddy", "mommy", "papi", "mami"].includes(normalized(query));
}

function shouldShowEasterEggPopup() {
    return Math.random() < EASTER_EGG_POPUP_CHANCE;
}

function launchEyebrowBurst() {
    const count = 6;
    Array.from({ length: count }, (_, index) => {
        const emoji = document.createElement("span");
        emoji.className = "eyebrow-fly";
        emoji.textContent = String.fromCodePoint(0x1F928);
        emoji.style.setProperty("--start-y", `${8 + Math.random() * 74}vh`);
        emoji.style.setProperty("--end-y", `${-28 + Math.random() * 56}vh`);
        emoji.style.setProperty("--spin", `${(Math.random() > .5 ? 1 : -1) * (240 + Math.random() * 500)}deg`);
        emoji.style.setProperty("--delay", `${index * .045}s`);
        emoji.style.setProperty("--speed", `${4.2 + Math.random() * 1.4}s`);
        emoji.style.setProperty("--size", `${1.4 + Math.random() * 1.35}rem`);
        document.body.appendChild(emoji);
        window.setTimeout(() => emoji.remove(), 7200);
    });
}

function maybeLaunchEyebrowBurst(query) {
    const normalizedQuery = normalized(query);
    if (isDaddyMommyQuery(normalizedQuery) && normalizedQuery !== lastEyebrowBurstQuery) {
        lastEyebrowBurstQuery = normalizedQuery;
        if (shouldShowEasterEggPopup()) launchEyebrowBurst();
        return;
    }
    if (!isDaddyMommyQuery(normalizedQuery)) {
        lastEyebrowBurstQuery = "";
    }
}
function playEntityWatching(message = "The Entity is watching...", variant = "entity") {
    window.clearTimeout(entityWatchTimer);
    document.querySelector(".entity-watch")?.remove();
    const overlay = document.createElement("div");
    overlay.className = `entity-watch entity-watch--${variant}`;
    const watchDuration = variant === "warning" ? 2000 : variant === "taunt" ? 1900 : 2720;
    overlay.style.setProperty("--entity-watch-duration", `${watchDuration}ms`);
    overlay.textContent = message;
    document.body.appendChild(overlay);
    document.body.classList.add("entity-watch-active");
    entityWatchTimer = window.setTimeout(() => {
        overlay.remove();
        document.body.classList.remove("entity-watch-active");
    }, watchDuration);
}

function showEntityWatching(message = "The Entity is watching...", variant = "entity", force = false) {
    if (!force && !shouldShowEasterEggPopup()) return false;
    if (els.resultDialog?.open) {
        queuedEntityWatchMessage = { message, variant };
        return true;
    }
    playEntityWatching(message, variant);
    return true;
}

function flushQueuedEntityWatching() {
    if (!queuedEntityWatchMessage) return;
    const { message, variant } = queuedEntityWatchMessage;
    queuedEntityWatchMessage = null;
    window.setTimeout(() => playEntityWatching(message, variant), 120);
}

function maybeShowInitialEntityWatching() {
    if (initialEntityWatchChecked) return;
    initialEntityWatchChecked = true;
    if (Math.random() < 0.04) {
        window.setTimeout(() => showEntityWatching("The Entity is watching...", "entity", true), 450);
    }
}

function trackManualEliminateClick(character) {
    if (!character) return;
    const count = (manualEliminateClickCounts.get(character.id) || 0) + 1;
    manualEliminateClickCounts.set(character.id, count);
}

function activeBoardCharacters() {
    return characters.filter(c => !c.bonusSearchOnly);
}

function boardCounts() {
    const remaining = activeBoardCharacters().filter(c => !c.eliminated);
    return {
        total: remaining.length,
        killers: remaining.filter(c => c.role === "killer").length,
        survivors: remaining.filter(c => c.role === "survivor").length,
        last: remaining[0] || null
    };
}

function syncBoardFilterLabel() {
    boardFilter = statusFilter || roleFilter || "all";
}

function resetBoardFilters() {
    statusFilter = null;
    roleFilter = null;
    syncBoardFilterLabel();
}

function toggleStatusFilter(filter) {
    statusFilter = statusFilter === filter ? null : filter;
    syncBoardFilterLabel();
}

function toggleRoleFilter(filter) {
    roleFilter = roleFilter === filter ? null : filter;
    syncBoardFilterLabel();
}

function maybeAutoSwitchToRemainingAfterElimination(count = 1) {
    if (!count || count <= 0 || autoSwitchedToRemainingThisGame) return;
    if (!statusFilter && !roleFilter) {
        statusFilter = "standing";
        syncBoardFilterLabel();
    }
    autoSwitchedToRemainingThisGame = true;
}

function maybeShowBoardWarnings(before, after) {
    return false;
}

function showWrongGuessStreakMessage() {
    const messages = {
        2: "This is becoming a solo queue moment.",
        3: "Hex: Common Sense has been cleansed.",
        4: "The killer has stopped chasing to watch this.",
        5: "At this point, even Sable is confused."
    };
    if (messages[wrongGuessStreak]) showEntityWatching(messages[wrongGuessStreak], "taunt");
}
function formatQuestionCount(count) {
    if (count === 2) return "Two Questions Left Until Hard Mode";
    if (count === 1) return "One Question Left Until Hard Mode";
    if (count <= 0) return "No Questions Left Until Hard Mode";
    return `${count} Questions Left Until Hard Mode`;
}

function repairText(value) {
    return String(value ?? "")
        .replaceAll("\u00c3\u2030", "E")
        .replaceAll("\u00c3\u00a2", "\u00e2")
        .replaceAll("\u00c3\u00b4", "\u00f4")
        .replaceAll("\u00c5\u008d", "\u014d")
        .replaceAll("\u00c3\u00bc", "\u00fc")
        .replaceAll("\u00c3\u00a9", "\u00e9")
        .replaceAll("\u00c3\u00a8", "\u00e8")
        .replaceAll("\u00c3\u00a1", "\u00e1")
        .replaceAll("\u00c3\u00ad", "\u00ed")
        .replaceAll("\u00c3\u00b3", "\u00f3")
        .replaceAll("\u00c3\u00ba", "\u00fa")
        .replaceAll("\u00c3\u00b1", "\u00f1")
        .replaceAll("\u00c3\u00a7", "\u00e7");
}

function escapeHtml(value) {
    return repairText(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function displayPerk(perk) {
    return repairText(perk)
        .replace(/^Scourge Hook:\s*/i, "SH: ")
        .replace(/^Teamwork:\s*/i, "TW: ")
        .replace(/^Invocation:\s*/i, "INV: ")
        .replace(/^Boon:\s*/i, "Boon: ")
        .replace(/^Hex:\s*/i, "Hex: ");
}

const perkDetailCache = new Map();
const wikiApiBase = "https://deadbydaylight.wiki.gg/api.php";

function getPerkOwner(perk) {
    const key = normalized(repairText(perk));
    return characters.find(character => (character.perks || []).some(item => normalized(item) === key));
}

function perkWikiTitle(perk) {
    return repairText(perk).replace(/\s+/g, "_");
}

function perkFileName(perk) {
    const safe = repairText(perk)
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-zA-Z0-9]+/g, " ")
        .trim()
        .split(/\s+/)
        .filter(Boolean);
    if (!safe.length) return "";
    return "IconPerks_" + safe.map((word, index) => {
        const lower = word.toLowerCase();
        return index === 0 ? lower : lower.charAt(0).toUpperCase() + lower.slice(1);
    }).join("") + ".png";
}

function absoluteWikiUrl(src) {
    if (!src) return "";
    if (src.startsWith("//")) return "https:" + src;
    if (src.startsWith("/")) return "https://deadbydaylight.wiki.gg" + src;
    return src;
}

function iconSignature(img) {
    const raw = img.getAttribute("src") || img.getAttribute("alt") || "";
    const decoded = decodeURIComponent(raw)
        .replace(/\'.*$/, "")
        .replace(/\/revision\/latest.*$/i, "")
        .split("/")
        .pop()
        .toLowerCase();
    return decoded
        .replace(/^\d+px-/, "")
        .replace(/^thumb-/, "")
        .replace(/\.webp$/, ".png");
}

function removeIconNode(img) {
    const wrapper = img.parentElement;
    if (wrapper && wrapper.tagName === "SPAN" && wrapper.children.length === 1 && !(wrapper.textContent || "").trim()) {
        wrapper.remove();
        return;
    }
    img.remove();
}

function dedupeInlineIcons(root) {
    root.querySelectorAll("p, li").forEach(line => {
        const seen = new Set();
        [...line.querySelectorAll("img")].forEach(img => {
            const signature = iconSignature(img);
            if (!signature) return;
            if (seen.has(signature)) {
                removeIconNode(img);
                return;
            }
            seen.add(signature);
        });
    });

    root.querySelectorAll("img").forEach(img => {
        const signature = iconSignature(img);
        if (!signature) return;
        let next = img.nextSibling;
        while (next && next.nodeType === Node.TEXT_NODE && !next.textContent.trim()) next = next.nextSibling;
        while (next?.nodeType === Node.ELEMENT_NODE) {
            const nextImg = next.tagName === "IMG" ? next : next.querySelector?.("img:only-child");
            if (!nextImg || iconSignature(nextImg) !== signature) break;
            const duplicate = next;
            next = duplicate.nextSibling;
            duplicate.remove();
            while (next && next.nodeType === Node.TEXT_NODE && !next.textContent.trim()) next = next.nextSibling;
        }
    });
}
const perkIconFileOverrides = new Map([
    [normalized("Coup de Grâce"), "IconPerks coupDeGrâce.png"],
    [normalized("Hex: Hive Mind"), "IconsPerks HexHiveMind.png"],
    [normalized("Secret Project"), "IconsPerks SecretProject.png"],
    [normalized("Turn Back the Clock"), "IconsPerks TurnBackTheClock.png"],
    [normalized("Hex: Scared to Death"), "T UI iconsPerks ScaredToDeath.png"],
    [normalized("Rampage"), "T UI iconsPerks Rampage.png"],
    [normalized("Silent Shadow"), "T UI iconsPerks SilentShadow.png"]
]);

function perkIconFile(perk) {
    return perkIconFileOverrides.get(normalized(repairText(perk))) || perkFileName(perk);
}

function isPerkIconImage(img) {
    const signature = `${img.getAttribute("alt") || ""} ${img.getAttribute("src") || ""}`.toLowerCase();
    return signature.includes("iconsperks") || signature.includes("iconperks") || signature.includes("icons_perks");
}

function findPerkIconImage(doc) {
    const mainIcon = doc.querySelector(".perkIconImage img");
    if (mainIcon) return mainIcon;
    return [...doc.querySelectorAll("img")].find(isPerkIconImage);
}

function fallbackPerkIcon(perk, owner) {
    if (owner?.bonusSearchOnly) return "";
    const fileName = perkIconFile(perk);
    return fileName ? "https://deadbydaylight.wiki.gg/wiki/Special:Redirect/file/" + encodeURIComponent(fileName) : "";
}

function cleanPerkHtml(fragment) {
    const box = document.createElement("div");
    box.innerHTML = fragment || "";
    box.querySelectorAll("script, style, iframe, object, embed, table, video, audio, .mw-editsection, .reference, .plainlinks").forEach(node => node.remove());
    box.querySelectorAll("a").forEach(link => {
        const span = document.createElement("span");
        span.innerHTML = link.innerHTML;
        link.replaceWith(span);
    });
    box.querySelectorAll("img").forEach(img => {
        img.src = absoluteWikiUrl(img.getAttribute("src") || "");
        img.removeAttribute("srcset");
        img.removeAttribute("loading");
        img.removeAttribute("decoding");
    });
    dedupeInlineIcons(box);
    box.querySelectorAll("*").forEach(node => {
        [...node.attributes].forEach(attr => {
            const keep = (node.tagName === "IMG" && ["src", "alt", "width", "height"].includes(attr.name))
                || (attr.name === "style" && /color\s*:/.test(attr.value));
            if (!keep) node.removeAttribute(attr.name);
        });
    });
    return box.innerHTML.trim();
}

function extractPerkDetails(perk, html) {
    const doc = new DOMParser().parseFromString(html, "text/html");
    const owner = getPerkOwner(perk);
    const icon = findPerkIconImage(doc);
    const desc = doc.querySelector(".perkDesc");
    return {
        name: repairText(perk),
        owner,
        icon: absoluteWikiUrl(icon?.getAttribute("src") || "") || fallbackPerkIcon(perk, owner),
        description: cleanPerkHtml(desc?.innerHTML || "")
    };
}

function loadPerkDetails(perk) {
    const key = repairText(perk);
    if (perkDetailCache.has(key)) return Promise.resolve(perkDetailCache.get(key));

    return new Promise((resolve, reject) => {
        const callbackName = "__dbdPerk" + Date.now() + Math.random().toString(36).slice(2);
        const script = document.createElement("script");
        const cleanup = () => {
            script.remove();
            delete window[callbackName];
        };
        window[callbackName] = data => {
            cleanup();
            if (data?.error) {
                reject(new Error(data.error.info || "Could not load perk."));
                return;
            }
            const details = extractPerkDetails(key, data?.parse?.text?.["*"] || "");
            perkDetailCache.set(key, details);
            resolve(details);
        };
        script.onerror = () => {
            cleanup();
            reject(new Error("Could not reach the wiki."));
        };
        script.src = wikiApiBase
            + "?action=parse&page=" + encodeURIComponent(perkWikiTitle(key))
            + "&format=json&prop=text&callback=" + encodeURIComponent(callbackName);
        document.head.appendChild(script);
    });
}

function fallbackPerkText(perk, owner) {
    if (owner?.bonusSearchOnly) return `${perk} is a custom community perk for ${owner.name}.`;
    if (owner) return `${perk} is one of ${owner.name}'s character perks.`;
    return `${perk} is a Dead by Daylight perk.`;
}

function renderPerkDetails(details, loading = false) {
    const name = repairText(details.name);
    const owner = details.owner || getPerkOwner(name);
    const icon = details.icon || fallbackPerkIcon(name, owner);
    const fallbackLetters = owner?.bonusSearchOnly ? "" : escapeHtml(name.slice(0, 2).toUpperCase());
    const description = details.description || `<p>${escapeHtml(fallbackPerkText(name, owner))}</p>`;
    const iconHtml = icon
        ? `<img src="${escapeHtml(icon)}" alt="${escapeHtml(name)} icon" onerror="this.hidden=true; this.nextElementSibling.hidden=false;">`
        : "";
    const loadingText = loading ? '<div class="perk-detail-loading">Loading official perk text...</div>' : "";
    const iconMaskStyle = icon ? ` style="--perk-icon-mask: url(\'${escapeHtml(icon)}\')"` : "";
    return `<div class="perk-detail-card ${perkOwnerGenderClass(owner)}">
        <div class="perk-detail-icon-wrap"${iconMaskStyle}>
            <div class="perk-tier-aura" aria-hidden="true"></div>
            ${iconHtml}<div class="perk-icon-fallback" ${icon ? "hidden" : ""}>${fallbackLetters}</div>
        </div>
        <div class="perk-detail-copy">
            <h3>${escapeHtml(name)}</h3>
            <div class="official-perk-text">${description}</div>
            ${loadingText}
        </div>
    </div>`;
}

function ensurePerkOverlay() {
    let overlay = document.querySelector("#perkOverlay");
    if (overlay) return overlay;
    overlay = document.createElement("div");
    overlay.id = "perkOverlay";
    overlay.className = "perk-overlay";
    overlay.hidden = true;
    overlay.innerHTML = `<div class="perk-window" role="dialog" aria-modal="true" aria-labelledby="perkOverlayTitle">
        <div class="panel-head perk-dialog-head">
            <h2 id="perkOverlayTitle">Perk</h2>
            <button class="chip perk-close" type="button" aria-label="Close perk popup">Close</button>
        </div>
        <div id="perkOverlayText" class="perk-dialog-text"></div>
    </div>`;
    overlay.addEventListener("pointerdown", event => {
        if (event.target === overlay || event.target.closest(".perk-close")) {
            closePerkOverlay();
        }
    });
    document.body.appendChild(overlay);
    return overlay;
}

function closePerkOverlay() {
    const overlay = document.querySelector("#perkOverlay");
    if (overlay) overlay.hidden = true;
    activePerkAnchor = null;
    activePerkName = "";
}

function closePerkOverlayOnOutsidePress(event) {
    const overlay = document.querySelector("#perkOverlay");
    if (!overlay || overlay.hidden) return;
    if (event.target.closest?.(".perk-window") || event.target.closest?.(".perk-chip")) return;
    closePerkOverlay();
}
function repositionActivePerkOverlay() {
    const overlay = document.querySelector("#perkOverlay");
    if (!overlay || overlay.hidden || !activePerkAnchor) return;
    positionPerkOverlay(overlay, activePerkAnchor);
}

function positionPerkOverlay(overlay, anchor) {
    const windowBox = overlay.querySelector(".perk-window");
    if (!anchor || !windowBox) return;
    const rect = anchor.getBoundingClientRect();
    const cardRect = anchor.closest(".card")?.getBoundingClientRect();
    const isPhone = Math.min(window.innerWidth || 0, document.documentElement?.clientWidth || window.innerWidth || 0) <= 760;
    const gap = 8;
    const viewportWidth = Math.min(window.innerWidth || 0, document.documentElement?.clientWidth || window.innerWidth || 0);
    const edge = isPhone ? 6 : 10;
    const phoneBaseWidth = cardRect?.width ? cardRect.width + 12 : viewportWidth - edge * 2;
    const width = isPhone
        ? Math.max(240, Math.min(phoneBaseWidth, viewportWidth - edge * 2))
        : Math.min(378, viewportWidth - edge * 2);
    const preferredLeft = isPhone
        ? (viewportWidth - width) / 2
        : rect.left + rect.width / 2 - width / 2;
    const left = Math.max(edge, Math.min(preferredLeft, viewportWidth - width - edge));
    const below = rect.bottom + gap;
    const above = rect.top - gap;
    const stickyControls = document.querySelector(".controls")?.getBoundingClientRect();
    const topLimit = !isPhone && stickyControls ? stickyControls.bottom + gap : edge;
    windowBox.style.setProperty("width", width + "px", "important");
    windowBox.style.setProperty("max-width", width + "px", "important");
    windowBox.style.left = left + "px";
    const measuredHeight = windowBox.getBoundingClientRect().height || windowBox.offsetHeight || 190;
    const height = Math.min(measuredHeight, window.innerHeight - edge * 2);
    let top;
    if (isPhone) {
        top = below + height < window.innerHeight ? below : Math.max(edge, above - height);
    } else {
        top = above - height >= topLimit ? above - height : Math.min(Math.max(below, topLimit), window.innerHeight - height - edge);
    }
    windowBox.style.top = top + "px";
}
function setPerkOverlayContent(details, loading = false, anchor = activePerkAnchor) {
    const overlay = ensurePerkOverlay();
    const owner = details.owner || getPerkOwner(details.name);
    const genderClass = perkOwnerGenderClass(owner);
    overlay.querySelector("#perkOverlayTitle").textContent = repairText(details.name);
    overlay.querySelector("#perkOverlayText").innerHTML = renderPerkDetails(details, loading);
    const windowBox = overlay.querySelector(".perk-window");
    if (windowBox) {
        windowBox.classList.remove("perk-owner-female", "perk-owner-male", "perk-owner-both", "perk-owner-unknown");
        windowBox.classList.add(genderClass);
    }
    overlay.hidden = false;
    positionPerkOverlay(overlay, anchor);
}

let activePerkAnchor = null;
let activePerkName = "";
let lastPerkPointerAt = 0;
function openPerkDialog(perk, event, anchor) {
    if (!perk) return false;
    const clickedAnchor = anchor || event?.currentTarget || event?.target?.closest?.(".perk-chip") || activePerkAnchor;
    const eventType = event?.type || "";
    if (eventType === "pointerdown") lastPerkPointerAt = Date.now();
    if (eventType === "click" && Date.now() - lastPerkPointerAt < 450) return false;

    const name = repairText(perk);
    const overlay = document.querySelector("#perkOverlay");
    if (overlay && !overlay.hidden && activePerkAnchor === clickedAnchor && activePerkName === name) {
        closePerkOverlay();
        return false;
    }

    activePerkAnchor = clickedAnchor;
    activePerkName = name;
    const owner = getPerkOwner(name);
    setPerkOverlayContent({ name, owner, icon: fallbackPerkIcon(name, owner), description: "" }, true, activePerkAnchor);
    if (!owner?.bonusSearchOnly) {
        loadPerkDetails(name)
            .then(details => setPerkOverlayContent(details, false, activePerkAnchor))
            .catch(() => setPerkOverlayContent({ name, owner, icon: fallbackPerkIcon(name, owner), description: "" }, false, activePerkAnchor));
    }
    return false;
}
window.openPerkDialog = openPerkDialog;
function handlePerkPress(event) {
    const perkButton = event.target.closest(".perk-chip");
    if (!perkButton) return;
    event.preventDefault();
    event.stopPropagation();
    openPerkDialog(perkButton.dataset.perk, event, perkButton);
}

function perkOwnerGenderClass(owner) {
    if (!owner) return "perk-owner-unknown";
    if (owner.gender === "female") return "perk-owner-female";
    if (owner.gender === "male") return "perk-owner-male";
    if (owner.gender === "both") return "perk-owner-both";
    return "perk-owner-unknown";
}

function renderPerkButton(perk) {
    const value = escapeHtml(perk);
    const owner = getPerkOwner(perk);
    const genderClass = perkOwnerGenderClass(owner);
    return '<button class="perk-chip ' + genderClass + '" type="button" data-action="perk" data-perk="' + value + '" title="' + value + '" onpointerdown="return window.openPerkDialog(this.dataset.perk, event, this)" onclick="return window.openPerkDialog(this.dataset.perk, event, this)">' + escapeHtml(displayPerk(perk)) + '</button>';
}
function renderFromValue(character) {
    if (!character.twitchUrl) return `<span>${escapeHtml(character.license)}</span>`;
    return `<span><a class="twitch-from-link" href="${escapeHtml(character.twitchUrl)}" target="_blank" rel="noopener noreferrer" title="Open ${escapeHtml(character.name)} on Twitch">${escapeHtml(character.license)}</a></span>`;
}

function displayHairTag(tag) {
    tag = repairText(tag);
    const text = normalized(tag);
    if (text === "bald") return "Bald";
    if (text === "black") return "Black hair";
    if (text === "brunette") return "Brown hair";
    if (text === "blonde") return "Blonde hair";
    if (text === "ginger") return "Ginger hair";
    if (text === "dyed") return "Dyed hair";
    if (text === "purple") return "Purple hair";
    if (text === "notclear") return "Not clear";
    if (text === "white") return "White hair";
    return String(tag || "");
}

function initials(name) {
    return name
        .replace(/^The\s+/i, "")
        .replace(/[".]/g, "")
        .split(/\s+/)
        .slice(0, 2)
        .map(part => part[0])
        .join("")
        .toUpperCase();
}

function chooseTarget(excludeId = null) {
    const playableCharacters = characters.filter(character => !character.bonusSearchOnly);
    const pool = playableCharacters.filter(character => character.id !== excludeId);
    const choices = pool.length ? pool : playableCharacters;
    target = choices[Math.floor(Math.random() * choices.length)];
}

function captureTargetRollState() {
    return {
        targetId: target?.id ?? null,
        targetRevealed: Boolean(targetRevealed),
        targetRevealLabel: targetRevealLabel || "Your Pick",
        targetLoreOpen: Boolean(targetLoreOpen),
        targetMinimized: Boolean(targetMinimized)
    };
}

function normalizeTargetRollState(snapshot) {
    return {
        targetId: snapshot?.targetId ?? null,
        targetRevealed: Boolean(snapshot?.targetRevealed),
        targetRevealLabel: snapshot?.targetRevealLabel || "Your Pick",
        targetLoreOpen: Boolean(snapshot?.targetLoreOpen),
        targetMinimized: Boolean(snapshot?.targetMinimized)
    };
}

function targetRollStatesEqual(a, b) {
    const left = normalizeTargetRollState(a);
    const right = normalizeTargetRollState(b);
    return left.targetId === right.targetId
        && left.targetRevealed === right.targetRevealed
        && left.targetRevealLabel === right.targetRevealLabel
        && left.targetLoreOpen === right.targetLoreOpen
        && left.targetMinimized === right.targetMinimized;
}

function targetRollCoreStatesEqual(a, b) {
    const left = normalizeTargetRollState(a);
    const right = normalizeTargetRollState(b);
    return left.targetId === right.targetId
        && left.targetRevealed === right.targetRevealed
        && left.targetRevealLabel === right.targetRevealLabel;
}

function restoreTargetRollState(snapshot) {
    const safeSnapshot = normalizeTargetRollState(snapshot);
    target = characters.find(character => character.id === safeSnapshot.targetId) || null;
    targetRevealed = Boolean(safeSnapshot.targetRevealed && target);
    targetRevealLabel = safeSnapshot.targetRevealLabel || "Your Pick";
    targetLoreOpen = Boolean(safeSnapshot.targetLoreOpen && targetRevealed);
    targetMinimized = Boolean(safeSnapshot.targetMinimized);
    revealTarget(targetRevealed, targetRevealLabel);
    if (!targetRevealed) renderTargetMinimized();
}

function historyArraysEqual(a = [], b = []) {
    if (!Array.isArray(a) || !Array.isArray(b) || a.length !== b.length) return false;
    return a.every((value, index) => value === b[index]);
}

function historySetsEqual(a = [], b = []) {
    const left = new Set(a || []);
    const right = new Set(b || []);
    if (left.size !== right.size) return false;
    for (const value of left) {
        if (!right.has(value)) return false;
    }
    return true;
}

function bulkGroupSnapshotsEqual(a = [], b = []) {
    const normalize = state => (state || [])
        .map(([key, ids]) => [key, [...(ids || [])].sort()])
        .sort(([leftKey], [rightKey]) => String(leftKey).localeCompare(String(rightKey)));
    return JSON.stringify(normalize(a)) === JSON.stringify(normalize(b));
}

function historyEntryIsTargetRollOnly(before, after) {
    if (!before || !after) return false;
    return !targetRollStatesEqual(before.target, after.target)
        && historyArraysEqual(before.eliminated, after.eliminated)
        && historyArraysEqual(before.solved || [], after.solved || [])
        && historySetsEqual(before.usedQuestionIds, after.usedQuestionIds)
        && historySetsEqual(before.permanentlyUsedManualQuestionIds, after.permanentlyUsedManualQuestionIds)
        && bulkGroupSnapshotsEqual(before.bulkGroupEliminatedIds, after.bulkGroupEliminatedIds)
        && before.guesses === after.guesses;
}

function restoreTargetForUndo(before, after, options = {}) {
    if (!before || !after || targetRollStatesEqual(before, after)) return;
    if (options.force || targetRollCoreStatesEqual(captureTargetRollState(), after)) restoreTargetRollState(before);
}

function restoreTargetForRedo(before, after, options = {}) {
    if (!before || !after || targetRollStatesEqual(before, after)) return;
    if (options.force || targetRollCoreStatesEqual(captureTargetRollState(), before)) restoreTargetRollState(after);
}

function rollManualCharacter() {
    saveHistory();
    const currentHistoryIndex = history.length - 1;
    chooseTarget(target?.id ?? null);
    targetLoreOpen = false;
    revealTarget(true, "Your Pick");
    addActionSummary(`Rolled ${target.name}.`, currentHistoryIndex);
    els.answerBox.innerHTML = `<strong class="picked-name">${escapeHtml(target.name)} picked.</strong>`;
    commitHistoryAfter(currentHistoryIndex);
    render();
}

function updateQuestionPlaceholderState() {
    els.questionSelect.classList.toggle("empty-question-placeholder", !els.questionSelect.value);
}

function questionHasRemainingTargets(question) {
    const remaining = playableCharacters.filter(character => !character.eliminated);
    if (!remaining.length) return false;
    const lowerLabel = question.label.toLowerCase();
    const remainingKillers = remaining.some(character => character.role === "killer");
    const remainingSurvivors = remaining.some(character => character.role === "survivor");
    const remainingLicensed = remaining.some(character => character.source === "licensed");
    const remainingOriginal = remaining.some(character => character.source !== "licensed");

    if (question.id === "isKiller") return remainingKillers && remainingSurvivors;
    if (question.id === "licensed") return remainingLicensed && remainingOriginal;
    if (question.id === "license") return remainingLicensed;
    if (question.id === "speed") return remainingKillers;
    if (lowerLabel.startsWith("(if killer)")) return remainingKillers;
    if (lowerLabel.startsWith("(if survivor)")) return remainingSurvivors;
    return true;
}

function setupQuestions(preserveSelection = false) {
    const unlocked = advancedQuestionsUnlocked();
    const customUnlocked = customQuestionUnlocked();
    const current = els.questionSelect.value;
    const sortByQuestionLength = (a, b) => {
        if (a.id === "ethnicity" && b.id === "hair") return -1;
        if (a.id === "hair" && b.id === "ethnicity") return 1;
        if (a.id === "animal" && b.id === "sideQuest") return -1;
        if (a.id === "sideQuest" && b.id === "animal") return 1;
        if (a.id === "rangedInjury" && b.id === "sideQuest") return -1;
        if (a.id === "sideQuest" && b.id === "rangedInjury") return 1;
        return b.label.length - a.label.length || a.label.localeCompare(b.label);
    };
    const advancedSortGroup = question => {
        const label = question.label.toLowerCase();
        if (label.startsWith("(if killer)")) return 0;
        if (label.startsWith("(if survivor)")) return 1;
        if (label.startsWith("(if licensed)")) return 2;
        return 3;
    };
    const sortAdvancedQuestions = (a, b) => {
        const groupDifference = advancedSortGroup(a) - advancedSortGroup(b);
        if (groupDifference) return groupDifference;
        return sortByQuestionLength(a, b);
    };
    const available = questions
        .filter(q => !usedQuestionIds.has(q.id) && !permanentlyUsedManualQuestionIds.has(q.id))
        .filter(q => unlocked ? q.tier === "advanced" : q.tier === "general")
        .filter(q => q.id !== "customYesNo" || customUnlocked)
        .filter(questionHasRemainingTargets)
        .sort(sortByQuestionLength);
    const baseQuestions = available.filter(q => q.tier === "general").sort(sortByQuestionLength);
    const advancedQuestions = available.filter(q => q.tier === "advanced").sort(sortAdvancedQuestions);
    const manualCrossOutQuestions = questions
        .filter(q => unlocked && manualCrossOutQuestionIds.has(q.id) && q.tier === "advanced")
        .filter(q => !usedQuestionIds.has(q.id) && !permanentlyUsedManualQuestionIds.has(q.id))
        .filter(questionHasRemainingTargets)
        .sort(sortAdvancedQuestions);
    const regularAdvancedQuestions = advancedQuestions
        .filter(q => !manualCrossOutQuestionIds.has(q.id))
        .sort(sortAdvancedQuestions);
    const displayQuestionLabel = question => question.label;
    const renderOptions = list => list.map(q => `<option value="${q.id}">${escapeHtml(displayQuestionLabel(q))}</option>`).join("");
    const renderManualOptions = list => list.map(q => {
        const locked = q.id === "customYesNo" && !customUnlocked;
        const label = locked ? `${displayQuestionLabel(q)} - locked until 5 hard-mode questions` : displayQuestionLabel(q);
        return `<option value="${q.id}"${locked ? " disabled class=\"custom-locked-option\"" : ""}>${escapeHtml(label)}</option>`;
    }).join("");
    const questionGroupClass = label => {
        const key = label.toLowerCase();
        if (key.includes("killer")) return "question-killer";
        if (key.includes("survivor")) return "question-survivor";
        if (key.includes("manual")) return "question-manual";
        if (key.includes("base")) return "question-base";
        return "question-general";
    };
    const renderQuestionGroup = (label, list, renderer = renderOptions) => list.length
        ? `<optgroup class="${questionGroupClass(label)}" label="${escapeHtml(label)}">${renderer(list)}</optgroup>`
        : "";
    const killerAdvancedQuestions = regularAdvancedQuestions.filter(q => advancedSortGroup(q) === 0);
    const survivorAdvancedQuestions = regularAdvancedQuestions.filter(q => advancedSortGroup(q) === 1);
    const generalAdvancedQuestions = regularAdvancedQuestions.filter(q => advancedSortGroup(q) >= 2).sort(sortByQuestionLength);
    const manualOptionsHtml = renderQuestionGroup("Manual Elimination", manualCrossOutQuestions, renderManualOptions);
    const questionOptionsHtml = unlocked
        ? `${manualOptionsHtml}${renderQuestionGroup("Killer Related", killerAdvancedQuestions)}${renderQuestionGroup("Survivor Related", survivorAdvancedQuestions)}${renderQuestionGroup("General Questions", generalAdvancedQuestions)}`
        : renderQuestionGroup("Easy Questions", baseQuestions);
    els.questionSelect.innerHTML = `<option value="" selected disabled hidden>Select a question</option>${questionOptionsHtml}`;
    if (preserveSelection && available.some(q => q.id === current)) {
        els.questionSelect.value = current;
    } else {
        els.questionSelect.value = "";
    }
    els.questionSelect.disabled = available.length === 0;
    const currentQuestion = getQuestion();
    roleQuestionActive = currentQuestion?.id === "isKiller";
    speedQuestionActive = currentQuestion?.id === "speed";
    licenseQuestionActive = currentQuestion?.id === "license";
    countryQuestionActive = currentQuestion?.id === "country";
    genderQuestionActive = currentQuestion?.id === "genderFemale";
    hairQuestionActive = currentQuestion?.id === "hair";
    ethnicityQuestionActive = currentQuestion?.id === "ethnicity";
    yearQuestionActive = currentQuestion?.id === "releasedAfter" || currentQuestion?.id === "releasedIn";
    els.detailInput.hidden = roleQuestionActive || speedQuestionActive || licenseQuestionActive || countryQuestionActive || genderQuestionActive || hairQuestionActive || ethnicityQuestionActive || yearQuestionActive;
    els.roleSelect.hidden = !roleQuestionActive;
    els.speedSelect.hidden = !speedQuestionActive;
    els.licenseSelect.hidden = !licenseQuestionActive;
    els.countrySelect.hidden = !countryQuestionActive;
    els.genderSelect.hidden = !genderQuestionActive;
    els.hairSelect.hidden = !hairQuestionActive;
    els.ethnicitySelect.hidden = !ethnicityQuestionActive;
    els.yearSelect.hidden = !yearQuestionActive;
    if (roleQuestionActive) {
        els.roleSelect.innerHTML = roleOptions.map(([value, label]) => `<option value="${value}">${label}</option>`).join("");
        els.roleSelect.value = els.roleSelect.value || roleOptions[0][0];
    }
    if (speedQuestionActive) {
        els.speedSelect.innerHTML = speedOptions.map(speed => `<option value="${speed}">${speed}</option>`).join("");
        els.speedSelect.value = els.speedSelect.value || speedOptions[0];
    }
    if (licenseQuestionActive) {
        els.licenseSelect.innerHTML = licenseOptions.map(([value, label]) => `<option value="${escapeHtml(value)}">${escapeHtml(label)}</option>`).join("");
        els.licenseSelect.value = els.licenseSelect.value || licenseOptions[0]?.[0] || "";
    }
    if (countryQuestionActive) {
        els.countrySelect.innerHTML = countryOptions.map(value => `<option value="${escapeHtml(value)}">${escapeHtml(value)}</option>`).join("");
        els.countrySelect.value = els.countrySelect.value || countryOptions[0] || "";
    }
    if (genderQuestionActive) {
        els.genderSelect.innerHTML = genderOptions.map(([value, label]) => `<option value="${value}">${label}</option>`).join("");
        els.genderSelect.value = els.genderSelect.value || genderOptions[0][0];
    }
    if (hairQuestionActive) {
        els.hairSelect.innerHTML = hairOptions.map(([value, label]) => `<option value="${value}">${label}</option>`).join("");
        els.hairSelect.value = els.hairSelect.value || hairOptions[0][0];
    }
    if (ethnicityQuestionActive) {
        els.ethnicitySelect.innerHTML = ethnicityOptions.map(([value, label]) => `<option value="${value}">${label}</option>`).join("");
        els.ethnicitySelect.value = els.ethnicitySelect.value || ethnicityOptions[0][0];
    }
    if (yearQuestionActive) {
        const options = currentQuestion?.id === "releasedIn" ? advancedYearOptions : baseYearOptions;
        els.yearSelect.innerHTML = options.map(([value, label]) => `<option value="${value}">${label}</option>`).join("");
        els.yearSelect.value = options.some(([value]) => value === els.yearSelect.value) ? els.yearSelect.value : options[0]?.[0] || "";
    }
    const hardModeLocked = unlocked && !hardModeCanBeToggled();
    els.skipBaseBtn.innerHTML = "Hard<br>Mode";
    els.skipBaseBtn.classList.toggle("active", unlocked);
    els.skipBaseBtn.classList.toggle("hard-mode-locked", hardModeLocked);
    els.skipBaseBtn.disabled = hardModeLocked;
    els.skipBaseBtn.setAttribute("aria-pressed", unlocked ? "true" : "false");
    els.skipBaseBtn.setAttribute("aria-disabled", hardModeLocked ? "true" : "false");
    els.skipBaseBtn.title = hardModeLocked ? "Hard Mode is active for this game." : "";
    updateCustomQuestionCounter();
    if (unlocked && !customUnlockAdvancedWasUnlocked) {
        autoShowCustomUnlockPopover();
    }
    customUnlockAdvancedWasUnlocked = unlocked;
    updateDetailPlaceholder();
    updateQuestionPlaceholderState();
}

function skipBaseQuestions() {
    if (gameOver) return;
    const hadSelectedQuestion = Boolean(els.questionSelect.value);
    if (baseSkipped && hardModeCanBeToggled()) {
        baseSkipped = false;
        customUnlockAdvancedWasUnlocked = false;
        closeCustomUnlockPopover();
    } else {
        baseSkipped = true;
    }
    setupQuestions(hadSelectedQuestion);
}

function updateDetailPlaceholder() {
    const question = getQuestion();
    els.detailInput.classList.toggle("no-question-selected", !question);
    const detailControls = [
        els.roleSelect,
        els.speedSelect,
        els.licenseSelect,
        els.countrySelect,
        els.genderSelect,
        els.hairSelect,
        els.ethnicitySelect,
        els.yearSelect
    ];
    const disableDetailControls = () => detailControls.forEach(control => control.disabled = true);
    if (!question) {
        els.detailInput.disabled = true;
        els.detailInput.placeholder = "No question selected";
        els.detailInput.value = "";
        disableDetailControls();
        return;
    }
    disableDetailControls();
    const activeSelect = question.usesRoleSelect
        ? els.roleSelect
        : question.usesSpeedSelect
            ? els.speedSelect
            : question.usesLicenseSelect
                ? els.licenseSelect
                : question.usesCountrySelect
                    ? els.countrySelect
                    : question.usesGenderSelect
                        ? els.genderSelect
                        : question.usesHairSelect
                            ? els.hairSelect
                            : question.usesEthnicitySelect
                                ? els.ethnicitySelect
                                : question.usesYearSelect
                                    ? els.yearSelect
                                    : null;
    if (activeSelect) {
        els.detailInput.disabled = true;
        els.detailInput.value = "";
        activeSelect.disabled = false;
        return;
    }
    els.detailInput.disabled = !question.needsDetail;
    els.detailInput.placeholder = question.needsDetail ? question.placeholder : "No details needed";
    if (!question.needsDetail) els.detailInput.value = "";
}

function getQuestion() {
    return questions.find(q => q.id === els.questionSelect.value);
}

function selectedOptionText(select) {
    return select.selectedOptions?.[0]?.textContent?.trim() || select.value.trim();
}

function serializeBulkGroupState() {
    return [...bulkGroupEliminatedIds].map(([key, ids]) => [key, [...ids]]);
}

function cloneBulkGroupState(state = []) {
    return new Map((state || []).map(([key, ids]) => [key, new Set(ids)]));
}

function saveHistory(lockUndo = false) {
    if (history.length && !history[history.length - 1].after) {
        history[history.length - 1].after = currentHistorySnapshot();
    }
    history.push({
        eliminated: characters.map(c => c.eliminated),
        solved: characters.map(c => c.solved),
        usedQuestionIds: [...usedQuestionIds],
        permanentlyUsedManualQuestionIds: [...permanentlyUsedManualQuestionIds],
        bulkGroupEliminatedIds: serializeBulkGroupState(),
        target: captureTargetRollState(),
        guesses,
        locked: lockUndo
    });
}

function currentHistorySnapshot() {
    return {
        eliminated: characters.map(c => c.eliminated),
        solved: characters.map(c => c.solved),
        usedQuestionIds: [...usedQuestionIds],
        permanentlyUsedManualQuestionIds: [...permanentlyUsedManualQuestionIds],
        bulkGroupEliminatedIds: serializeBulkGroupState(),
        target: captureTargetRollState(),
        guesses
    };
}

function commitHistoryAfter(index = history.length - 1) {
    if (history[index]) history[index].after = currentHistorySnapshot();
}

function canUndoAnyHistoryEntry() {
    return history.some((entry, index) => index > undoFloor && !entry?.locked && !entry?.undone);
}

function addActionSummary(summary, historyIndex = history.length - 1) {
    if (!summary) return;
    actionLog.unshift({ summary, historyIndex });
}

function actionInfoForHistoryIndex(historyIndex) {
    const questionEntry = questionLog.find(item => Number.isInteger(item.historyIndex) && item.historyIndex === historyIndex);
    if (questionEntry) {
        return {
            type: "question",
            label: questionEntry.label,
            result: Boolean(questionEntry.result)
        };
    }
    const actionEntry = actionLog.find(item => Number.isInteger(item?.historyIndex) && item.historyIndex === historyIndex);
    if (actionEntry?.summary) {
        return {
            type: "action",
            label: actionEntry.summary
        };
    }
    return {
        type: "action",
        label: "last action"
    };
}

function showHistoryStepLastAction(kind, historyIndex) {
    const isRedo = kind === "redo";
    const title = isRedo ? "Redid:" : "Undid:";
    const info = actionInfoForHistoryIndex(historyIndex);
    if (info.type === "question") {
        const answerText = info.result ? "Yes" : "No";
        els.answerBox.innerHTML = `<strong class="last-action-heading">${title}</strong><span class="last-action-question">${escapeHtml(info.label)}</span><span><span class="pill ${info.result ? "yes" : "no"} last-action-answer-pill">${answerText}</span></span>`;
        return;
    }
    els.answerBox.innerHTML = `<strong class="last-action-heading">${title}</strong><span class="last-action-question">${escapeHtml(info.label)}</span>`;
}

function markLogsUndoneFrom(historyIndex) {
    questionLog.forEach(item => {
        if (Number.isInteger(item.historyIndex) && item.historyIndex >= historyIndex) item.undone = true;
    });
    actionLog.forEach(item => {
        if (Number.isInteger(item?.historyIndex) && item.historyIndex >= historyIndex) item.undone = true;
    });
}

function markLogsUndoneAt(historyIndex) {
    questionLog.forEach(item => {
        if (Number.isInteger(item.historyIndex) && item.historyIndex === historyIndex) item.undone = true;
    });
    actionLog.forEach(item => {
        if (Number.isInteger(item?.historyIndex) && item.historyIndex === historyIndex) item.undone = true;
    });
}

function summarizeRoleCounts(charactersList) {
    const killerCount = charactersList.filter(c => c.role === "killer").length;
    const survivorCount = charactersList.filter(c => c.role === "survivor").length;
    const parts = [];
    if (killerCount) parts.push(`${killerCount} killer${killerCount === 1 ? "" : "s"}`);
    if (survivorCount) parts.push(`${survivorCount} survivor${survivorCount === 1 ? "" : "s"}`);
    return parts.join(" and ");
}

function getQuestionCheck() {
    if (gameOver) return;
    const q = getQuestion();
    if (!q) {
        els.answerBox.innerHTML = "<strong>No question selected.</strong><span>Select a question, then click Yes or No.</span>";
        return null;
    }
    const detail = q.usesSpeedSelect
        ? els.speedSelect.value.trim()
        : q.usesRoleSelect
            ? els.roleSelect.value.trim()
            : q.usesLicenseSelect
                ? els.licenseSelect.value.trim()
                : q.usesCountrySelect
                    ? els.countrySelect.value.trim()
                    : q.usesGenderSelect
                        ? els.genderSelect.value.trim()
                        : q.usesHairSelect
                            ? els.hairSelect.value.trim()
                            : q.usesEthnicitySelect
                                ? els.ethnicitySelect.value.trim()
                                : q.usesYearSelect
                                    ? els.yearSelect.value.trim()
                                    : els.detailInput.value.trim();
    const detailLabel = q.usesRoleSelect
        ? selectedOptionText(els.roleSelect)
        : q.usesSpeedSelect
            ? selectedOptionText(els.speedSelect)
            : q.usesLicenseSelect
                ? selectedOptionText(els.licenseSelect)
                : q.usesCountrySelect
                    ? selectedOptionText(els.countrySelect)
                    : q.usesGenderSelect
                        ? selectedOptionText(els.genderSelect)
                        : q.usesHairSelect
                            ? selectedOptionText(els.hairSelect)
                            : q.usesEthnicitySelect
                                ? selectedOptionText(els.ethnicitySelect)
                                : q.usesYearSelect
                                    ? selectedOptionText(els.yearSelect)
                                    : detail;
    if (q.needsDetail && !detail) {
        els.answerBox.innerHTML = "<strong>Need a detail first.</strong><span>Add the letter, word, or year for that question.</span>";
        els.detailInput.focus();
        return null;
    }
    if (q.id === "releasedAfter" && Number.isNaN(Number(detail))) {
        els.answerBox.innerHTML = "<strong>That needs a year.</strong><span>Try a number like 2024.</span>";
        els.detailInput.focus();
        return null;
    }
    const hasDetail = Boolean(q.needsDetail || q.usesRoleSelect || q.usesSpeedSelect || q.usesLicenseSelect || q.usesCountrySelect || q.usesGenderSelect || q.usesHairSelect || q.usesEthnicitySelect || q.usesYearSelect);
    return { q, detail, detailLabel, hasDetail, label: hasDetail ? `${q.label} ${detailLabel}` : q.label };
}

async function applyManualAnswer(result) {
    const check = getQuestionCheck();
    if (!check) return;
    const { q, detail, detailLabel, hasDetail, label } = check;
    saveHistory();
    const currentHistoryIndex = history.length - 1;
    usedQuestionIds.add(q.id);
    if (q.manualOnly) permanentlyUsedManualQuestionIds.add(q.id);
    questionBlocks
        .find(group => group.includes(q.id))
        ?.forEach(id => usedQuestionIds.add(id));
    if (q.manualOnly) {
        questionLog.unshift({ questionId: q.id, questionTier: q.tier, label, result, removed: 0, eliminatedNames: [], historyIndex: currentHistoryIndex });
        addActionSummary(`Manual question: ${result ? "Yes" : "No"} for "${label}".`);
        els.answerBox.innerHTML = `<strong>Manual question logged.</strong><span>${result ? "Yes" : "No"} answer recorded. Eliminate the board yourself.</span>`;
        els.detailInput.value = "";
        clearCharacterSearch();
        commitHistoryAfter(currentHistoryIndex);
        setupQuestions();
        render();
        return;
    }
    const beforeCounts = boardCounts();
    const newlyEliminated = [];
    let removed = 0;
    characters.filter(c => !c.bonusSearchOnly).forEach(c => {
        let matched = q.test(c, detail);
        if (result && q.label.startsWith("(if survivor)") && c.role !== "survivor") matched = false;
        if (result && q.label.startsWith("(if killer)") && c.role !== "killer") matched = false;
        if (matched === "both") return;
        if (matched === "yesOnly") {
            if (result) return;
            matched = false;
        }
        if (q.skipUnknown && matched == null) {
            if (!result) return;
            matched = false;
        }
        if (!c.eliminated && matched !== result) {
            removed++;
            newlyEliminated.push(c);
        }
    });

    if (newlyEliminated.length) triggerMassEliminationAnimations(newlyEliminated).catch(error => console.warn("Mass elimination animation failed:", error));
    if (newlyEliminated.length) queueGridTransition({ exitingIds: newlyEliminated.map(c => c.id) });
    newlyEliminated.forEach(c => c.eliminated = true);

    maybeShowBoardWarnings(beforeCounts, boardCounts());
    if (removed > 0) maybeAutoSwitchToRemainingAfterElimination(removed);
    questionLog.unshift({ questionId: q.id, questionTier: q.tier, label, result, removed, eliminatedNames: newlyEliminated.map(c => c.name), historyIndex: currentHistoryIndex });
    const eliminationSummary = summarizeRoleCounts(newlyEliminated);
    addActionSummary(eliminationSummary
        ? `${result ? "Yes" : "No"}: removed ${eliminationSummary}.`
        : `${result ? "Yes" : "No"}: no eliminations.`);
    const unlockedNow = questionLog.length === generalQuestionLimit;
    const answerText = result ? "Yes" : "No";
    const detailLine = hasDetail && detailLabel ? `<span class="last-action-detail">${escapeHtml(detailLabel)}</span>` : "";
    const eliminationLine = `You eliminated ${removed} character${removed === 1 ? "" : "s"}.`;
    els.answerBox.innerHTML = `<strong class="last-action-heading">You asked:</strong><span class="last-action-question">${escapeHtml(q.label)}</span>${detailLine}<span><span class="pill ${result ? "yes" : "no"} last-action-answer-pill">${answerText}</span></span><span class="last-action-eliminated">${eliminationLine}${unlockedNow ? "<br>Hard Mode has been unlocked!" : ""}</span>`;
    els.detailInput.value = "";
    clearCharacterSearch();
    commitHistoryAfter(currentHistoryIndex);
    setupQuestions();
    render();
}

function guessCharacter(character) {
    if (gameOver || character.eliminated || character.solved) return;
    guesses++;
    pendingGuess = character;
    els.resultTitle.textContent = "Final Guess";
    els.resultText.innerHTML = `<div class="result-card">
        <div class="result-portrait">
          <img src="${escapeHtml(character.portrait)}" alt="${escapeHtml(character.name)} portrait">
        </div>
        <strong>${escapeHtml(character.name)}</strong>
        <span>Ask your friend if this is their character, then mark the guess.</span>
      </div>`;
    els.closeDialogBtn.hidden = false;
    els.correctGuessBtn.hidden = false;
    els.wrongGuessBtn.hidden = false;
    els.dialogNewGameBtn.hidden = true;
    els.resultDialog.showModal();
    render();
}

const killerCorrectGuessMessages = {
    "The Shape": "He was just standing there... and you still figured it out.",
    "The Doctor": "Diagnosis: correct. Side effects may include screaming.",
    "The Huntress": "Hatchet incoming. Duck first, celebrate later.",
    "The Cannibal": "Basement Bubba sends his regards.",
    "The Nightmare": "You woke up just long enough to get it right.",
    "The Pig": "Snoot protocol completed. Boop successful.",
    "The Plague": "Correct answer. Wash your hands immediately.",
    "The Executioner": "Judgment passed. You may leave the triangle.",
    "The Blight": "You bounced through the logic and somehow landed correctly.",
    "The Trickster": "Main event unlocked. Unfortunately, he is still talking.",
    "The Nemesis": "S.T.A.R.S. couldn't help him hide from you.",
    "The Artist": "Crows saw everything. So did you.",
    "The Onryo": "Seven days? You needed seven seconds.",
    "The Dredge": "The locker was dark, but your guess was clear.",
    "The Knight": "The boys were called in, but you still won the trial.",
    "The Skull Merchant": "Drone deployed. Fun detected: minimal. Guess detected: correct.",
    "The Singularity": "Thank God.. He was about to say slurs about humans again..",
    "The Xenomorph": "Xenokitty is not happy about that one, might piss on your bed tonight.",
    "The Lich": "Roll for intelligence. Natural 20.",
    "The Dark Lord": "The castle doors open. Dramatic cape privileges unlocked.",
    "The Houndmaster": "Good tracking! Would you like to become her new dog?",
    "The Animatronic": "Five nights were not required. You got it now.",
    "The Slasher": "Good guess! You won't become the opening kill this time!",
    "The Trapper": "Step carefully. He was waiting for you to get cocky.",
    "The Wraith": "Bing bong. You saw through the cloak.",
    "The Hillbilly": "Chainsaw revved, braincell used. Nice guess.",
    "The Nurse": "You blinked, she blinked, somehow you still got it right.",
    "The Hag": "You triggered the trap, but at least you guessed correctly.",
    "The Clown": "You guessed him. Unfortunately, now you smell like bottles.",
    "The Spirit": "She phased out, but your answer stayed locked in.",
    "The Legion": "Four idiots, one correct guess.",
    "The Ghost Face": "You caught him before he caught your bad angle.",
    "The Demogorgon": "Screech confirmed. Portal privileges granted.",
    "The Oni": "Blood fury? More like brain fury. Good guess.",
    "The Deathslinger": "Reel it in - that was a clean shot.",
    "The Twins": "Victor screamed. Charlotte approved.",
    "The Good Guy": "Short king, big problem, correct guess.",
    "The Unknown": "You understood The Unknown. That feels illegal.",
    "The Ghoul": "Half-human, full nightmare, correctly identified.",
    "The Krasue": "Head detached, mystery solved.",
    "The First": "Ancient evil, modern deduction.",
    "The Cenobite": "You guessed. He came. Hopefully not in the box.",
    "The Mastermind": "You caught Wesker! Somehow through the 1 000 000 bugs he keeps getting every patch!",
};

const genericKillerCorrectGuessMessages = [];

const genericSurvivorCorrectGuessMessages = [
    "Correct. Solo queue did not ruin this one.",
    "You found them. The killer is already on the way.",
    "Correct. The survivor can stop crouching now.",
    "You got it. The campfire is slightly less embarrassing tonight.",
    "Correct. The hatch has opened for your last braincell.",
    "Correct. That was almost a real aura read.",
    "You got it. The Fog coughed up a survivor and a complaint.",
    "Correct. The survivor has been identified before they could sandbag anyone.",
    "You found them. The exit gate is powered by spite.",
    "Correct. Your dignity has been unhooked.",
    "You got it. A teammate somewhere missed a skill check in celebration.",
    "You found them. The killer pretends not to be impressed.",
    "Correct. The trial has promoted you from liability to witness.",
    "You got it. The survivor lived long enough to become the answer.",
    "You found them. The Entity hates when survivors get attention.",
    "Correct. For once, you did not throw."
];

const survivorCorrectGuessMessages = {
    "Claudette Morel": "You got Claudette. The grass finally snitched. Did you touch it yet though?",
    "Ace Visconti": "Did he promise you anything for picking him? Don't trust anything he says. He's a known scammer.",
    "Steve Harrington": "You got Steve. It was because of the hair, right? Be honest.",
    "Cheryl Mason": "You got Cheryl. Silent Hill's favorite emotional punching bag.",
    "Leon S. Kennedy": "You got Leon. Pretty privilege passed the skill check.",
    "Ada Wong": "I'd also pick her. Any time. Any day. Any night. All night.",
    "Mikaela Reid": "You got Mikaela. Witchcraft carried your deduction.",
    "Sable Ward": "You picked her, but everyone always picks her. Not all Sables but always a Sable, huh..?",
    "Alan Wake": "You got Alan. The plot stopped gaslighting you for once.",
    "Nicolas Cage": "You got Nicolas Cage. Absolute cinema."
};

function correctGuessMessage(character) {
    if (character?.role === "killer") {
        return killerCorrectGuessMessages[character.name] || "Correct.";
    }
    if (survivorCorrectGuessMessages[character?.name]) return survivorCorrectGuessMessages[character.name];
    if (character?.role === "survivor") return randomMessage(genericSurvivorCorrectGuessMessages);
    return "The campfire is yours tonight.";
}

const killerWrongGuessMessages = {
    "The Shape": "He stared at you in silence. Somehow, that was still less awkward than this guess.",
    "The Doctor": "Incorrect. Treatment will now begin.",
    "The Huntress": "That guess missed harder than a cross-map hatchet.",
    "The Cannibal": "Wrong answer. Basement time.",
    "The Nightmare": "You're still dreaming if you thought that was right.",
    "The Pig": "Wrong choice. The trap timer starts now.",
    "The Plague": "That answer was vile. Cleanse immediately.",
    "The Executioner": "Judgment failed. Back to the cage.",
    "The Blight": "That guess bounced off six walls and still missed.",
    "The Trickster": "He threw 36 knives and none missed as hard as you did.",
    "The Nemesis": "Wrong. The zombie made a better read.",
    "The Cenobite": "Pain.",
    "The Artist": "The crows are judging you. Loudly.",
    "The Onryo": "Wrong tape. Seven days start now.",
    "The Dredge": "That guess belongs in the locker.",
    "The Mastermind": "Poor performance indeed.",
    "The Knight": "Wrong. The guards are being dispatched.",
    "The Skull Merchant": "Drone detected: incorrect thought process.",
    "The Singularity": "It wasn't programmed to respect you or that answer.",
    "The Xenomorph": "Motion tracker detected your incorrect guess. Sadly, not any brain activity.",
    "The Lich": "He asked me if he can go back to D&D after that. Hope you're happy.",
    "The Dark Lord": "Incorrect. Get ready to get humped by the dog at the exit gate.",
    "The Houndmaster": "Wrong. She sent her dog to poop in your yard.",
    "The Animatronic": "Wrong night, wrong room, wrong answer.",
    "The Slasher": "Yeah.. This is the reason why we didn't get him in DBD for all these 10 years btw.",
    "Hens": "Calculated. Unfortunately, not by you.",
    "OtzDarva": "He tested this exact mistake in 2019.",
    "Skermz": "You guessed.. but wrong.. and he clipped it. You're content now.",
    "Claudette Morel": "Wrong. Go self-care in a bush and think about it.",
    "Ace Visconti": "You gambled. The house laughed.",
    "David King": "Wrong. No Mither, no braincell.",
    "Quentin Smith": "You guessed like someone running on three minutes of sleep.",
    "Detective Tapp": "Investigation failed. Case closed out of embarrassment.",
    "Adam Francis": "Wrong. Deliverance cannot save that.",
    "Jane Romero": "The audience hated that answer.",
    "Steve Harrington": "Wrong. Hair looked great though.",
    "Jill Valentine": "S.T.A.R.S. would like to distance themselves from that answer.",
    "Leon S. Kennedy": "Wrong. Pretty privilege only gets you so far.",
    "Rebecca Chambers": "Medical diagnosis: severe skill issue.",
    "Nicolas Cage": "Wrong, but emotionally Oscar-worthy.",
    "Alan Wake": "He wrote that guess into the story, then deleted the chapter.",
    "Aestri Yazar": "You rolled exposed. Yes I know I don't have dramaturgy.. Let a girl fantasize..",
    "Taurie Cain": "The Entity cult saw that and lowered recruitment standards.",
    "Rick Grimes": "Wrong. Coral would be disappointed.",
    "Michonne Grimes": "Wrong. The katana is judging silently.",
    "The Trapper": "Wrong. The trap was obvious, which makes this worse.",
    "The Wraith": "Did he bing bong you in the head before you made that guess?",
    "The Hillbilly": "You made him curve directly in the wall after that guess.",
    "The Nurse": "That guess reminded me of her fatigue.",
    "The Hag": "That guess grants you a basement Hag game. Do better next time.",
    "The Clown": "He started drinking from the pink bottle after seeing you click that guess.",
    "The Spirit": "You seem like the type to CTRL + 2 the husk. Is that why you picked her? Pervert.",
    "The Legion": "Four teenagers just called you washed. Is this a game of Valorant or Guess Who?",
    "The Ghost Face": "He removed your picture from his wall and gave it to The Twins instead.. Have fun..",
    "The Demogorgon": "The portal opened, saw your answer, and closed itself.",
    "The Oni": "You just turned a haematophiliac haematophobic.",
    "The Deathslinger": "You missed your shot. But he won't in your next game of DBD. Wesker agrees.. ;)",
    "The Twins": "Did a survivor kick you in the head instead of Victor before you clicked 'Correct'?",
    "The Good Guy": "The ankle biter laughed at you. No, I'm not talking about Victor.",
    "The Unknown": "If The Unknown tried to mimic brain damage, it would've guessed the same thing you just did!",
    "The Ghoul": "AaaAAArghh Aaaaaaghh Aaauughhhhhh.. or something..",
    "The Krasue": "Looks like you lost your head! Haha... she didn't though..",
    "The First": "That guess made the directors of Stranger Things want to make another season. IYKYK.",
};

const genericKillerWrongGuessMessages = [];

const genericSurvivorWrongGuessMessages = [
    "Wrong. The survivor saw that and started self-caring.",
    "That answer got sandbagged at shack.",
    "That guess got left on first hook.",
    "Wrong. The survivor pointed at nothing and left.",
    "Wrong. Someone just wasted shack pallet in your honor.",
    "That answer crouched in a corner and died anyway.",
    "Wrong. The hatch closed out of secondhand embarrassment.",
    "That guess brought a flashlight and no batteries.",
    "Wrong. A 0-hook teammate made a better read.",
    "That answer got farmed without endurance.",
    "Wrong. The exit gate was open and you still threw.",
    "That guess missed the skill check and blamed lag.",
    "Wrong. The Fog gave your guess a DC penalty.",
    "That guess had Decisive Strike and still folded.",
    "Wrong. Even Kindred could not show you the answer.",
    "That answer died for content and got 12 views."
];

function randomMessage(messages) {
    return messages[Math.floor(Math.random() * messages.length)];
}

function wrongGuessMessage(character) {
    if (killerWrongGuessMessages[character?.name]) return killerWrongGuessMessages[character.name];
    if (character?.role === "killer") return "Incorrect.";
    if (character?.role === "survivor") return randomMessage(genericSurvivorWrongGuessMessages);
    return "The Entity claims this round.";
}
function finishGuess(correct) {
    if (!pendingGuess) return;
    const guessed = pendingGuess;
    pendingGuess = null;
    if (correct) {
        wrongGuessStreak = 0;
        gameOver = true;
        guessed.solved = true;
        els.resultTitle.textContent = "Victory";
        els.resultText.innerHTML = `<div class="result-card victory-card">
          <div class="result-portrait">
            <img src="${escapeHtml(guessed.portrait)}" alt="${escapeHtml(guessed.name)} portrait">
          </div>
          <strong>You got ${escapeHtml(guessed.name)}!</strong>
          <span>${escapeHtml(correctGuessMessage(guessed))}</span>
        </div>`;
        els.answerBox.innerHTML = `<strong>Correct guess.</strong><span>${escapeHtml(guessed.name)} was the answer.</span>`;
        addActionSummary(`Correct guess: ${guessed.name}.`, null);
    } else {
        const beforeCounts = boardCounts();
        wrongGuessStreak++;
        queueGridTransition({ exitingIds: [guessed.id] });
        guessed.eliminated = true;
        maybeAutoSwitchToRemainingAfterElimination(1);
        els.resultTitle.textContent = "Defeat";
        els.resultText.innerHTML = `<div class="result-card victory-card">
          <div class="result-portrait">
            <img src="${escapeHtml(guessed.portrait)}" alt="${escapeHtml(guessed.name)} portrait">
          </div>
          <strong>${escapeHtml(guessed.name)} was not it.</strong>
          <span>${escapeHtml(wrongGuessMessage(guessed))}</span>
        </div>`;
        els.answerBox.innerHTML = `<strong>Incorrect guess.</strong><span>${escapeHtml(guessed.name)} has been eliminated. Keep playing.</span>`;
        addActionSummary(`Incorrect guess: ${guessed.name}.`, null);
        if (!maybeShowBoardWarnings(beforeCounts, boardCounts())) showWrongGuessStreakMessage();
    }
    saveHistory(true);
    commitHistoryAfter(history.length - 1);
    undoFloor = history.length - 1;
    els.closeDialogBtn.hidden = false;
    els.correctGuessBtn.hidden = true;
    els.wrongGuessBtn.hidden = true;
    els.dialogNewGameBtn.hidden = false;
    render();
}

function showLore(character) {
    if (!character) return;
    activeLoreId = activeLoreId === character.id ? null : character.id;
    render();
}

function toggleTargetLore() {
    if (!target) return;
    targetLoreOpen = !targetLoreOpen;
    revealTarget(true, "Your Pick");
}

function renderTargetMinimized() {
    els.targetPanel.classList.toggle("minimized", targetMinimized);
    els.minimizeTargetBtn.textContent = targetMinimized ? "Show" : "Minimize";
    els.minimizeTargetBtn.setAttribute("aria-expanded", String(!targetMinimized));
}

function toggleTargetMinimized() {
    targetMinimized = !targetMinimized;
    renderTargetMinimized();
}

function isCuteModeActive() {
    return document.body?.classList?.contains("cute-mode");
}

function isPhoneLayout() {
    const viewportWidth = Math.min(
        window.innerWidth || Number.POSITIVE_INFINITY,
        document.documentElement?.clientWidth || Number.POSITIVE_INFINITY,
        window.visualViewport?.width || Number.POSITIVE_INFINITY
    );
    return viewportWidth <= 760 || window.matchMedia("(max-width: 760px), (pointer: coarse)").matches;
}

function prefersReducedMotion() {
    return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches || false;
}

function shouldUseFastBoardUpdates() {
    return isPhoneLayout() || prefersReducedMotion();
}

function portraitLoadingMode() {
    return "lazy";
}

function triggerCuteEliminationAnimations(charactersToAnimate, reason = "eliminate") {
    if (!isCuteModeActive() || shouldUseFastBoardUpdates()) return false;
    const darkApi = document.body?.classList?.contains("cute-dark-mode") ? window.GuessWhoCuteDarkMode : null;
    const api = typeof darkApi?.playEliminationBurst === "function" ? darkApi : window.GuessWhoCuteMode;
    if (typeof api?.playEliminationBurst !== "function") return false;
    const items = (Array.isArray(charactersToAnimate) ? charactersToAnimate : [charactersToAnimate])
        .filter(character => character)
        .map(character => ({
            id: character.id,
            name: character.name,
            role: character.role,
            gender: character.gender,
            bonusSearchOnly: Boolean(character.bonusSearchOnly)
        }));
    if (!items.length) return false;
    try {
        blockTransitionInteractions(reason === "manual" ? 1220 : 1460);
        return api.playEliminationBurst(items, { reason });
    } catch (error) {
        console.warn("Cute elimination animation failed:", error);
        return false;
    }
}

async function triggerManualEliminationScreenEffect(character) {
    if (isCuteModeActive() || shouldUseFastBoardUpdates()) return false;
    const card = els.grid.querySelector(`.card[data-id="${CSS.escape(character.id)}"]`);
    if (!card) return false;
    if (character?.bonusSearchOnly) {
        const clone = createManualEliminationClone(card);
        Promise.resolve()
            .then(() => playNormalBonusEliminationClone(clone, character))
            .catch(error => console.warn("GOAT elimination animation failed:", character.name, error))
            .finally(() => restoreManualEliminationClone(clone));
        return "snippet";
    }
    const effect = manualEliminationScreenEffects.get(character?.name);
    if (!effect) return false;

    const snippetFn = typeof effect === "string" ? window[effect] : null;
    if (typeof snippetFn === "function") {
        const clone = createManualEliminationClone(card);
        Promise.resolve()
            .then(() => snippetFn(clone))
            .catch(error => console.warn("Manual elimination animation failed:", character.name, error))
            .finally(() => restoreManualEliminationClone(clone));
        return "snippet";
    }
    window.clearTimeout(manualScreenEffectTimer);
    document.body.classList.remove("manual-effect-dredge", "manual-effect-static", "manual-effect-unknown", "manual-effect-ghoul", "manual-effect-fog");
    document.body.classList.add(`manual-effect-${effect}`);
    card.classList.add("manual-effect-focus");
    if (effect === "unknown") {
        const portrait = card.querySelector(".portrait img") || card.querySelector(".portrait") || card;
        try {
            portrait.animate([
                { transform: "scale(1)", filter: "none", opacity: 1 },
                { transform: "scale(1.08)", filter: "contrast(1.08) saturate(1.05)", opacity: 1, offset: .34 },
                { transform: "scale(1.18) translateY(-2px)", filter: "contrast(1.18) saturate(1.08) blur(.5px)", opacity: .96, offset: .68 },
                { transform: "scale(1.30) translateY(-4px) skewX(3deg)", filter: "contrast(1.28) saturate(.8) blur(2.4px)", opacity: 0 }
            ], { duration: 1900, fill: "forwards", easing: "cubic-bezier(.18,.84,.22,1)" });
            card.animate([
                { opacity: 1, filter: "none", transform: "scale(1)" },
                { opacity: .96, filter: "brightness(.92)", transform: "scale(1.012)", offset: .40 },
                { opacity: .48, filter: "brightness(.62) contrast(1.22) hue-rotate(16deg) blur(1.2px)", transform: "scale(1.03)", offset: .72 },
                { opacity: 0, filter: "brightness(.34) contrast(1.35) blur(2.8px)", transform: "scale(1.045) skewX(-3deg)" }
            ], { duration: 1940, fill: "forwards", easing: "ease-in" });
        } catch (error) {
            console.warn("Unknown elimination portrait creep failed:", error);
        }
    }
    manualScreenEffectTimer = window.setTimeout(() => {
        document.body.classList.remove(`manual-effect-${effect}`);
        card.classList.remove("manual-effect-focus");
    }, 2000);
    return "screen";
}

const ELIMINATION_ANIMATION_OVERLAY_Z_INDEX = 2147483400;

function createManualEliminationClone(card) {
    const rect = card.getBoundingClientRect();
    const shell = document.createElement("div");
    shell.className = "manual-elimination-clone-shell";
    shell.style.cssText = [
        "position:fixed",
        `left:${rect.left}px`,
        `top:${rect.top}px`,
        `width:${Math.max(1, rect.width)}px`,
        `height:${Math.max(1, rect.height)}px`,
        `z-index:${ELIMINATION_ANIMATION_OVERLAY_Z_INDEX}`,
        "pointer-events:none",
        "overflow:visible",
        "isolation:isolate"
    ].join(";");

    const clone = card.cloneNode(true);
    clone.classList.remove("eliminated", "solved", "manual-effect-focus", "manual-eliminating");
    clone.classList.add("manual-elimination-clone");
    clone.querySelectorAll("button, a").forEach(control => {
        control.tabIndex = -1;
        control.setAttribute("aria-hidden", "true");
    });
    clone.style.cssText = [
        "position:relative",
        "width:100%",
        "height:100%",
        "max-height:none",
        "overflow:visible",
        "pointer-events:none",
        "transform:none",
        "transform-origin:center center",
        "z-index:1",
        "opacity:1",
        "visibility:visible",
        "filter:none",
        "will-change:transform, opacity, filter"
    ].join(";");
    shell.appendChild(clone);
    document.body.appendChild(shell);
    clone.__manualEliminationShell = shell;
    return clone;
}

function restoreManualEliminationClone(clone) {
    if (!clone) return;
    clone.getAnimations?.({ subtree: true }).forEach(animation => animation.cancel());
    clone.__manualEliminationShell?.remove();
    delete clone.__manualEliminationShell;
}

async function playNormalBonusEliminationClone(clone, character) {
    if (!clone) return;
    blockTransitionInteractions(1120);
    clone.classList.add("normal-goat-elimination-clone");
    const shell = clone.__manualEliminationShell || clone;
    const aura = document.createElement("div");
    aura.className = "normal-goat-elim-aura";
    aura.style.cssText = "position:absolute;inset:-16px;border-radius:18px;z-index:2;pointer-events:none;background:radial-gradient(circle at 50% 45%, rgba(255,255,255,.20), rgba(160,0,18,.28) 42%, rgba(0,0,0,.08) 70%, transparent 78%);filter:blur(10px);opacity:0;mix-blend-mode:screen";
    shell.appendChild(aura);
    const symbols = ["✦", "★", "◆", "✧", "♛", "🐐"];
    const sparks = [];
    for (let index = 0; index < 12; index += 1) {
        const spark = document.createElement("span");
        spark.className = "normal-goat-elim-spark";
        spark.textContent = symbols[index % symbols.length];
        const angle = (Math.PI * 2 * index / 12) + Math.random() * .38;
        const distance = 38 + Math.random() * 64;
        spark.style.cssText = [
            "position:absolute",
            "left:50%",
            "top:44%",
            "z-index:5",
            "pointer-events:none",
            "font-weight:900",
            "font-size:.92rem",
            "color:#f2f2f2",
            "text-shadow:0 0 8px rgba(210,18,30,.72),0 0 16px rgba(255,255,255,.25)",
            "opacity:0",
            "transform:translate(-50%,-50%) scale(.62)",
            "will-change:transform,opacity,filter"
        ].join(";");
        sparks.push({
            node: spark,
            dx: Math.cos(angle) * distance,
            dy: Math.sin(angle) * distance,
            rot: -120 + Math.random() * 240,
            delay: 45 + index * 18
        });
        shell.appendChild(spark);
    }
    const title = document.createElement("div");
    title.className = "normal-goat-elim-title";
    title.textContent = character?.name ? `${character.name} left the Fog` : "GOAT left the Fog";
    title.style.cssText = "position:absolute;left:50%;top:-22px;z-index:6;transform:translateX(-50%);white-space:nowrap;padding:5px 10px;border:1px solid rgba(150,28,34,.72);border-radius:999px;background:rgba(5,5,5,.88);color:#f1eeee;font:800 .68rem Inter,system-ui,sans-serif;letter-spacing:.04em;text-transform:uppercase;text-shadow:0 0 9px rgba(190,18,28,.48);opacity:0;pointer-events:none";
    shell.appendChild(title);
    const animations = [
        aura.animate([
            { opacity: 0, transform: "scale(.86)" },
            { opacity: .9, transform: "scale(1.05)", offset: .32 },
            { opacity: .24, transform: "scale(1.18)", offset: .72 },
            { opacity: 0, transform: "scale(1.32)" }
        ], { duration: 1040, easing: "cubic-bezier(.18,.8,.2,1)", fill: "forwards" }),
        clone.animate([
            { opacity: 1, transform: "scale(1) translateY(0)", filter: "none" },
            { opacity: 1, transform: "scale(1.025) translateY(-7px)", filter: "brightness(1.08) contrast(1.08)", offset: .24 },
            { opacity: .88, transform: "scale(.985) translateY(-3px) rotate(.4deg)", filter: "brightness(.74) contrast(1.18) saturate(.8)", offset: .58 },
            { opacity: 0, transform: "scale(.82) translateY(34px) rotate(-1.8deg)", filter: "brightness(.2) contrast(1.35) blur(7px)" }
        ], { duration: 1100, easing: "cubic-bezier(.16,.74,.2,1)", fill: "forwards" }),
        title.animate([
            { opacity: 0, transform: "translateX(-50%) translateY(6px) scale(.94)" },
            { opacity: 1, transform: "translateX(-50%) translateY(0) scale(1)", offset: .2 },
            { opacity: 1, transform: "translateX(-50%) translateY(-2px) scale(1)", offset: .68 },
            { opacity: 0, transform: "translateX(-50%) translateY(-9px) scale(.96)" }
        ], { duration: 920, easing: "ease-out", fill: "forwards" }),
        ...sparks.map(({ node, dx, dy, rot, delay }) => node.animate([
            { opacity: 0, transform: "translate(-50%,-50%) scale(.48) rotate(0deg)", filter: "blur(2px)" },
            { opacity: .96, transform: `translate(calc(-50% + ${dx * .36}px), calc(-50% + ${dy * .36}px)) scale(1.05) rotate(${rot * .35}deg)`, filter: "blur(0px)", offset: .32 },
            { opacity: 0, transform: `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px)) scale(.72) rotate(${rot}deg)`, filter: "blur(2px)" }
        ], { duration: 820, delay, easing: "cubic-bezier(.16,.72,.2,1)", fill: "forwards" }))
    ];
    await Promise.allSettled(animations.map(animation => animation.finished));
}
function getSwarmTargetSlots(count) {
    const vw = Math.max(window.innerWidth || 0, document.documentElement?.clientWidth || 0, 320);
    const vh = Math.max(window.innerHeight || 0, document.documentElement?.clientHeight || 0, 420);
    const centerX = vw / 2;
    const centerY = Math.max(170, Math.min(vh * .43, vh - 190));
    return Array.from({ length: Math.max(1, count) }, () => ({
        x: centerX,
        y: centerY,
        rotate: 0,
        delay: 0
    }));
}

function createSwarmClone(item, slot) {
    const { card } = item;
    const rect = card.getBoundingClientRect();
    const viewportWidth = Math.max(window.innerWidth || 0, document.documentElement?.clientWidth || 0, 320);
    const viewportHeight = Math.max(window.innerHeight || 0, document.documentElement?.clientHeight || 0, 420);
    const sourceWidth = Number.isFinite(rect.width) && rect.width > 0 ? rect.width : 210;
    const sourceHeight = Number.isFinite(rect.height) && rect.height > 0 ? rect.height : 360;
    const normalWidth = Math.max(178, Math.min(sourceWidth, Math.min(292, viewportWidth * .44)));
    const startX = slot.x;
    const startY = viewportHeight + Math.max(210, sourceHeight * .72);

    const shell = document.createElement('div');
    shell.className = 'mass-elimination-swarm-shell';
    shell.style.cssText = [
        'position:fixed',
        `left:${startX}px`,
        `top:${startY}px`,
        `width:${normalWidth}px`,
        'height:auto',
        `z-index:${ELIMINATION_ANIMATION_OVERLAY_Z_INDEX - 1}`,
        'pointer-events:none',
        'transform:translate(-50%,-50%) translateY(92px) scale(.96)',
        'transform-origin:center center',
        'opacity:0',
        'filter:brightness(.55) blur(5px)',
        'will-change:transform, opacity, filter, top'
    ].join(';');

    const clone = card.cloneNode(true);
    clone.classList.remove('eliminated', 'solved', 'manual-effect-focus', 'manual-eliminating');
    clone.classList.add('mass-elimination-swarm-card');
    clone.querySelectorAll('button, a').forEach(control => {
        control.tabIndex = -1;
        control.setAttribute('aria-hidden', 'true');
    });
    clone.style.cssText = [
        'position:relative',
        'left:auto',
        'top:auto',
        'width:100%',
        'height:auto',
        'max-height:none',
        'overflow:visible',
        'pointer-events:none',
        'transform:none',
        'transform-origin:center center',
        'z-index:1',
        'opacity:1',
        'visibility:visible',
        'filter:none',
        'box-shadow:0 26px 80px rgba(0,0,0,.62), 0 0 34px rgba(160,0,18,.25)',
        'will-change:transform, opacity, filter'
    ].join(';');
    shell.appendChild(clone);
    document.body.appendChild(shell);
    clone.__swarmShell = shell;
    return clone;
}

function restoreSwarmCard(card) {
    if (!card) return;
    card.getAnimations?.({ subtree: true }).forEach(animation => animation.cancel());
    card.__swarmShell?.remove();
    delete card.__swarmShell;
}

function resetSwarmShell(shell, slot) {
    if (!shell) return;
    shell.getAnimations?.().forEach(animation => animation.cancel());
    shell.style.left = `${slot.x}px`;
    shell.style.top = `${slot.y}px`;
    shell.style.opacity = '1';
    shell.style.transform = 'translate(-50%,-50%) scale(1) rotate(0deg)';
    shell.style.filter = '';
}

function prepareSwarmCloneForSignature(clone) {
    if (!clone) return;
    clone.getAnimations?.({ subtree: true }).forEach(animation => animation.cancel());
    clone.style.transform = 'none';
    clone.style.opacity = '1';
    clone.style.filter = 'none';
    clone.style.visibility = 'visible';
    clone.style.willChange = 'transform, opacity, filter';
}

async function floatSwarmCardIntoView(clone, slot) {
    const shell = clone.__swarmShell || clone;
    const startLeft = shell.style.left || `${slot.x}px`;
    const startTop = shell.style.top || `${(window.innerHeight || 720) + 220}px`;
    const floatDuration = 2150;
    const tremorDuration = 300;

    const floatAnimation = shell.animate([
        {
            opacity: 0,
            left: startLeft,
            top: startTop,
            transform: 'translate(-50%,-50%) translateY(120px) scale(.94) rotate(-2.4deg)',
            filter: 'brightness(.42) blur(7px)'
        },
        {
            opacity: .22,
            left: `${slot.x - 24}px`,
            top: `${slot.y + 300}px`,
            transform: 'translate(-50%,-50%) translateY(82px) scale(.965) rotate(1.4deg)',
            filter: 'brightness(.58) blur(4.6px)',
            offset: .25
        },
        {
            opacity: .64,
            left: `${slot.x + 13}px`,
            top: `${slot.y + 138}px`,
            transform: 'translate(-50%,-50%) translateY(34px) scale(.992) rotate(-.75deg)',
            filter: 'brightness(.82) blur(1.6px)',
            offset: .66
        },
        {
            opacity: 1,
            left: `${slot.x}px`,
            top: `${slot.y}px`,
            transform: 'translate(-50%,-50%) translateY(0) scale(1) rotate(0deg)',
            filter: 'none'
        }
    ], { duration: floatDuration, delay: slot.delay, easing: 'cubic-bezier(.12,.78,.13,1)', fill: 'forwards' });

    await floatAnimation.finished.catch(() => {});
    resetSwarmShell(shell, slot);
    prepareSwarmCloneForSignature(clone);

    const tremor = shell.animate([
        { transform: 'translate(-50%,-50%) translate(0,0) scale(1) rotate(0deg)' },
        { transform: 'translate(-50%,-50%) translate(-5px,2.5px) scale(1) rotate(-1.05deg)', offset: .22 },
        { transform: 'translate(-50%,-50%) translate(5px,-2.8px) scale(1) rotate(1.08deg)', offset: .48 },
        { transform: 'translate(-50%,-50%) translate(-3px,1.4px) scale(1) rotate(-.62deg)', offset: .72 },
        { transform: 'translate(-50%,-50%) translate(0,0) scale(1) rotate(0deg)' }
    ], { duration: tremorDuration, easing: 'ease-in-out', fill: 'forwards' });
    await tremor.finished.catch(() => {});
    resetSwarmShell(shell, slot);
    prepareSwarmCloneForSignature(clone);
}

async function waitForSwarmSnippetToSettle(clone, minimum = 700, maximum = 2600) {
    const customMinimum = Number.parseInt(clone?.dataset?.dbdxSwarmSettleMinimum || "", 10);
    if (Number.isFinite(customMinimum)) minimum = Math.max(0, customMinimum);
    const started = Date.now();
    await new Promise(done => window.setTimeout(done, minimum));
    if (!clone?.getAnimations) return;
    const remaining = clone.getAnimations({ subtree: true })
        .filter(animation => animation.playState !== "finished" && animation.playState !== "idle");
    if (!remaining.length) return;
    const timeLeft = Math.max(240, maximum - (Date.now() - started));
    await Promise.race([
        Promise.allSettled(remaining.map(animation => animation.finished.catch(() => {}))),
        new Promise(done => window.setTimeout(done, timeLeft))
    ]);
}

async function playSwarmFallbackAnimation(item, clone) {
    const shade = document.createElement('div');
    shade.style.cssText = 'position:absolute;inset:0;z-index:90;pointer-events:none;opacity:0;border-radius:inherit;background:radial-gradient(circle at center, rgba(255,255,255,.10), rgba(100,0,10,.24) 45%, rgba(0,0,0,.72) 100%);mix-blend-mode:screen;';
    clone.appendChild(shade);
    if (item.effect === 'static') {
        shade.style.background = 'repeating-linear-gradient(0deg, rgba(255,255,255,.38) 0 1px, transparent 1px 3px), repeating-linear-gradient(90deg, rgba(255,255,255,.16) 0 2px, rgba(0,0,0,.24) 2px 5px)';
    } else if (item.effect === 'dredge') {
        shade.style.background = 'radial-gradient(circle at center, rgba(30,30,30,.08), rgba(0,0,0,.88) 68%, rgba(0,0,0,1) 100%)';
    } else if (item.effect === 'unknown') {
        shade.style.background = 'linear-gradient(180deg, rgba(255,255,255,.08), rgba(110,0,130,.24), rgba(0,0,0,.74))';
    }
    shade.animate([{opacity:0},{opacity:.9,offset:.28},{opacity:.55}],{duration:760,fill:'forwards'});
    clone.animate([
        { opacity: 1, transform: clone.style.transform || 'translate(-50%,-50%) scale(1)', filter: 'none' },
        { opacity: .82, transform: `${clone.style.transform || 'translate(-50%,-50%) scale(1)'} translateY(-14px) scale(1.04)`, filter: 'brightness(.85)', offset: .42 },
        { opacity: 0, transform: `${clone.style.transform || 'translate(-50%,-50%) scale(1)'} translateY(34px) scale(.84)`, filter: 'brightness(.24) blur(4px)' }
    ],{duration:1050,fill:'forwards',easing:'ease-in'});
    await new Promise(done => window.setTimeout(done, 980));
}

async function triggerMassEliminationAnimations(charactersToEliminate) {
    if (shouldUseFastBoardUpdates()) return false;
    if (isCuteModeActive()) return triggerCuteEliminationAnimations(charactersToEliminate, "mass");
    const candidates = charactersToEliminate
        .filter(character => character?.role === "killer" && !character.eliminated && !character.solved)
        .map(character => {
            const effect = manualEliminationScreenEffects.get(character.name);
            const snippetFn = typeof effect === "string" ? window[effect] : null;
            const card = els.grid.querySelector(`.card[data-id="${CSS.escape(character.id)}"]`);
            if (!card) return null;
            if (typeof snippetFn === "function") return { type: "snippet", character, card, snippetFn };
            if (effect) return { type: "screen", character, card, effect };
            if (cinematicShakeCharacters.has(character.name)) return { type: "cinematic", character, card };
            return null;
        })
        .filter(Boolean);

    if (!candidates.length) return false;

    const shuffledCandidates = [...candidates].sort(() => Math.random() - .5);
    const selected = [shuffledCandidates[0]].filter(Boolean);

    if (!selected.length) return false;

    const slots = getSwarmTargetSlots(selected.length);

    await Promise.all(selected.map(async (item, index) => {
        const { character, card } = item;
        const slot = slots[index] || slots[slots.length - 1];
        manualEliminationAnimationIds.add(character.id);
        let clone = null;
        try {
            clone = createSwarmClone(item, slot);
            await floatSwarmCardIntoView(clone, slot);
            if (item.type === "snippet") {
                await item.snippetFn(clone);
                await waitForSwarmSnippetToSettle(clone, 500, 3400);
            } else {
                await playSwarmFallbackAnimation(item, clone);
            }
        } catch (error) {
            console.warn("Mass elimination center-card animation failed:", character.name, error);
        } finally {
            restoreSwarmCard(clone);
            manualEliminationAnimationIds.delete(character.id);
        }
    }));
    return true;
}

function showCharacterBubble(character, message, variant = "whisper") {
    document.querySelector(".character-bubble")?.remove();
    const card = els.grid.querySelector(`.card[data-id="${CSS.escape(character.id)}"]`);
    if (!card) return false;
    const bubble = document.createElement("div");
    bubble.className = `character-bubble character-bubble--${variant}`;
    bubble.textContent = message;
    card.appendChild(bubble);
    window.setTimeout(() => bubble.remove(), 6600);
    return true;
}

function showCharacterSpook(character, messages, variant = "whisper") {
    if (!character || !messages.has(character.name)) return false;
    return showCharacterBubble(character, messages.get(character.name), variant);
}

function startHoverSpook(card, character) {
    if (!character || !hoverSpookMessages.has(character.name) || hoverMessageTimers.has(character.id)) return;
    const hoverDelay = character.name === "The Mastermind" ? 7000 : 5000;
    const timer = window.setTimeout(() => {
        hoverMessageTimers.delete(character.id);
        if (!card.isConnected || !card.matches(":hover")) return;
        showCharacterBubble(character, hoverSpookMessages.get(character.name), "whisper");
    }, hoverDelay);
    hoverMessageTimers.set(character.id, timer);
}

function cancelHoverSpook(character) {
    if (!character) return;
    const timer = hoverMessageTimers.get(character.id);
    if (!timer) return;
    window.clearTimeout(timer);
    hoverMessageTimers.delete(character.id);
}

function showPortraitSpook(character) {
    showCharacterSpook(character, portraitSpookMessages, "whisper");
}

function showRestoreSpook(character) {
    if (!character || !restoreSpookMessages.has(character.name)) return;
    const message = restoreSpookMessages.get(character.name);
    if (!showCharacterBubble(character, message, "return")) {
        els.answerBox.innerHTML = `<strong>${escapeHtml(character.name)} restored.</strong><span>${escapeHtml(message)}</span>`;
    }
}

function tricksterCutiePortraitForCurrentMode() {
    return document.body.classList.contains("cute-mode") ? tricksterCutiePortraitCuteUrl : tricksterCutiePortraitUrl;
}

function displayedPortraitFor(character) {
    if (character?.name === "The Mastermind" && mastermindBurgerUnlocked) {
        return "assets/mastermind-burger.png";
    }
    if (character?.name === "The Trickster" && tricksterCutieUnlocked) {
        return tricksterCutiePortraitForCurrentMode();
    }
    return character?.portrait || "";
}

async function animateTricksterCutieUnlock(card, character) {
    if (!card || !character) return;
    const portrait = card.querySelector('.portrait');
    const currentImg = portrait?.querySelector('img');
    if (!portrait || !currentImg) return;

    const preload = new Image();
    const minaPortraitUrl = tricksterCutiePortraitForCurrentMode();
    preload.src = minaPortraitUrl;
    if (typeof preload.decode === 'function') {
        await preload.decode().catch(() => {});
    }

    const oldClone = currentImg.cloneNode(true);
    oldClone.className = 'trickster-cutie-morph-old';
    oldClone.removeAttribute('loading');

    portrait.classList.add('trickster-cutie-morph', 'mina-cutie-portrait');
    card.classList.add('mina-cutie-card', 'gender-female-card');
    card.classList.remove('gender-male-card', 'gender-both-card', 'gender-unknown-card');
    const cardName = card.querySelector('.name');
    if (cardName) cardName.textContent = 'Mina';
    const cardActions = card.querySelector('.card-actions');
    if (cardActions) cardActions.setAttribute('aria-label', 'Mina actions');
    const metaRows = card.querySelectorAll('.meta .meta-row');
    if (metaRows[1]) {
        metaRows[1].innerHTML = `${renderTagMarkup(["Female"], { gender: true })}${renderTagMarkup(character.hairTags || [], { hair: true })}`;
    }
    currentImg.classList.add('trickster-cutie-morph-current', 'mina-cutie-img');
    currentImg.src = minaPortraitUrl;
    currentImg.alt = `Mina portrait`;
    currentImg.loading = 'eager';
    currentImg.style.opacity = '0';
    currentImg.style.transform = 'scale(.9) rotate(-2deg)';
    currentImg.style.filter = 'blur(6px) brightness(1.14) saturate(1.18)';

    portrait.appendChild(oldClone);

    const veil = document.createElement('div');
    veil.className = 'trickster-mina-veil';
    portrait.appendChild(veil);

    const sigil = document.createElement('div');
    sigil.className = 'trickster-mina-sigil';
    portrait.appendChild(sigil);

    const ribbonLayer = document.createElement('div');
    ribbonLayer.className = 'trickster-mina-ribbon-layer';
    const ribbons = [];
    for (let index = 0; index < 5; index += 1) {
        const ribbon = document.createElement('span');
        ribbon.className = 'trickster-mina-ribbon';
        ribbon.style.setProperty('--delay', `${index * 88}ms`);
        ribbon.style.setProperty('--top', `${10 + index * 17 + Math.random() * 8}%`);
        ribbon.style.setProperty('--rot', `${-18 + Math.random() * 36}deg`);
        ribbonLayer.appendChild(ribbon);
        ribbons.push(ribbon);
    }
    portrait.appendChild(ribbonLayer);

    const sparkleLayer = document.createElement('div');
    sparkleLayer.className = 'trickster-cutie-sparkle-layer trickster-mina-sparkle-layer';
    const symbols = ['♡', '✧', '✦', '◇', '✧', '₊'];
    for (let index = 0; index < 30; index += 1) {
        const charm = document.createElement('span');
        charm.className = 'trickster-cutie-charm trickster-mina-charm';
        charm.textContent = symbols[index % symbols.length];
        const side = index % 2 === 0 ? -1 : 1;
        const startX = side * (72 + Math.random() * 34);
        const startY = -72 + Math.random() * 144;
        const endX = -84 + Math.random() * 168;
        const endY = -92 + Math.random() * 184;
        charm.style.setProperty('--start-x', `${startX}px`);
        charm.style.setProperty('--start-y', `${startY}px`);
        charm.style.setProperty('--x', `${endX}px`);
        charm.style.setProperty('--y', `${endY}px`);
        charm.style.setProperty('--r', `${-180 + Math.random() * 360}deg`);
        charm.style.setProperty('--delay', `${120 + index * 24}ms`);
        charm.style.setProperty('--size', `${.62 + Math.random() * .62}rem`);
        sparkleLayer.appendChild(charm);
    }
    portrait.appendChild(sparkleLayer);

    const oldAnim = oldClone.animate([
        { opacity: 1, transform: 'scale(1) rotate(0deg)', filter: 'blur(0px) saturate(1)' },
        { opacity: .78, transform: 'scale(1.03) rotate(-1.6deg)', filter: 'blur(1px) saturate(1.08)', offset: .28 },
        { opacity: 0, transform: 'scale(.86) rotate(-5deg)', filter: 'blur(7px) brightness(1.18)' }
    ], { duration: 760, easing: 'cubic-bezier(.2,.82,.2,1)', fill: 'forwards' });

    const newAnim = currentImg.animate([
        { opacity: 0, transform: 'scale(.9) rotate(-2deg)', filter: 'blur(6px) brightness(1.14) saturate(1.18)' },
        { opacity: .72, transform: 'scale(1.06) rotate(1.1deg)', filter: 'blur(2px) brightness(1.08) saturate(1.22)', offset: .46 },
        { opacity: 1, transform: 'scale(1) rotate(0deg)', filter: 'blur(0px) brightness(1) saturate(1)' }
    ], { duration: 920, easing: 'cubic-bezier(.17,.86,.2,1)', fill: 'forwards' });

    veil.animate([
        { opacity: 0, transform: 'translateY(10px) scale(.98)', filter: 'blur(10px) saturate(1.05)' },
        { opacity: .95, transform: 'translateY(0) scale(1.01)', filter: 'blur(2px) saturate(1.18)', offset: .34 },
        { opacity: .7, transform: 'translateY(-3px) scale(1.03)', filter: 'blur(3px) saturate(1.22)', offset: .72 },
        { opacity: 0, transform: 'translateY(-8px) scale(1.06)', filter: 'blur(8px) saturate(1.08)' }
    ], { duration: 1180, easing: 'cubic-bezier(.18,.82,.24,1)', fill: 'forwards' }).finished.catch(() => {});

    sigil.animate([
        { opacity: 0, transform: 'scale(.82) rotate(-8deg)' },
        { opacity: .78, transform: 'scale(1.02) rotate(2deg)', offset: .42 },
        { opacity: .35, transform: 'scale(1.08) rotate(5deg)', offset: .74 },
        { opacity: 0, transform: 'scale(1.16) rotate(10deg)' }
    ], { duration: 1120, easing: 'cubic-bezier(.18,.82,.24,1)', fill: 'forwards' }).finished.catch(() => {});

    ribbonLayer.animate([
        { opacity: 0 },
        { opacity: 1, offset: .18 },
        { opacity: 1, offset: .68 },
        { opacity: 0 }
    ], { duration: 1120, easing: 'ease-out', fill: 'forwards' }).finished.catch(() => {});

    portrait.animate([
        { transform: 'translateY(0) scale(1)' },
        { transform: 'translateY(-5px) scale(1.026)', offset: .36 },
        { transform: 'translateY(0) scale(1)' }
    ], { duration: 540, easing: 'cubic-bezier(.2,.82,.2,1)' });

    Promise.allSettled([oldAnim.finished, newAnim.finished]).then(() => {
        currentImg.style.opacity = '';
        currentImg.style.transform = '';
        currentImg.style.filter = '';
        currentImg.classList.remove('trickster-cutie-morph-current');
        oldClone.remove();
        veil.remove();
        sigil.remove();
        ribbonLayer.remove();
        sparkleLayer.remove();
        portrait.classList.remove('trickster-cutie-morph');
    });
}

function handleTricksterCutiePortraitClick(character, card) {
    if (!character || character.name !== "The Trickster") return false;
    if (tricksterCutieUnlocked) return false;
    tricksterCutieUnlocked = true;
    animateTricksterCutieUnlock(card, character);
    return true;
}

async function animateMastermindBurgerUnlock(card, character) {
    if (!card || !character) return;
    const portrait = card.querySelector('.portrait');
    const currentImg = portrait?.querySelector('img');
    if (!portrait || !currentImg) return;

    const burgerUrl = displayedPortraitFor(character);
    const preload = new Image();
    preload.src = burgerUrl;
    if (typeof preload.decode === 'function') {
        await preload.decode().catch(() => {});
    }

    const oldClone = currentImg.cloneNode(true);
    oldClone.className = 'mastermind-morph-old';
    oldClone.removeAttribute('loading');

    portrait.classList.add('mastermind-burger-morph');
    currentImg.classList.add('mastermind-morph-current');
    currentImg.src = burgerUrl;
    currentImg.alt = `${character.name} burger portrait`;
    currentImg.loading = 'eager';
    currentImg.style.opacity = '0';
    currentImg.style.transform = 'scale(1.14) rotate(3deg)';
    currentImg.style.filter = 'blur(8px) brightness(1.08)';

    portrait.appendChild(oldClone);

    const aura = document.createElement('div');
    aura.className = 'mastermind-burger-aura';
    portrait.appendChild(aura);

    const oldAnim = oldClone.animate([
        { opacity: 1, transform: 'scale(1) rotate(0deg)', filter: 'blur(0px) saturate(1)' },
        { opacity: .9, transform: 'scale(1.025) rotate(-1.4deg)', filter: 'blur(.3px) saturate(1.1)', offset: .22 },
        { opacity: .42, transform: 'scale(.96) rotate(-4deg)', filter: 'blur(2.2px) brightness(.92)', offset: .58 },
        { opacity: 0, transform: 'scale(.9) rotate(-6deg)', filter: 'blur(6px) brightness(.78)' }
    ], { duration: 720, easing: 'cubic-bezier(.2,.82,.2,1)', fill: 'forwards' });

    const newAnim = currentImg.animate([
        { opacity: 0, transform: 'scale(1.14) rotate(3deg)', filter: 'blur(8px) brightness(1.08)' },
        { opacity: .55, transform: 'scale(1.065) rotate(1deg)', filter: 'blur(3px) brightness(1.04)', offset: .42 },
        { opacity: .94, transform: 'scale(1.012) rotate(.15deg)', filter: 'blur(.4px) brightness(1.01)', offset: .78 },
        { opacity: 1, transform: 'scale(1) rotate(0deg)', filter: 'blur(0px) brightness(1)' }
    ], { duration: 880, easing: 'cubic-bezier(.18,.82,.18,1)', fill: 'forwards' });

    aura.animate([
        { opacity: 0, transform: 'scale(.94)' },
        { opacity: .9, transform: 'scale(1.04)', offset: .3 },
        { opacity: .28, transform: 'scale(1.14)', offset: .78 },
        { opacity: 0, transform: 'scale(1.18)' }
    ], { duration: 980, easing: 'ease-out', fill: 'forwards' }).finished.catch(() => {});

    portrait.animate([
        { transform: 'translateY(0px) scale(1)' },
        { transform: 'translateY(-2px) scale(1.018)', offset: .28 },
        { transform: 'translateY(0px) scale(1)' }
    ], { duration: 300, iterations: 2, easing: 'ease-in-out' });

    Promise.allSettled([oldAnim.finished, newAnim.finished]).then(() => {
        currentImg.style.opacity = '';
        currentImg.style.transform = '';
        currentImg.style.filter = '';
        currentImg.classList.remove('mastermind-morph-current');
        oldClone.remove();
        aura.remove();
        portrait.classList.remove('mastermind-burger-morph');
    });
}

function handleMastermindPortraitClick(character, card) {
    if (!character || character.name !== "The Mastermind") return false;
    mastermindPortraitClickCount += 1;
    if (mastermindPortraitClickCount === 1) {
        showCharacterBubble(character, "Do you remember his favorite number? Click him.", "whisper");
        return true;
    }
    if (mastermindPortraitClickCount >= 7 && !mastermindBurgerUnlocked) {
        mastermindBurgerUnlocked = true;
        animateMastermindBurgerUnlock(card, character);
        showCharacterBubble(character, "Seven burgers. Seven burgers is all I can spare to eat with you. Here I am offering you this precious feast, and you waste it by throwing it away.", "whisper");
        return true;
    }
    return false;
}

function playLogoError() {
    if (!shouldShowEasterEggPopup()) return;
    window.clearTimeout(logoErrorTimer);
    document.querySelector(".entity-error")?.remove();
    const overlay = document.createElement("div");
    overlay.className = "entity-error";
    overlay.textContent = "ERROR: Entity interference detected.";
    document.body.appendChild(overlay);
    document.body.classList.add("entity-error-active");
    logoErrorTimer = window.setTimeout(() => {
        overlay.classList.add("entity-error--kidding");
        overlay.textContent = "Just kidding! :3 ";
        logoErrorTimer = window.setTimeout(() => {
            overlay.remove();
            document.body.classList.remove("entity-error-active");
        }, 3000);
    }, 3000);
}

function commitCrossOut(character, options = {}) {
    saveHistory();
    const currentHistoryIndex = history.length - 1;
    const beforeCounts = boardCounts();
    character.eliminated = !character.eliminated;
    if (character.eliminated) {
        triggerCuteEliminationAnimations([character], "manual");
        queueGridTransition({ exitingIds: [character.id], skipExitCloneIds: options.skipExitClone ? [character.id] : [] });
        maybeAutoSwitchToRemainingAfterElimination(1);
    }
    addActionSummary(character.eliminated
        ? `Eliminated ${character.name}.`
        : `Restored ${character.name}.`);
    els.answerBox.innerHTML = character.eliminated
        ? `<strong>Eliminated ${escapeHtml(character.name)}.</strong><span>You can press Restore to bring them back.</span>`
        : `<strong>Restored ${escapeHtml(character.name)}.</strong><span>They are back on the board.</span>`;
    if (character.eliminated && !character.bonusSearchOnly) maybeShowBoardWarnings(beforeCounts, boardCounts());
    commitHistoryAfter(currentHistoryIndex);
    setupQuestions(true);
    render();
}

async function toggleCrossOut(character, animateManual = false) {
    if (gameOver || !character || character.solved || manualEliminationAnimationIds.has(character.id)) return;
    if (isCuteModeActive() || shouldUseFastBoardUpdates()) animateManual = false;
    let manualEffectPlayed = false;
    let effectLockAdded = false;
    let countedManualAnimation = false;

    const finishManualAnimation = () => {
        if (!countedManualAnimation) return;
        countedManualAnimation = false;
        activeManualEliminationAnimations = Math.max(0, activeManualEliminationAnimations - 1);
        if (activeManualEliminationAnimations === 0) pendingManualEliminationRender = false;
    };

    if (animateManual && !character.eliminated) {
        activeManualEliminationAnimations += 1;
        countedManualAnimation = true;
        manualEliminationAnimationIds.add(character.id);
        effectLockAdded = true;
        trackManualEliminateClick(character);
        try {
            manualEffectPlayed = await triggerManualEliminationScreenEffect(character);
        } catch (error) {
            console.warn("Manual elimination animation failed:", character.name, error);
            manualEffectPlayed = false;
        }
    }
    const shouldAnimate = !manualEffectPlayed && animateManual && !character.eliminated && cinematicShakeCharacters.has(character.name);
    if (manualEffectPlayed === "snippet") {
        manualEliminationAnimationIds.delete(character.id);
        if (!gameOver && !character.eliminated && !character.solved) commitCrossOut(character, { deferRenderDuringManualAnimations: true, skipExitClone: true });
        finishManualAnimation();
        return;
    }
    if (manualEffectPlayed === "screen") {
        window.setTimeout(() => {
            manualEliminationAnimationIds.delete(character.id);
            if (!gameOver && !character.eliminated && !character.solved) commitCrossOut(character, { deferRenderDuringManualAnimations: true, skipExitClone: true });
            finishManualAnimation();
        }, 2000);
        return;
    }
    if (!shouldAnimate) {
        if (effectLockAdded) manualEliminationAnimationIds.delete(character.id);
        commitCrossOut(character, { deferRenderDuringManualAnimations: true });
        finishManualAnimation();
        return;
    }
    document.body.classList.add("elimination-cinematic");
    const card = els.grid.querySelector(`.card[data-id="${CSS.escape(character.id)}"]`);
    card?.classList.add("manual-eliminating");
    window.setTimeout(() => {
        document.body.classList.remove("elimination-cinematic");
        manualEliminationAnimationIds.delete(character.id);
        card?.classList.remove("manual-eliminating");
        if (!gameOver && !character.eliminated && !character.solved) {
            commitCrossOut(character, { deferRenderDuringManualAnimations: true });
        } else {
            render();
        }
        finishManualAnimation();
    }, 1050);
}

const bulkGroups = {
    killer: {
        singular: "Killer",
        plural: "Killers",
        matches: c => c.role === "killer"
    },
    survivor: {
        singular: "Survivor",
        plural: "Survivors",
        matches: c => c.role === "survivor"
    },
    female: {
        singular: "Female",
        plural: "Females",
        matches: c => c.gender === "female" || c.gender === "both"
    },
    male: {
        singular: "Male",
        plural: "Males",
        matches: c => c.gender === "male" || c.gender === "both"
    },
    licensed: {
        singular: "Licensed",
        plural: "Licensed",
        matches: c => c.source === "licensed"
    },
    original: {
        singular: "Original",
        plural: "Original",
        matches: c => c.source === "original"
    }
};

async function toggleBulkGroup(groupId) {
    if (gameOver) return;
    const group = bulkGroups[groupId];
    if (!group) return;
    const groupCharacters = characters.filter(c => !c.bonusSearchOnly && group.matches(c));
    const storedIds = bulkGroupEliminatedIds.get(groupId) || new Set();
    const restoring = [...storedIds].some(id => characters.find(c => c.id === id)?.eliminated);
    const targets = restoring
        ? characters.filter(c => storedIds.has(c.id) && c.eliminated)
        : groupCharacters.filter(c => !c.eliminated);
    if (!targets.length) {
        if (storedIds.size) bulkGroupEliminatedIds.delete(groupId);
        render();
        return;
    }
    saveHistory();
    const currentHistoryIndex = history.length - 1;
    const beforeCounts = boardCounts();
    if (restoring) {
        targets.forEach(c => c.eliminated = false);
        bulkGroupEliminatedIds.delete(groupId);
    } else {
        triggerMassEliminationAnimations(targets).catch(error => console.warn("Mass elimination animation failed:", error));
        queueGridTransition({ exitingIds: targets.map(c => c.id) });
        targets.forEach(c => c.eliminated = true);
        maybeAutoSwitchToRemainingAfterElimination(targets.length);
        bulkGroupEliminatedIds.set(groupId, new Set(targets.map(c => c.id)));
    }
    addActionSummary(restoring
        ? `Restored ${group.plural.toLowerCase()} from that bulk action (${targets.length}).`
        : `Eliminated all ${group.plural.toLowerCase()} (${targets.length}).`);
    els.answerBox.innerHTML = restoring
        ? `<strong>Restored ${group.plural}.</strong><span>${targets.length} character${targets.length === 1 ? "" : "s"} from that bulk action back on the board.</span>`
        : `<strong>Eliminated ${group.plural}.</strong><span>${targets.length} character${targets.length === 1 ? "" : "s"} eliminated at once.</span>`;
    if (!restoring) maybeShowBoardWarnings(beforeCounts, boardCounts());
    commitHistoryAfter(currentHistoryIndex);
    setupQuestions(true);
    render();
}

function genderVisualClass(character) {
    if (!character) return "gender-unknown-card";
    if (character.gender === "female") return "gender-female-card";
    if (character.gender === "male") return "gender-male-card";
    if (character.gender === "both") return "gender-both-card";
    return "gender-unknown-card";
}

function genderTagKind(tag) {
    const value = normalized(tag || "");
    if (value.includes("female") && value.includes("male")) return "both";
    if (value.includes("unknown")) return "unknown";
    if (value.includes("female")) return "female";
    if (value.includes("male")) return "male";
    return "neutral";
}

function renderTagMarkup(tags, options = {}) {
    const { gender = false, hair = false, alternateLetters = false } = options;
    return (tags || []).map(tag => {
        const classes = ["tag"];
        if (hair) classes.push("hair-tag");
        const kind = gender ? genderTagKind(tag) : "neutral";
        if (gender) {
            classes.push("gender-tag");
            classes.push(`gender-${kind}`);
        }
        const label = hair ? displayHairTag(tag) : String(tag || "");
        let content = escapeHtml(label);
        if (alternateLetters && gender) {
            content = Array.from(label).map((char, index) => {
                if (/\s|\//.test(char)) return escapeHtml(char);
                const tone = index % 2 === 0 ? 'pink' : 'blue';
                return `<span class="alt-letter alt-letter-${tone}">${escapeHtml(char)}</span>`;
            }).join("");
        }
        return `<span class="${classes.join(" ")}">${content}</span>`;
    }).join("");
}

function revealTarget(won = false, label = "Solved") {
    els.targetBox.classList.toggle("revealed", won);
    els.targetBox.classList.toggle("killer", Boolean(won && target?.role === "killer"));
    els.targetBox.classList.toggle("survivor", Boolean(won && target?.role === "survivor"));
    els.targetPanel.classList.toggle("has-target", won);
    els.targetBox.classList.remove("lore-open");
    els.targetPanel.classList.remove("lore-open-panel");
    if (!won) {
        targetRevealed = false;
        targetLoreOpen = false;
        if (els.targetSummary) {
            els.targetSummary.innerHTML = "";
            els.targetSummary.hidden = true;
        }
        els.targetBox.innerHTML = `<div><div class="question-mark">?</div></div>`;
        renderTargetMinimized();
        return;
    }
    targetRevealed = true;
    targetRevealLabel = label;
    els.targetBox.classList.toggle("lore-open", targetLoreOpen);
    els.targetPanel.classList.toggle("lore-open-panel", targetLoreOpen);
    const isMinaCutie = target.name === "The Trickster" && tricksterCutieUnlocked;
    const targetVisualClass = isMinaCutie ? "gender-female-card" : genderVisualClass(target);
    const targetDisplayName = isMinaCutie ? "Mina" : target.name;
    const targetDisplayGenderTags = isMinaCutie ? ["Female"] : (target.genderTags || [target.genderTag]);
    const targetDisplayGenderAlternate = false;
    const targetPortrait = displayedPortraitFor(target);
    const powerRow = target.role === "killer"
        ? `<div class="intel-row"><b>Power</b><span>${escapeHtml(target.power || "Unknown")}</span></div>`
        : `<div class="intel-row role-row"><b>Role</b><span>${escapeHtml(target.survivorRole || "Survivor")}</span></div>`;
    const lorePanel = targetLoreOpen
        ? `<div class="lore-popover">${escapeHtml(expandedLoreSummary(target))}</div>`
        : "";
    els.targetBox.innerHTML = `
        <div class="target-reveal ${targetVisualClass} ${isMinaCutie ? "mina-cutie-card" : ""}">
          <div class="result-portrait"><img src="${escapeHtml(targetPortrait)}" alt="${escapeHtml(targetDisplayName)} portrait"></div>
          <strong class="target-name">${escapeHtml(targetDisplayName)}</strong>
          <div class="meta target-meta">
            <div class="meta-row">
              <span class="tag">${escapeHtml(target.kind)}</span>
              <span class="tag">${target.year}</span>
              ${(target.speedTags || [target.speedTag]).filter(Boolean).map(tag => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}
            </div>
            <div class="meta-row">
              ${renderTagMarkup(targetDisplayGenderTags, { gender: true, alternateLetters: targetDisplayGenderAlternate })}
              ${renderTagMarkup(target.hairTags || [], { hair: true })}
            </div>
          </div>
          <div class="intel target-intel">
            <div class="intel-row from-row"><b>From</b>${renderFromValue(target)}</div>
            <div class="intel-row"><b>Origin</b><span>${escapeHtml(target.origin)}</span></div>
            ${powerRow}
            <div class="intel-row perks-row"><b>Perks</b><span class="perk-list">${sortedPerks(target.perks).map(renderPerkButton).join("")}</span></div>
              <div class="intel-row lore-intel-row"><b>Lore</b><span class="lore-row lore-cell"><button class="lore hidden-character-lore-toggle" type="button" data-action="lore">${targetLoreOpen ? "Hide summary" : "View summary"}</button></span></div>
          </div>
          ${lorePanel}
        </div>`;
    if (els.targetSummary) {
        els.targetSummary.innerHTML = "";
        els.targetSummary.hidden = true;
    }
    renderTargetMinimized();
    syncTargetPanelHeight();
}

function restoreHistorySnapshot(previous) {
    characters.forEach((c, index) => {
        c.eliminated = previous.eliminated[index];
        c.solved = previous.solved ? previous.solved[index] : false;
    });
    usedQuestionIds = new Set(previous.usedQuestionIds || []);
    permanentlyUsedManualQuestionIds = new Set(previous.permanentlyUsedManualQuestionIds || []);
    bulkGroupEliminatedIds = cloneBulkGroupState(previous.bulkGroupEliminatedIds);
    if (previous.target) restoreTargetRollState(previous.target);
    guesses = previous.guesses;
    els.answerBox.innerHTML = "<strong>Undone.</strong><span>The board stepped back one move.</span>";
    gameOver = false;
    revealTarget(targetRevealed, targetRevealLabel);
    setupQuestions();
    render();
}

function undo() {
    if (!history.length) return;
    if (history.length - 1 <= undoFloor) return;
    let index = history.length - 1;
    while (index > undoFloor && history[index]?.undone) index--;
    if (index <= undoFloor) return;
    undoToHistoryIndex(index);
}

function undoToHistoryIndex(index) {
    if (!Number.isInteger(index) || index < 0 || index >= history.length || index <= undoFloor) return;
    const before = history[index];
    if (before.locked || before.undone) return;
    const after = before.after || history[index + 1] || currentHistorySnapshot();

    characters.forEach((c, characterIndex) => {
        if (before.eliminated[characterIndex] !== after.eliminated[characterIndex] && c.eliminated === after.eliminated[characterIndex]) {
            c.eliminated = before.eliminated[characterIndex];
        }
        if (before.solved?.[characterIndex] !== after.solved?.[characterIndex] && c.solved === after.solved?.[characterIndex]) {
            c.solved = before.solved?.[characterIndex] || false;
        }
    });

    bulkGroupEliminatedIds = cloneBulkGroupState(before.bulkGroupEliminatedIds);
    const beforeUsed = new Set(before.usedQuestionIds || []);
    const afterUsed = new Set(after.usedQuestionIds || []);
    afterUsed.forEach(id => {
        if (!beforeUsed.has(id) && usedQuestionIds.has(id)) usedQuestionIds.delete(id);
    });

    const beforeManual = new Set(before.permanentlyUsedManualQuestionIds || []);
    const afterManual = new Set(after.permanentlyUsedManualQuestionIds || []);
    afterManual.forEach(id => {
        if (!beforeManual.has(id) && permanentlyUsedManualQuestionIds.has(id)) permanentlyUsedManualQuestionIds.delete(id);
    });

    if (before.guesses !== after.guesses && guesses === after.guesses) {
        guesses = before.guesses;
    }
    restoreTargetForUndo(before.target, after.target, { force: historyEntryIsTargetRollOnly(before, after) });
    history[index].undone = true;
    markLogsUndoneAt(index);
    gameOver = false;
    revealTarget(targetRevealed, targetRevealLabel);
    setupQuestions();
    showHistoryStepLastAction("undo", index);
    render();
}

async function redoHistoryIndex(index) {
    if (!Number.isInteger(index) || index < 0 || index >= history.length || index <= undoFloor) return;
    const before = history[index];
    const after = before?.after;
    if (!before || before.locked || !before.undone || !after) return;

    const redoEliminations = characters.filter((c, characterIndex) =>
        before.eliminated[characterIndex] !== after.eliminated[characterIndex]
        && after.eliminated[characterIndex]
        && c.eliminated === before.eliminated[characterIndex]
        && !c.solved
    );
    if (redoEliminations.length) {
        maybeAutoSwitchToRemainingAfterElimination(redoEliminations.length);
        triggerMassEliminationAnimations(redoEliminations).catch(error => console.warn("Mass elimination animation failed:", error));
        queueGridTransition({ exitingIds: redoEliminations.map(c => c.id) });
    }

    characters.forEach((c, characterIndex) => {
        if (before.eliminated[characterIndex] !== after.eliminated[characterIndex] && c.eliminated === before.eliminated[characterIndex]) {
            c.eliminated = after.eliminated[characterIndex];
        }
        if (before.solved?.[characterIndex] !== after.solved?.[characterIndex] && c.solved === (before.solved?.[characterIndex] || false)) {
            c.solved = after.solved?.[characterIndex] || false;
        }
    });

    bulkGroupEliminatedIds = cloneBulkGroupState(after.bulkGroupEliminatedIds);
    usedQuestionIds = new Set([...usedQuestionIds, ...(after.usedQuestionIds || []).filter(id => !(before.usedQuestionIds || []).includes(id))]);
    permanentlyUsedManualQuestionIds = new Set([
        ...permanentlyUsedManualQuestionIds,
        ...(after.permanentlyUsedManualQuestionIds || []).filter(id => !(before.permanentlyUsedManualQuestionIds || []).includes(id))
    ]);
    if (before.guesses !== after.guesses && guesses === before.guesses) {
        guesses = after.guesses;
    }
    restoreTargetForRedo(before.target, after.target, { force: historyEntryIsTargetRollOnly(before, after) });
    history[index].undone = false;
    questionLog.forEach(item => {
        if (Number.isInteger(item.historyIndex) && item.historyIndex === index) item.undone = false;
    });
    actionLog.forEach(item => {
        if (Number.isInteger(item?.historyIndex) && item.historyIndex === index) item.undone = false;
    });
    gameOver = false;
    revealTarget(targetRevealed, targetRevealLabel);
    setupQuestions();
    showHistoryStepLastAction("redo", index);
    render();
}

function filteredCharacters() {
    const query = normalized(searchQuery);
    const aliasMatches = aliasMatchesForQuery(query);
    const regularMatchesExist = Boolean(query) && characters.some(c => regularCharacterMatchesSearch(c, query, aliasMatches));
    return characters.filter(c => {
        if (!characterVisibleForSearch(c, query, aliasMatches, regularMatchesExist)) return false;
        if (statusFilter === "standing" && c.eliminated) return false;
        if (statusFilter === "eliminated" && !c.eliminated) return false;
        if (roleFilter && c.role !== roleFilter) return false;
        return true;
    }).filter(c => {
        return characterMatchesSearch(c, query, aliasMatches, regularMatchesExist);
    });
}

function renderCard(c) {
    const isMinaCutie = c.name === "The Trickster" && tricksterCutieUnlocked;
    const visualGenderClass = isMinaCutie ? "gender-female-card" : genderVisualClass(c);
    const displayName = isMinaCutie ? "Mina" : c.name;
    const displayGenderTags = isMinaCutie ? ["Female"] : (c.genderTags || [c.genderTag]);
    const displayGenderAlternate = false;
    const speedTagItems = (c.speedTags || [c.speedTag]).filter(Boolean);
    const speedTagsFirstRow = speedTagItems;
    const speedTagsSecondRow = [];
    const showKindTag = !c.bonusSearchOnly;
    const powerRow = c.role === "killer"
        ? `<div class="intel-row"><b>Power</b><span>${escapeHtml(c.power || "Unknown")}</span></div>`
        : `<div class="intel-row role-row"><b>Role</b><span>${escapeHtml(c.survivorRole || "Survivor")}</span></div>`;
    const loreOpen = activeLoreId === c.id;
    const lorePanel = loreOpen
        ? `<div class="lore-popover">${escapeHtml(expandedLoreSummary(c))}</div>`
        : "";
    const nameHtml = c.twitchUrl
        ? `<a class="name-link" href="${escapeHtml(c.twitchUrl)}" target="_blank" rel="noopener noreferrer" title="Open ${escapeHtml(displayName)} on Twitch">${escapeHtml(displayName)}</a>`
        : escapeHtml(displayName);
    return `
        <div class="card ${c.role} ${visualGenderClass} ${isMinaCutie ? "mina-cutie-card" : ""} ${c.bonusSearchOnly ? "bonus-card streamer-glow" : ""} ${daddyGlowCharacters.has(c.name) ? "daddy-glow" : ""} ${mommyGlowCharacters.has(c.name) ? "mommy-glow" : ""} ${c.eliminated ? "eliminated" : ""} ${c.solved ? "solved" : ""} ${loreOpen ? "lore-open" : ""}" data-id="${c.id}">
          <button class="restore-overlay" type="button" data-action="restore" aria-label="Restore ${escapeHtml(displayName)}" ${c.eliminated ? "" : "hidden disabled"}>Restore</button>
          <div class="card-top">
            <div class="portrait has-image">
              <img src="${escapeHtml(displayedPortraitFor(c))}" alt="${escapeHtml(displayName)} portrait" loading="${portraitLoadingMode()}" decoding="async">
            </div>
          </div>
          <div class="card-actions" aria-label="${escapeHtml(displayName)} actions">
            <button class="card-action cross" type="button" data-action="cross" ${c.eliminated ? "disabled" : ""}>Eliminate</button>
            <button class="card-action guess" type="button" data-action="guess" ${(c.eliminated || c.solved) ? "disabled" : ""}>Guess</button>
          </div>
          <div class="card-body">
            <div class="name">${nameHtml}</div>
            <div class="meta">
              <div class="meta-row">
                ${showKindTag ? `<span class="tag">${escapeHtml(c.kind)}</span>` : ""}
                <span class="tag">${c.year}</span>
                ${speedTagsFirstRow.map(tag => `<span class="tag speed-tag">${escapeHtml(tag)}</span>`).join("")}
              </div>
              <div class="meta-row">
                ${renderTagMarkup(displayGenderTags, { gender: true, alternateLetters: displayGenderAlternate })}
                ${speedTagsSecondRow.map(tag => `<span class="tag speed-tag">${escapeHtml(tag)}</span>`).join("")}
                ${renderTagMarkup(c.hairTags || [], { hair: true })}
              </div>
            </div>
            <div class="intel">
              <div class="intel-row from-row"><b>From</b>${renderFromValue(c)}</div>
              <div class="intel-row"><b>Origin</b><span>${escapeHtml(c.origin)}</span></div>
              ${powerRow}
              <div class="intel-row perks-row"><b>Perks</b><span class="perk-list">${sortedPerks(c.perks).map(renderPerkButton).join("")}</span></div>
              <div class="intel-row"><b>Lore</b><span class="lore-row"><button class="lore" type="button" data-action="lore">${loreOpen ? "Hide summary" : "View summary"}</button></span></div>
              ${lorePanel}
            </div>
          </div>
        </div>`;
}

function getColumnCount() {
    const phoneWidth = Math.min(
        window.innerWidth || Number.POSITIVE_INFINITY,
        document.documentElement?.clientWidth || Number.POSITIVE_INFINITY,
        window.visualViewport?.width || Number.POSITIVE_INFINITY
    );
    if (phoneWidth <= 760 || window.matchMedia("(max-width: 760px)").matches) return 1;
    if (window.matchMedia("(max-width: 840px) and (pointer: coarse)").matches) return 2;
    if (window.matchMedia("(max-width: 560px)").matches) return 2;
    if (window.matchMedia("(max-width: 840px) and (pointer: fine)").matches) return 3;
    if (window.matchMedia("(max-width: 840px)").matches) return 3;
    const boardWidth = els.grid?.clientWidth || window.innerWidth;
    if (boardWidth < 430) return 3;
    const cardMinWidth = 224;
    const gap = 12;
    return Math.max(3, Math.min(5, Math.floor((boardWidth + gap) / (cardMinWidth + gap))));
}

function renderColumns(list) {
    const columnCount = getColumnCount();
    const columns = Array.from({ length: columnCount }, () => []);
    list.forEach((character, index) => {
        columns[index % columnCount].push(character);
    });
    return `<div class="board-columns" style="--board-column-count:${columnCount}; grid-template-columns: repeat(${columnCount}, minmax(0, 1fr));">${columns.map(column => `<div class="board-column">${column.map(renderCard).join("")}</div>`).join("")}</div>`;
}
function renderRoleSections(list) {
    const goats = list.filter(c => c.bonusSearchOnly);
    const killers = list.filter(c => !c.bonusSearchOnly && c.role === "killer");
    const survivors = list.filter(c => !c.bonusSearchOnly && c.role === "survivor");
    const sections = [];
    if (goats.length) {
        sections.push(`<div class="role-break" data-role-section="goats">GOATS</div>${renderColumns(goats)}`);
    }
    if (killers.length) {
        sections.push(`<div class="role-break" data-role-section="killers">Killers</div>${renderColumns(killers)}`);
    }
    if (survivors.length) {
        sections.push(`<div class="role-break role-break-survivors" data-role-section="survivors">Survivors</div>${renderColumns(survivors)}`);
    }
    return sections.join("");
}

function queueGridTransition(options = {}) {
    const state = pendingGridTransition || { exitingIds: new Set(), skipExitCloneIds: new Set() };
    for (const id of options.exitingIds || []) state.exitingIds.add(id);
    for (const id of options.skipExitCloneIds || []) state.skipExitCloneIds.add(id);
    pendingGridTransition = state;
}

function snapshotGridCards() {
    const map = new Map();
    if (!els.grid) return map;
    els.grid.querySelectorAll('.card[data-id], .role-break[data-role-section]').forEach(element => {
        const id = element.dataset.id || (element.dataset.roleSection ? `role-${element.dataset.roleSection}` : "");
        if (!id) return;
        map.set(id, { rect: element.getBoundingClientRect(), html: element.outerHTML });
    });
    return map;
}

function spawnGridExitClone(snapshot, duration = 640) {
    if (shouldUseFastBoardUpdates()) return;
    if (isCuteModeActive()) {
        const darkApi = document.body?.classList?.contains("cute-dark-mode") ? window.GuessWhoCuteDarkMode : null;
        const cuteApi = typeof darkApi?.playGridExitCloneFromSnapshot === "function" ? darkApi : window.GuessWhoCuteMode;
        if (typeof cuteApi?.playGridExitCloneFromSnapshot === "function" && cuteApi.playGridExitCloneFromSnapshot(snapshot, { duration })) return;
    }
    const clone = document.createElement('div');
    clone.className = 'grid-exit-clone';
    clone.innerHTML = snapshot.html;
    const shell = clone.firstElementChild;
    if (!shell) return;
    shell.classList.remove('eliminated', 'solved', 'manual-eliminating', 'manual-effect-focus');
    shell.style.width = '100%';
    shell.style.height = '100%';
    shell.style.maxHeight = 'none';
    shell.style.minWidth = '0';
    shell.querySelectorAll('button').forEach(btn => btn.remove());
    clone.style.position = 'fixed';
    clone.style.left = `${snapshot.rect.left}px`;
    clone.style.top = `${snapshot.rect.top}px`;
    clone.style.width = `${snapshot.rect.width}px`;
    clone.style.height = `${snapshot.rect.height}px`;
    clone.style.pointerEvents = 'none';
    clone.style.zIndex = '1200';
    clone.style.transformOrigin = '50% 50%';
    clone.style.contain = 'layout style paint';
    clone.style.overflow = 'visible';
    const aura = document.createElement('div');
    aura.style.cssText = 'position:absolute;inset:-12px;border-radius:16px;background:radial-gradient(circle at center, rgba(255,56,72,.22), rgba(100,0,0,.16) 45%, transparent 78%);filter:blur(14px);opacity:.82;mix-blend-mode:screen;pointer-events:none;';
    clone.appendChild(aura);
    document.body.appendChild(clone);
    clone.animate([
        { opacity: 1, transform: 'translateY(0px) scale(1)', filter: 'brightness(1) blur(0px)' },
        { opacity: 1, transform: 'translateY(-8px) scale(1.012)', filter: 'brightness(1.02) blur(0px)', offset: .22 },
        { opacity: .94, transform: 'translateY(-14px) scale(1.024)', filter: 'brightness(.98) blur(.4px)', offset: .42 },
        { opacity: .46, transform: 'translateY(-6px) scale(.94)', filter: 'brightness(.54) blur(5px)', offset: .78 },
        { opacity: 0, transform: 'translateY(10px) scale(.86)', filter: 'brightness(.18) blur(12px)' }
    ], { duration, easing: 'cubic-bezier(.2,.82,.2,1)', fill: 'forwards' }).finished.catch(() => {}).then(() => clone.remove());
}

function doRenderGrid() {
    els.grid.classList.add("masonry");
    const filtered = filteredCharacters();
    if (!filtered.length) {
        els.grid.innerHTML = searchQuery
            ? `<div class="empty-board">No characters match "${escapeHtml(searchQuery)}".</div>`
            : `<div class="empty-board">No characters fit this filter.</div>`;
        return;
    }
    els.grid.innerHTML = renderRoleSections(filtered);
}

function animateRenderedGridTransition(previousCards, transition) {
    if (!els.grid) return;
    blockTransitionInteractions(940);
    const nextCards = new Map();
    els.grid.querySelectorAll('.card[data-id], .role-break[data-role-section]').forEach(element => {
        const id = element.dataset.id || (element.dataset.roleSection ? `role-${element.dataset.roleSection}` : "");
        if (id) nextCards.set(id, element);
    });
    const exitingIds = transition?.exitingIds || new Set();
    const skipExitCloneIds = transition?.skipExitCloneIds || new Set();
    const hasGoatResults = [...nextCards.entries()].some(([id, element]) => id === "role-goats" || element.classList.contains("bonus-card"));

    previousCards.forEach((snapshot, id) => {
        if (exitingIds.has(id) && !skipExitCloneIds.has(id)) {
            spawnGridExitClone(snapshot);
            return;
        }
    });

    let goatEntryIndex = 0;
    nextCards.forEach((card, id) => {
        const prev = previousCards.get(id);
        const isGoatEntry = id === "role-goats" || card.classList.contains("bonus-card");
        if (!prev) {
            const isReappearingEliminated = exitingIds.has(id);
            const frames = isGoatEntry
                ? [
                    { opacity: 0, transform: 'translateY(28px) scale(.955)', filter: 'blur(2px)' },
                    { opacity: 0, transform: 'translateY(24px) scale(.965)', filter: 'blur(1.5px)', offset: .12 },
                    { opacity: 1, transform: 'translateY(0px) scale(1)', filter: 'blur(0px)' }
                ]
                : isReappearingEliminated
                    ? [
                        { opacity: 0, transform: 'translateY(0px) scale(.985)' },
                        { opacity: 0, transform: 'translateY(0px) scale(.985)', offset: .52 },
                        { opacity: 1, transform: 'translateY(0px) scale(1)' }
                    ]
                    : [
                        { opacity: 0, transform: 'translateY(14px) scale(.985)' },
                        { opacity: 1, transform: 'translateY(0px) scale(1)' }
                    ];
            card.animate(frames, {
                duration: isGoatEntry ? 620 : isReappearingEliminated ? 640 : 320,
                delay: isGoatEntry ? Math.min(goatEntryIndex++ * 42, 260) : 0,
                easing: 'cubic-bezier(.16,.9,.2,1)',
                fill: 'both'
            });
            return;
        }
        const nextRect = card.getBoundingClientRect();
        const dx = prev.rect.left - nextRect.left;
        const dy = prev.rect.top - nextRect.top;
        if (Math.abs(dx) > 0.5 || Math.abs(dy) > 0.5) {
            card.animate([
                { transform: `translate(${dx}px, ${dy}px)` },
                { transform: 'translate(0px, 0px)' }
            ], { duration: isGoatEntry ? 540 : 420, easing: 'cubic-bezier(.2,.82,.2,1)' });
        }
    });
}

let mobileFastGridSignature = "";

function mobileFastGridBuildSignature() {
    return [
        getColumnCount(),
        activeLoreId ?? "",
        document.body?.classList?.contains("cute-mode") ? "cute" : "normal",
        document.body?.classList?.contains("cute-dark-mode") ? "dark" : "light",
        tricksterCutieUnlocked ? "mina" : "trickster",
        mastermindBurgerUnlocked ? "burger" : "mastermind"
    ].join("|");
}

function characterMatchesCurrentBoardView(character, query, aliasMatches, regularMatchesExist) {
    if (!characterVisibleForSearch(character, query, aliasMatches, regularMatchesExist)) return false;
    if (statusFilter === "standing" && character.eliminated) return false;
    if (statusFilter === "eliminated" && !character.eliminated) return false;
    if (roleFilter && character.role !== roleFilter) return false;
    return characterMatchesSearch(character, query, aliasMatches, regularMatchesExist);
}

function syncMobileFastCardState(card, character, visible) {
    card.hidden = !visible;
    card.classList.toggle("eliminated", Boolean(character.eliminated));
    card.classList.toggle("solved", Boolean(character.solved));
    const displayName = character.name === "The Trickster" && tricksterCutieUnlocked ? "Mina" : character.name;
    const restore = card.querySelector(".restore-overlay");
    if (restore) {
        restore.hidden = !character.eliminated;
        restore.disabled = !character.eliminated;
        restore.setAttribute("aria-label", `Restore ${displayName}`);
    }
    const cross = card.querySelector('[data-action="cross"]');
    if (cross) cross.disabled = Boolean(character.eliminated);
    const guess = card.querySelector('[data-action="guess"]');
    if (guess) guess.disabled = Boolean(character.eliminated || character.solved);
}

function updateMobileFastGridVisibility() {
    const query = normalized(searchQuery);
    const aliasMatches = aliasMatchesForQuery(query);
    const regularMatchesExist = Boolean(query) && characters.some(c => regularCharacterMatchesSearch(c, query, aliasMatches));
    const characterById = new Map(characters.map(character => [String(character.id), character]));
    let anyVisible = false;
    els.grid.querySelectorAll(".card[data-id]").forEach(card => {
        const character = characterById.get(card.dataset.id);
        if (!character) return;
        const visible = characterMatchesCurrentBoardView(character, query, aliasMatches, regularMatchesExist);
        syncMobileFastCardState(card, character, visible);
        anyVisible = anyVisible || visible;
    });
    els.grid.querySelectorAll(".role-break[data-role-section]").forEach(breakEl => {
        const section = breakEl.nextElementSibling;
        const sectionVisible = Boolean(section?.querySelector(".card[data-id]:not([hidden])"));
        breakEl.hidden = !sectionVisible;
        if (section?.classList?.contains("board-columns")) section.hidden = !sectionVisible;
    });
    let empty = els.grid.querySelector(".mobile-fast-empty");
    if (!empty) {
        empty = document.createElement("div");
        empty.className = "empty-board mobile-fast-empty";
        els.grid.appendChild(empty);
    }
    empty.textContent = searchQuery ? `No characters match "${searchQuery}".` : "No characters fit this filter.";
    empty.hidden = anyVisible;
}

function renderMobileFastGrid() {
    const signature = mobileFastGridBuildSignature();
    if (mobileFastGridSignature !== signature || !els.grid.classList.contains("mobile-fast-grid")) {
        els.grid.classList.add("masonry", "mobile-fast-grid");
        els.grid.innerHTML = renderRoleSections(characters);
        mobileFastGridSignature = signature;
    }
    updateMobileFastGridVisibility();
    return true;
}

function invalidateMobileFastGrid() {
    mobileFastGridSignature = "";
}

function renderGrid() {
    if (shouldUseFastBoardUpdates()) {
        pendingGridTransition = null;
        renderMobileFastGrid();
        return;
    }
    els.grid.classList.remove("mobile-fast-grid");
    mobileFastGridSignature = "";
    const previousCards = snapshotGridCards();
    const transition = pendingGridTransition;
    pendingGridTransition = null;
    doRenderGrid();
    if (transition && (previousCards.size || transition.exitingIds?.size)) {
        requestAnimationFrame(() => animateRenderedGridTransition(previousCards, transition));
    }
}

function getQuestionEliminatedNames(item) {
    return Array.isArray(item?.eliminatedNames)
        ? item.eliminatedNames.map(name => repairText(name)).filter(Boolean)
        : [];
}

function roleForEliminatedName(name) {
    const normalizedName = normalized(name);
    return characters.find(character => normalized(character.name) === normalizedName)?.role || "survivor";
}

function renderQuestionElimColumn(names) {
    return `<ul>${names.map(name => `<li>${escapeHtml(name)}</li>`).join("")}</ul>`;
}

function renderQuestionElimPage(names) {
    const left = names.slice(0, 5);
    const right = names.slice(5, 10);
    return `<div class="question-elim-page ${right.length ? "has-right-column" : ""}">
        <div class="question-elim-name-col">${renderQuestionElimColumn(left)}</div>
        ${right.length ? `<div class="question-elim-name-col">${renderQuestionElimColumn(right)}</div>` : ""}
    </div>`;
}

function renderQuestionElimGroup(title, names) {
    if (!names.length) return "";
    const pages = [];
    for (let index = 0; index < names.length; index += 10) {
        pages.push(renderQuestionElimPage(names.slice(index, index + 10)));
    }
    const body = `<div class="question-elim-listbox ${names.length > 10 ? "is-scrollable" : ""}">${pages.join("")}</div>`;
    return `<section class="question-elim-group ${names.length > 10 ? "has-scroll" : ""}">
        <h4>${escapeHtml(title)}</h4>
        ${body}
    </section>`;
}

function ensureQuestionElimPopover() {
    let popover = document.querySelector("#questionElimPopover");
    if (popover) return popover;
    popover = document.createElement("div");
    popover.id = "questionElimPopover";
    popover.className = "question-elim-popover";
    popover.hidden = true;
    document.body.appendChild(popover);
    return popover;
}

function positionQuestionElimPopover(anchor = document.querySelector(".question-elim-toggle[aria-expanded='true']")) {
    const popover = document.querySelector("#questionElimPopover");
    if (!popover || popover.hidden || !anchor) return;
    const panel = document.querySelector(".question-log-panel");
    if (!panel) return;
    const panelRect = panel.getBoundingClientRect();
    const buttonRect = anchor.getBoundingClientRect();
    const pageX = window.scrollX || document.documentElement.scrollLeft || 0;
    const pageY = window.scrollY || document.documentElement.scrollTop || 0;
    const viewportWidth = window.innerWidth || document.documentElement.clientWidth || panelRect.width;
    const desiredWidth = panelRect.width;
    const rightAlignedLeft = buttonRect.right + pageX - desiredWidth;
    const minLeft = panelRect.left + pageX;
    const maxLeft = Math.min(panelRect.right + pageX - desiredWidth, pageX + viewportWidth - desiredWidth - 8);
    const left = Math.max(minLeft, Math.min(rightAlignedLeft, maxLeft));
    const arrowLeft = Math.max(18, Math.min(buttonRect.left + pageX + buttonRect.width / 2 - left, desiredWidth - 18));
    popover.style.setProperty("position", "absolute", "important");
    popover.style.setProperty("inset", "auto", "important");
    popover.style.setProperty("left", `${left}px`, "important");
    popover.style.setProperty("top", `${buttonRect.bottom + pageY + 8}px`, "important");
    popover.style.setProperty("right", "auto", "important");
    popover.style.setProperty("bottom", "auto", "important");
    popover.style.setProperty("width", `${desiredWidth}px`, "important");
    popover.style.setProperty("max-width", `${panelRect.width}px`, "important");
    popover.style.setProperty("--question-elim-arrow-left", `${arrowLeft}px`);
}

function closeQuestionElimPopover() {
    const popover = document.querySelector("#questionElimPopover");
    if (popover) popover.hidden = true;
    activeQuestionElimIndex = null;
    document.querySelectorAll(".question-elim-toggle[aria-expanded='true']").forEach(button => {
        button.setAttribute("aria-expanded", "false");
        button.textContent = "View";
    });
}

function openQuestionElimPopover(index, anchor = null) {
    const item = questionLog[index];
    if (!item) return;
    const popover = ensureQuestionElimPopover();
    if (!popover) return;
    const isOpen = !popover.hidden && activeQuestionElimIndex === index;
    if (isOpen) {
        closeQuestionElimPopover();
        return;
    }
    const names = getQuestionEliminatedNames(item);
    const killers = names.filter(name => roleForEliminatedName(name) === "killer");
    const survivors = names.filter(name => roleForEliminatedName(name) !== "killer");
    const groupsHtml = `${renderQuestionElimGroup("Killers", killers)}${renderQuestionElimGroup("Survivors", survivors)}`;
    popover.innerHTML = `
        <div class="question-elim-groups">
            ${groupsHtml || `<p class="question-elim-empty">No characters were eliminated by this question.</p>`}
        </div>
    `;
    activeQuestionElimIndex = index;
    document.querySelectorAll(".question-elim-toggle").forEach(button => {
        const expanded = button === anchor;
        button.setAttribute("aria-expanded", expanded ? "true" : "false");
        button.textContent = expanded ? "Hide" : "View";
    });
    popover.hidden = false;
    positionQuestionElimPopover(anchor);
    requestAnimationFrame(() => positionQuestionElimPopover(anchor));
}
window.openQuestionElimPopover = openQuestionElimPopover;

function renderLog() {
    if (!questionLog.length) {
        closeQuestionElimPopover();
        els.log.innerHTML = `<div class="log-item"><span class="pill">...</span><span>No questions yet.</span></div>`;
        return;
    }
    els.log.innerHTML = questionLog.map((item, index) => {
        const canUndo = !item.undone && Number.isInteger(item.historyIndex) && item.historyIndex > undoFloor && item.historyIndex < history.length && !history[item.historyIndex]?.locked && !history[item.historyIndex]?.undone;
        const canRedo = item.undone && Number.isInteger(item.historyIndex) && item.historyIndex > undoFloor && item.historyIndex < history.length && history[item.historyIndex]?.undone;
        const viewOpen = activeQuestionElimIndex === index;
        return `
        <div class="log-item question-log-entry ${item.undone ? "undone" : ""}">
          <span class="log-control">
            <span class="pill ${item.result ? "yes" : "no"}">${item.result ? "Yes" : "No"}</span>
            <button class="log-step-btn" type="button" ${canUndo ? `data-undo-index="${item.historyIndex}"` : canRedo ? `data-redo-index="${item.historyIndex}"` : "disabled"}>${canRedo ? "Redo" : "Undo"}</button>
          </span>
          <span class="log-copy">${escapeHtml(item.label)}${item.undone ? "" : `<br><small>${item.removed} eliminated</small>`}</span>
          <button class="log-step-btn question-elim-toggle" type="button" data-elim-view="${index}" aria-expanded="${viewOpen ? "true" : "false"}" onpointerdown="event.stopPropagation()" onclick="event.preventDefault(); event.stopPropagation(); window.openQuestionElimPopover(Number(this.dataset.elimView), this); return false;">${viewOpen ? "Hide" : "View"}</button>
        </div>
      `;
    }).join("");
    if (activeQuestionElimIndex !== null) {
        const anchor = els.log.querySelector(`.question-elim-toggle[data-elim-view="${activeQuestionElimIndex}"]`);
        if (anchor) positionQuestionElimPopover(anchor);
        else closeQuestionElimPopover();
    }
}

function renderActionLog() {
    if (!actionLog.length) {
        els.actionLog.innerHTML = `<div class="log-item"><span class="pill">...</span><span>No board changes yet.</span></div>`;
        return;
    }
    els.actionLog.innerHTML = actionLog.map(item => {
        const entry = typeof item === "string" ? { summary: item, historyIndex: null } : item;
        const canUndo = !entry.undone && Number.isInteger(entry.historyIndex) && entry.historyIndex > undoFloor && entry.historyIndex < history.length && !history[entry.historyIndex]?.locked && !history[entry.historyIndex]?.undone;
        const canRedo = entry.undone && Number.isInteger(entry.historyIndex) && entry.historyIndex > undoFloor && entry.historyIndex < history.length && history[entry.historyIndex]?.undone;
        return `
        <button class="log-item action-log-entry ${entry.undone ? "undone" : ""}" type="button" ${canUndo ? `data-undo-index="${entry.historyIndex}"` : canRedo ? `data-redo-index="${entry.historyIndex}"` : "disabled"}>
          <span class="pill">${canRedo ? "Redo" : canUndo ? "Undo" : "..."}</span>
          <span class="log-copy">${escapeHtml(entry.summary)}</span>
        </button>
      `;
    }).join("");
}

function expandedLoreSummary(character) {
    return String(character?.lore || "No lore summary available.").trim();
}

function sortedPerks(perks) {
    return [...(perks || [])].sort((a, b) => b.length - a.length || a.localeCompare(b));
}

function renderStats() {
    const playableCharacters = characters.filter(c => !c.bonusSearchOnly);
    const left = playableCharacters.filter(c => !c.eliminated).length;
    els.totalCount.textContent = playableCharacters.length;
    els.leftCount.textContent = left;
}

function renderFilters() {
    document.querySelectorAll("[data-filter]").forEach(button => {
        const filter = button.dataset.filter;
        const active = filter === "all"
            ? !statusFilter && !roleFilter
            : filter === "standing" || filter === "eliminated"
                ? statusFilter === filter
                : roleFilter === filter;
        button.classList.toggle("active", active);
        button.classList.toggle("selected", active);
        button.setAttribute("aria-pressed", String(active));
    });
    document.querySelectorAll("[data-cross-group]").forEach(button => {
        const groupId = button.dataset.crossGroup;
        const group = bulkGroups[groupId];
        if (!group) return;
        const storedIds = bulkGroupEliminatedIds.get(groupId) || new Set();
        const canRestore = [...storedIds].some(id => characters.find(c => c.id === id)?.eliminated);
        if (storedIds.size && !canRestore) bulkGroupEliminatedIds.delete(groupId);
        button.classList.toggle("active", canRestore);
        button.classList.toggle("selected", canRestore);
        button.setAttribute("aria-pressed", String(canRestore));
        button.textContent = `${canRestore ? "Restore" : "Eliminate"} ${group.plural}`;
    });
}

function renderSearchSuggestions() {
    const query = normalized(searchQuery);
    if (els.searchClearBtn) els.searchClearBtn.hidden = !query;
    const aliasMatches = aliasMatchesForQuery(query);
    const regularMatchesExist = Boolean(query) && characters.some(c => regularCharacterMatchesSearch(c, query, aliasMatches));
    const show = query.length >= 1 && document.activeElement === els.searchInput;
    const allMatches = show
        ? characters
            .filter(character => characterVisibleForSearch(character, query, aliasMatches, regularMatchesExist))
            .filter(character => characterMatchesSearch(character, query, aliasMatches, regularMatchesExist))
        : [];
    const matches = allMatches.some(character => character.bonusSearchOnly) ? allMatches : allMatches.slice(0, 6);
    els.searchInput.setAttribute("aria-expanded", String(show && matches.length > 0));
    if (!show || !matches.length) {
        els.searchSuggestions.innerHTML = "";
        els.searchSuggestions.hidden = true;
        return;
    }
    els.searchSuggestions.hidden = false;
    els.searchSuggestions.innerHTML = matches.map(character => `
        <button class="search-suggestion ${genderVisualClass(character)}" type="button" data-name="${escapeHtml(character.name)}">
          <img src="${escapeHtml(displayedPortraitFor(character))}" alt="">
          <strong class="search-suggestion-name">${escapeHtml(character.name)}</strong>
        </button>
      `).join("");
}

function render() {
    renderStats();
    renderFilters();
    renderSearchSuggestions();
    renderGrid();
    renderActionLog();
    renderLog();
    const canUndo = canUndoAnyHistoryEntry();
    els.undoBtn.disabled = !canUndo;
    els.actionUndoBtn.disabled = !canUndo;
    els.questionUndoBtn.disabled = !canUndo;
    syncTargetPanelHeight();
}

function syncTargetPanelHeight() {
    if (!els.targetPanel) return;
    els.targetPanel.style.removeProperty("--synced-target-height");
}

function updateHighZoomLayoutClass() {
    const zoomEstimate = window.outerWidth && window.innerWidth
        ? window.outerWidth / window.innerWidth
        : 1;
    const hasCoarsePointer = window.matchMedia?.("(pointer: coarse)")?.matches ?? false;
    const desktopZoomBreakpoint = !hasCoarsePointer && window.innerWidth <= 1040;
    const isDesktopMediumZoomLayout = !hasCoarsePointer && (desktopZoomBreakpoint || (zoomEstimate >= 1.65 && zoomEstimate < 2.35));
    const isHighZoomLayout = hasCoarsePointer || zoomEstimate >= 2.35;
    document.documentElement.classList.toggle("zoom-filter-two-row", isDesktopMediumZoomLayout && !isHighZoomLayout);
    document.documentElement.classList.toggle("zoom-250plus", isHighZoomLayout);
}

function newGame() {
    invalidateMobileFastGrid();
    characters.forEach(c => c.eliminated = false);
    characters.forEach(c => c.solved = false);
    history = [];
    questionLog = [];
    actionLog = [];
    bulkGroupEliminatedIds = new Map();
    manualEliminateClickCounts = new Map();
    mastermindPortraitClickCount = 0;
    mastermindBurgerUnlocked = false;
    tricksterCutieUnlocked = false;
    hoverMessageTimers.forEach(timer => window.clearTimeout(timer));
    hoverMessageTimers = new Map();
    window.clearTimeout(logoErrorTimer);
    document.querySelector(".entity-error")?.remove();
    document.body.classList.remove("entity-error-active");
    queuedEntityWatchMessage = null;
    wrongGuessStreak = 0;
    manualEliminationAnimationIds.clear();
    activeManualEliminationAnimations = 0;
    pendingManualEliminationRender = false;
    window.clearTimeout(manualScreenEffectTimer);
    document.body.classList.remove("elimination-cinematic", "manual-effect-dredge", "manual-effect-static", "manual-effect-unknown", "manual-effect-ghoul", "manual-effect-fog");
    document.querySelectorAll(".manual-effect-focus").forEach(card => card.classList.remove("manual-effect-focus"));
    guesses = 0;
    gameOver = false;
    resetBoardFilters();
    autoSwitchedToRemainingThisGame = false;
    searchQuery = "";
    baseSkipped = false;
    activeLoreId = null;
    targetLoreOpen = false;
    targetRevealed = false;
    targetRevealLabel = "Your Pick";
    targetMinimized = false;
    pendingGuess = null;
    customCounterExplained = false;
    customUnlockAdvancedWasUnlocked = false;
    closeCustomUnlockPopover();
    usedQuestionIds = new Set();
    permanentlyUsedManualQuestionIds = new Set();
    undoFloor = -1;
    chooseTarget();
    revealTarget(false);
    els.answerBox.innerHTML = "Ask your friend a question<br>then click Yes or No.";
    if (els.resultDialog.open) els.resultDialog.close();
    clearCharacterSearch();
    setupQuestions();
    render();
}

function confirmNewGame() {
    if (els.newGameDialog.open) return;
    els.newGameDialog.showModal();
}

els.questionSelect.addEventListener("change", () => { setupQuestions(true); updateQuestionPlaceholderState(); });
els.searchInput.addEventListener("input", () => {
    searchQuery = els.searchInput.value.trim();
    maybeLaunchEyebrowBurst(searchQuery);
    render();
});
els.searchClearBtn?.addEventListener("click", event => {
    event.preventDefault();
    event.stopPropagation();
    clearCharacterSearch({ focus: true, renderBoard: true });
});
els.searchInput.addEventListener("focus", () => {
    renderSearchSuggestions();
});
els.howToBtn.addEventListener("click", event => {
    event.stopPropagation();
    const willOpen = els.howToPopover.hidden;
    els.howToPopover.hidden = !willOpen;
    els.howToBtn.setAttribute("aria-expanded", String(willOpen));
    if (willOpen) {
        positionHowToPopover();
        requestAnimationFrame(positionHowToPopover);
    }
});
els.customUnlockBtn.addEventListener("click", event => {
    event.stopPropagation();
    clearCustomUnlockAutoCloseTimer();
    customCounterExplained = true;
    updateCustomQuestionCounter();
    const willOpen = els.customUnlockPopover.hidden;
    els.customUnlockPopover.hidden = !willOpen;
    els.customUnlockBtn.setAttribute("aria-expanded", String(willOpen));
    if (willOpen) {
        positionCustomUnlockPopover();
        requestAnimationFrame(() => positionCustomUnlockPopover());
    }
});
els.skipBaseBtn.addEventListener("click", skipBaseQuestions);
els.yesBtn.addEventListener("click", () => applyManualAnswer(true));
els.noBtn.addEventListener("click", () => applyManualAnswer(false));
els.newGameBtn.addEventListener("click", confirmNewGame);
els.rollCharacterBtn.addEventListener("click", rollManualCharacter);
els.minimizeTargetBtn.addEventListener("click", toggleTargetMinimized);
els.undoBtn.addEventListener("click", undo);
els.actionUndoBtn.addEventListener("click", undo);
els.questionUndoBtn.addEventListener("click", undo);
els.actionLog.addEventListener("click", event => {
    const button = event.target.closest("[data-undo-index]");
    const redoButton = event.target.closest("[data-redo-index]");
    if (button) undoToHistoryIndex(Number(button.dataset.undoIndex));
    if (redoButton) redoHistoryIndex(Number(redoButton.dataset.redoIndex));
});
(els.log.parentElement || els.log).addEventListener("click", event => {
    const closeButton = event.target.closest("[data-elim-close]");
    if (closeButton) {
        event.preventDefault();
        event.stopPropagation();
        closeQuestionElimPopover();
        return;
    }
    const viewButton = event.target.closest("[data-elim-view]");
    if (viewButton) {
        event.preventDefault();
        event.stopPropagation();
        openQuestionElimPopover(Number(viewButton.dataset.elimView), viewButton);
        return;
    }
    const button = event.target.closest("[data-undo-index]");
    const redoButton = event.target.closest("[data-redo-index]");
    if (button) undoToHistoryIndex(Number(button.dataset.undoIndex));
    if (redoButton) redoHistoryIndex(Number(redoButton.dataset.redoIndex));
});

document.addEventListener("pointerdown", event => {
    const popover = document.querySelector("#questionElimPopover");
    if (!popover || popover.hidden) return;
    if (event.target.closest("#questionElimPopover") || event.target.closest("[data-elim-view]")) return;
    closeQuestionElimPopover();
}, true);
window.addEventListener("scroll", positionQuestionElimPopover, true);
window.addEventListener("resize", positionQuestionElimPopover);

document.addEventListener("pointerdown", closePerkOverlayOnOutsidePress, true);
document.addEventListener("pointerdown", handlePerkPress, true);
document.addEventListener("click", handlePerkPress, true);

window.addEventListener("scroll", repositionActivePerkOverlay, true);
window.addEventListener("resize", repositionActivePerkOverlay);

els.closePerkDialogBtn?.addEventListener("click", () => els.perkDialog.close());
els.closeDialogBtn.addEventListener("click", () => {
    pendingGuess = null;
    els.resultDialog.close();
    flushQueuedEntityWatching();
});
els.correctGuessBtn.addEventListener("click", () => finishGuess(true));
els.wrongGuessBtn.addEventListener("click", () => finishGuess(false));
els.dialogNewGameBtn.addEventListener("click", confirmNewGame);
els.cancelNewGameBtn.addEventListener("click", () => els.newGameDialog.close());
els.confirmNewGameBtn.addEventListener("click", () => {
    els.newGameDialog.close();
    newGame();
});
els.targetBox.addEventListener("click", event => {
    const action = event.target.closest("[data-action]")?.dataset.action;
    if (action === "lore") toggleTargetLore();
    if (action === "perk") openPerkDialog(event.target.closest("[data-perk]")?.dataset.perk);
});
els.grid.addEventListener("click", event => {
    const card = event.target.closest(".card");
    if (!card) return;
    const character = characters.find(c => c.id === Number(card.dataset.id));
    const action = event.target.closest("[data-action]")?.dataset.action;
    if (event.target.closest(".portrait") && !action) {
        if (!handleTricksterCutiePortraitClick(character, card) && !handleMastermindPortraitClick(character, card)) {
            showPortraitSpook(character);
        }
        return;
    }
    if (action === "cross") toggleCrossOut(character, true);
    if (action === "restore") {
        toggleCrossOut(character);
        showRestoreSpook(character);
    }
    if (action === "guess") guessCharacter(character);
    if (action === "lore") showLore(character);
    if (action === "perk") openPerkDialog(event.target.closest("[data-perk]")?.dataset.perk);
    if (!action && statusFilter === "eliminated") toggleCrossOut(character);
});
els.grid.addEventListener("mouseover", event => {
    const card = event.target.closest(".card");
    if (!card || card.contains(event.relatedTarget)) return;
    const character = characters.find(c => c.id === Number(card.dataset.id));
    startHoverSpook(card, character);
});
els.grid.addEventListener("mouseout", event => {
    const card = event.target.closest(".card");
    if (!card || card.contains(event.relatedTarget)) return;
    const character = characters.find(c => c.id === Number(card.dataset.id));
    cancelHoverSpook(character);
});
els.searchSuggestions.addEventListener("click", event => {
    const suggestion = event.target.closest("[data-name]");
    if (!suggestion) return;
    searchQuery = suggestion.dataset.name;
    els.searchInput.value = searchQuery;
    els.searchInput.blur();
    els.searchSuggestions.innerHTML = "";
    els.searchSuggestions.hidden = true;
    els.searchInput.setAttribute("aria-expanded", "false");
    render();
});
els.searchSuggestions.addEventListener("pointerdown", event => {
    const suggestion = event.target.closest("[data-name]");
    if (!suggestion) return;
    event.preventDefault();
});
document.addEventListener("click", event => {
    const insideHowTo = event.target.closest(".howto-group") || event.target.closest("#howToPopover");
    const insideCustomUnlock = event.target.closest(".custom-unlock-group");
    if (!insideHowTo) closeHowToPopover();
    if (!insideCustomUnlock && !customUnlockAutoCloseTimer && els.customUnlockPopover && els.customUnlockBtn) {
        els.customUnlockPopover.hidden = true;
        els.customUnlockBtn.setAttribute("aria-expanded", "false");
    }
});
document.addEventListener("click", event => {
    if (event.target.closest(".lookup")) return;
    els.searchSuggestions.hidden = true;
    els.searchInput.setAttribute("aria-expanded", "false");
});
const filtersElement = document.querySelector(".filters");
let lastInstantFilterTapAt = 0;

function previewPressedFilterControl(button) {
    if (!button) return;
    if (button.matches("[data-filter]")) {
        document.querySelectorAll("[data-filter]").forEach(other => {
            other.classList.remove("active", "selected");
            other.setAttribute("aria-pressed", "false");
        });
    }
    button.classList.add("active", "selected");
    button.setAttribute("aria-pressed", "true");
}

function handleFilterControlTap(event, { instant = false } = {}) {
    const root = filtersElement;
    if (!root) return false;
    const crossGroupButton = event.target.closest("[data-cross-group]");
    if (crossGroupButton && root.contains(crossGroupButton)) {
        if (instant) {
            event.preventDefault();
            event.stopPropagation();
            previewPressedFilterControl(crossGroupButton);
        }
        toggleBulkGroup(crossGroupButton.dataset.crossGroup);
        if (instant) {
            crossGroupButton.blur?.();
            requestAnimationFrame(renderFilters);
        }
        return true;
    }
    const chip = event.target.closest("[data-filter]");
    if (!chip || !root.contains(chip)) return false;
    if (instant) {
        event.preventDefault();
        event.stopPropagation();
        previewPressedFilterControl(chip);
    }
    const filter = chip.dataset.filter;
    if (filter === "all") {
        resetBoardFilters();
    } else if (filter === "standing" || filter === "eliminated") {
        toggleStatusFilter(filter);
    } else if (filter === "killer" || filter === "survivor") {
        toggleRoleFilter(filter);
    }
    render();
    if (instant) {
        chip.blur?.();
        requestAnimationFrame(renderFilters);
    }
    return true;
}

filtersElement?.addEventListener("pointerdown", event => {
    if (!isPhoneLayout()) return;
    if (event.pointerType === "mouse" && !window.matchMedia?.("(pointer: coarse)")?.matches) return;
    if (handleFilterControlTap(event, { instant: true })) lastInstantFilterTapAt = Date.now();
}, { capture: true });

filtersElement?.addEventListener("click", event => {
    if (Date.now() - lastInstantFilterTapAt < 450) {
        event.preventDefault();
        event.stopPropagation();
        return;
    }
    handleFilterControlTap(event);
});
document.addEventListener("keydown", event => {
    if (event.key === "Enter" && document.activeElement !== els.resultDialog) {
        applyManualAnswer(true);
    }
});
window.addEventListener("resize", () => { updateHighZoomLayoutClass(); render(); positionHowToPopover(); positionCustomUnlockPopover(); });
window.addEventListener("scroll", () => { positionHowToPopover(); positionCustomUnlockPopover(); }, { passive: true });
document.querySelector(".dbd-logo")?.addEventListener("click", playLogoError);

updateHighZoomLayoutClass();
setupQuestions();
newGame();
maybeShowInitialEntityWatching();


(() => {
    const detailSelectIds = [
        "questionSelect",
        "roleSelect",
        "speedSelect",
        "licenseSelect",
        "countrySelect",
        "genderSelect",
        "hairSelect",
        "ethnicitySelect",
        "yearSelect"
    ];

    const selectState = new WeakMap();

    const closeCustomDetailSelect = wrapper => {
        if (!wrapper) return;
        wrapper.classList.remove("is-open");
        const button = wrapper.querySelector(".meow-custom-select-button");
        const list = wrapper.querySelector(".meow-custom-select-list");
        if (button) button.setAttribute("aria-expanded", "false");
        if (list) list.hidden = true;
    };

    const closeAllCustomDetailSelects = except => {
        document.querySelectorAll(".meow-custom-select.is-open").forEach(wrapper => {
            if (wrapper !== except) closeCustomDetailSelect(wrapper);
        });
    };

    const optionLabel = option => option.textContent.trim() || option.value;

    const syncCustomDetailSelect = select => {
        const state = selectState.get(select);
        if (!state) return;
        const { wrapper, button, valueText, list } = state;
        const selected = select.selectedOptions?.[0] || select.options?.[0];
        const visible = !select.hidden;
        wrapper.hidden = !visible;
        button.disabled = select.disabled || !visible;
        button.setAttribute("aria-disabled", String(button.disabled));
        valueText.textContent = selected ? optionLabel(selected) : "";
        list.innerHTML = "";
        const makeOptionItem = option => {
            const optionIndex = Array.prototype.indexOf.call(select.options || [], option);
            const item = document.createElement("button");
            item.type = "button";
            item.className = "meow-custom-select-option";
            item.textContent = optionLabel(option);
            item.dataset.value = option.value;
            item.dataset.index = String(optionIndex);
            item.disabled = option.disabled;
            item.setAttribute("role", "option");
            item.setAttribute("aria-selected", String(option.selected));
            item.addEventListener("click", event => {
                event.preventDefault();
                event.stopPropagation();
                if (item.disabled) return;
                select.value = option.value;
                select.dispatchEvent(new Event("input", { bubbles: true }));
                select.dispatchEvent(new Event("change", { bubbles: true }));
                syncCustomDetailSelect(select);
                closeCustomDetailSelect(wrapper);
                button.focus();
            });
            return item;
        };

        Array.from(select.children || []).forEach(child => {
            if (child.tagName === "OPTGROUP") {
                const visibleOptions = Array.from(child.children || []).filter(option => option.tagName === "OPTION" && !option.hidden);
                if (!visibleOptions.length) return;

                const groupHeader = document.createElement("div");
                groupHeader.className = `meow-custom-select-group ${child.className || "question-general"}`;
                groupHeader.textContent = child.label || "Questions";
                groupHeader.setAttribute("role", "presentation");
                list.appendChild(groupHeader);

                visibleOptions.forEach(option => list.appendChild(makeOptionItem(option)));
                return;
            }

            if (child.tagName === "OPTION" && !child.hidden) {
                list.appendChild(makeOptionItem(child));
            }
        });
    };

    const openCustomDetailSelect = select => {
        const state = selectState.get(select);
        if (!state || select.disabled || select.hidden) return;
        const { wrapper, button, list } = state;
        syncCustomDetailSelect(select);
        closeAllCustomDetailSelects(wrapper);
        wrapper.classList.add("is-open");
        button.setAttribute("aria-expanded", "true");
        list.hidden = false;
        const selected = list.querySelector('[aria-selected="true"]');
        if (selected) selected.scrollIntoView({ block: "nearest" });
    };

    const installCustomDetailSelect = select => {
        if (!select || selectState.has(select)) return;
        select.classList.add("meow-native-detail-select");
        select.tabIndex = -1;
        select.setAttribute("aria-hidden", "true");

        const wrapper = document.createElement("div");
        wrapper.className = "meow-custom-select";
        wrapper.dataset.for = select.id;

        const button = document.createElement("button");
        button.type = "button";
        button.className = "meow-custom-select-button";
        button.setAttribute("aria-haspopup", "listbox");
        button.setAttribute("aria-expanded", "false");

        const valueText = document.createElement("span");
        valueText.className = "meow-custom-select-value";
        button.appendChild(valueText);

        const list = document.createElement("div");
        list.className = "meow-custom-select-list";
        list.setAttribute("role", "listbox");
        list.hidden = true;

        wrapper.append(button, list);
        select.insertAdjacentElement("afterend", wrapper);
        selectState.set(select, { wrapper, button, valueText, list });

        button.addEventListener("click", event => {
            event.preventDefault();
            event.stopPropagation();
            if (wrapper.classList.contains("is-open")) {
                closeCustomDetailSelect(wrapper);
            } else {
                openCustomDetailSelect(select);
            }
        });

        wrapper.addEventListener("keydown", event => {
            if (event.key === "Escape") {
                event.preventDefault();
                event.stopPropagation();
                closeCustomDetailSelect(wrapper);
                button.focus();
                return;
            }
            if (event.key === "Enter" || event.key === " ") {
                if (document.activeElement === button) {
                    event.preventDefault();
                    event.stopPropagation();
                    openCustomDetailSelect(select);
                }
            }
        });

        select.addEventListener("change", () => syncCustomDetailSelect(select));
        new MutationObserver(() => syncCustomDetailSelect(select)).observe(select, {
            attributes: true,
            childList: true,
            subtree: true,
            attributeFilter: ["hidden", "disabled"]
        });
        syncCustomDetailSelect(select);
    };

    detailSelectIds.forEach(id => installCustomDetailSelect(document.getElementById(id)));

    document.addEventListener("click", event => {
        if (event.target.closest(".meow-custom-select")) return;
        closeAllCustomDetailSelects();
    }, true);

    document.addEventListener("keydown", event => {
        if (event.key === "Escape") closeAllCustomDetailSelects();
    }, true);
})();

(function setupSoftLogScrolling() {
    const softScrollTargets = "#log, #actionLog, .question-elim-listbox";
    const scrollState = new WeakMap();

    const normalizeWheelDelta = (event, element) => {
        if (event.deltaMode === 1) return event.deltaY * 16;
        if (event.deltaMode === 2) return event.deltaY * element.clientHeight;
        return event.deltaY;
    };

    const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

    const animateScroll = element => {
        const state = scrollState.get(element);
        if (!state) return;

        const distance = state.target - element.scrollTop;
        if (Math.abs(distance) < 0.5) {
            element.scrollTop = state.target;
            state.frame = null;
            return;
        }

        element.scrollTop += distance * state.ease;
        state.frame = requestAnimationFrame(() => animateScroll(element));
    };

    const handleWheel = event => {
        const element = event.target.closest?.(softScrollTargets);
        if (!element || element.scrollHeight <= element.clientHeight || !event.deltaY) return;

        const max = element.scrollHeight - element.clientHeight;
        const currentState = scrollState.get(element) || { target: element.scrollTop, frame: null, ease: 0.22 };
        const isElimList = element.classList.contains("question-elim-listbox");
        const multiplier = isElimList ? 0.25 : 0.36;
        currentState.ease = element.id === "actionLog" ? 0.16 : 0.22;
        currentState.target = clamp(currentState.target + normalizeWheelDelta(event, element) * multiplier, 0, max);
        scrollState.set(element, currentState);

        if (currentState.target !== element.scrollTop) {
            event.preventDefault();
            event.stopPropagation();
            if (!currentState.frame) {
                currentState.frame = requestAnimationFrame(() => animateScroll(element));
            }
        }
    };

    const stopAnimatedScroll = element => {
        const state = scrollState.get(element);
        if (!state) return;
        if (state.frame) cancelAnimationFrame(state.frame);
        state.frame = null;
        state.target = element.scrollTop;
        scrollState.set(element, state);
    };

    document.addEventListener("pointerdown", event => {
        const element = event.target.closest?.(softScrollTargets);
        if (element) stopAnimatedScroll(element);
    }, true);

    document.addEventListener("mousedown", event => {
        const element = event.target.closest?.(softScrollTargets);
        if (element) stopAnimatedScroll(element);
    }, true);

    document.addEventListener("scroll", event => {
        const element = event.target;
        if (!(element instanceof Element) || !element.matches(softScrollTargets)) return;
        const state = scrollState.get(element);
        if (state && !state.frame) {
            state.target = element.scrollTop;
            scrollState.set(element, state);
        }
    }, true);

    document.addEventListener("wheel", handleWheel, { passive: false, capture: true });
})();


(() => {
    const installCutePerkFilters = () => {
        if (document.getElementById("cutePerkSvgFilters")) return;
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.id = "cutePerkSvgFilters";
        svg.setAttribute("aria-hidden", "true");
        svg.setAttribute("focusable", "false");
        svg.style.position = "absolute";
        svg.style.width = "0";
        svg.style.height = "0";
        svg.style.overflow = "hidden";
        svg.innerHTML = `
          <defs>
            <filter id="cutePerkTintDarkPink" x="-4%" y="-4%" width="108%" height="108%" color-interpolation-filters="sRGB">
              <feColorMatrix in="SourceGraphic" type="luminanceToAlpha" result="luma"/>
              <feComponentTransfer in="luma" result="darkMaskRaw">
                <feFuncA type="table" tableValues="1 .98 .86 .34 0"/>
              </feComponentTransfer>
              <feComposite in="darkMaskRaw" in2="SourceAlpha" operator="in" result="darkMask"/>
              <feFlood flood-color="#8b174f" result="tint"/>
              <feComposite in="tint" in2="darkMask" operator="in" result="tintedDark"/>

              <feComponentTransfer in="luma" result="lightMaskRaw">
                <feFuncA type="table" tableValues="0 .12 .48 .9 1"/>
              </feComponentTransfer>
              <feComposite in="lightMaskRaw" in2="SourceAlpha" operator="in" result="lightMask"/>
              <feComposite in="SourceGraphic" in2="lightMask" operator="in" result="keptLights"/>

              <feMerge>
                <feMergeNode in="tintedDark"/>
                <feMergeNode in="keptLights"/>
              </feMerge>
            </filter>

            <filter id="cutePerkTintDarkBlue" x="-4%" y="-4%" width="108%" height="108%" color-interpolation-filters="sRGB">
              <feColorMatrix in="SourceGraphic" type="luminanceToAlpha" result="luma"/>
              <feComponentTransfer in="luma" result="darkMaskRaw">
                <feFuncA type="table" tableValues="1 .98 .86 .34 0"/>
              </feComponentTransfer>
              <feComposite in="darkMaskRaw" in2="SourceAlpha" operator="in" result="darkMask"/>
              <feFlood flood-color="#124f93" result="tint"/>
              <feComposite in="tint" in2="darkMask" operator="in" result="tintedDark"/>

              <feComponentTransfer in="luma" result="lightMaskRaw">
                <feFuncA type="table" tableValues="0 .12 .48 .9 1"/>
              </feComponentTransfer>
              <feComposite in="lightMaskRaw" in2="SourceAlpha" operator="in" result="lightMask"/>
              <feComposite in="SourceGraphic" in2="lightMask" operator="in" result="keptLights"/>

              <feMerge>
                <feMergeNode in="tintedDark"/>
                <feMergeNode in="keptLights"/>
              </feMerge>
            </filter>

            <filter id="cutePerkTintPurple" x="-4%" y="-4%" width="108%" height="108%" color-interpolation-filters="sRGB">
              <feColorMatrix in="SourceGraphic" type="luminanceToAlpha" result="luma"/>
              <feComponentTransfer in="luma" result="darkMaskRaw">
                <feFuncA type="table" tableValues="1 .98 .86 .34 0"/>
              </feComponentTransfer>
              <feComposite in="darkMaskRaw" in2="SourceAlpha" operator="in" result="darkMask"/>
              <feFlood flood-color="#56237f" result="tint"/>
              <feComposite in="tint" in2="darkMask" operator="in" result="tintedDark"/>

              <feComponentTransfer in="luma" result="lightMaskRaw">
                <feFuncA type="table" tableValues="0 .12 .48 .9 1"/>
              </feComponentTransfer>
              <feComposite in="lightMaskRaw" in2="SourceAlpha" operator="in" result="lightMask"/>
              <feComposite in="SourceGraphic" in2="lightMask" operator="in" result="keptLights"/>

              <feMerge>
                <feMergeNode in="tintedDark"/>
                <feMergeNode in="keptLights"/>
              </feMerge>
            </filter>
          </defs>`;
        document.body.appendChild(svg);
    };
    if (document.body) {
        installCutePerkFilters();
    } else {
        document.addEventListener("DOMContentLoaded", installCutePerkFilters, { once: true });
    }
})();

(() => {
    const button = document.getElementById("cuteThemeToggle");
    if (!button) return;
    const darkButton = document.getElementById("cuteDarkThemeToggle");

    const storageKey = "guess-who-cute-mode";
    const cuteDarkStorageKey = "guess-who-cute-dark-mode";
    const cuteAssetVersion = "v18";
    const cuteDarkAssetVersion = "v30";
    const cuteStylesheetId = "cuteModeStylesheet";
    const cuteScriptId = "cuteModeScript";
    const cuteDarkStylesheetId = "cuteDarkModeStylesheet";
    const cuteDarkScriptId = "cuteDarkModeScript";
    const cuteStylesheetHref = `cute-mode.css?v=${cuteAssetVersion}`;
    const cuteScriptSrc = `cute-mode.js?v=${cuteAssetVersion}`;
    const cuteDarkStylesheetHref = `cute-dark-mode.css?v=${cuteDarkAssetVersion}`;
    const cuteDarkScriptSrc = `cute-dark-mode.js?v=${cuteDarkAssetVersion}`;
    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
    let isTransforming = false;
    let cuteStylesheetPromise = null;
    let cuteScriptPromise = null;
    let cuteDarkStylesheetPromise = null;
    let cuteConfirmPromise = null;

    const cuteConfirmDialogConfigs = {
        light: {
            overlayClass: "is-light-mode-warning",
            title: "Cute Mode",
            bodyHtml: `
                <p>This button loads the game in Cute Mode.</p>
                <p>Are you sure you want to go there?</p>
                <p>It's <strong class="cute-mode-confirm-emphasis cute-mode-confirm-emphasis-light">LIGHT MODE</strong> and <strong>EXTREMELY CUTE.</strong></p>
            `,
            yesText: "Yes OwO",
            noText: "Nevermind"
        },
        dark: {
            overlayClass: "is-dark-mode-warning",
            title: "Cute Mode",
            bodyHtml: `
                <p>This button loads the game in Cute Mode.</p>
                <p>Are you sure you want to go there?</p>
                <p>It's <strong class="cute-mode-confirm-emphasis cute-mode-confirm-emphasis-dark">DARK MODE</strong> and <strong>EXTREMELY CUTE.</strong></p>
            `,
            yesText: "Yes OwO",
            noText: "Nevermind"
        },
        normal: {
            overlayClass: "is-normal-mode-warning",
            title: "Normal Mode",
            bodyHtml: `
                <p>This button loads the game in Normal Mode.</p>
                <p>Are you sure you want to go there?</p>
            `,
            yesText: "Yes",
            noText: "No"
        }
    };

    const ensureCuteConfirmDialog = () => {
        let overlay = document.getElementById("cuteModeConfirmOverlay");
        if (overlay) return overlay;
        overlay = document.createElement("div");
        overlay.id = "cuteModeConfirmOverlay";
        overlay.className = "cute-mode-confirm-overlay";
        overlay.hidden = true;
        overlay.innerHTML = `
            <div class="cute-mode-confirm-window" role="dialog" aria-modal="true" aria-labelledby="cuteModeConfirmTitle" aria-describedby="cuteModeConfirmBody">
                <div class="cute-mode-confirm-title" id="cuteModeConfirmTitle">Cute Mode</div>
                <div class="cute-mode-confirm-body" id="cuteModeConfirmBody"></div>
                <div class="cute-mode-confirm-actions">
                    <button type="button" class="btn good cute-mode-confirm-yes" data-cute-confirm="yes">Yes OwO</button>
                    <button type="button" class="btn neutral cute-mode-confirm-no" data-cute-confirm="no">Nevermind</button>
                </div>
            </div>
        `;
        document.body.appendChild(overlay);
        return overlay;
    };

    const setCuteConfirmDialogVariant = variant => {
        const overlay = ensureCuteConfirmDialog();
        const config = cuteConfirmDialogConfigs[variant] || cuteConfirmDialogConfigs.light;
        overlay.className = `cute-mode-confirm-overlay ${config.overlayClass}`;
        const title = overlay.querySelector("#cuteModeConfirmTitle");
        const body = overlay.querySelector("#cuteModeConfirmBody");
        const yesButton = overlay.querySelector('[data-cute-confirm="yes"]');
        const noButton = overlay.querySelector('[data-cute-confirm="no"]');
        if (title) title.textContent = config.title;
        if (body) body.innerHTML = config.bodyHtml;
        if (yesButton) yesButton.textContent = config.yesText;
        if (noButton) noButton.textContent = config.noText;
        return overlay;
    };

    const closeCuteConfirmDialog = choice => {
        const overlay = document.getElementById("cuteModeConfirmOverlay");
        if (!overlay) return;
        overlay.hidden = true;
        document.body.classList.remove("cute-mode-confirm-open");
        if (cuteConfirmPromise) {
            const resolve = cuteConfirmPromise;
            cuteConfirmPromise = null;
            resolve(Boolean(choice));
        }
    };

    const openCuteConfirmDialog = (variant = "light") => new Promise(resolve => {
        const overlay = setCuteConfirmDialogVariant(variant);
        cuteConfirmPromise = resolve;
        overlay.hidden = false;
        document.body.classList.add("cute-mode-confirm-open");
        const yesButton = overlay.querySelector('[data-cute-confirm="yes"]');
        if (yesButton) {
            window.setTimeout(() => yesButton.focus({ preventScroll: true }), 0);
        }
    });

    const ensureCuteModeStyles = () => {
        const existing = document.getElementById(cuteStylesheetId);
        if (existing) return Promise.resolve(existing);
        if (cuteStylesheetPromise) return cuteStylesheetPromise;

        cuteStylesheetPromise = new Promise(resolve => {
            const link = document.createElement("link");
            link.id = cuteStylesheetId;
            link.rel = "stylesheet";
            link.href = cuteStylesheetHref;
            link.onload = () => resolve(link);
            link.onerror = () => {
                resolve(link);
            };
            document.head.appendChild(link);
        });

        return cuteStylesheetPromise;
    };

    const ensureCuteModeScript = () => {
        if (window.GuessWhoCuteMode?.playTransform) return Promise.resolve(window.GuessWhoCuteMode);
        const existing = document.getElementById(cuteScriptId);
        if (existing && cuteScriptPromise) return cuteScriptPromise;
        if (cuteScriptPromise) return cuteScriptPromise;

        cuteScriptPromise = new Promise(resolve => {
            const script = document.createElement("script");
            script.id = cuteScriptId;
            script.src = cuteScriptSrc;
            script.defer = true;
            script.onload = () => resolve(window.GuessWhoCuteMode || null);
            script.onerror = () => {
                resolve(null);
            };
            document.head.appendChild(script);
        });

        return cuteScriptPromise;
    };

    const ensureCuteModeAssets = () => Promise.all([
        ensureCuteModeStyles(),
        ensureCuteModeScript()
    ]).then(() => window.GuessWhoCuteMode || null);


    const getSavedCuteDarkMode = () => {
        try {
            return localStorage.getItem(cuteDarkStorageKey) === "1";
        } catch (error) {
            return false;
        }
    };

    const saveCuteDarkMode = enabled => {
        try {
            localStorage.setItem(cuteDarkStorageKey, enabled ? "1" : "0");
        } catch (error) {
        }
    };

    const ensureCuteDarkModeStyles = () => {
        const existing = document.getElementById(cuteDarkStylesheetId);
        if (existing) return Promise.resolve(existing);
        if (cuteDarkStylesheetPromise) return cuteDarkStylesheetPromise;

        cuteDarkStylesheetPromise = new Promise(resolve => {
            const link = document.createElement("link");
            link.id = cuteDarkStylesheetId;
            link.rel = "stylesheet";
            link.href = cuteDarkStylesheetHref;
            link.onload = () => resolve(link);
            link.onerror = () => resolve(link);
            document.head.appendChild(link);
        });

        return cuteDarkStylesheetPromise;
    };

    let cuteDarkScriptPromise = null;

    const ensureCuteDarkModeScript = () => {
        if (window.GuessWhoCuteDarkMode?.playTransform) return Promise.resolve(window.GuessWhoCuteDarkMode);
        const existing = document.getElementById(cuteDarkScriptId);
        if (existing && cuteDarkScriptPromise) return cuteDarkScriptPromise;
        if (cuteDarkScriptPromise) return cuteDarkScriptPromise;

        cuteDarkScriptPromise = new Promise(resolve => {
            const script = document.createElement("script");
            script.id = cuteDarkScriptId;
            script.src = cuteDarkScriptSrc;
            script.defer = true;
            script.onload = () => resolve(window.GuessWhoCuteDarkMode || null);
            script.onerror = () => resolve(null);
            document.head.appendChild(script);
        });

        return cuteDarkScriptPromise;
    };

    const ensureCuteDarkModeAssets = () => Promise.all([
        ensureCuteDarkModeStyles(),
        ensureCuteDarkModeScript()
    ]).then(() => window.GuessWhoCuteDarkMode || null);

    const ensureCuteDarkEntryAssets = () => Promise.all([
        ensureCuteModeStyles(),
        ensureCuteModeScript(),
        ensureCuteDarkModeAssets()
    ]).then(() => ({
        cuteModeApi: window.GuessWhoCuteMode || null,
        cuteDarkApi: window.GuessWhoCuteDarkMode || null
    }));

    const updateCuteMainButton = () => {
        const cuteEnabled = document.body.classList.contains("cute-mode");
        const darkEnabled = document.body.classList.contains("cute-dark-mode");
        button.setAttribute("aria-pressed", String(cuteEnabled));
        button.setAttribute("aria-label", cuteEnabled ? "Turn off cute mode" : "Turn on dark cute mode");
        button.classList.toggle("active", cuteEnabled);
        button.textContent = cuteEnabled && !darkEnabled ? "🩷" : "🖤";
    };

    const updateCuteDarkButton = () => {
        if (!darkButton) return;
        const cuteEnabled = document.body.classList.contains("cute-mode");
        const darkEnabled = document.body.classList.contains("cute-dark-mode");
        darkButton.hidden = false;
        darkButton.setAttribute("aria-pressed", String(cuteEnabled && darkEnabled));
        darkButton.setAttribute("aria-label", cuteEnabled
            ? (darkEnabled ? "Switch to light cute mode" : "Turn on dark cute mode")
            : "Turn on light cute mode");
        darkButton.classList.toggle("active", cuteEnabled && darkEnabled);
        darkButton.textContent = cuteEnabled ? "🩵" : "🤍";
    };

    const playCuteDarkSwapTransition = () => {
        if (reduceMotion || !document.body.classList.contains("cute-mode")) return;
        document.body.classList.remove("cute-dark-swap-transition");
        void document.body.offsetWidth;
        document.body.classList.add("cute-dark-swap-transition");
        blockTransitionInteractions(760);
        window.setTimeout(() => {
            document.body.classList.remove("cute-dark-swap-transition");
        }, 720);
    };

    const applyCuteDarkMode = (enabled, { persist = true, animate = false } = {}) => {
        if (!document.body.classList.contains("cute-mode")) enabled = false;
        const changed = document.body.classList.contains("cute-dark-mode") !== enabled;
        if (animate && changed) playCuteDarkSwapTransition();
        document.body.classList.toggle("cute-dark-mode", enabled);
        if (persist) saveCuteDarkMode(enabled);
        updateCuteMainButton();
        updateCuteDarkButton();
    };

    const syncCuteDarkMode = () => {
        updateCuteDarkButton();
        if (!document.body.classList.contains("cute-mode")) {
            applyCuteDarkMode(false, { persist: false });
            return;
        }
        if (getSavedCuteDarkMode()) {
            ensureCuteDarkModeAssets().then(() => applyCuteDarkMode(true, { persist: false }));
        } else {
            applyCuteDarkMode(false, { persist: false });
        }
    };

    const enterCuteDarkMode = cuteDarkApi => {
        if (reduceMotion) {
            applyCuteMode(true, { syncDark: false });
            applyCuteDarkMode(true, { persist: true });
            button.disabled = false;
            if (darkButton) darkButton.disabled = false;
            return;
        }

        isTransforming = true;
        button.disabled = true;
        if (darkButton) darkButton.disabled = true;
        document.body.classList.add("cute-mode-transitioning");
        blockTransitionInteractions(3220);

        let darkModeApplied = false;
        const applyDarkModeOnce = () => {
            if (darkModeApplied) return;
            darkModeApplied = true;
            applyCuteMode(true, { syncDark: false });
            applyCuteDarkMode(true, { persist: true });
        };

        if (typeof cuteDarkApi?.playTransform === "function") {
            cuteDarkApi.playTransform({ onCovered: applyDarkModeOnce });
            window.setTimeout(applyDarkModeOnce, 950);
        } else {
            window.setTimeout(applyDarkModeOnce, 40);
        }

        window.setTimeout(() => {
            button.disabled = false;
            if (darkButton) darkButton.disabled = false;
            isTransforming = false;
            document.body.classList.remove("cute-mode-transitioning");
        }, 3200);
    };

    const toggleCuteDarkMode = () => {
        if (isTransforming) return;
        if (!document.body.classList.contains("cute-mode")) {
            openCuteConfirmDialog("dark").then(confirmed => {
                if (!confirmed) return;
                if (darkButton) darkButton.disabled = true;
                button.disabled = true;
                ensureCuteDarkEntryAssets().then(({ cuteDarkApi }) => {
                    enterCuteDarkMode(cuteDarkApi);
                }).catch(() => {
                    button.disabled = false;
                    if (darkButton) darkButton.disabled = false;
                });
            });
            return;
        }
        const nextEnabled = !document.body.classList.contains("cute-dark-mode");
        if (!nextEnabled) {
            openCuteConfirmDialog("light").then(confirmed => {
                if (!confirmed) return;
                applyCuteDarkMode(false, { animate: true });
            });
            return;
        }
        openCuteConfirmDialog("dark").then(confirmed => {
            if (!confirmed) return;
            if (darkButton) darkButton.disabled = true;
            ensureCuteDarkModeAssets().then(() => {
                applyCuteDarkMode(true, { animate: true });
            }).finally(() => {
                if (darkButton) darkButton.disabled = false;
            });
        });
    };

    const applyCuteMode = (enabled, { syncDark = true } = {}) => {
        document.body.classList.toggle("cute-mode", enabled);
        updateCuteMainButton();
        if (syncDark) syncCuteDarkMode();
        else {
            updateCuteMainButton();
            updateCuteDarkButton();
        }
        try {
            localStorage.setItem(storageKey, enabled ? "1" : "0");
        } catch (error) {
        }
        if (tricksterCutieUnlocked) {
            render();
        }
    };

    const toggleCuteMode = () => {
        if (isTransforming) return;
        const nextEnabled = !document.body.classList.contains("cute-mode");

        const beginToggle = cuteModeApi => {
            if (reduceMotion) {
                if (nextEnabled) {
                    applyCuteMode(true, { syncDark: false });
                    applyCuteDarkMode(false, { persist: true });
                } else {
                    applyCuteMode(false);
                }
                return;
            }

            isTransforming = true;
            button.disabled = true;

            if (!nextEnabled) {
                applyCuteMode(false);
                window.setTimeout(() => {
                    button.disabled = false;
                    isTransforming = false;
                }, 160);
                return;
            }

            document.body.classList.add("cute-mode-transitioning");
            blockTransitionInteractions(3220);
            let cuteModeApplied = false;
            const applyCuteModeOnce = () => {
                if (cuteModeApplied) return;
                cuteModeApplied = true;
                applyCuteMode(true, { syncDark: false });
                applyCuteDarkMode(false, { persist: true });
            };

            if (typeof cuteModeApi?.playTransform === "function") {
                cuteModeApi.playTransform({ onCovered: applyCuteModeOnce });
                window.setTimeout(applyCuteModeOnce, 950);
            } else {
                window.setTimeout(applyCuteModeOnce, 40);
            }

            window.setTimeout(() => {
                button.disabled = false;
                isTransforming = false;
                document.body.classList.remove("cute-mode-transitioning");
            }, 3200);
        };

        if (nextEnabled) {
            openCuteConfirmDialog("light").then(confirmed => {
                if (!confirmed) return;
                button.disabled = true;
                ensureCuteModeAssets().then(cuteModeApi => {
                    button.disabled = false;
                    beginToggle(cuteModeApi);
                }).catch(() => {
                    button.disabled = false;
                });
            });
            return;
        }

        openCuteConfirmDialog("normal").then(confirmed => {
            if (!confirmed) return;
            beginToggle(window.GuessWhoCuteMode || null);
        });
    };

    document.addEventListener("click", event => {
        const choiceButton = event.target.closest("[data-cute-confirm]");
        if (!choiceButton) return;
        event.preventDefault();
        closeCuteConfirmDialog(choiceButton.dataset.cuteConfirm === "yes");
    });

    document.addEventListener("keydown", event => {
        if (event.key !== "Escape") return;
        const overlay = document.getElementById("cuteModeConfirmOverlay");
        if (!overlay || overlay.hidden) return;
        event.preventDefault();
        closeCuteConfirmDialog(false);
    });

    document.addEventListener("pointerdown", event => {
        const overlay = document.getElementById("cuteModeConfirmOverlay");
        if (!overlay || overlay.hidden) return;
        if (event.target === overlay) {
            closeCuteConfirmDialog(false);
        }
    });

    let savedCuteMode = false;
    try {
        savedCuteMode = localStorage.getItem(storageKey) === "1";
    } catch (error) {
        savedCuteMode = false;
    }
    if (savedCuteMode) {
        ensureCuteModeAssets().then(() => applyCuteMode(true));
    } else {
        applyCuteMode(false);
    }

    button.addEventListener("click", event => {
        event.preventDefault();
        if (document.body.classList.contains("cute-mode")) {
            toggleCuteMode();
        } else {
            toggleCuteDarkMode();
        }
    });

    darkButton?.addEventListener("click", event => {
        event.preventDefault();
        if (document.body.classList.contains("cute-mode")) {
            toggleCuteDarkMode();
        } else {
            toggleCuteMode();
        }
    });
})();
