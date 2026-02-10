export const courses = [
  {
    id: 'data-structures',
    name: 'Data Structures & Algorithms',
    description: 'Master fundamental data structures and algorithmic problem solving',
    progress: 65,
    color: 'cyan',
    icon: '🧮'
  },
  {
    id: 'web-development',
    name: 'Full Stack Web Development',
    description: 'Build modern web applications with React, Node.js, and databases',
    progress: 42,
    color: 'purple',
    icon: '🌐'
  },
  {
    id: 'machine-learning',
    name: 'Machine Learning Fundamentals',
    description: 'Learn ML algorithms, neural networks, and deep learning',
    progress: 28,
    color: 'cyan',
    icon: '🤖'
  },
  {
    id: 'system-design',
    name: 'System Design & Architecture',
    description: 'Design scalable distributed systems and microservices',
    progress: 51,
    color: 'purple',
    icon: '🏗️'
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity Essentials',
    description: 'Protect systems and data with modern security practices',
    progress: 18,
    color: 'cyan',
    icon: '🔒'
  },
  {
    id: 'cloud-computing',
    name: 'Cloud Computing & DevOps',
    description: 'Deploy and manage applications on AWS, Azure, and GCP',
    progress: 73,
    color: 'purple',
    icon: '☁️'
  }
];

export const roadmapSteps = {
  'data-structures': [
    {
      id: 1,
      title: 'Introduction to Arrays',
      description: 'Learn array operations, traversal, and basic manipulation techniques',
      status: 'completed'
    },
    {
      id: 2,
      title: 'Linked Lists',
      description: 'Master singly and doubly linked lists, insertion, deletion, and reversal',
      status: 'completed'
    },
    {
      id: 3,
      title: 'Stacks and Queues',
      description: 'Understand LIFO and FIFO data structures with real-world applications',
      status: 'unlocked'
    },
    {
      id: 4,
      title: 'Hash Tables',
      description: 'Explore hashing, collision resolution, and hash map implementations',
      status: 'unlocked'
    },
    {
      id: 5,
      title: 'Trees and Binary Search Trees',
      description: 'Learn tree traversal, BST operations, and balancing techniques',
      status: 'locked'
    },
    {
      id: 6,
      title: 'Graphs and Graph Algorithms',
      description: 'Study BFS, DFS, shortest path, and minimum spanning tree algorithms',
      status: 'locked'
    },
    {
      id: 7,
      title: 'Dynamic Programming',
      description: 'Master memoization, tabulation, and classic DP problems',
      status: 'locked'
    },
    {
      id: 8,
      title: 'Advanced Algorithms',
      description: 'Greedy algorithms, divide and conquer, and algorithmic paradigms',
      status: 'locked'
    }
  ],
  'web-development': [
    {
      id: 1,
      title: 'HTML & CSS Fundamentals',
      description: 'Build responsive layouts with modern HTML5 and CSS3',
      status: 'completed'
    },
    {
      id: 2,
      title: 'JavaScript Essentials',
      description: 'Master ES6+, async/await, promises, and DOM manipulation',
      status: 'completed'
    },
    {
      id: 3,
      title: 'React Fundamentals',
      description: 'Components, hooks, state management, and lifecycle methods',
      status: 'unlocked'
    },
    {
      id: 4,
      title: 'Node.js & Express',
      description: 'Build RESTful APIs with Node.js and Express framework',
      status: 'locked'
    },
    {
      id: 5,
      title: 'Database Design',
      description: 'SQL and NoSQL databases, schema design, and optimization',
      status: 'locked'
    },
    {
      id: 6,
      title: 'Full Stack Integration',
      description: 'Connect frontend and backend, authentication, and deployment',
      status: 'locked'
    }
  ],
  'machine-learning': [
    {
      id: 1,
      title: 'Python for ML',
      description: 'NumPy, Pandas, and data manipulation libraries',
      status: 'completed'
    },
    {
      id: 2,
      title: 'Linear Regression',
      description: 'Understanding linear models and gradient descent',
      status: 'unlocked'
    },
    {
      id: 3,
      title: 'Classification Algorithms',
      description: 'Logistic regression, decision trees, and random forests',
      status: 'locked'
    },
    {
      id: 4,
      title: 'Neural Networks',
      description: 'Deep learning fundamentals and backpropagation',
      status: 'locked'
    },
    {
      id: 5,
      title: 'Computer Vision',
      description: 'CNNs, image processing, and object detection',
      status: 'locked'
    }
  ]
};

export const competitions = {
  'data-structures': [
    {
      id: 1,
      title: 'Weekly Coding Challenge',
      description: 'Solve 5 algorithm problems in 90 minutes',
      status: 'live',
      startTime: '2026-02-11 18:00',
      endTime: '2026-02-11 19:30',
      participants: 234
    },
    {
      id: 2,
      title: 'Hash Table Mastery',
      description: 'Implement and optimize hash table operations',
      status: 'upcoming',
      startTime: '2026-02-15 20:00',
      endTime: '2026-02-15 22:00',
      participants: 156
    },
    {
      id: 3,
      title: 'Graph Algorithms Sprint',
      description: 'BFS, DFS, and shortest path challenges',
      status: 'ended',
      startTime: '2026-02-05 18:00',
      endTime: '2026-02-05 20:00',
      participants: 312
    }
  ],
  'web-development': [
    {
      id: 1,
      title: 'Build a Dashboard',
      description: 'Create a responsive admin dashboard in 3 hours',
      status: 'live',
      startTime: '2026-02-10 14:00',
      endTime: '2026-02-10 17:00',
      participants: 189
    },
    {
      id: 2,
      title: 'API Design Challenge',
      description: 'Design and implement a RESTful API',
      status: 'upcoming',
      startTime: '2026-02-13 19:00',
      endTime: '2026-02-13 21:00',
      participants: 142
    }
  ],
  'machine-learning': [
    {
      id: 1,
      title: 'Image Classification',
      description: 'Build a CNN model for image recognition',
      status: 'upcoming',
      startTime: '2026-02-12 16:00',
      endTime: '2026-02-12 19:00',
      participants: 98
    }
  ]
};

export const leaderboardData = {
  current: [
    { rank: 1, name: 'Alex Chen', score: 2845, avatar: 'AC', change: 'up' },
    { rank: 2, name: 'Sarah Kim', score: 2756, avatar: 'SK', change: 'up' },
    { rank: 3, name: 'Mike Johnson', score: 2634, avatar: 'MJ', change: 'down' },
    { rank: 4, name: 'Emma Davis', score: 2512, avatar: 'ED', change: 'up' },
    { rank: 5, name: 'James Wilson', score: 2389, avatar: 'JW', change: 'same' },
    { rank: 6, name: 'Lisa Anderson', score: 2267, avatar: 'LA', change: 'up' },
    { rank: 7, name: 'David Lee', score: 2145, avatar: 'DL', change: 'down' },
    { rank: 8, name: 'Maria Garcia', score: 2034, avatar: 'MG', change: 'up' },
    { rank: 9, name: 'Robert Brown', score: 1923, avatar: 'RB', change: 'same' },
    { rank: 10, name: 'Jennifer Taylor', score: 1812, avatar: 'JT', change: 'up' }
  ],
  competition: [
    { rank: 1, name: 'Sarah Kim', score: 985, avatar: 'SK', change: 'up' },
    { rank: 2, name: 'Alex Chen', score: 967, avatar: 'AC', change: 'down' },
    { rank: 3, name: 'Emma Davis', score: 934, avatar: 'ED', change: 'up' },
    { rank: 4, name: 'Mike Johnson', score: 912, avatar: 'MJ', change: 'same' },
    { rank: 5, name: 'Lisa Anderson', score: 889, avatar: 'LA', change: 'up' },
    { rank: 6, name: 'David Lee', score: 856, avatar: 'DL', change: 'down' },
    { rank: 7, name: 'James Wilson', score: 834, avatar: 'JW', change: 'up' },
    { rank: 8, name: 'Maria Garcia', score: 812, avatar: 'MG', change: 'same' },
    { rank: 9, name: 'Robert Brown', score: 789, avatar: 'RB', change: 'down' },
    { rank: 10, name: 'Jennifer Taylor', score: 767, avatar: 'JT', change: 'up' }
  ]
};
