export const chapter4 = {
    id: 'chapter4',
    title: 'Chapter 4: Loops & Conversions',
    description: 'For loops, range(), and converting between types! 🔄',
    emoji: '🔄',
    lessons: [
        // === REVIEW ===
        {
            type: 'info',
            title: '🔁 Chapter 3 Review!',
            content: "Quick review of if/else and math operators! 🧠",
            buttonText: "Quiz me! ⚡"
        },
        {
            type: 'quiz',
            question: 'What does 10 // 3 give you? ➗',
            options: [
                '🔵 3 (floor division!)',
                '🟡 3.333...',
                '🔵 4'
            ],
            correctAnswerIndex: 0
        },
        {
            type: 'quiz',
            question: "What prints when health = 0 and we write:\nif health > 0:\n    print('alive')\nelse:\n    print('game over')? 💀",
            options: [
                '❤️ alive',
                '💀 game over',
                '🤷 nothing'
            ],
            correctAnswerIndex: 1
        },
        // === FOR LOOPS OVER LISTS ===
        {
            type: 'info',
            title: '🔄 Loops — Do Things Again and Again!',
            content: "What if you want to do something for EVERY item in a list? 🤔\n\nYou could write print() a million times...\n\nOR you use a for loop! 🔄\nIt goes through each item, one by one!",
            buttonText: "Show me! 🎯"
        },
        {
            type: 'code',
            title: 'Your First for Loop! 🔄',
            content: 'Print every mob in the list automatically! 🧟',
            initialCode: 'mobs = ["zombie", "skeleton", "creeper", "spider"]\n\nfor mob in mobs:\n    print("Watch out for:", mob)',
            expectedOutputPattern: 'Watch out for:\\s*zombie'
        },
        {
            type: 'code',
            title: 'Loop Through Inventory 🎒',
            content: 'Print each item with its number! 📋',
            initialCode: 'items = ["sword", "pickaxe", "bow", "shield"]\ncount = 0\n\nfor item in items:\n    print("Slot", count, ":", item)\n    count = count + 1',
            expectedOutputPattern: 'Slot 0 :\\s*sword'
        },
        {
            type: 'quiz',
            question: 'What does a for loop do? 🔄',
            options: [
                '🔄 Goes through each item in a list, one by one',
                '🛑 Stops the program',
                '📋 Makes a new list'
            ],
            correctAnswerIndex: 0
        },
        // === RANGE() ===
        {
            type: 'info',
            title: '🔢 range() — Counting Without a List!',
            content: "What if you don't have a list but just want to count?\n\nrange(5) gives you numbers: 0, 1, 2, 3, 4\nrange(1, 6) gives you: 1, 2, 3, 4, 5\n\nPerfect for repeating something N times!",
            buttonText: "Let me count! 🔢"
        },
        {
            type: 'code',
            title: 'Counting with range() 🔢',
            content: 'Count from 0 to 4, and then from 1 to 5! 📊',
            initialCode: 'print("range(5):")\nfor i in range(5):\n    print(i)\n\nprint("\\nrange(1, 6):")\nfor i in range(1, 6):\n    print(i)',
            expectedOutputPattern: 'range\\(5\\)'
        },
        {
            type: 'code',
            title: 'Build 10 Blocks! 🧱',
            content: 'Use range() to place blocks like in Minecraft! 🏗️',
            initialCode: 'for i in range(1, 11):\n    print("Placed block #" + str(i) + " 🧱")',
            expectedOutputPattern: 'Placed block #1'
        },
        // === SILLY LOOP TRICKS ===
        {
            type: 'code',
            title: 'The Longest Laugh! 😂',
            content: 'Print "ha" 50 times to make a MEGA laugh! 🤣',
            initialCode: 'laugh = ""\nfor i in range(50):\n    laugh = laugh + "ha"\nprint(laugh + "!")',
            expectedOutputPattern: 'hahaha'
        },
        {
            type: 'quiz',
            question: 'What does range(3) give you? 🔢',
            options: [
                '🔢 1, 2, 3',
                '🔢 0, 1, 2',
                '🔢 0, 1, 2, 3'
            ],
            correctAnswerIndex: 1
        },
        // === INT AND FLOAT CONVERSIONS ===
        {
            type: 'info',
            title: '🔄 Converting Between int and float!',
            content: "Remember ints (whole numbers) and floats (decimals)?\n\nSometimes you need to switch between them!\n\nint() → removes the decimal part\nfloat() → adds a decimal\n\nLet's see how! 🔍",
            buttonText: "Show me! 🔄"
        },
        {
            type: 'code',
            title: 'int() and float() 🔄',
            content: 'Convert numbers between types! 🔀',
            initialCode: 'decimal = 7.89\nwhole = 42\n\nprint("float to int:", int(decimal))\nprint("int to float:", float(whole))\nprint("\\nint(3.99) =", int(3.99))\nprint("int(9.01) =", int(9.01))',
            expectedOutputPattern: 'float to int:\\s*7'
        },
        {
            type: 'quiz',
            question: 'What does int(9.99) give you? 🤔',
            options: [
                '🔢 10 (rounds up)',
                '🔢 9 (just chops off the decimal!)',
                '🔢 9.99'
            ],
            correctAnswerIndex: 1
        },
        // === ROUND, FLOOR, CEIL ===
        {
            type: 'info',
            title: '🎯 Rounding Numbers!',
            content: "int() just CHOPS off the decimal (always rounds toward 0).\n\nBut what if you want to round PROPERLY?\n\nround() → rounds to nearest whole number\nmath.floor() → always rounds DOWN ⬇️\nmath.ceil() → always rounds UP ⬆️",
            buttonText: "Show me all three! 🎯"
        },
        {
            type: 'code',
            title: 'round() 🎯',
            content: 'round() rounds to the nearest number! 🔄',
            initialCode: 'print("round(3.2) =", round(3.2))\nprint("round(3.5) =", round(3.5))\nprint("round(3.7) =", round(3.7))\nprint("round(3.14159, 2) =", round(3.14159, 2))',
            expectedOutputPattern: 'round\\(3.2\\)'
        },
        {
            type: 'code',
            title: 'floor() and ceil() ⬇️⬆️',
            content: 'floor = always down, ceil = always up! 📐',
            initialCode: 'import math\n\nprint("math.floor(3.9) =", math.floor(3.9))\nprint("math.floor(3.1) =", math.floor(3.1))\nprint("\\nmath.ceil(3.1) =", math.ceil(3.1))\nprint("math.ceil(3.9) =", math.ceil(3.9))',
            expectedOutputPattern: 'math.floor\\(3.9\\)\\s*=\\s*3'
        },
        {
            type: 'quiz',
            question: 'What is math.ceil(2.1)? ⬆️',
            options: [
                '🔢 2 (rounds down)',
                '🔢 3 (ceil always rounds UP!)',
                '🔢 2.1'
            ],
            correctAnswerIndex: 1
        },
        {
            type: 'quiz',
            question: 'What is the difference between int(3.9) and round(3.9)? 🤔',
            options: [
                '🤷 They give the same answer',
                '✂️ int gives 3 (chops), round gives 4 (rounds up)',
                '🔢 int gives 4, round gives 3'
            ],
            correctAnswerIndex: 1
        },
        // === LOOP + MATH COMBO ===
        {
            type: 'code',
            title: 'Loop + Math Combo! 🔥',
            content: 'Use a loop to build a times table! 🧮',
            initialCode: 'number = 7\n\nprint("Times table for", number, ":")\nfor i in range(1, 11):\n    print(number, "x", i, "=", number * i)',
            expectedOutputPattern: '7 x 1 = 7'
        },
        {
            type: 'code',
            title: 'Power Tower! 💪',
            content: 'Use a loop to show powers of 2! 📈',
            initialCode: 'for i in range(1, 11):\n    result = 2 ** i\n    print("2 **", i, "=", result)',
            expectedOutputPattern: '2 \\*\\* 1 = 2'
        },
        {
            type: 'info',
            title: 'Chapter 4 Complete! 🏆🎉',
            content: 'You learned for loops, range(), int/float conversions, round(), floor(), and ceil()! Math wizard mode: ON! 🧙‍♂️🔢',
            buttonText: "Back to Chapters 🏠",
            isEnd: true
        }
    ]
};
