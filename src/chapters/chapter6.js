export const chapter6 = {
    id: 'chapter6',
    title: 'Chapter 6: Dictionaries & Inventories',
    description: 'Use key/value pairs to store item counts and stats! 🧰',
    emoji: '🧰',
    lessons: [
        // === INTRO ===
        {
            type: 'info',
            title: '🧰 The Inventory Dictionary!',
            content: "Lists are great, but sometimes you want to look things up by NAME instead of a number.\n\nThat is a DICTIONARY!\n\nA dictionary stores items as key → value pairs.\n\nIn Minecraft terms: a chest label (key) with the stack count (value).",
            buttonText: "Show me! 👀"
        },
        {
            type: 'code',
            title: 'Your First Dictionary 📦',
            content: 'Make a dictionary of items and print it! 🧱',
            initialCode: 'inventory = {"sword": 1, "apple": 5, "torch": 12}\nprint(inventory)',
            expectedOutputPattern: 'sword.*apple.*torch'
        },
        // === ACCESS BY KEY ===
        {
            type: 'info',
            title: '🔑 Getting a Value by Key',
            content: "To grab a value, put the key inside [ ].\n\ninventory[\"apple\"] gives the number of apples!",
            buttonText: "Let me try! 🎯"
        },
        {
            type: 'code',
            title: 'Accessing Items 🍎',
            content: 'Print the number of apples and torches! 🔥',
            initialCode: 'inventory = {"sword": 1, "apple": 5, "torch": 12}\nprint("Apples:", inventory["apple"])\nprint("Torches:", inventory["torch"])',
            expectedOutputPattern: 'Apples:\\s*5'
        },
        {
            type: 'quiz',
            question: 'What does inventory["apple"] give you? 🤔',
            options: [
                '🍎 The number stored for apples',
                '🧰 The whole dictionary',
                '❌ An error every time'
            ],
            correctAnswerIndex: 0
        },
        // === UPDATE VALUES ===
        {
            type: 'info',
            title: '➕ Update a Value',
            content: "You can change a value just like a variable.\n\nIf you find 3 more apples, add them to the old count!",
            buttonText: "Update it! 🍎"
        },
        {
            type: 'code',
            title: 'Add More Apples 🍎',
            content: 'Increase the apple count by 3! 🧮',
            initialCode: 'inventory = {"apple": 5}\ninventory["apple"] = inventory["apple"] + 3\nprint("Apples now:", inventory["apple"])',
            expectedOutputPattern: 'Apples now:\\s*8'
        },
        // === ADD NEW KEYS ===
        {
            type: 'info',
            title: '✨ Add a New Item',
            content: "If the key doesn't exist yet, Python will add it!\n\nThis is how you put NEW items into your inventory.",
            buttonText: "Add something! ✨"
        },
        {
            type: 'code',
            title: 'New Item Unlocked 🧪',
            content: 'Add potions to the inventory! 🧪',
            initialCode: 'inventory = {"sword": 1}\ninventory["potion"] = 2\nprint(inventory)',
            expectedOutputPattern: 'potion'
        },
        {
            type: 'quiz',
            question: 'What happens when you do inventory["bow"] = 1 and "bow" is not there yet? 🏹',
            options: [
                '✅ It adds a new key called "bow"',
                '❌ It crashes Python',
                '🧰 It replaces the whole dictionary'
            ],
            correctAnswerIndex: 0
        },
        // === DICTS FOR STATS ===
        {
            type: 'info',
            title: '📊 Mob Stats with Dictionaries',
            content: "Dictionaries are perfect for stats!\n\nEach stat has a name (key) and a number (value).",
            buttonText: "Show me stats! 📊"
        },
        {
            type: 'code',
            title: 'Mob Stats 🧟',
            content: 'Store a mob’s name, HP, and damage! ⚔️',
            initialCode: 'mob = {"name": "Creeper", "hp": 20, "damage": 6}\nprint(mob["name"], "has", mob["hp"], "hp")\nprint("Damage:", mob["damage"])',
            expectedOutputPattern: 'Creeper'
        },
        // === LOOPS OVER DICTS ===
        {
            type: 'info',
            title: '🔁 Looping Through Keys',
            content: "A for loop over a dictionary gives you the KEYS.\n\nThen you can use each key to get the value!",
            buttonText: "Loop it! 🔁"
        },
        {
            type: 'code',
            title: 'Loot Keys 🗝️',
            content: 'Print each loot item name! 💎',
            initialCode: 'loot = {"string": 3, "bone": 2, "gunpowder": 5}\nfor item in loot:\n    print(item)',
            expectedOutputPattern: 'string'
        },
        {
            type: 'info',
            title: '🧾 Keys AND Values Together',
            content: "Use .items() to get BOTH the key and the value.\n\nIt gives you pairs: (item, count).",
            buttonText: "Show me pairs! 🧾"
        },
        {
            type: 'code',
            title: 'Loot Counts 📦',
            content: 'Print each loot item with its count! 📦',
            initialCode: 'loot = {"string": 3, "bone": 2, "gunpowder": 5}\nfor item, count in loot.items():\n    print(item, "x", count)',
            expectedOutputPattern: 'string\\s*x\\s*3'
        },
        {
            type: 'quiz',
            question: 'What does loot.items() give you? 🤔',
            options: [
                '✅ Both key and value pairs',
                '🔑 Only the keys',
                '🔢 Only the values'
            ],
            correctAnswerIndex: 0
        },
        {
            type: 'quiz',
            question: 'Which is better for looking up by name: a list or a dictionary? 🧠',
            options: [
                '✅ Dictionary (key → value)',
                '📋 List (number → value)',
                '🤷 They are the same'
            ],
            correctAnswerIndex: 0
        },
        {
            type: 'info',
            title: 'Chapter 6 Complete! 🏆✨',
            content: 'You learned dictionaries: key/value pairs, updating values, adding new items, and looping through keys and items! You are an inventory master! 🧰⚡',
            buttonText: "Back to Chapters 🏠",
            isEnd: true
        }
    ]
};
