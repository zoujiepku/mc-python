export const chapter3 = {
    id: 'chapter3',
    title: 'Chapter 3: Decisions & Math',
    description: 'If/else logic and all the math operators! 🧠',
    emoji: '🧠',
    lessons: [
        // === REVIEW ===
        {
            type: 'info',
            title: '🔁 Chapter 2 Review!',
            content: "Let's warm up with a quick review of lists and booleans! 🧠",
            buttonText: "Let's go! ⚡"
        },
        {
            type: 'quiz',
            question: 'What is mobs[0] if mobs = ["zombie", "creeper", "spider"]? 🧟',
            options: [
                '🧟 zombie',
                '💥 creeper',
                '🕷️ spider'
            ],
            correctAnswerIndex: 0
        },
        {
            type: 'quiz',
            question: 'What does 5 > 3 give you? ⚖️',
            options: [
                '🔢 8',
                '✅ True',
                '❌ False'
            ],
            correctAnswerIndex: 1
        },
        // === IF STATEMENTS ===
        {
            type: 'info',
            title: '🧠 Making Decisions with if!',
            content: "In Minecraft, you make decisions all the time:\n\"IF I see a creeper, RUN!\" 💨\n\nPython can make decisions too using the word if!\n\nIf something is True, Python will do the code inside.",
            buttonText: "Show me! 🎯"
        },
        {
            type: 'code',
            title: 'Your First if! 🚦',
            content: 'Try changing has_diamonds to False and run again! 💎',
            initialCode: 'has_diamonds = True\n\nif has_diamonds:\n    print("You are RICH! 💎")',
            expectedOutputPattern: 'RICH'
        },
        // === IF/ELSE ===
        {
            type: 'info',
            title: '🔀 if / else — Two Paths!',
            content: "What if you want to do something DIFFERENT when the condition is False?\n\nThat's what else is for!\n\nif True → do this\nelse → do that instead",
            buttonText: "Got it! 👍"
        },
        {
            type: 'code',
            title: 'if / else ⚔️',
            content: 'Try changing health to 0 and see what happens! 💀',
            initialCode: 'health = 20\n\nif health > 0:\n    print("You are alive! ❤️")\nelse:\n    print("Game Over! 💀")',
            expectedOutputPattern: 'alive'
        },
        // === IF/ELIF/ELSE ===
        {
            type: 'info',
            title: '🔀🔀 if / elif / else — Many Paths!',
            content: "Sometimes you have MORE than two choices!\n\nelif means \"else if\" — it checks another condition.\n\nYou can have as many elif as you want!",
            buttonText: "Show me! 🗺️"
        },
        {
            type: 'code',
            title: 'Biome Selector 🌍',
            content: 'Change the biome number to get different results! 🗺️',
            initialCode: 'biome = 2\n\nif biome == 1:\n    print("🏜️ Desert! Watch for husks!")\nelif biome == 2:\n    print("🌴 Jungle! Look for parrots!")\nelif biome == 3:\n    print("🌊 Ocean! Find a shipwreck!")\nelse:\n    print("🏔️ Unknown biome!")',
            expectedOutputPattern: 'Jungle'
        },
        {
            type: 'quiz',
            question: 'What does elif mean? 🤔',
            options: [
                '🔄 else if — check another condition',
                '🛑 Stop the program',
                '📋 Make a list'
            ],
            correctAnswerIndex: 0
        },
        {
            type: 'code',
            title: 'Difficulty Checker 🎮',
            content: 'A fun mini-challenge! Try different difficulty numbers! ⚔️',
            initialCode: 'difficulty = 3\n\nif difficulty == 1:\n    print("😊 Peaceful - No monsters!")\nelif difficulty == 2:\n    print("🙂 Easy - Monsters are weak")\nelif difficulty == 3:\n    print("😐 Normal - Watch out!")\nelif difficulty == 4:\n    print("😱 Hard - GOOD LUCK!")\nelse:\n    print("🤷 Unknown difficulty")',
            expectedOutputPattern: 'Normal'
        },
        // === ARITHMETIC: INTEGERS VS FLOATS ===
        {
            type: 'info',
            title: '🔢 Two Kinds of Numbers!',
            content: "Time to learn more about numbers! 🎓\n\nPython has TWO kinds:\n\n🔵 Integers (int): whole numbers like 5, 42, 1000\n🟡 Floats (float): decimal numbers like 3.14, 2.5, 0.1\n\nThey work a bit differently!",
            buttonText: "Tell me more! 🤓"
        },
        {
            type: 'code',
            title: 'Integers vs Floats 🔵🟡',
            content: 'See how Python tells them apart! 🔍',
            initialCode: 'whole_number = 42\ndecimal_number = 3.14\n\nprint(whole_number, "is type:", type(whole_number))\nprint(decimal_number, "is type:", type(decimal_number))',
            expectedOutputPattern: 'int'
        },
        // === OPERATORS: + - * ===
        {
            type: 'info',
            title: '➕➖✖️ Basic Math!',
            content: "You already know + and *! Let's see ALL the math operators:\n\n+ Addition\n- Subtraction\n* Multiplication\n\nThese work the same for int and float!",
            buttonText: "Easy! 😎"
        },
        {
            type: 'code',
            title: 'Add, Subtract, Multiply ➕➖✖️',
            content: 'Basic math with Minecraft items! 🧮',
            initialCode: 'diamonds = 10\nfound_more = 5\n\nprint("Total:", diamonds + found_more)\nprint("After losing 3:", diamonds - 3)\nprint("Double:", diamonds * 2)',
            expectedOutputPattern: 'Total:\\s*15'
        },
        // === DIVISION: / vs // ===
        {
            type: 'info',
            title: '➗ Division — The Tricky One!',
            content: "Division is special in Python! There are TWO kinds:\n\n/  Regular division → ALWAYS gives a float (decimal)\n// Floor division → Chops off the decimal, gives an integer\n\nWatch closely! 👀",
            buttonText: "Show me! 👀"
        },
        {
            type: 'code',
            title: 'Division / vs // ➗',
            content: 'See the difference! One gives decimals, one does not! 🤯',
            initialCode: 'cookies = 10\nfriends = 3\n\nprint("Regular division:", cookies / friends)\nprint("Floor division:", cookies // friends)\nprint("\\n7 / 2 =", 7 / 2)\nprint("7 // 2 =", 7 // 2)',
            expectedOutputPattern: '3.3333'
        },
        {
            type: 'quiz',
            question: 'What does 7 / 2 give you in Python? ➗',
            options: [
                '🔵 3 (an integer)',
                '🟡 3.5 (a float!)',
                '❌ An error'
            ],
            correctAnswerIndex: 1
        },
        {
            type: 'quiz',
            question: 'What does 7 // 2 give you? 🤔',
            options: [
                '🔵 3 (floor division chops the decimal!)',
                '🟡 3.5',
                '🔵 4'
            ],
            correctAnswerIndex: 0
        },
        // === REMAINDER: % ===
        {
            type: 'info',
            title: '🧩 The Remainder: %',
            content: "The % operator gives you the REMAINDER after division! 🧩\n\n10 % 3 = ?\n10 ÷ 3 = 3 remainder 1\nSo 10 % 3 = 1!\n\nSuper useful for checking if a number is even or odd!",
            buttonText: "Let me try! 🎯"
        },
        {
            type: 'code',
            title: 'Remainder % 🧩',
            content: 'Split items among friends — any leftovers? 🤔',
            initialCode: 'items = 10\nfriends = 3\n\nprint("Each friend gets:", items // friends)\nprint("Leftover items:", items % friends)\n\nprint("\\nIs 8 even?", 8 % 2 == 0)\nprint("Is 7 even?", 7 % 2 == 0)',
            expectedOutputPattern: 'Leftover items:\\s*1'
        },
        // === POWER: ** ===
        {
            type: 'info',
            title: '💪 Power! **',
            content: "The ** operator does exponentiation (powers)! 💪\n\n2 ** 3 means 2 × 2 × 2 = 8\n10 ** 6 means 10 × 10 × 10 × 10 × 10 × 10 = 1,000,000!\n\nTime for some SUPER big numbers! 🤯",
            buttonText: "POWER UP! ⚡"
        },
        {
            type: 'code',
            title: 'Power ** 💪',
            content: 'Make some INSANELY big numbers! 🤯',
            initialCode: 'print("2 ** 3 =", 2 ** 3)\nprint("10 ** 6 =", 10 ** 6)\nprint("\\nSuper silly big number:")\nprint("99 ** 99 =", 99 ** 99)',
            expectedOutputPattern: '10 \\*\\* 6 =\\s*1000000'
        },
        {
            type: 'quiz',
            question: 'What does 3 ** 2 give you? 💪',
            options: [
                '🔢 6 (3 × 2)',
                '🔢 9 (3 × 3!)',
                '🔢 5 (3 + 2)'
            ],
            correctAnswerIndex: 1
        },
        {
            type: 'quiz',
            question: 'What does 15 % 4 give you? 🧩',
            options: [
                '🔢 3 (15 ÷ 4 = 3 remainder 3!)',
                '🔢 4',
                '🔢 3.75'
            ],
            correctAnswerIndex: 0
        },
        {
            type: 'info',
            title: 'Chapter 3 Complete! 🏆🎉',
            content: 'You mastered if/else decisions AND all the math operators: +, -, *, /, //, %, **! You are unstoppable! 🚀🔥',
            buttonText: "Back to Chapters 🏠",
            isEnd: true
        }
    ]
};
