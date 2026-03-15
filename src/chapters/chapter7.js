export const chapter7 = {
    id: 'chapter7',
    title: 'Chapter 7: Randomness & Loot',
    description: 'Roll dice, pick random mobs, and build loot tables! 🎲',
    emoji: '🎲',
    lessons: [
        // === REVIEW: DICTIONARIES ===
        {
            type: 'info',
            title: '🔁 Chapter 6 Review!',
            content: "Quick review of dictionaries before we start rolling dice! 🎲",
            buttonText: "Quiz me! ⚡"
        },
        {
            type: 'quiz',
            question: 'What is a dictionary good for? 🤔',
            options: [
                '✅ Looking up values by a key (name)',
                '📋 Only storing items in order',
                '❌ It can only hold one item'
            ],
            correctAnswerIndex: 0
        },
        {
            type: 'quiz',
            question: 'What does inventory["apple"] give you? 🍎',
            options: [
                '🍎 The value for the key "apple"',
                '🧰 The whole dictionary',
                '❌ An error every time'
            ],
            correctAnswerIndex: 0
        },
        // === INTRO TO RANDOM ===
        {
            type: 'info',
            title: '🎲 Randomness!',
            content: "Now we learn how to make things RANDOM!\n\nRandom means unpredictable, like rolling dice or opening a chest.\n\nIn Python we use the random module.",
            buttonText: "Let’s roll! 🎲"
        },
        {
            type: 'code',
            title: 'random.random() 🎲',
            content: 'random.random() gives a decimal between 0 and 1!',
            initialCode: 'import random\n\nprint("Random number:", random.random())',
            expectedOutputPattern: 'Random number:'
        },
        {
            type: 'quiz',
            question: 'What does random.random() give you? 🤔',
            options: [
                '✅ A decimal number from 0.0 up to 1.0',
                '🔢 A whole number from 1 to 10',
                '❌ Always the same number'
            ],
            correctAnswerIndex: 0
        },
        // === RANDINT ===
        {
            type: 'info',
            title: '🎯 Rolling Numbers with randint()',
            content: "randint(a, b) gives a RANDOM whole number between a and b.\n\nBoth ends are included!",
            buttonText: "Roll it! 🎯"
        },
        {
            type: 'code',
            title: 'Dice Roll 🎲',
            content: 'Roll a 6-sided die!',
            initialCode: 'import random\n\nroll = random.randint(1, 6)\nprint("You rolled:", roll)',
            expectedOutputPattern: 'You rolled:\\s*[1-6]'
        },
        {
            type: 'code',
            title: 'Random Damage ⚔️',
            content: 'Pick a random damage number from 3 to 8!',
            initialCode: 'import random\n\ndamage = random.randint(3, 8)\nprint("Damage:", damage)',
            expectedOutputPattern: 'Damage:\\s*\\d+'
        },
        {
            type: 'quiz',
            question: 'What numbers can randint(1, 3) return? 🤔',
            options: [
                '✅ 1, 2, or 3',
                '❌ 0, 1, or 2',
                '❌ Only 3'
            ],
            correctAnswerIndex: 0
        },
        // === CHOICE ===
        {
            type: 'info',
            title: '🎁 Pick a Random Item with choice()',
            content: "choice(list) picks ONE random item from a list.",
            buttonText: "Pick one! 🎁"
        },
        {
            type: 'code',
            title: 'Random Mob 🧟',
            content: 'Pick a random mob from the list!',
            initialCode: 'import random\n\nmobs = ["zombie", "creeper", "skeleton", "spider"]\nchosen = random.choice(mobs)\nprint("Mob chosen:", chosen)',
            expectedOutputPattern: 'Mob chosen:\\s*(zombie|creeper|skeleton|spider)'
        },
        {
            type: 'code',
            title: 'Random Chest Loot 💎',
            content: 'Choose a random loot item!',
            initialCode: 'import random\n\nloot = ["coal", "iron", "gold", "diamond", "emerald"]\nfound = random.choice(loot)\nprint("You found:", found)',
            expectedOutputPattern: 'You found:\\s*(coal|iron|gold|diamond|emerald)'
        },
        {
            type: 'quiz',
            question: 'Which function picks a random item from a list? 🤔',
            options: [
                '✅ random.choice()',
                '🔢 random.randint()',
                '🔀 random.shuffle()'
            ],
            correctAnswerIndex: 0
        },
        // === SHUFFLE ===
        {
            type: 'info',
            title: '🔀 Shuffle a List',
            content: "random.shuffle(list) mixes the list in a random order.",
            buttonText: "Shuffle it! 🔀"
        },
        {
            type: 'code',
            title: 'Shuffled Mobs 🧟',
            content: 'Mix up the mob order!',
            initialCode: 'import random\n\nmobs = ["zombie", "creeper", "skeleton", "spider"]\nrandom.shuffle(mobs)\nprint("Shuffled mobs:", mobs)',
            expectedOutputPattern: 'Shuffled mobs:'
        },
        // === PROBABILITY ===
        {
            type: 'info',
            title: '🎯 Probability with random.random()',
            content: "We can use random.random() to make chances!\n\nIf roll < 0.25, that is a 25% chance!",
            buttonText: "Chance time! 🎯"
        },
        {
            type: 'code',
            title: 'Rare Loot Chance 💎',
            content: '25% chance for RARE loot, otherwise COMMON.',
            initialCode: 'import random\n\nroll = random.random()\nprint("Roll:", roll)\n\nif roll < 0.25:\n    print("Loot: RARE 💎")\nelse:\n    print("Loot: COMMON 🪨")',
            expectedOutputPattern: 'Loot:\\s*(RARE|COMMON)'
        },
        {
            type: 'quiz',
            question: 'If roll < 0.10, that is a ____ chance. 🤔',
            options: [
                '✅ 10% chance',
                '❌ 1% chance',
                '❌ 100% chance'
            ],
            correctAnswerIndex: 0
        },
        {
            type: 'info',
            title: 'Chapter 7 Complete! 🏆✨',
            content: 'You learned random numbers, random choices, shuffling lists, and probability! Your loot tables are legendary now! 🎲💎',
            buttonText: "Back to Chapters 🏠",
            isEnd: true
        }
    ]
};
