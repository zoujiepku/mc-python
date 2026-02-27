export const chapter1 = {
    id: 'chapter1',
    title: 'Chapter 1: The Magic Command Block',
    description: 'Learn print, big numbers, variables, and strings! 🪄',
    emoji: '⛏️',
    lessons: [
        {
            type: 'info',
            title: '🪄 The Magic Command Block',
            content: "Welcome to Python! 🐍 Python is like a magical Command Block. We can give it instructions and it will do them instantly. Let's try telling the computer to say something! ✨",
            buttonText: "Let's Go! 🏃‍♂️"
        },
        {
            type: 'code',
            title: 'Your First Spell 📜',
            content: 'Type the exact words below and hit Run! ⚡\n\nprint("Hello, Minecraft!")',
            initialCode: 'print("Hello, Minecraft!")',
            expectedOutputPattern: 'Hello, Minecraft!'
        },
        {
            type: 'quiz',
            question: 'What does the print() command do? 🤔',
            options: [
                '🟩 Spawns a creeper',
                '⛏️ Digs a hole',
                '💬 Tells the computer to display a message on the screen'
            ],
            correctAnswerIndex: 2
        },
        {
            type: 'info',
            title: '🔢 Super Silly Big Numbers!',
            content: "Python is also a super-fast calculator. 🚀 It can multiply giant numbers faster than you can blink! Let's multiply 99,999,999 by 88,888,888. 🤯",
            buttonText: "Let's multiply! ✖️"
        },
        {
            type: 'code',
            title: 'Mega Multiplication 💥',
            content: 'Try typing this and run it:\n\nprint(99999999 * 88888888)',
            initialCode: 'print(99999999 * 88888888)',
            expectedOutputPattern: '\\d+'
        },
        {
            type: 'info',
            title: '📦 Storing Blocks (Variables)',
            content: 'In Minecraft, you carry items in your inventory. 🎒 In Python, we use "Variables" as our inventory slots. We can store numbers in words! 🔠',
            buttonText: "Show me! 👀"
        },
        {
            type: 'code',
            title: 'Variable Inventory 💎',
            content: 'Run this block to see how many treasures we have! 💰',
            initialCode: 'diamonds = 50\nemerald_blocks = 1000\nprint("Total treasures:", diamonds + emerald_blocks)',
            expectedOutputPattern: 'Total treasures:\\s*1050'
        },
        {
            type: 'quiz',
            question: 'If we write `creepers = 100` and then `creepers = creepers + 50`, what is `creepers` now? 💣',
            options: [
                '💥 100',
                '🎯 150',
                '🤷 creepers'
            ],
            correctAnswerIndex: 1
        },
        {
            type: 'info',
            title: '🔤 Words vs Numbers!',
            content: 'In Python, there are two types of stuff we can store:\n\n🔢 Numbers: like 42, 100, 99999\n🔤 Strings: words wrapped in quotes, like "Steve" or "Creeper"\n\nStrings are text. Numbers are for math!',
            buttonText: "Cool! Show me! 👀"
        },
        {
            type: 'code',
            title: 'String Variables 🏷️',
            content: 'Try storing a name and printing it! 🗣️',
            initialCode: 'player_name = "Steve"\nboss_mob = "Ender Dragon"\nprint(player_name, "vs", boss_mob)',
            expectedOutputPattern: 'Steve vs Ender Dragon'
        },
        {
            type: 'info',
            title: '🤪 The Silly String Trick!',
            content: "Here is something SUPER weird about strings...\n\nWhat happens if you \"add\" two strings together?\n\nLet's find out! 🤯",
            buttonText: "Show me! 😂"
        },
        {
            type: 'code',
            title: 'Adding Strings?! 🧐',
            content: "Watch what happens when we add '6' + '9' as strings vs numbers! 🤣",
            initialCode: "print(\"As strings:\", '6' + '9')\nprint(\"As numbers:\", 6 + 9)",
            expectedOutputPattern: '69'
        },
        {
            type: 'quiz',
            question: "What does '6' + '9' give you in Python? 😜",
            options: [
                '🔢 15 (because 6 + 9 = 15)',
                '🔤 69 (it glues the text together!)',
                '💥 An error'
            ],
            correctAnswerIndex: 1
        },
        {
            type: 'quiz',
            question: 'What is the difference between 42 and "42"? 🤔',
            options: [
                '🤷 They are the same thing',
                '🔢 42 is a number, "42" is a string (text)',
                '💬 42 is smaller than "42"'
            ],
            correctAnswerIndex: 1
        },
        {
            type: 'info',
            title: 'Chapter 1 Complete! 🏆✨',
            content: 'You learned about print, big numbers, variables, strings, and the silly string addition trick! You are a Python Wizard now! 🧙‍♂️🪄',
            buttonText: "Back to Chapters 🏠",
            isEnd: true
        }
    ]
};
