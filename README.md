# 🚀 CampusClash - Learning & Competition Platform

A production-grade full-stack monorepo for a scalable learning and competition platform built with modern technologies and best practices.

[![CI](https://github.com/your-username/campusclash/workflows/CI/badge.svg)](https://github.com/your-username/campusclash/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 📋 Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development](#development)
- [Architecture](#architecture)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

CampusClash is a comprehensive learning and competition platform designed for educational institutions. It enables students to participate in competitions, track their progress through leaderboards, access learning resources, follow structured roadmaps, and engage in real-time community discussions.

### Key Highlights

- **Multi-tenant Architecture** - Support for multiple organizations/colleges
- **Role-Based Access** - Three-tier role system (Admin, Organizer, User)
- **Real-time Features** - WebSocket-powered chat and live updates
- **Scalable Design** - Microservices-ready modular architecture
- **Production-Ready** - Complete with Docker, CI/CD, and monitoring

## 🛠️ Tech Stack

### Backend
- **Runtime**: Node.js 18+
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: PostgreSQL 15
- **Cache**: Redis 7
- **Authentication**: JWT with refresh tokens
- **Validation**: Zod
- **Logging**: Pino
- **WebSockets**: ws library
- **Testing**: Jest

### Frontend
- **Framework**: React 18
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit / Zustand
- **HTTP Client**: Axios
- **Forms**: React Hook Form
- **Routing**: React Router v6

### DevOps & Infrastructure
- **Containerization**: Docker & Docker Compose
- **Reverse Proxy**: Nginx
- **CI/CD**: GitHub Actions
- **Code Quality**: ESLint, Prettier
- **Version Control**: Git

## ✨ Features

### 👥 User Management
- User registration and authentication
- Role-based access control (Admin, Organizer, User)
- User profiles and preferences
- Organization/college affiliation

### 🏆 Competition System
- Create and manage competitions
- Registration and submissions
- Competition-specific leaderboards
- Status management (draft, active, closed)

### 📊 Leaderboard System
Three types of leaderboards:
1. **Competition Leaderboard** - Rankings within specific competitions
2. **Completion Leaderboard** - Based on tasks/challenges completed
3. **Domain-wise Leaderboard** - Rankings by tech domain (Frontend, Backend, AI, etc.)

### 📚 Learning Resources
- Curated learning materials
- Filter by domain, type, difficulty
- Bookmark and track resources
- Resource ratings and reviews

### 🗺️ Learning Roadmaps
- Structured learning paths
- Milestone tracking
- Progress visualization
- Enrollment and completion tracking

### 💬 Real-time Chat
- Division-wise community chat
- WebSocket-powered messaging
- Online presence indicators
- Typing indicators
- Message persistence

## 📁 Project Structure

```
campusclash/
│
├── .github/                      # GitHub Actions CI/CD workflows
│   └── workflows/
│       └── ci.yml
│
├── backend/                      # Node.js + Express API
│   ├── src/
│   │   ├── config/              # Configuration files
│   │   ├── libs/                # External service clients
│   │   ├── middlewares/         # Express middlewares
│   │   ├── modules/             # Feature modules (8 modules)
│   │   │   ├── auth/
│   │   │   ├── users/
│   │   │   ├── organizations/
│   │   │   ├── competitions/
│   │   │   ├── leaderboards/
│   │   │   ├── resources/
│   │   │   ├── roadmaps/
│   │   │   └── chat/
│   │   ├── types/               # TypeScript types
│   │   ├── utils/               # Utilities
│   │   ├── app.ts               # Express app setup
│   │   └── server.ts            # Server bootstrap
│   ├── tests/                   # Integration tests
│   ├── .env.example
│   ├── Dockerfile
│   ├── package.json
│   └── tsconfig.json
│
├── frontend/                     # React + TypeScript UI
│   ├── public/                  # Static assets
│   ├── src/
│   │   ├── assets/              # Images, icons, fonts
│   │   ├── components/          # Reusable components
│   │   │   ├── ui/             # Base UI components
│   │   │   └── common/         # Common composites
│   │   ├── layouts/             # Layout components
│   │   │   ├── AdminLayout.tsx
│   │   │   ├── OrganizerLayout.tsx
│   │   │   └── UserLayout.tsx
│   │   ├── modules/             # Feature modules
│   │   │   ├── auth/
│   │   │   ├── competitions/
│   │   │   ├── leaderboards/
│   │   │   ├── resources/
│   │   │   ├── roadmaps/
│   │   │   └── chat/
│   │   ├── services/            # API clients
│   │   ├── hooks/               # Custom hooks
│   │   ├── store/               # State management
│   │   ├── lib/                 # Utilities
│   │   ├── styles/              # Global styles
│   │   └── types/               # TypeScript types
│   ├── .env.example
│   ├── Dockerfile
│   ├── package.json
│   └── tailwind.config.js
│
├── nginx/                        # Nginx configuration
│   └── nginx.conf
│
├── .env.example                  # Root environment variables
├── .gitignore
├── docker-compose.yml            # Docker orchestration
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- PostgreSQL 15+
- Redis 7+
- Docker & Docker Compose (optional)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/your-username/campusclash.git
cd campusclash
```

2. **Setup Backend**
```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your configuration
```

3. **Setup Frontend**
```bash
cd ../frontend
npm install
cp .env.example .env
# Edit .env with your configuration
```

4. **Setup Database**
```bash
# Create PostgreSQL database
createdb campusclash

# Run migrations (when added)
npm run migrate
```

### Running with Docker

The easiest way to get started:

```bash
# Start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop all services
docker-compose down
```

Services will be available at:
- Frontend: http://localhost:3000
- Backend: http://localhost:4000
- Nginx: http://localhost

### Running Locally

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

## 💻 Development

### Backend Development

```bash
cd backend

# Development with hot reload
npm run dev

# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Lint code
npm run lint

# Type checking
npm run type-check

# Build for production
npm run build
```

### Frontend Development

```bash
cd frontend

# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Type checking
npm run type-check
```

### Code Quality

Both projects are configured with:
- **ESLint** for code linting
- **Prettier** for code formatting
- **TypeScript** for type safety
- **Jest** for testing

### Module Structure

Each backend module follows a consistent structure:
```
module-name/
├── module-name.controller.ts   # Request handlers
├── module-name.service.ts      # Business logic
├── module-name.repository.ts   # Data access layer
├── module-name.routes.ts       # Route definitions
├── module-name.dto.ts          # Zod validation schemas
├── module-name.types.ts        # TypeScript interfaces
└── module-name.test.ts         # Unit tests
```

Each frontend module structure:
```
module-name/
├── components/        # Module-specific components
├── pages/            # Module pages
├── hooks/            # Module hooks
└── types.ts          # Module types
```

## 🏗️ Architecture

### Backend Architecture

**Feature-Based Modular Design**
- Each feature is a self-contained module
- Clear separation of concerns (Controller → Service → Repository)
- Shared middlewares for cross-cutting concerns
- Centralized error handling
- Type-safe with TypeScript

**Key Patterns**
- Repository pattern for data access
- Service layer for business logic
- DTO validation with Zod
- JWT-based authentication
- Role-based authorization

### Frontend Architecture

**Component-Based Design**
- Feature modules with isolated components
- Shared UI component library
- Role-based layouts
- Custom hooks for reusable logic
- Centralized state management

### Database Schema

Key entities:
- Users (with roles)
- Organizations
- Competitions
- Leaderboards
- Resources
- Roadmaps
- Chat Messages

## 🚢 Deployment

### Docker Deployment

```bash
# Build and start all services
docker-compose up -d --build

# Scale services
docker-compose up -d --scale backend=3
```

### Production Considerations

1. **Environment Variables**: Update all `.env` files with production values
2. **Database**: Use managed PostgreSQL (AWS RDS, Digital Ocean, etc.)
3. **Redis**: Use managed Redis (AWS ElastiCache, Redis Cloud, etc.)
4. **SSL/TLS**: Configure HTTPS in Nginx
5. **Monitoring**: Add logging and monitoring tools
6. **Backups**: Configure automated database backups

### CI/CD

GitHub Actions workflow is configured for:
- Linting and type checking
- Running tests
- Building the application
- Docker image creation (can be extended)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Coding Standards

- Follow the existing code style
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting PR

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- Your Name - [@your-username](https://github.com/your-username)

## 🙏 Acknowledgments

- Built with modern web technologies
- Inspired by competitive programming platforms
- Designed for educational institutions

---

**Note**: This is a scaffold project. Implement the actual business logic, database schemas, and API endpoints according to your specific requirements.
