export const limited = [
  {
    name: 'Cranhattan',
    category: 'limited',
    glass: 'Smoked Rocks Glass',
    ingredients: [
      {
        amount: 2,
        unit: 'oz',
        name: 'Knob Creek Rye Whiskey',
      },
      {
        amount: 1,
        unit: 'oz',
        name: 'Sweet Vermouth',
      },
      {
        amount: 3,
        unit: 'dashes',
        name: 'Peychaud\'s Bitters',
      },
      {
        amount: 0.5,
        unit: 'oz',
        name: 'Hibiscus Simple Syrup',
      },
      {
        amount: 0.5,
        unit: 'oz',
        name: 'Cranberry Juice',
      },
    ],
    instructions: [
      'Smoke Rocks Glass',
      'Build contents in a pint glass and add ice',
      'Add Hibiscus Cranberry Ice to rocks glass',
    ],
    mixingMethod: 'Stir & Strain',
    garnish: [
      '4 to 5 Cranberries',
      'Sprig of Rosemary',
    ],
  }
];

export const specialty = [
  // ============================= //
  //     Country Hill Lemonade     //
  // ============================= //
  {
    name: 'Country Hill Lemonade',
    category: 'specialty',
    glass: 'Mason Jar',
    ingredients: [
      {
        amount: 2,
        unit: 'oz',
        name: 'Kettle One Vodka',
      },
      {
        amount: 1.5,
        unit: 'oz',
        name: 'Lemon Juice',
      },
      {
        amount: 1,
        unit: 'oz',
        name: 'Lavender Simple Syrup',
      },
      {
        amount: 1,
        unit: 'dash',
        name: 'Aromatic Bitters',
      },
      {
        amount: [5, 8],
        unit: 'range',
        name: 'Mixed Berries',
      },
    ],
    instructions: [
      'Build contents in a pint glass and add ice',
    ],
    mixingMethod: 'Stir & Strain',
    postMixingInstructions: [
      'Top w/ Soda Water'
    ],
    
    garnish: [
      'Lemon Wedge',
      'Flower',
    ],
  },
  // ============================= //
  //          Lavendazed           //
  // ============================= //
  {
    name: 'Lavendazed',
    category: 'specialty',
    glass: 'Mason Jar',
    ingredients: [
      {
        amount: 2,
        unit: 'oz',
        name: 'Tito\'s Vodka',
      },
      {
        amount: 1,
        unit: 'oz',
        name: 'Lemon Juice',
      },
      {
        amount: 1,
        unit: 'oz',
        name: 'Lavender Simple Syrup',
      },
      {
        amount: [15, 20],
        unit: 'range',
        name: 'Red Peppercorn',
      },
    ],
    instructions: [
      'Build contents in a pint glass and add ice',
    ],
    mixingMethod: 'Shake & Strain',
    postMixingInstructions: [
      'Top w/ Soda Water'
    ],
    garnish: [
      'Lemon Wedge',
      'Flower',
    ],
  },
  // ============================= //
  //        Cask Old Fashion       //
  // ============================= //
  {
    name: 'Cask Old Fashion',
    category: 'specialty',
    glass: 'Smoked Rocks Glass',
    ingredients: [
      {
        amount: 2,
        unit: 'oz',
        name: 'Maker\'s Mark Bourbon',
      },
      {
        amount: 0.75,
        unit: 'oz',
        name: 'Hibiscus Simple Syrup',
      },
      {
        amount: 2,
        unit: 'dash',
        name: 'Aromatic Bitters',
      },
      {
        amount: 2,
        unit: 'dash',
        name: 'Orange Bitters',
      },
    ],
    instructions: [
      'Smoke Rocks Glass',
      'Lightly muddle orange slice and bitters in a pint glass',
      'Add Hibiscus Syrup, and Whiskey',
      'Add Big Ice Cube to Rocks Glass',
    ],
    mixingMethod: 'Stir & Strain',
    postMixingInstructions: [
      'Cut orange peel, twist over glass, rim, and drop in'
    ],
    
    garnish: [
      'Orange Peel',
    ],
  },
  // ============================= //
  //       Front 43 Manhattan      //
  // ============================= //
  {
    name: 'Front 43 Manhattan',
    category: 'specialty',
    glass: 'Smoked Rocks Glass',
    ingredients: [
      {
        amount: 2,
        unit: 'oz',
        name: 'Bulliet Rye Whiskey',
      },
      {
        amount: 1,
        unit: 'oz',
        name: 'Sweet Vermouth',
      },
      {
        amount: 2,
        unit: 'dashes',
        name: 'Aeromatic Bitters',
      },
    ],
    instructions: [
      'Smoke Rocks Glass',
      'Build contents in a pint glass and add ice',
      'Add Ice to Rocks Glass',
    ],
    mixingMethod: 'Stir & Strain',
    postMixingInstructions: [],
    garnish: [
      '2 Whiskey Marinated Cherries',
    ],
  },
  // ============================= //
  //           Loe's Love          //
  // ============================= //
  {
    name: 'Loe\'s Love',
    category: 'specialty',
    glass: 'Coupe Glass',
    ingredients: [
      {
        amount: 1.5,
        unit: 'oz',
        name: 'Aviation Gin',
      },
      {
        amount: 0.75,
        unit: 'oz',
        name: 'Campari',
      },
      {
        amount: 0.5,
        unit: 'oz',
        name: 'Lemon Juice',
      },
      {
        amount: 0.5,
        unit: 'oz',
        name: 'Simple Syrup',
      },
      {
        amount: [5, 6],
        unit: 'range',
        name: 'Mint Leaves',
      },
    ],
    instructions: [],
    mixingMethod: 'Shake & Double Strain',
    postMixingInstructions: [],
    
    garnish: [
      'Mint Sprig',
    ],
  },
  // ============================= //
  //           Blind Date          //
  // ============================= //
  {
    name: 'Blind Date',
    category: 'specialty',
    glass: 'Campagne Glass',
    ingredients: [
      {
        amount: 0.5,
        unit: 'oz',
        name: 'Monkey 47 Gin',
      },
      {
        amount: 0.25,
        unit: 'oz',
        name: 'St. Germaine',
      },
      {
        amount: 0.25,
        unit: 'oz',
        name: 'Simple Syrup',
      },
    ],
    instructions: [],
    mixingMethod: 'Shake & Strain',
    postMixingInstructions: [
      'Top w/ Brut Sparkling Wine'
    ],
    
    garnish: [
      'Orchid Flower',
    ],
  },
  // ============================= //
  //        The Good English       //
  // ============================= //
  {
    name: 'The Good English',
    category: 'specialty',
    glass: 'Smoked Rocks Glass',
    ingredients: [
      {
        amount: 2,
        unit: 'oz',
        name: 'Eastern Kille Barrel Finished Gin',
      },
      {
        amount: 0.5,
        unit: 'oz',
        name: 'Grand Marnier',
      },
      {
        amount: 1,
        unit: 'oz',
        name: 'Lemon Juice',
      },
      {
        amount: 0.5,
        unit: 'oz',
        name: 'Simple Syrup',
      },
    ],
    instructions: [
      'Smoke Rocks Glass',
      'Build contents in a pint glass and add ice',
    ],
    mixingMethod: 'Shake & Strain',
    postMixingInstructions: [
      'Top w/ Sanpellegrino Blood Orange',
      'Spritz w/ Dewar\'s White Label Scotch'
    ],
    
    garnish: [],
  },
  // ============================= //
  //           Pimms Cup           //
  // ============================= //
  {
    name: 'Pimms Cup',
    category: 'specialty',
    glass: 'Gibralter',
    ingredients: [
      {
        amount: 0.5,
        unit: 'oz',
        name: 'Pimms #1 Liqueur',
      },
      {
        amount: 0.5,
        unit: 'oz',
        name: 'Triple Sec',
      },
      {
        amount: 1,
        unit: 'oz',
        name: 'Lemon Juice',
      },
      {
        amount: 1,
        unit: 'oz',
        name: 'Simple Syrup',
      },
      {
        amount: [4, 5],
        unit: 'range',
        name: 'Cucumber Quarters',
      },
      {
        amount: [5, 8],
        unit: 'range',
        name: 'Mint Leaves',
      },
    ],
    instructions: [
      'Add Mint, Cucumber, and Lemon Juice in a pint glass, and muddle.',
      'Add the rest of the ingredients and add ice.',
    ],
    mixingMethod: 'Shake & Double Strain',
    postMixingInstructions: [
      'Top w/ Ginger Beer'
    ],
    
    garnish: [
      'Cucumber Wheel',
    ],
  },
  // ============================= //
  //             Sazerac           //
  // ============================= //
  {
    name: 'Sazerac',
    category: 'specialty',
    glass: 'Chilled Rocks Glass',
    ingredients: [
      {
        amount: 2,
        unit: 'oz',
        name: 'Rittenhouse Rye Whiskey',
      },
      {
        amount: 1,
        unit: 'oz',
        name: 'Simple Syrup',
      },
      {
        amount: 2,
        unit: 'dash',
        name: 'Peychaud\'s Bitters',
      },
      {
        amount: [8, 10],
        unit: 'range',
        name: 'Peppercorns',
      },
    ],
    instructions: [
      'Add ice and soda water to Rocks Glass',
      'Build contents in a pint glass and add ice',
      'Remove ice and soda water from Rocks Glass',
      'Spritz Rocks Glass with Absinthe'
    ],
    mixingMethod: 'Stir & Double Strain',
    postMixingInstructions: [],
    
    garnish: [],
  },
  // ============================= //
  //            Foreplay           //
  // ============================= //
  {
    name: 'Foreplay',
    category: 'specialty',
    glass: 'Martini Glass',
    ingredients: [
      {
        amount: 2,
        unit: 'oz',
        name: 'Tito\'s Handmade Vodka',
      },
      {
        amount: 1,
        unit: 'oz',
        name: 'Lime Juice',
      },
      {
        amount: 1,
        unit: 'oz',
        name: 'Simple Syrup',
      },
    ],
    instructions: [
      'Build contents in a pint glass and add ice',
    ],
    mixingMethod: 'Shake & Strain',
    postMixingInstructions: [
      'Float Tilia Malbec'
    ],
    
    garnish: [],
  },
  // ============================= //
  //           Orgasmatini         //
  // ============================= //
  {
    name: 'Orgasmatini',
    category: 'specialty',
    glass: 'Martini Glass',
    ingredients: [
      {
        amount: 1.5,
        unit: 'oz',
        name: 'Tito\'s Handmade Vodka',
      },
      {
        amount: 1,
        unit: 'oz',
        name: 'Godiva White Chocolate',
      },
      {
        amount: 1,
        unit: 'oz',
        name: 'Godiva Dark Chocolate',
      },
      {
        amount: 1,
        unit: 'oz',
        name: 'Bailey\'s Irish Cream',
      },
    ],
    instructions: [
      'Decorate Martini Glass with Chocolate Syrup',
      'Build contents in a pint glass and add ice',
    ],
    mixingMethod: 'Shake & Strain',
    postMixingInstructions: [],
    
    garnish: [],
  },
  // // ============================= //
  // //      43rd White Russian       //
  // // ============================= //
  // {
  //   name: '43rd White Russian',
  //   category: 'specialty',
  //   glass: 'Rocks Glass',
  //   ingredients: [
  //     {
  //       amount: 1.5,
  //       unit: 'oz',
  //       name: 'Russian Standard Vodka',
  //     },
  //     {
  //       amount: 1.5,
  //       unit: 'oz',
  //       name: 'Eastern Kille Coffee Liqueur',
  //     },
  //     {
  //       amount: 1,
  //       unit: 'oz',
  //       name: 'Heavy Cream',
  //     },
  //   ],
  //   instructions: [
  //     'Build in Rocks Glass, and add ice',
  //   ],
  //   mixingMethod: 'Build & Stir',
  //   postMixingInstructions: [
  //     'Top w/ Half & Half'
  //   ],
    
  //   garnish: [
  //     'Zested Nutmeg',
  //     'Zested Cinnamon',
  //   ],
  // },
];

export const summerUpdate = [
  // ============================= //
  //   Blood, Orange, and Tears    //
  // ============================= //
  {
    name: 'Blood, Orange, and Tears',
    category: 'specialty',
    glass: 'Coup Glass',
    ingredients: [
      {
        amount: 1.5,
        unit: 'oz',
        name: 'Effen Blood Orange Vodka',
      },
      {
        amount: 0.5,
        unit: 'oz',
        name: 'Cointreau',
      },
      {
        amount: 2,
        unit: 'dashes',
        name: 'Peychaud\'s Bitters',
      },
      {
        amount: 0.5,
        unit: 'oz',
        name: 'Hibiscus Simple Syrup',
      },
      {
        amount: 0.5,
        unit: 'oz',
        name: 'Lemon Juice',
      },
    ],
    instructions: [
      'Build contents in a pint glass and add ice',
    ],
    mixingMethod: 'Shake & Strain',
    postMixingInstructions: [
      'Top w/ Sanpellegrino Blood Orange'
    ],
    garnish: [
      'Dried Orange Wheel'
    ],
  },
  // ============================= //
  //         Peach Collins         //
  // ============================= //
  {
    name: 'Thai Peach Collins',
    category: 'specialty',
    glass: 'Tulip Glass',
    ingredients: [
      {
        amount: 2,
        unit: 'oz',
        name: 'Eastern Kille Dry Gin',
      },
      {
        amount: 0.5,
        unit: 'oz',
        name: 'Peach Schnapps',
      },
      {
        amount: 2,
        unit: 'dashes',
        name: 'Aromatic Bitters',
      },
      {
        amount: 1,
        unit: 'oz',
        name: 'Simple Syrup',
      },
      {
        amount: 1,
        unit: 'oz',
        name: 'Lime Juice',
      },
      {
        amount: [4, 6],
        unit: 'range',
        name: 'Thai Basil Leaves',
      }
    ],
    instructions: [
      'Build contents in a pint glass and add ice',
    ],
    mixingMethod: 'Shake & Double Strain',
    postMixingInstructions: [
      'Top w/ Soda Water'
    ],
    garnish: [
      'Sprig of Thai Basil',
    ],
  },
  // ============================= //
  //      Mixed Berry Mojito       //
  // ============================= //
  {
    name: 'Pitaya Mojito',
    category: 'specialty',
    glass: 'Tulip Glass',
    ingredients: [
      {
        amount: 1,
        unit: 'oz',
        name: 'Chambord Raspberry Liqueur',
      },
      {
        amount: 1.5,
        unit: 'oz',
        name: 'Bacardi Dragonberry Rum',
      },
      {
        amount: [6, 8],
        unit: 'range',
        name: 'Mint Leaves',
      },
      {
        amount: [3, 5],
        unit: 'range',
        name: 'Lime Wedges',
      },
      {
        amount: [4, 6],
        unit: 'range',
        name: 'Mixed Berries',
      }
    ],
    instructions: [
      'Add Lime Wedges, Mint, and Chambord into a pint glass and muddle 3 times',
      'Add Bacardi Drangonberry Rum, and Mixed Berries',
    ],
    mixingMethod: 'Shake & Pour',
    postMixingInstructions: [
      'Top w/ Soda Water'
    ],
    garnish: [
      'Mint Sprig',
    ],
  },
  // ============================= //
  //        Whiskey Smash          //
  // ============================= //
  {
    name: 'Bruno Buffalo Smash',
    category: 'specialty',
    glass: 'Rocks Glass',
    ingredients: [
      {
        amount: 2,
        unit: 'oz',
        name: 'Buffalo Trace Bourbon',
      },
      {
        amount: 0.5,
        unit: 'oz',
        name: 'Chartreuse Green Liqueur',
      },
      {
        amount: 1,
        unit: 'oz',
        name: 'Lavander Simple Syrup',
      },
      {
        amount: [6, 8],
        unit: 'range',
        name: 'Mint Leaves',
      },
      {
        amount: [3, 4],
        unit: 'range',
        name: 'Lemon Wedges',
      }
    ],
    instructions: [
      'Add Lemon Wedges, Mint, and Simple into a pint glass and muddle 3-4 times',
      'Add Buffalo Trace and Chartreuce'
    ],
    mixingMethod: 'Shake & Double Strain',
    postMixingInstructions: [],
    garnish: [
      'Mint Sprig',
      'Dried Lemon Wheel'
    ],
  },
  // ============================= //
  //            Paloma             //
  // ============================= //
  {
    name: 'That\'s a Spicy Paloma',
    category: 'specialty',
    glass: 'Gibralter',
    ingredients: [
      {
        amount: 1.5,
        unit: 'oz',
        name: 'Corazon',
      },
      {
        amount: 0.5,
        unit: 'oz',
        name: 'Ancho Reyes Verde',
      },
      {
        amount: 0.5,
        unit: 'oz',
        name: 'Lime Juice',
      },
      {
        amount: 0.75,
        unit: 'oz',
        name: 'Simple Syrup',
      },
      {
        amount: 2,
        unit: 'oz',
        name: 'Grapefruit Juice',
      },
      {
        amount: 2,
        unit: '',
        name: 'Fresh Jalapenos',
      }
      
    ],
    instructions: [
      'Add Ingredients to Pint Glass',
    ],
    mixingMethod: 'Shake & Double Strain',
    postMixingInstructions: [],
    garnish: [
      'Jalapeno',
    ],
  },
  // ============================= //
  //          Quencher             //
  // ============================= //
  {
    name: 'The Quencher',
    category: 'specialty',
    glass: 'Mason Jar',
    ingredients: [
      {
        amount: 1.75,
        unit: 'oz',
        name: 'Kettle One Grapefruit & Rose',
      },
      {
        amount: 0.5,
        unit: 'oz',
        name: 'St. Germaine Elderflower',
      },
      {
        amount: 0.5,
        unit: 'oz',
        name: 'Lemon Juice',
      },
      {
        amount: 0.5,
        unit: 'oz',
        name: 'Simple Syrup',
      },
      {
        amount: [4, 5],
        unit: 'range',
        name: 'Thai Basil Leaves',
      }
      
    ],
    instructions: [
      'Add Spirits, Lemon Juice, and Simple Syrup into a Pint Glass.',
      'Shake.',
      'Slap basil leaves and add to shaker.'
    ],
    mixingMethod: 'Shake & Strain',
    postMixingInstructions: [
      'Top w/ Soda'
    ],
    garnish: [
      'Basil Sprig',
    ],
  },
  // ============================= //
  //       Key Lime Martini        //
  // ============================= //
  {
    name: 'Key Lime Martini',
    category: 'specialty',
    glass: 'Martini Glass',
    ingredients: [
      {
        amount: 1.5,
        unit: 'oz',
        name: 'Absolute Vanilla',
      },
      {
        amount: 1,
        unit: 'oz',
        name: 'Godiva White Chocolate',
      },
      {
        amount: 1,
        unit: 'oz',
        name: 'Lime Juice',
      },
      {
        amount: 1,
        unit: 'oz',
        name: 'Simple Syrup',
      },
    ],
    instructions: [
      'Add ingredients and ice.'
    ],
    mixingMethod: 'Shake & Strain',
    postMixingInstructions: [
      'Twist Lime peel, run around the rim of the glass, and rest it on the edge.'
    ],
    garnish: [
      'Lime Peel',
    ],
  },
];