# Backend - CampusClash API

Node.js + Express + TypeScript backend with production-grade architecture.

## 🏗️ Architecture

### Feature-Based Modular Design

Each module is self-contained with:
- **Controller** - Request handling and response formatting
- **Service** - Business logic and orchestration
- **Repository** - Database operations and queries
- **Routes** - API endpoint definitions
- **DTO** - Request/response validation with Zod
- **Types** - TypeScript interfaces
- **Tests** - Unit and integration tests

### Modules

1. **Auth** - JWT authentication with refresh tokens
2. **Users** - User management and profiles
3. **Organizations** - Multi-tenant organization management
4. **Competitions** - Competition creation and management
5. **Leaderboards** - Multi-type ranking system
6. **Resources** - Learning resource management
7. **Roadmaps** - Structured learning paths
8. **Chat** - Real-time WebSocket chat

### Common Layers

- **Config** - Environment and service configuration
- **Libs** - Database and external service clients
- **Middlewares** - Auth, RBAC, validation, rate limiting
- **Utils** - Logger, response helpers, error classes
- **Types** - Global TypeScript definitions

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Environment Setup

```bash
cp .env.example .env
```

Edit `.env` with your configuration:
- Database credentials
- Redis connection
- JWT secrets
- CORS origins

### Database Setup

```bash
# Create database
createdb campusclash

# Run migrations (to be implemented)
npm run migrate

# Seed data (to be implemented)
npm run seed
```

### Development

```bash
# Start development server with hot reload
npm run dev

# Server will run on http://localhost:4000
```

## 📝 Available Scripts

- `npm run dev` - Start development server with watch mode
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Generate coverage report
- `npm run lint` - Lint code
- `npm run lint:fix` - Fix linting issues
- `npm run type-check` - TypeScript type checking

## 🔌 API Endpoints

Base URL: `http://localhost:4000/api/v1`

### Health Check
- `GET /health` - Health status

### Auth
- `POST /auth/register` - User registration
- `POST /auth/login` - User login
- `POST /auth/refresh` - Refresh access token
- `POST /auth/logout` - User logout

### Users (Protected)
- `GET /users/me` - Get current user
- `PUT /users/me` - Update profile
- `GET /users` - List users (admin/organizer)

### Organizations (Protected)
- `POST /organizations` - Create organization (admin)
- `GET /organizations` - List organizations
- `GET /organizations/:id` - Get organization
- `PUT /organizations/:id` - Update organization

### Competitions (Protected)
- `POST /competitions` - Create competition
- `GET /competitions` - List competitions
- `GET /competitions/:id` - Get competition
- `PUT /competitions/:id` - Update competition
- `DELETE /competitions/:id` - Delete competition

### Leaderboards (Public)
- `GET /leaderboards/competition/:id` - Competition leaderboard
- `GET /leaderboards/completion` - Completion leaderboard
- `GET /leaderboards/domain/:domain` - Domain leaderboard

### Resources (Protected)
- `POST /resources` - Create resource
- `GET /resources` - List resources
- `GET /resources/:id` - Get resource
- `PUT /resources/:id` - Update resource

### Roadmaps (Protected)
- `POST /roadmaps` - Create roadmap
- `GET /roadmaps` - List roadmaps
- `GET /roadmaps/:id` - Get roadmap
- `PUT /roadmaps/:id` - Update roadmap

### Chat (WebSocket)
- `WS /ws` - WebSocket connection for chat

## 🔐 Authentication & Authorization

### JWT Authentication
- Access tokens expire in 15 minutes
- Refresh tokens expire in 7 days
- Tokens stored in HTTP-only cookies (recommended) or Authorization header

### Role-Based Access Control

Three roles with hierarchical permissions:

1. **Admin** (Global)
   - Full system access
   - Create organizations
   - Manage all users
   - System configuration

2. **Organizer** (Organization-level)
   - Create competitions
   - Manage organization members
   - Create resources and roadmaps
   - View organization analytics

3. **User** (Student)
   - Participate in competitions
   - Access resources and roadmaps
   - View leaderboards
   - Chat in divisions

## 🛡️ Security Features

- Helmet.js for security headers
- CORS configuration
- Rate limiting with Redis
- Input validation with Zod
- SQL injection prevention
- XSS protection
- CSRF tokens (to be implemented)
- Password hashing with bcrypt

## 📊 Database Schema

### Core Tables (To Be Implemented)

- `users` - User accounts and profiles
- `organizations` - Colleges/institutions
- `competitions` - Competition details
- `competition_participants` - Participation records
- `leaderboards` - Ranking records
- `resources` - Learning materials
- `roadmaps` - Learning paths
- `roadmap_milestones` - Roadmap steps
- `chat_messages` - Chat history
- `chat_rooms` - Chat channels

## 🧪 Testing

```bash
# Run all tests
npm test

# Watch mode
npm run test:watch

# Coverage report
npm run test:coverage
```

### Testing Strategy

- **Unit Tests** - Individual functions and utilities
- **Integration Tests** - API endpoints and workflows
- **E2E Tests** - Complete user flows (to be added)

## 📦 Dependencies

### Production

- `express` - Web framework
- `typescript` - Type safety
- `pg` - PostgreSQL client
- `redis` - Redis client
- `jsonwebtoken` - JWT handling
- `bcryptjs` - Password hashing
- `zod` - Schema validation
- `pino` - Logging
- `helmet` - Security headers
- `cors` - CORS handling
- `ws` - WebSocket server

### Development

- `tsx` - TypeScript execution
- `jest` - Testing framework
- `eslint` - Code linting
- `prettier` - Code formatting

## 🐛 Debugging

### VS Code Launch Configuration

```json
{
  "type": "node",
  "request": "launch",
  "name": "Debug Backend",
  "runtimeExecutable": "npm",
  "runtimeArgs": ["run", "dev"],
  "skipFiles": ["<node_internals>/**"]
}
```

### Logging

Structured logging with Pino:
- Development: Pretty-printed colorized logs
- Production: JSON logs for aggregation

## 🚀 Deployment

### Build

```bash
npm run build
```

Output in `dist/` directory.

### Production Environment Variables

Required for production:
- `NODE_ENV=production`
- `DATABASE_URL` - PostgreSQL connection string
- `REDIS_URL` - Redis connection string
- `JWT_SECRET` - Strong random secret
- `JWT_REFRESH_SECRET` - Strong random secret

### Docker

```bash
# Build image
docker build -t campusclash-backend .

# Run container
docker run -p 4000:4000 --env-file .env campusclash-backend
```

## 📚 Resources

- [Express.js Documentation](https://expressjs.com/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [Redis Documentation](https://redis.io/documentation)
- [Zod Documentation](https://zod.dev/)

## 🤝 Contributing

1. Create a new branch for your feature
2. Follow the existing code structure
3. Add tests for new features
4. Update API documentation
5. Submit a pull request

## 📝 TODO

- [ ] Implement database migrations
- [ ] Add database seeders
- [ ] Complete all module implementations
- [ ] Add API documentation (Swagger/OpenAPI)
- [ ] Implement email service
- [ ] Add file upload handling
- [ ] Implement caching strategies
- [ ] Add monitoring and metrics
- [ ] Setup error tracking (Sentry)
- [ ] Add request/response logging
