# Auth Module

JWT authentication with refresh tokens.

## Structure

- `auth.controller.ts` - Handles login, register, refresh, logout
- `auth.service.ts` - Business logic for authentication
- `auth.repository.ts` - Database operations for auth
- `auth.routes.ts` - Route definitions
- `auth.dto.ts` - Zod validation schemas
- `auth.types.ts` - TypeScript interfaces
- `auth.test.ts` - Unit tests

## Features to Implement

- User registration with email/password
- Login with JWT access & refresh tokens
- Token refresh endpoint
- Logout (token blacklisting)
- Password reset flow
