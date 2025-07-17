export type Gamemode = {
  id: string;
  name: string;
  description: string[];
  // hate having to hardcode this but a nightmare getting programmatically since
  // video isn't loaded immediately
  videoDuration: number;
  button?: HTMLButtonElement;
};

export const GamemodeData: Gamemode[] = [
  {
    id: 'surf',
    name: 'Surf',
    description: [
      'Surf movement is characterized by gliding along sloped platforms called "ramps" to gain speed and effectively fly through the map. Precise mouse movements are the fundamental skill, on some maps requiring smooth, calculated curves, others requiring sharp, quickly-timed motions.',
      'Surf can be played on practically any Source game, but our implementation is based off of Counter Strike: Source.'
    ],
    videoDuration: 27.0
  },
  {
    id: 'bhop',
    name: 'Bhop',
    description: [
      'Bhop is all about gaining speed through airborne A/D strafing, with no speed penalty on jumping. Maps typically contain bhop "platforms", hitting which requires either split-second thinking and adjustment, or extremely precise, speed-dependent routing.',
      'Bhop can be played on almost every Source game, but our implementation is based off of Counter Strike: Source.'
    ],
    videoDuration: 23.534
  },
  // {
  //   id: 'climb',
  //   name: 'Climb',
  //   description: [
  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  //     'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  //     'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  //   ],
  //   videoDuration: 30.8
  // },
  {
    id: 'rj',
    name: 'Rocket Jump',
    description: [
      'Rocket Jump comes from the Soldier class in Team Fortress 2, wherein the player uses the self-knockback from rockets to traverse through levels.',
      'Rocket Jump movement has low base movement speed and air control, so going fast requires precisely timing rocket impacts to maintain speed, through techniques such as pogoing, speedshots and syncs.'
    ],
    videoDuration: 22.25
  },
  {
    id: 'sj',
    name: 'Sticky Jump',
    description: [
      'Sticky Jump comes from the Demoman class in Team Fortress 2. The player shoots sticky explosives and has direct control over their detonation which propels themselves through levels.',
      'The fire and detonation delays of the sticky launcher requires precise timing management and placement of stickies when detonated, either when stuck to surfaces or in the air.'
    ],
    videoDuration: 22.55
  },
  {
    id: 'defrag',
    name: 'Defrag',
    description: [
      'Defrag was born from the high-octane gameplay of the Quake 3 arena era, and is itself a mod of that game.',
      'It combines highly precise WA/WD strafe jumping whilst aiming in a precise direction with a variety of weapon mechanics, such as rocket jumping and plasma boosting.'
    ],
    videoDuration: 34.854
  },
  {
    id: 'ahop',
    name: 'Ahop',
    description: [
      "Accelerated Hop (Ahop) is derived from Valve's attempt to stop bunny-hopping in Half-Life 2, whereby convincing the game they're jumping backwards allows the player to rapidly gain velocity.",
      'In Ahop, while speed is rapidly gained, the real challenge is using multiple techniques such as back, side, or forward-hopping, sprinting, ducking, or walking, and circle-strafing to maintain control and accurately navigate maps.'
    ],
    videoDuration: 31.684
  },
  {
    id: 'conc',
    name: 'Conc',
    description: [
      'Conc originates from Team Fortress Classic and is centered around using the knockback of concussion grenades (concs).',
      "Concs have a fixed timer and don't stick to surfaces, so skilled concing mandates awareness of every active conc and planning the next step at least 4 seconds in advance."
    ],
    videoDuration: 28.35
  }
];
