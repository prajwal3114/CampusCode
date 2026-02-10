export const clubs = [
  {
    id: 'stanford-cs',
    name: 'Stanford CS Club',
    description: 'Competitive programming and algorithm enthusiasts',
    college: 'Stanford University',
    members: 234,
    icon: '🎓',
    color: 'cyan',
    isPrivate: true,
    organizer: 'Dr. Sarah Johnson',
    status: 'member', // 'member', 'pending', 'not-member'
    category: 'Algorithms'
  },
  {
    id: 'mit-webdev',
    name: 'MIT Web Developers',
    description: 'Full-stack web development and modern frameworks',
    college: 'MIT',
    members: 189,
    icon: '🌐',
    color: 'purple',
    isPrivate: true,
    organizer: 'Prof. Michael Chen',
    status: 'member',
    category: 'Web Development'
  },
  {
    id: 'berkeley-ml',
    name: 'Berkeley ML Research',
    description: 'Machine learning, AI, and data science projects',
    college: 'UC Berkeley',
    members: 156,
    icon: '🤖',
    color: 'cyan',
    isPrivate: true,
    organizer: 'Dr. Emily Rodriguez',
    status: 'pending',
    category: 'Machine Learning'
  },
  {
    id: 'harvard-cyber',
    name: 'Harvard Cybersecurity',
    description: 'Ethical hacking and security research community',
    college: 'Harvard University',
    members: 98,
    icon: '🔒',
    color: 'purple',
    isPrivate: true,
    organizer: 'Prof. David Kim',
    status: 'not-member',
    category: 'Security'
  },
  {
    id: 'caltech-systems',
    name: 'Caltech Systems',
    description: 'Distributed systems and cloud computing enthusiasts',
    college: 'Caltech',
    members: 127,
    icon: '☁️',
    color: 'cyan',
    isPrivate: true,
    organizer: 'Dr. James Wilson',
    status: 'member',
    category: 'Systems'
  }
];

export const clubMembers = {
  'stanford-cs': [
    { name: 'Alex Chen', avatar: 'AC', role: 'organizer', status: 'online', joinedDate: 'Jan 2025' },
    { name: 'Sarah Kim', avatar: 'SK', role: 'moderator', status: 'online', joinedDate: 'Jan 2025' },
    { name: 'Mike Johnson', avatar: 'MJ', role: 'member', status: 'idle', joinedDate: 'Feb 2026' },
    { name: 'Emma Davis', avatar: 'ED', role: 'member', status: 'online', joinedDate: 'Feb 2026' },
    { name: 'James Wilson', avatar: 'JW', role: 'member', status: 'offline', joinedDate: 'Jan 2026' },
    { name: 'Lisa Anderson', avatar: 'LA', role: 'member', status: 'online', joinedDate: 'Feb 2026' },
    { name: 'David Lee', avatar: 'DL', role: 'member', status: 'idle', joinedDate: 'Jan 2026' }
  ]
};

export const clubResources = {
  'stanford-cs': [
    {
      title: 'Advanced Graph Algorithms',
      type: 'article',
      difficulty: 'advanced',
      postedBy: 'Dr. Sarah Johnson',
      date: 'Feb 8, 2026',
      downloads: 45
    },
    {
      title: 'Dynamic Programming Masterclass',
      type: 'video',
      difficulty: 'intermediate',
      postedBy: 'Alex Chen',
      date: 'Feb 5, 2026',
      downloads: 78
    },
    {
      title: 'Competitive Programming Template',
      type: 'practice',
      difficulty: 'intermediate',
      postedBy: 'Sarah Kim',
      date: 'Feb 3, 2026',
      downloads: 92
    }
  ]
};

export const clubCompetitions = {
  'stanford-cs': [
    {
      id: 1,
      title: 'Club Weekly Challenge',
      description: 'Solve 3 hard algorithm problems',
      status: 'live',
      startTime: '2026-02-11 20:00',
      endTime: '2026-02-11 22:00',
      participants: 45,
      isClubOnly: true
    },
    {
      id: 2,
      title: 'Binary Trees Sprint',
      description: 'Tree traversal and manipulation challenges',
      status: 'upcoming',
      startTime: '2026-02-14 19:00',
      endTime: '2026-02-14 21:00',
      participants: 32,
      isClubOnly: true
    }
  ]
};

export const clubLeaderboard = {
  'stanford-cs': [
    { rank: 1, name: 'Alex Chen', avatar: 'AC', score: 3245, change: 'up' },
    { rank: 2, name: 'Sarah Kim', avatar: 'SK', score: 3156, change: 'up' },
    { rank: 3, name: 'Mike Johnson', avatar: 'MJ', score: 2934, change: 'same' },
    { rank: 4, name: 'Emma Davis', avatar: 'ED', score: 2812, change: 'up' },
    { rank: 5, name: 'James Wilson', avatar: 'JW', score: 2689, change: 'down' }
  ]
};

export const joinRequests = [
  {
    clubId: 'berkeley-ml',
    clubName: 'Berkeley ML Research',
    requestDate: 'Feb 9, 2026',
    status: 'pending'
  }
];
