export const chapter2 = {
    id: 'chapter2',
    title: 'Chapter 2: Lists, Booleans & Comparisons',
    description: 'Master lists, True/False, and comparison operators! 📋',
    emoji: '📋',
    lessons: [
        // === REVIEW QUIZZES FROM CHAPTER 1 ===
        {
            type: 'info',
            title: '🔁 Chapter 1 Review!',
            content: "Before we learn new stuff, let's make sure you remember everything from Chapter 1! 🧠\n\nQuick quiz time! ⚡",
            buttonText: "Bring it on! 💪"
        },
        {
            type: 'quiz',
            question: 'What does print("Creeper") do? 💬',
            options: [
                '💥 Makes a Creeper explode',
                '📺 Shows the word Creeper on the screen',
                '🏗️ Builds a Creeper in Minecraft'
            ],
            correctAnswerIndex: 1
        },
        {
            type: 'quiz',
            question: 'What is a variable? 📦',
            options: [
                '🎒 A container that stores a value (like an inventory slot!)',
                '🔧 A tool for breaking blocks',
                '🎮 A type of game controller'
            ],
            correctAnswerIndex: 0
        },
        {
            type: 'quiz',
            question: "What does '3' + '3' give you? 🤪",
            options: [
                '🔢 6',
                '🔤 33 (strings get glued together!)',
                '💥 An error'
            ],
            correctAnswerIndex: 1
        },
        // === LISTS: SHORT ===
        {
            type: 'info',
            title: '📋 Introducing Lists!',
            content: "In Minecraft, your hotbar holds multiple items in a row. 🎮\n\nIn Python, a LIST is the same idea! It holds multiple things in order, inside square brackets [ ].\n\nLet's make one! 🎉",
            buttonText: "Show me! 👀"
        },
        {
            type: 'code',
            title: 'Your First List 📝',
            content: 'Make a short list of your hotbar items! 🗡️',
            initialCode: 'hotbar = ["sword", "pickaxe", "torch"]\nprint(hotbar)',
            expectedOutputPattern: 'sword.*pickaxe.*torch'
        },
        {
            type: 'code',
            title: 'Counting Items 🔢',
            content: 'Use len() to count how many items are in your list! 📏',
            initialCode: 'hotbar = ["sword", "pickaxe", "torch"]\nprint("Items in hotbar:", len(hotbar))',
            expectedOutputPattern: 'Items in hotbar:\\s*3'
        },
        // === LIST INDEXING ===
        {
            type: 'info',
            title: '👆 Grabbing Items from a List!',
            content: "Great, you made a list! But how do you grab ONE item from it? 🤔\n\nYou use a NUMBER inside square brackets!\n\nBut here's the weird part: Python starts counting from 0, not 1! 🤯\n\nSo the FIRST item is [0], the second is [1], etc.",
            buttonText: "Let me try! 🎯"
        },
        {
            type: 'code',
            title: 'List Indexing 101 🎯',
            content: 'Grab items from your hotbar by their position! 👆',
            initialCode: 'hotbar = ["sword", "pickaxe", "torch"]\nprint("Item 0:", hotbar[0])\nprint("Item 1:", hotbar[1])\nprint("Item 2:", hotbar[2])',
            expectedOutputPattern: 'Item 0:\\s*sword'
        },
        {
            type: 'quiz',
            question: 'If mobs = ["zombie", "skeleton", "creeper"], what is mobs[1]? 🧟',
            options: [
                '🧟 zombie',
                '💀 skeleton',
                '💥 creeper'
            ],
            correctAnswerIndex: 1
        },
        {
            type: 'info',
            title: '🔙 Backwards Indexing!',
            content: "Python has a cool trick! You can use NEGATIVE numbers to grab items from the END of the list! 🤯\n\n[-1] = last item\n[-2] = second to last\n\nSuper handy when a list is really long!",
            buttonText: "Whoa, show me! 😮"
        },
        {
            type: 'code',
            title: 'Negative Indexing 🔙',
            content: 'Try grabbing items from the end! ⬅️',
            initialCode: 'mobs = ["zombie", "skeleton", "creeper", "spider", "enderman"]\nprint("Last mob:", mobs[-1])\nprint("Second to last:", mobs[-2])\nprint("First mob:", mobs[0])',
            expectedOutputPattern: 'Last mob:\\s*enderman'
        },
        // === LISTS: LONG ===
        {
            type: 'info',
            title: '📦 Bigger Inventories!',
            content: "Lists can be SUPER long! Just like your full Minecraft inventory with 36 slots! 🤯\n\nLet's make a bigger list and use indexing to find items!",
            buttonText: "Make it big! 💪"
        },
        {
            type: 'code',
            title: 'A Giant Inventory! 🏰',
            content: 'Use indexing to peek at specific items! 😮',
            initialCode: 'inventory = [\n    "diamond_sword", "iron_pickaxe", "bow",\n    "arrows", "steak", "golden_apple",\n    "ender_pearl", "shield", "torch",\n    "cobblestone", "oak_planks", "redstone"\n]\nprint("Total items:", len(inventory))\nprint("First item:", inventory[0])\nprint("Fifth item:", inventory[4])\nprint("Last item:", inventory[-1])',
            expectedOutputPattern: 'Total items:\\s*12'
        },
        // === LISTS OF NUMBERS ===
        {
            type: 'info',
            title: '🔢 Lists of Numbers!',
            content: "Lists don't just hold words (strings).\nThey can hold numbers too! 🔢\n\nLet's use indexing to grab specific numbers!",
            buttonText: "Cool! 🚀"
        },
        {
            type: 'code',
            title: 'Number Lists 🎯',
            content: 'A list of damage values for different weapons! ⚔️',
            initialCode: 'weapon_damage = [7, 5, 9, 4, 6]\nprint("All damage:", weapon_damage)\nprint("First weapon damage:", weapon_damage[0])\nprint("Third weapon damage:", weapon_damage[2])\nprint("Last weapon damage:", weapon_damage[-1])',
            expectedOutputPattern: 'First weapon damage:\\s*7'
        },
        // === MIXED LISTS ===
        {
            type: 'info',
            title: '🌈 Mixing It Up!',
            content: "Here's something wild... 🤯\n\nPython lists can hold DIFFERENT types together!\nNumbers AND strings in the SAME list!\n\nMinecraft doesn't do this, but Python does! 😎",
            buttonText: "Whaaaat?! 🤯"
        },
        {
            type: 'code',
            title: 'Mixed Lists 🎨',
            content: 'A list with strings AND numbers together! 🥳',
            initialCode: 'player_info = ["Steve", 100, "Diamond Sword", 20, "Survival"]\nprint("Player:", player_info[0])\nprint("Health:", player_info[1])\nprint("Weapon:", player_info[2])\nprint("Attack:", player_info[3])\nprint("Mode:", player_info[4])',
            expectedOutputPattern: 'Player:\\s*Steve'
        },
        {
            type: 'quiz',
            question: 'If items = ["apple", 5, "sword"], what is items[1]? 🤔',
            options: [
                '🍎 apple',
                '🔢 5',
                '🗡️ sword'
            ],
            correctAnswerIndex: 1
        },
        {
            type: 'quiz',
            question: 'Can a Python list hold both numbers AND strings? 🤔',
            options: [
                '❌ No, a list can only hold one type',
                '✅ Yes! Python lists can mix different types!',
                '🤷 Only if you ask nicely'
            ],
            correctAnswerIndex: 1
        },
        // === BOOLEANS ===
        {
            type: 'info',
            title: '✅❌ True or False: Booleans!',
            content: "Time for a brand new type! 🎉\n\nA Boolean is super simple:\nIt can ONLY be True or False.\n\nLike a Redstone Lamp: ON ✅ or OFF ❌\n\nThat's it! Just two values!",
            buttonText: "Simple enough! 😄"
        },
        {
            type: 'code',
            title: 'Boolean Basics ✅❌',
            content: 'Try creating some True/False values! 💡',
            initialCode: 'is_alive = True\nis_creative_mode = False\nhas_diamonds = True\n\nprint("Alive?", is_alive)\nprint("Creative mode?", is_creative_mode)\nprint("Has diamonds?", has_diamonds)',
            expectedOutputPattern: 'Alive\\?\\s*True'
        },
        // === COMPARISONS ===
        {
            type: 'info',
            title: '⚖️ Comparisons!',
            content: "Python can COMPARE things and tell you True or False! ⚖️\n\n>  means greater than\n<  means less than\n>= means greater or equal\n<= means less or equal\n== means exactly equal\n\nLet's try them! 🎯",
            buttonText: "Let's compare! 🔍"
        },
        {
            type: 'code',
            title: 'Greater Than & Less Than ⚔️',
            content: 'Compare some Minecraft stats! Which is bigger? 📊',
            initialCode: 'diamond_sword_damage = 7\niron_sword_damage = 6\n\nprint("Diamond > Iron?", diamond_sword_damage > iron_sword_damage)\nprint("Iron > Diamond?", iron_sword_damage > diamond_sword_damage)\nprint("Are they equal?", diamond_sword_damage == iron_sword_damage)',
            expectedOutputPattern: 'Diamond > Iron\\?\\s*True'
        },
        {
            type: 'code',
            title: 'More Comparisons! 🔢',
            content: 'Try >= and <= with health points! ❤️',
            initialCode: 'my_health = 20\nmax_health = 20\nenemy_health = 15\n\nprint("Full health?", my_health >= max_health)\nprint("Enemy weaker?", enemy_health < my_health)\nprint("Exact same HP?", my_health == max_health)',
            expectedOutputPattern: 'Full health\\?\\s*True'
        },
        {
            type: 'quiz',
            question: 'What does 10 > 5 give you in Python? 🧮',
            options: [
                '🔢 15',
                '✅ True',
                '❌ False'
            ],
            correctAnswerIndex: 1
        },
        {
            type: 'quiz',
            question: 'What does 3 == 5 give you? 🤔',
            options: [
                '✅ True',
                '❌ False (because 3 is NOT equal to 5)',
                '🔢 8'
            ],
            correctAnswerIndex: 1
        },
        {
            type: 'quiz',
            question: 'What is a Boolean? 🎯',
            options: [
                '🔤 A fancy word for a string',
                '✅❌ A value that can only be True or False',
                '📋 Another name for a list'
            ],
            correctAnswerIndex: 1
        },
        {
            type: 'info',
            title: 'Chapter 2 Complete! 🏆🎉',
            content: 'Amazing! You now know about Lists, Booleans, and Comparisons! You are leveling up fast! 🚀⚡',
            buttonText: "Back to Chapters 🏠",
            isEnd: true
        }
    ]
};
