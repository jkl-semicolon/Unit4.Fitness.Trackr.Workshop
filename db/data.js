const activities = [
  {
    name: 'Deadlift',
    description: 'A powerful move that engages your back and legs, building overall strength.'
  },
  {
    name: 'T-Bar Row',
    description: 'A favorite back exercise, endorsed by Arnold Schwarzenegger himself.'
  },
  {
    name: 'Bird-Dog (One-Arm, One-Leg Plank)',
    description: 'Challenges stability and keeps your back flat.'
  },
  {
    name: 'Pullups',
    description: 'A classic strength-building move that targets multiple muscle groups.'
  },
  {
    name: 'Squats',
    description: 'Work your lower body, including quads, hamstrings, and glutes.'
  },
  {
    name: 'Bench Press',
    description: 'A chest-focused exercise that also engages your triceps and shoulders.'
  },
  {
    name: 'Pushups',
    description: 'A fundamental bodyweight move for upper body strength.'
  },
  {
    name: 'Lunges',
    description: 'Improve leg strength, balance, and coordination.'
  },
  {
    name: 'Planks',
    description: 'Strengthen your core muscles and improve stability.'
  },
  {
    name: 'Russian Twists',
    description: 'Target obliques and improve rotational strength.' 
  }
];

const routines = [
  {
    is_public: true,
    name: 'Honey never spoils',
    goal: 'Archaeologists have discovered pots of honey in ancient Egyptian tombs that are over 3,000 years old, and the honey is still perfectly edible.'
  },
  {
    is_public: false,
    name: 'The shortest war in history',
    goal: 'The Anglo-Zanzibar War of 1896 lasted only 38 minutes! It was a conflict between the British Empire and the Sultanate of Zanzibar.'
  },
  {
    is_public: false,
    name: 'Octopuses have three hearts',
    goal: 'These intelligent creatures have two hearts that pump blood to their gills and one heart that circulates blood throughout their body.'
  },
  {
    is_public: true,
    name: 'Bananas are berries, but strawberries aren’t',
    goal: 'Botanically speaking, bananas qualify as berries because they develop from a single ovary. Strawberries, on the other hand, are not true berries.'
  },
  {
    is_public: false,
    name: 'The Eiffel Tower grows in summer',
    goal: 'Due to the heat, the iron structure of the Eiffel Tower expands, making it 6 inches taller during warmer months.'
  },
  {
    is_public: true,
    name: 'Cows have best friends',
    goal: 'These gentle herbivores form close bonds with specific individuals in their herd. They even get stressed when separated from their buddies.'
  },
  {
    is_public: false,
    name: 'The world’s largest desert isn’t sandy',
    goal: 'It’s actually the Antarctic Desert, covering an area of about 5.5 million square miles.'
  },
  {
    is_public: true,
    name: 'The Great Wall of China isn’t visible from space',
    goal: 'Despite popular belief, astronauts cannot see the Great Wall with the naked eye from orbit.'
  },
  {
    is_public: false,
    name: 'The shortest war poem',
    goal: `“Fleas” by American poet Ogden Nash consists of just two words: “Adam / Had 'em.”`
  }, // may cause issue, keep an eye out
  {
    is_public: true,
    name: 'The smell of freshly cut grass',
    goal: 'The pleasant scent you experience after mowing the lawn is actually a plant distress signal. Grass releases chemicals when cut, and our brains interpret them as a pleasant smell.'
  },
];

/**
 * Fisher-Yates Shuffle, sourced from: https://bost.ocks.org/mike/shuffle/.
 * To help randomize players for function setTurnOrder, and for shuffling tiles in bag.
 * @param {array}, array of player objects 
 * @returns {array}, array of shuffled player objects
 */
const shuffle = (array) => {
  let m = array.length, t, i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  };
  return array;
};

const nums = [];
const nums2 = [];
(function r_a_setup () {
  for (let i=1; i<11; i++) {
    nums.push(i);
    nums2.push(i);
  }
  shuffle(nums);
  shuffle(nums2);
})();

const myRand = () => {return Math.floor(Math.random() * 101)};

const routines_activities = [
  {
    routine_id: nums.pop(),
    activity_id: nums2.pop(),
    count: myRand()
  },
  {
    routine_id: nums.pop(),
    activity_id: nums2.pop(),
    count: myRand()
  },
  {
    routine_id: nums.pop(),
    activity_id: nums2.pop(),
    count: myRand() 
  },
  {
    routine_id: nums.pop(),
    activity_id: nums2.pop(),
    count: myRand()
  },
  {
    routine_id: nums.pop(),
    activity_id: nums2.pop(),
    count: myRand()
  },
  {
    routine_id: nums.pop(),
    activity_id: nums2.pop(),
    count: myRand()
  },
  {
    routine_id: nums.pop(),
    activity_id: nums2.pop(),
    count: myRand()
  },
  {
    routine_id: nums.pop(),
    activity_id: nums2.pop(),
    count: myRand()
  },
  {
    routine_id: nums.pop(),
    activity_id: nums2.pop(),
    count: myRand()
  },
  {
    routine_id: nums.pop(),
    activity_id: nums2.pop(),
    count: myRand()
  }
];

export { routines, activities, routines_activities }