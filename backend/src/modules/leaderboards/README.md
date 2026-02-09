# Leaderboards Module

Multi-type leaderboard system.

## Structure

- `leaderboards.controller.ts` - Leaderboard endpoints
- `leaderboards.service.ts` - Ranking logic
- `leaderboards.repository.ts` - Database queries
- `leaderboards.routes.ts` - Route definitions
- `leaderboards.dto.ts` - Validation schemas
- `leaderboards.types.ts` - TypeScript interfaces
- `leaderboards.test.ts` - Unit tests

## Leaderboard Types

1. **Competition Leaderboard** - Rankings within specific competition
2. **Completion Leaderboard** - Based on tasks/challenges completed
3. **Domain-wise Leaderboard** - Rankings by tech domain (frontend, backend, AI, etc.)

## Features to Implement

- Get competition leaderboard
- Get completion leaderboard
- Get domain-wise leaderboard
- Global leaderboard
- Organization-specific leaderboards
- Leaderboard caching with Redis
