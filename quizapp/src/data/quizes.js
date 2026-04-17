const quizes = [
  {
    id: 1,
    title: "JavaScript Fundamentals",
    questions: [
      {
        id: 1,
        question: "What is the correct way to declare a variable in JavaScript?",
        options: [
          "var x = 5;",
          "variable x = 5;",
          "v x = 5;",
          "declare x = 5;"
        ],
        correctAnswer: 0,
        marks: 5
      },
      {
        id: 2,
        question: "Which method is used to add an element to the end of an array?",
        options: [
          "push()",
          "pop()",
          "shift()",
          "unshift()"
        ],
        correctAnswer: 0,
        marks: 5
      },
      {
        id: 3,
        question: "What does '===' operator do in JavaScript?",
        options: [
          "Assigns a value",
          "Compares value and type",
          "Compares only value",
          "Checks if undefined"
        ],
        correctAnswer: 1,
        marks: 5
      }
    ]
  },
  {
    id: 2,
    title: "React Basics",
    questions: [
      {
        id: 1,
        question: "What is React?",
        options: [
          "A database",
          "A JavaScript library for building user interfaces",
          "A programming language",
          "A CSS framework"
        ],
        correctAnswer: 1,
        marks: 5
      },
      {
        id: 2,
        question: "Which hook is used to manage state in functional components?",
        options: [
          "useEffect",
          "useState",
          "useContext",
          "useReducer"
        ],
        correctAnswer: 1,
        marks: 5
      },
      {
        id: 3,
        question: "What is JSX?",
        options: [
          "A JavaScript extension",
          "A syntax extension for JavaScript",
          "A CSS preprocessor",
          "A database query language"
        ],
        correctAnswer: 1,
        marks: 5
      }
    ]
  },
  {
    id: 3,
    title: "HTML & CSS",
    questions: [
      {
        id: 1,
        question: "What does HTML stand for?",
        options: [
          "HyperText Markup Language",
          "High Tech Modern Language",
          "Home Tool Markup Language",
          "Hyperlink and Text Markup Language"
        ],
        correctAnswer: 0,
        marks: 5
      },
      {
        id: 2,
        question: "Which CSS property is used to change the text color?",
        options: [
          "font-color",
          "text-color",
          "color",
          "text-style"
        ],
        correctAnswer: 2,
        marks: 5
      },
      {
        id: 3,
        question: "What is the correct HTML element for the largest heading?",
        options: [
          "<heading>",
          "<h6>",
          "<h1>",
          "<head>"
        ],
        correctAnswer: 2,
        marks: 5
      }
    ]
  },
  {
    id: 4,
    title: "Python Programming",
    questions: [
      {
        id: 1,
        question: "Which of the following is the correct way to create a list in Python?",
        options: [
          "list = (1, 2, 3)",
          "list = [1, 2, 3]",
          "list = {1, 2, 3}",
          "list = <1, 2, 3>"
        ],
        correctAnswer: 1,
        marks: 5
      },
      {
        id: 2,
        question: "What is the output of: print(2 ** 3)?",
        options: [
          "6",
          "8",
          "9",
          "5"
        ],
        correctAnswer: 1,
        marks: 5
      },
      {
        id: 3,
        question: "Which keyword is used to define a function in Python?",
        options: [
          "func",
          "function",
          "def",
          "define"
        ],
        correctAnswer: 2,
        marks: 5
      }
    ]
  },
  {
    id: 5,
    title: "General Knowledge",
    questions: [
      {
        id: 1,
        question: "What is the capital of France?",
        options: [
          "London",
          "Berlin",
          "Paris",
          "Madrid"
        ],
        correctAnswer: 2,
        marks: 5
      },
      {
        id: 2,
        question: "Which planet is known as the Red Planet?",
        options: [
          "Venus",
          "Mars",
          "Jupiter",
          "Saturn"
        ],
        correctAnswer: 1,
        marks: 5
      },
      {
        id: 3,
        question: "What is the largest ocean on Earth?",
        options: [
          "Atlantic Ocean",
          "Indian Ocean",
          "Arctic Ocean",
          "Pacific Ocean"
        ],
        correctAnswer: 3,
        marks: 5
      }
    ]
  },
  {
    id: 6,
    title: "Web Development",
    questions: [
      {
        id: 1,
        question: "What does API stand for?",
        options: [
          "Application Programming Interface",
          "Advanced Programming Interface",
          "Application Program Integration",
          "Automated Programming Interface"
        ],
        correctAnswer: 0,
        marks: 5
      },
      {
        id: 2,
        question: "Which HTTP method is used to retrieve data?",
        options: [
          "POST",
          "PUT",
          "GET",
          "DELETE"
        ],
        correctAnswer: 2,
        marks: 5
      },
      {
        id: 3,
        question: "What is the purpose of localStorage in web browsers?",
        options: [
          "To store data temporarily",
          "To store data permanently in the browser",
          "To store cookies",
          "To store session data"
        ],
        correctAnswer: 1,
        marks: 5
      }
    ]
  },
  {
    id: 7,
    title: "Database Concepts",
    questions: [
      {
        id: 1,
        question: "What does SQL stand for?",
        options: [
          "Structured Query Language",
          "Simple Query Language",
          "Standard Query Language",
          "System Query Language"
        ],
        correctAnswer: 0,
        marks: 5
      },
      {
        id: 2,
        question: "Which SQL command is used to retrieve data from a database?",
        options: [
          "FETCH",
          "GET",
          "SELECT",
          "RETRIEVE"
        ],
        correctAnswer: 2,
        marks: 5
      },
      {
        id: 3,
        question: "What is a primary key?",
        options: [
          "A key that opens the database",
          "A unique identifier for each record",
          "A foreign key reference",
          "A backup key"
        ],
        correctAnswer: 1,
        marks: 5
      }
    ]
  },
  {
    id: 8,
    title: "Computer Science Basics",
    questions: [
      {
        id: 1,
        question: "What is the time complexity of binary search?",
        options: [
          "O(n)",
          "O(log n)",
          "O(n log n)",
          "O(1)"
        ],
        correctAnswer: 1,
        marks: 5
      },
      {
        id: 2,
        question: "What data structure follows LIFO principle?",
        options: [
          "Queue",
          "Stack",
          "Array",
          "Linked List"
        ],
        correctAnswer: 1,
        marks: 5
      },
      {
        id: 3,
        question: "What is the full form of CPU?",
        options: [
          "Central Processing Unit",
          "Computer Processing Unit",
          "Central Program Unit",
          "Computer Program Unit"
        ],
        correctAnswer: 0,
        marks: 5
      }
    ]
  },
  {
    id: 9,
    title: "Git & Version Control",
    questions: [
      {
        id: 1,
        question: "What command is used to initialize a Git repository?",
        options: [
          "git init",
          "git start",
          "git create",
          "git new"
        ],
        correctAnswer: 0,
        marks: 5
      },
      {
        id: 2,
        question: "What does 'git commit' do?",
        options: [
          "Downloads changes from remote",
          "Saves changes to the local repository",
          "Uploads changes to remote",
          "Creates a new branch"
        ],
        correctAnswer: 1,
        marks: 5
      },
      {
        id: 3,
        question: "Which command is used to see the commit history?",
        options: [
          "git log",
          "git history",
          "git commits",
          "git show"
        ],
        correctAnswer: 0,
        marks: 5
      }
    ]
  },
  {
    id: 10,
    title: "Node.js & Backend",
    questions: [
      {
        id: 1,
        question: "What is Node.js?",
        options: [
          "A JavaScript framework",
          "A JavaScript runtime built on Chrome's V8 engine",
          "A database",
          "A text editor"
        ],
        correctAnswer: 1,
        marks: 5
      },
      {
        id: 2,
        question: "Which package manager is commonly used with Node.js?",
        options: [
          "pip",
          "npm",
          "gem",
          "composer"
        ],
        correctAnswer: 1,
        marks: 5
      },
      {
        id: 3,
        question: "What is Express.js?",
        options: [
          "A database",
          "A web application framework for Node.js",
          "A JavaScript library",
          "A CSS framework"
        ],
        correctAnswer: 1,
        marks: 5
      }
    ]
  }
];

export default quizes;