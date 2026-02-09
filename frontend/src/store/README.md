# Global State Management

Redux/Zustand store for global application state.

## Store Slices to Add

- `index.ts` - Store configuration
- `authSlice.ts` - Authentication state
- `userSlice.ts` - User profile state
- `themeSlice.ts` - Theme preferences (dark/light mode)
- `types.ts` - Store type definitions

## State Structure

- Auth: user, token, isAuthenticated
- User: profile, preferences, role
- Theme: mode (light/dark), colors
