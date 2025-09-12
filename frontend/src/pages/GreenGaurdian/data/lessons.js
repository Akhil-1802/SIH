export const lessonsData = [
  {
    id: 1,
    title: "Waste Basics",
    description: "Learn the fundamentals of waste types and why proper disposal matters",
    icon: "🗂️",
    difficulty: "easy",
    introduction: "Welcome to your first lesson! Today we'll explore the different types of waste and why it's so important to handle them properly. Ready to become a waste management expert? 🌱",
    exercises: [
      {
        id: 1,
        type: "quiz",
        title: "What is Waste?",
        question: "Which of these best describes what 'waste' means?",
        tutorHint: "Think about what happens to things we don't need anymore!",
        options: [
          "Only broken items",
          "Things we throw away or no longer need",
          "Only food scraps",
          "Only plastic items"
        ],
        correctAnswer: "Things we throw away or no longer need",
        xpReward: 25
      },
      {
        id: 2,
        type: "sorting",
        title: "Types of Waste",
        question: "Sort these items into their correct waste categories:",
        tutorHint: "Remember: organic comes from nature, recyclable can be made into new things, and general waste goes to landfills!",
        items: ["Apple core", "Plastic bottle", "Old magazine", "Banana peel", "Broken toy", "Aluminum can"],
        categories: ["Organic", "Recyclable", "General Waste"],
        pairs: [
          { item: "Apple core", category: "Organic" },
          { item: "Banana peel", category: "Organic" },
          { item: "Plastic bottle", category: "Recyclable" },
          { item: "Old magazine", category: "Recyclable" },
          { item: "Aluminum can", category: "Recyclable" },
          { item: "Broken toy", category: "General Waste" }
        ],
        xpReward: 30
      },
      {
        id: 3,
        type: "quiz",
        title: "Why Waste Management Matters",
        question: "What happens when we don't manage waste properly?",
        tutorHint: "Poor waste management affects our environment, health, and the planet!",
        options: [
          "Nothing happens",
          "It helps the environment",
          "It can pollute air, water, and soil",
          "It makes things prettier"
        ],
        correctAnswer: "It can pollute air, water, and soil",
        xpReward: 25
      }
    ],
    funFact: "Did you know? The average person produces about 4.5 pounds of waste every day! That's like throwing away a small bowling ball daily! 🎳"
  },
  {
    id: 2,
    title: "The 3 R's: Reduce, Reuse, Recycle",
    description: "Master the golden rules of waste management",
    icon: "♻️",
    difficulty: "easy",
    introduction: "Time to learn the three magical R's that can help save our planet! These simple principles can make a huge difference. Let's explore each one! ✨",
    exercises: [
      {
        id: 4,
        type: "dragdrop",
        title: "Match the R's",
        question: "Match each action with the correct 'R' principle:",
        tutorHint: "Reduce means use less, Reuse means use again, Recycle means make new things from old ones!",
        items: ["Use less plastic", "Turn old jars into storage", "Put bottles in recycling bin", "Buy only what you need"],
        pairs: [
          { item: "Use less plastic", category: "Reduce" },
          { item: "Buy only what you need", category: "Reduce" },
          { item: "Turn old jars into storage", category: "Reuse" },
          { item: "Put bottles in recycling bin", category: "Recycle" }
        ],
        xpReward: 35
      },
      {
        id: 5,
        type: "quiz",
        title: "Reduce in Action",
        question: "Which is the BEST example of 'reducing' waste?",
        tutorHint: "Reducing means using less or avoiding waste in the first place!",
        options: [
          "Throwing away plastic bags",
          "Bringing your own reusable shopping bag",
          "Recycling bottles",
          "Using old containers for storage"
        ],
        correctAnswer: "Bringing your own reusable shopping bag",
        xpReward: 25
      },
      {
        id: 6,
        type: "sorting",
        title: "Sort the Actions",
        question: "Sort these eco-friendly actions by their 'R' category:",
        tutorHint: "Think about the order: Reduce (use less), Reuse (use again), Recycle (make new)!",
        items: ["Buy second-hand clothes", "Use both sides of paper", "Put cans in recycling", "Donate old books", "Choose products with less packaging", "Compost food scraps"],
        categories: ["Reduce", "Reuse", "Recycle"],
        pairs: [
          { item: "Choose products with less packaging", category: "Reduce" },
          { item: "Buy second-hand clothes", category: "Reuse" },
          { item: "Use both sides of paper", category: "Reuse" },
          { item: "Donate old books", category: "Reuse" },
          { item: "Put cans in recycling", category: "Recycle" },
          { item: "Compost food scraps", category: "Recycle" }
        ],
        xpReward: 40
      }
    ],
    funFact: "Amazing fact: Recycling one aluminum can saves enough energy to power a TV for 3 hours! Every can counts! 📺⚡"
  },
  {
    id: 3,
    title: "Recycling Champions",
    description: "Become a recycling expert and learn what can and cannot be recycled",
    icon: "🏆",
    difficulty: "medium",
    introduction: "Ready to become a recycling champion? Let's learn which materials can be given a second life through recycling and which ones need special handling! 🌟",
    exercises: [
      {
        id: 7,
        type: "sorting",
        title: "Recyclable or Not?",
        question: "Sort these items based on whether they can be recycled in regular recycling bins:",
        tutorHint: "Most clean paper, plastic bottles, cans, and glass can be recycled. Dirty items or mixed materials usually can't!",
        items: ["Clean pizza box", "Greasy pizza box", "Glass jar", "Plastic yogurt cup", "Old batteries", "Aluminum foil", "Broken mirror", "Newspaper"],
        categories: ["Can Recycle", "Cannot Recycle"],
        pairs: [
          { item: "Clean pizza box", category: "Can Recycle" },
          { item: "Glass jar", category: "Can Recycle" },
          { item: "Plastic yogurt cup", category: "Can Recycle" },
          { item: "Aluminum foil", category: "Can Recycle" },
          { item: "Newspaper", category: "Can Recycle" },
          { item: "Greasy pizza box", category: "Cannot Recycle" },
          { item: "Old batteries", category: "Cannot Recycle" },
          { item: "Broken mirror", category: "Cannot Recycle" }
        ],
        xpReward: 45
      },
      {
        id: 8,
        type: "quiz",
        title: "Recycling Symbols",
        question: "What do the numbers inside recycling symbols tell us?",
        tutorHint: "These numbers help identify the type of plastic so recycling centers know how to process them!",
        options: [
          "How many times it's been recycled",
          "The type of plastic material",
          "How much it weighs",
          "Where it was made"
        ],
        correctAnswer: "The type of plastic material",
        xpReward: 30
      },
      {
        id: 9,
        type: "dragdrop",
        title: "Recycling Bin Match",
        question: "Put each item in the correct recycling bin:",
        tutorHint: "Paper goes with paper, plastic with plastic, glass with glass, and metals together!",
        items: ["Cardboard box", "Plastic water bottle", "Glass bottle", "Soda can"],
        pairs: [
          { item: "Cardboard box", category: "Paper Bin" },
          { item: "Plastic water bottle", category: "Plastic Bin" },
          { item: "Glass bottle", category: "Glass Bin" },
          { item: "Soda can", category: "Metal Bin" }
        ],
        xpReward: 35
      }
    ],
    funFact: "Super cool fact: It takes about 2,000 recycled plastic bottles to make one adult-sized fleece jacket! Your recycling becomes new clothes! 👕"
  },
  {
    id: 4,
    title: "Composting Magic",
    description: "Turn organic waste into garden gold through composting",
    icon: "🌱",
    difficulty: "medium",
    introduction: "Get ready to discover the magic of composting! We'll learn how kitchen scraps and yard waste can become nutrient-rich soil that helps plants grow strong and healthy! 🌿✨",
    exercises: [
      {
        id: 10,
        type: "sorting",
        title: "Compost or Not?",
        question: "Sort these items - which can go in a compost bin?",
        tutorHint: "Natural, organic materials from plants can compost. Avoid meat, dairy, oils, and non-natural materials!",
        items: ["Apple peels", "Meat scraps", "Coffee grounds", "Plastic fork", "Eggshells", "Oil", "Leaves", "Cheese"],
        categories: ["Can Compost", "Cannot Compost"],
        pairs: [
          { item: "Apple peels", category: "Can Compost" },
          { item: "Coffee grounds", category: "Can Compost" },
          { item: "Eggshells", category: "Can Compost" },
          { item: "Leaves", category: "Can Compost" },
          { item: "Meat scraps", category: "Cannot Compost" },
          { item: "Plastic fork", category: "Cannot Compost" },
          { item: "Oil", category: "Cannot Compost" },
          { item: "Cheese", category: "Cannot Compost" }
        ],
        xpReward: 40
      },
      {
        id: 11,
        type: "quiz",
        title: "Composting Benefits",
        question: "What is the main benefit of composting organic waste?",
        tutorHint: "Composting transforms waste into something valuable for gardens and plants!",
        options: [
          "It makes waste disappear",
          "It creates nutrient-rich soil for plants",
          "It makes waste smell better",
          "It reduces the size of waste"
        ],
        correctAnswer: "It creates nutrient-rich soil for plants",
        xpReward: 25
      },
      {
        id: 12,
        type: "dragdrop",
        title: "Compost Layers",
        question: "Arrange these compost materials in the right balance:",
        tutorHint: "Good compost needs both 'greens' (nitrogen-rich) and 'browns' (carbon-rich) materials!",
        items: ["Vegetable scraps", "Dry leaves", "Grass clippings", "Newspaper"],
        pairs: [
          { item: "Vegetable scraps", category: "Greens (Nitrogen)" },
          { item: "Grass clippings", category: "Greens (Nitrogen)" },
          { item: "Dry leaves", category: "Browns (Carbon)" },
          { item: "Newspaper", category: "Browns (Carbon)" }
        ],
        xpReward: 35
      }
    ],
    funFact: "Nature's recycling fact: Composting can reduce household waste by up to 30%! Plus, it takes 3-12 months for organic waste to turn into rich, dark soil! 🌍"
  },
  {
    id: 5,
    title: "Hazardous Waste Safety",
    description: "Learn to identify and safely handle dangerous waste materials",
    icon: "⚠️",
    difficulty: "hard",
    introduction: "This is an important lesson about hazardous waste! Some materials need special handling to keep us and our environment safe. Let's learn how to identify and properly dispose of these materials! 🛡️",
    exercises: [
      {
        id: 13,
        type: "sorting",
        title: "Hazardous or Safe?",
        question: "Identify which items are hazardous waste and need special disposal:",
        tutorHint: "Hazardous waste includes batteries, chemicals, paints, electronics, and anything toxic, flammable, or corrosive!",
        items: ["Old phone", "Used batteries", "Empty yogurt cup", "Paint can", "Paper towels", "Cleaning chemicals", "Glass jar", "Light bulbs"],
        categories: ["Hazardous Waste", "Regular Waste"],
        pairs: [
          { item: "Old phone", category: "Hazardous Waste" },
          { item: "Used batteries", category: "Hazardous Waste" },
          { item: "Paint can", category: "Hazardous Waste" },
          { item: "Cleaning chemicals", category: "Hazardous Waste" },
          { item: "Light bulbs", category: "Hazardous Waste" },
          { item: "Empty yogurt cup", category: "Regular Waste" },
          { item: "Paper towels", category: "Regular Waste" },
          { item: "Glass jar", category: "Regular Waste" }
        ],
        xpReward: 50
      },
      {
        id: 14,
        type: "quiz",
        title: "Safe Handling",
        question: "What should you NEVER do with hazardous waste?",
        tutorHint: "Safety first! Hazardous waste needs special collection points, never regular trash or drains!",
        options: [
          "Take it to a special collection center",
          "Pour it down the drain or throw in regular trash",
          "Ask an adult for help",
          "Store it safely until disposal"
        ],
        correctAnswer: "Pour it down the drain or throw in regular trash",
        xpReward: 30
      },
      {
        id: 15,
        type: "dragdrop",
        title: "Proper Disposal Methods",
        question: "Match each hazardous item with its proper disposal method:",
        tutorHint: "Different hazardous materials need different disposal methods - electronics stores, pharmacies, and special collection events!",
        items: ["Old medications", "Car battery", "Smartphone", "Paint thinner"],
        pairs: [
          { item: "Old medications", category: "Pharmacy Take-Back" },
          { item: "Car battery", category: "Auto Store Return" },
          { item: "Smartphone", category: "Electronics Recycling" },
          { item: "Paint thinner", category: "Hazardous Waste Center" }
        ],
        xpReward: 45
      }
    ],
    funFact: "Safety fact: One car battery contains enough lead to contaminate 160,000 gallons of water! That's why proper disposal at auto stores is so important! 🚗🔋"
  },
  {
    id: 6,
    title: "Zero Waste Lifestyle",
    description: "Advanced strategies for minimizing waste in daily life",
    icon: "🎯",
    difficulty: "hard",
    introduction: "Welcome to the ultimate eco-challenge! Zero waste living is about creating as little waste as possible. Let's explore creative ways to live more sustainably and make a real impact! 🌍💚",
    exercises: [
      {
        id: 16,
        type: "quiz",
        title: "Zero Waste Principles",
        question: "What is the main goal of a zero waste lifestyle?",
        tutorHint: "Zero waste is about redesigning how we live to eliminate waste going to landfills!",
        options: [
          "Never buying anything new",
          "Only using recyclable products",
          "Preventing waste from going to landfills",
          "Living without any possessions"
        ],
        correctAnswer: "Preventing waste from going to landfills",
        xpReward: 30
      },
      {
        id: 17,
        type: "sorting",
        title: "Zero Waste Swaps",
        question: "Sort these items as 'wasteful' or 'zero waste alternatives':",
        tutorHint: "Zero waste alternatives are reusable, durable, and don't create packaging waste!",
        items: ["Disposable water bottle", "Reusable water bottle", "Paper towels", "Cloth napkins", "Plastic straws", "Metal straws", "Paper bags", "Canvas bags"],
        categories: ["Wasteful Option", "Zero Waste Alternative"],
        pairs: [
          { item: "Disposable water bottle", category: "Wasteful Option" },
          { item: "Paper towels", category: "Wasteful Option" },
          { item: "Plastic straws", category: "Wasteful Option" },
          { item: "Paper bags", category: "Wasteful Option" },
          { item: "Reusable water bottle", category: "Zero Waste Alternative" },
          { item: "Cloth napkins", category: "Zero Waste Alternative" },
          { item: "Metal straws", category: "Zero Waste Alternative" },
          { item: "Canvas bags", category: "Zero Waste Alternative" }
        ],
        xpReward: 50
      },
      {
        id: 18,
        type: "dragdrop",
        title: "Waste Reduction Strategies",
        question: "Match each strategy with its waste reduction impact:",
        tutorHint: "Each action prevents different types of waste - packaging, food waste, or disposable items!",
        items: ["Meal planning", "Buying in bulk", "DIY cleaning products", "Repairing instead of replacing"],
        pairs: [
          { item: "Meal planning", category: "Prevents Food Waste" },
          { item: "Buying in bulk", category: "Reduces Packaging" },
          { item: "DIY cleaning products", category: "Eliminates Chemical Containers" },
          { item: "Repairing instead of replacing", category: "Extends Product Life" }
        ],
        xpReward: 45
      }
    ],
    funFact: "Inspiring fact: The Johnson family of four produces only one jar of waste per year! They've proven that zero waste living is possible and saves money too! 🏺✨"
  }
];