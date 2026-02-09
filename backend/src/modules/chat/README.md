# Chat Module

Real-time division-wise community chat using WebSockets.

## Structure

- `chat.controller.ts` - HTTP endpoints for chat history
- `chat.service.ts` - Business logic
- `chat.repository.ts` - Database operations for messages
- `chat.routes.ts` - HTTP route definitions
- `chat.websocket.ts` - WebSocket server and handlers
- `chat.dto.ts` - Validation schemas
- `chat.types.ts` - TypeScript interfaces
- `chat.test.ts` - Unit tests

## Features to Implement

- WebSocket connection management
- Division/channel-based chat rooms
- Real-time message broadcasting
- Message persistence
- Chat history retrieval
- Online user presence
- Typing indicators
- Message read receipts
