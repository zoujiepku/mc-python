export const chapter8 = {
    id: 'chapter8',
    title: 'Chapter 8: Functions & Decorators',
    description: 'Build reusable spells with functions and power-ups with decorators! ✨',
    emoji: '🧩',
    lessons: [
        {
            type: 'info',
            title: '🧩 Meet Functions',
            content: "A function is a reusable spell. You write it once, and you can cast it anytime!",
            buttonText: "Let's create one! ✨"
        },
        {
            type: 'code',
            title: 'Your First Function',
            content: 'Run the function in the editor to greet the adventurer.',
            initialCode: 'def say_hello() -> None:\n    print("Hello, adventurer!")\n\nsay_hello()',
            expectedOutputPattern: 'Hello, adventurer!'
        },
        {
            type: 'quiz',
            question: 'What does `def` do in Python? 🤔',
            options: [
                '📦 It defines (creates) a function',
                '🧱 It builds a block in Minecraft',
                '🔁 It repeats code forever'
            ],
            correctAnswerIndex: 0
        },
        {
            type: 'info',
            title: '🎒 Function Inputs (Parameters)',
            content: 'Functions can take inputs, called parameters. This makes them more flexible!',
            buttonText: 'Try it!'
        },
        {
            type: 'code',
            title: 'Say Hello to Anyone',
            content: 'Run the function and try changing the name.',
            initialCode: 'def greet(name: str) -> None:\n    print(f"Hello, {name}!")\n\ngreet("Alex")',
            expectedOutputPattern: 'Hello, Alex!'
        },
        {
            type: 'info',
            title: '🎁 Return Values',
            content: 'Some functions give back a value using `return`.',
            buttonText: 'Let’s return!'
        },
        {
            type: 'code',
            title: 'Return the Result',
            content: 'Run it, then change the numbers to see the return value.',
            initialCode: 'def add(a: int, b: int) -> int:\n    return a + b\n\nresult = add(3, 4)\nprint(result)',
            expectedOutputPattern: '7'
        },
        {
            type: 'quiz',
            question: 'What is the difference between `print` and `return`? 🧠',
            options: [
                '✅ `print` shows text; `return` gives a value back to the caller',
                '❌ `return` only works in loops',
                '❌ `print` stops the function immediately'
            ],
            correctAnswerIndex: 0
        },
        {
            type: 'info',
            title: '⚙️ Defaults & Keywords (Modern Python)',
            content: 'You can set default values and use keyword arguments for clarity.',
            buttonText: 'Craft time!'
        },
        {
            type: 'code',
            title: 'Default Arguments',
            content: 'Run it once, then change the `count` value.',
            initialCode: 'def craft(item: str, count: int = 1) -> str:\n    return f"Crafted {count}x {item}"\n\nprint(craft("torch"))\nprint(craft("torch", count=4))',
            expectedOutputPattern: 'Crafted 4x torch'
        },
        {
            type: 'info',
            title: '🧬 Type Hints & Keyword-Only Args',
            content: 'Modern Python 3 often uses type hints and keyword-only arguments for readability.',
            buttonText: 'See it!'
        },
        {
            type: 'code',
            title: 'Hints + Keyword-Only',
            content: 'Run it, then try changing the `mood` keyword.',
            initialCode: 'def mood_report(name: str, *, mood: str = "happy") -> str:\n    return f"{name} feels {mood}!"\n\nprint(mood_report("Steve", mood="excited"))',
            expectedOutputPattern: 'feels excited'
        },
        {
            type: 'info',
            title: 'Chapter 8 Complete! 🏆✨',
            content: 'You can now build reusable functions, use modern Python features, and decorate your spells!',
            buttonText: "Back to Chapters 🏠",
            isEnd: true
        }
    ]
};
