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
      'Surf is characterized by sliding along steep surfaces called ramps to build speed and fly through the map.',
      'Precise mouse control is essential for smooth and flowing movement that maximizes speed, and this is a game mode where every bit of speed matters.'
    ],
    videoDuration: 27.0
  },
  {
    id: 'bhop',
    name: 'Bhop',
    description: [
      'Bhop, short for <i>bunny hop</i>, is all about continuously jumping while taking advantage of a movement quirk that increases your speed when you turn in the air.',
      'Having a sense of where you will land is an important skill to master to efficiently jump from block to block.'
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
      'Rocket Jump comes from the rocket launcher-wielding Soldier class in Team Fortress 2 and is all about using your rockets’ explosions to propel yourself.',
      'Rocket jumpers use a wide variety of techniques to build speed and stay airborne, balancing speed and height while navigating around obstacles.'
    ],
    videoDuration: 22.25
  },
  {
    id: 'sj',
    name: 'Sticky Jump',
    description: [
      'Sticky Jump comes from the Stickybomb-launching Demoman class in Team Fortress 2. Stickybombs stick to most surfaces, and after firing they can be detonated at any time after a short delay (even before they stick).',
      'Sticky jumpers launch their stickies at walls and floors or line them up with their own trajectory to detonate them in midair, propelling themselves even through empty space.'
    ],
    videoDuration: 22.55
  },
  {
    id: 'defrag',
    name: 'Defrag',
    description: [
      'The Defrag game mode is based on the DeFRaG mod for Quake III Arena, transforming the high-octane arena shooter into a pure racing game.',
      'It features three different flavors of movement physics, a unique “strafe jumping” mechanic, and an array of explosive weapons into a complex and highly varied mode.'
    ],
    videoDuration: 34.854
  },
  {
    id: 'ahop',
    name: 'Ahop',
    description: [
      'Ahop, short for <i>accelerated hop</i>, uses a Half-Life 2 mechanic that is meant to limit your jumping speed to instead rapidly accelerate with each jump.',
      'The real challenge is controlling your speed, so you must master the effects of jumping while ducking, walking, sprinting, or while angled in different directions to succeed.'
    ],
    videoDuration: 31.684
  },
  {
    id: 'conc',
    name: 'Conc',
    description: [
      'Conc uses concussive grenades with the unique property that their knockback force increases the closer you are to their maximum explosion radius.',
      'These grenades detonate on a timer and do not stick to surfaces, so well-executed throws are particularly important — or detonate one in-hand for a reliable speed boost.'
    ],
    videoDuration: 28.35
  }
];
