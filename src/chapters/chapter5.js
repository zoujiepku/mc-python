export const chapter5 = {
    id: 'chapter5',
    title: 'Chapter 5: While Loops & Boolean Logic',
    description: 'While loops, and/or operators, and combining them! 🔁',
    emoji: '🔁',
    lessons: [
        // === REVIEW: FOR LOOPS ===
        {
            type: 'info',
            title: '🔁 For Loop Review!',
            content: "Before learning a new kind of loop, let's make sure you remember for loops! 🧠",
            buttonText: "Quiz me! ⚡"
        },
        {
            type: 'quiz',
            question: 'What does this print?\nfor i in range(3):\n    print(i) 🔢',
            options: [
                '🔢 1 2 3',
                '🔢 0 1 2',
                '🔢 0 1 2 3'
            ],
            correctAnswerIndex: 1
        },
        {
            type: 'quiz',
            question: 'What does a for loop do with a list? 📋',
            options: [
                '🔄 Goes through each item one by one',
                '🗑️ Deletes everything in the list',
                '🔢 Counts to 100'
            ],
            correctAnswerIndex: 0
        },
        {
            type: 'code',
            title: 'For Loop Warm-Up 🏃',
            content: 'Loop through a list and print each mob! 🧟',
            initialCode: 'mobs = ["zombie", "creeper", "enderman"]\n\nfor mob in mobs:\n    print("Found a", mob, "!")',
            expectedOutputPattern: 'Found a zombie'
        },
        // === WHILE LOOPS ===
        {
            type: 'info',
            title: '🔁 While Loops — Keep Going!',
            content: "A for loop goes through a list or a range.\n\nA while loop keeps going AS LONG AS something is True!\n\nIt's like mining: keep digging WHILE you have durability left! ⛏️\n\nBe careful though — if the condition never becomes False, it loops FOREVER! 😱",
            buttonText: "Show me! 🎯"
        },
        {
            type: 'code',
            title: 'Your First while Loop! ⛏️',
            content: 'Mine blocks while you have durability! ⛏️',
            initialCode: 'durability = 5\n\nwhile durability > 0:\n    print("Mining! Durability left:", durability)\n    durability = durability - 1\n\nprint("Pickaxe broke! 💔")',
            expectedOutputPattern: 'Pickaxe broke'
        },
        {
            type: 'code',
            title: 'Countdown! 🚀',
            content: 'Make a rocket countdown! 🎆',
            initialCode: 'count = 5\n\nwhile count > 0:\n    print(count, "...")\n    count = count - 1\n\nprint("BLAST OFF! 🚀")',
            expectedOutputPattern: 'BLAST OFF'
        },
        {
            type: 'quiz',
            question: 'When does a while loop stop? 🛑',
            options: [
                '🛑 When the condition becomes False',
                '🔄 After exactly 10 times',
                '⏰ After 1 second'
            ],
            correctAnswerIndex: 0
        },
        {
            type: 'code',
            title: 'Eating Food! 🍖',
            content: 'Eat steak while your hunger is not full! 🥩',
            initialCode: 'hunger = 12\nsteaks_eaten = 0\n\nwhile hunger < 20:\n    hunger = hunger + 3\n    steaks_eaten = steaks_eaten + 1\n    print("Ate a steak! Hunger:", hunger)\n\nprint("Full! Ate", steaks_eaten, "steaks total 🥩")',
            expectedOutputPattern: 'Full!'
        },
        // === REVIEW: IF/ELSE ===
        {
            type: 'info',
            title: '🧠 if/else Review!',
            content: "Now let's review if/else before we learn something even cooler! 🔥\n\nRemember:\nif → do this when True\nelif → check another condition\nelse → do this when nothing matched",
            buttonText: "Quiz me! 💪"
        },
        {
            type: 'quiz',
            question: 'What prints when x = 15?\nif x > 20:\n    print("big")\nelif x > 10:\n    print("medium")\nelse:\n    print("small") 🤔',
            options: [
                '📏 big',
                '📏 medium',
                '📏 small'
            ],
            correctAnswerIndex: 1
        },
        // === BOOLEAN: AND ===
        {
            type: 'info',
            title: '🔗 Boolean Logic: and',
            content: "Sometimes ONE condition isn't enough!\n\nWhat if you need BOTH things to be True?\n\nThat's what and does! 🔗\n\nTrue and True → True ✅\nTrue and False → False ❌\nFalse and True → False ❌\nFalse and False → False ❌\n\nBOTH sides must be True!",
            buttonText: "Let me try! 🎯"
        },
        {
            type: 'code',
            title: 'Using and 🔗',
            content: 'Check if you can fight the Ender Dragon! 🐲',
            initialCode: 'has_sword = True\nhas_armor = True\n\nif has_sword and has_armor:\n    print("Ready to fight the Dragon! 🐲")\nelse:\n    print("Not ready yet! 😰")\n\nprint("\\nTry with has_armor = False:")\nhas_armor = False\nif has_sword and has_armor:\n    print("Ready! 🐲")\nelse:\n    print("Need armor first! 🛡️")',
            expectedOutputPattern: 'Ready to fight'
        },
        // === BOOLEAN: OR ===
        {
            type: 'info',
            title: '🔀 Boolean Logic: or',
            content: "What if you need AT LEAST ONE thing to be True?\n\nThat's what or does! 🔀\n\nTrue or True → True ✅\nTrue or False → True ✅\nFalse or True → True ✅\nFalse or False → False ❌\n\nOnly ONE side needs to be True!",
            buttonText: "Show me! 👀"
        },
        {
            type: 'code',
            title: 'Using or 🔀',
            content: 'Can you light up the area? 🔦',
            initialCode: 'has_torch = False\nhas_glowstone = True\n\nif has_torch or has_glowstone:\n    print("You have light! 💡")\nelse:\n    print("It is dark... 🌑")\n\nprint("\\nBoth False:")\nhas_torch = False\nhas_glowstone = False\nif has_torch or has_glowstone:\n    print("Light! 💡")\nelse:\n    print("Total darkness! 🌑")',
            expectedOutputPattern: 'You have light'
        },
        {
            type: 'quiz',
            question: 'What does True and False give you? 🔗',
            options: [
                '✅ True',
                '❌ False (both must be True for and!)',
                '🤷 Maybe'
            ],
            correctAnswerIndex: 1
        },
        {
            type: 'quiz',
            question: 'What does False or True give you? 🔀',
            options: [
                '✅ True (only one needs to be True for or!)',
                '❌ False',
                '🤷 Maybe'
            ],
            correctAnswerIndex: 0
        },
        // === COMBINING AND/OR WITH IF ===
        {
            type: 'info',
            title: '🔥 Combining and / or with if!',
            content: "Now the REAL power! 💪\n\nYou can use and/or directly in your if conditions!\n\nif health > 0 and has_weapon:\n    fight!\n\nif is_raining or is_snowing:\n    stay inside!",
            buttonText: "Let me combine! 🔥"
        },
        {
            type: 'code',
            title: 'Combat Check! ⚔️',
            content: 'Use and + or in a real if condition! 🎯',
            initialCode: 'health = 20\nhas_sword = True\nhas_bow = False\n\nif health > 0 and (has_sword or has_bow):\n    print("Ready for battle! ⚔️")\nelse:\n    print("Not ready to fight! 😰")\n\nprint("\\nWith no weapons:")\nhas_sword = False\nif health > 0 and (has_sword or has_bow):\n    print("Ready! ⚔️")\nelse:\n    print("Find a weapon first! 🗡️")',
            expectedOutputPattern: 'Ready for battle'
        },
        {
            type: 'code',
            title: 'Mob Spawning Rules! 🌙',
            content: 'Mobs spawn when it is dark AND outside! 🧟',
            initialCode: 'light_level = 3\nis_outside = True\nis_peaceful = False\n\nif light_level < 7 and is_outside and not is_peaceful:\n    print("Mobs are spawning! 🧟💀🕷️")\nelse:\n    print("You are safe! 😊")',
            expectedOutputPattern: 'Mobs are spawning'
        },
        // === WHILE + IF COMBO ===
        {
            type: 'code',
            title: 'While + If Combo! 🔥',
            content: 'Loop through mobs and decide what to do! 🎯',
            initialCode: 'health = 20\nmobs_defeated = 0\n\nwhile health > 0 and mobs_defeated < 5:\n    health = health - 4\n    mobs_defeated = mobs_defeated + 1\n    print("Defeated mob #" + str(mobs_defeated) + "! Health:", health)\n\nif health > 0:\n    print("You survived! 🏆")\nelse:\n    print("Game over! Defeated", mobs_defeated, "mobs 💀")',
            expectedOutputPattern: 'Defeated mob #1'
        },
        {
            type: 'quiz',
            question: 'What does not True give you? 🔄',
            options: [
                '✅ True',
                '❌ False (not flips it!)',
                '🤷 Nothing'
            ],
            correctAnswerIndex: 1
        },
        {
            type: 'quiz',
            question: 'Given health=10, weapon=True, what does (health > 0 and weapon) give? 🎯',
            options: [
                '✅ True (health is > 0 AND weapon is True!)',
                '❌ False',
                '🔢 10'
            ],
            correctAnswerIndex: 0
        },
        {
            type: 'info',
            title: 'Chapter 5 Complete! 🏆🎉',
            content: 'You now know while loops, and/or/not logic, and how to combine them all! You are a TRUE Python warrior! ⚔️🐍',
            buttonText: "Back to Chapters 🏠",
            isEnd: true
        }
    ]
};
