# Frontend - CampusClash UI

React + TypeScript + Tailwind CSS frontend with modern architecture.

## 🏗️ Architecture

### Feature-Based Modular Design

Each module contains:
- **Components** - Module-specific UI components
- **Pages** - Route pages
- **Hooks** - Custom React hooks
- **Types** - TypeScript interfaces

### Modules

1. **Auth** - Login, registration, password reset
2. **Competitions** - Browse and manage competitions
3. **Leaderboards** - View rankings (competition, completion, domain)
4. **Resources** - Learning resource library
5. **Roadmaps** - Structured learning paths
6. **Chat** - Real-time community chat

### Shared Layers

- **Components/UI** - Base components (Button, Input, Card, etc.)
- **Components/Common** - Composite components (Header, Footer, etc.)
- **Layouts** - Role-based layouts (Admin, Organizer, User)
- **Services** - API client functions
- **Hooks** - Shared custom hooks
- **Store** - Global state management
- **Lib** - Utilities and helpers
- **Styles** - Global CSS and Tailwind config

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Environment Setup

```bash
cp .env.example .env
```

Edit `.env`:
```env
VITE_API_URL=http://localhost:4000
```

### Development

```bash
# Start development server
npm run dev

# Server will run on http://localhost:3000
```

## 📝 Available Scripts

- `npm run dev` - Start development server with HMR
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Lint code with ESLint
- `npm run lint:fix` - Fix linting issues
- `npm run type-check` - TypeScript type checking
- `npm run format` - Format code with Prettier

## 🎨 UI Components

### Base Components (`components/ui/`)

Production-ready components built with Tailwind CSS:

- **Button** - Variants: primary, secondary, outline, ghost
- **Input** - Text, email, password with validation states
- **Card** - Container with header, body, footer
- **Modal** - Accessible dialog component
- **Dropdown** - Menu and select dropdowns
- **Table** - Data table with sorting and pagination
- **Badge** - Status and category badges
- **Spinner** - Loading indicators
- **Alert** - Success, error, warning, info alerts
- **Tabs** - Tab navigation

### Common Components (`components/common/`)

- **Header** - App header with navigation
- **Footer** - App footer
- **Sidebar** - Collapsible navigation sidebar
- **Navbar** - Top navigation bar
- **SearchBar** - Global search
- **Breadcrumbs** - Page navigation
- **Pagination** - List pagination

## 🔐 Layouts

Role-based layouts with navigation and authentication:

### AdminLayout
- Full system access
- User management
- Organization management
- System settings

### OrganizerLayout
- Competition management
- Resource creation
- Organization dashboard
- Analytics

### UserLayout
- Competition browsing
- Leaderboards
- Resources and roadmaps
- Profile settings

### AuthLayout
- Login/Register pages
- Clean, centered design
- No navigation

## 🔌 API Integration

### API Client (`services/api.ts`)

Axios instance with:
- Base URL configuration
- Request interceptors (auth token)
- Response interceptors (error handling)
- Automatic token refresh

### Service Layer

Each feature has a dedicated service:
- `auth.service.ts` - Authentication APIs
- `competitions.service.ts` - Competition APIs
- `leaderboards.service.ts` - Leaderboard APIs
- `resources.service.ts` - Resource APIs
- `roadmaps.service.ts` - Roadmap APIs
- `chat.service.ts` - Chat history APIs

## 🪝 Custom Hooks

### Shared Hooks (`hooks/`)

- `useAuth` - Authentication state and actions
- `useWebSocket` - WebSocket connection management
- `useDebounce` - Debounce values
- `useLocalStorage` - Persistent state
- `usePagination` - Pagination logic
- `useInfiniteScroll` - Infinite scroll

### Feature Hooks

Each module has custom hooks:
- `useCompetitions` - Fetch and filter competitions
- `useLeaderboards` - Leaderboard data
- `useResources` - Resource library
- `useRoadmaps` - Roadmap data
- `useChat` - Chat messaging

## 🗄️ State Management

### Global Store (`store/`)

Using Redux Toolkit or Zustand:

**Slices:**
- `authSlice` - User authentication state
- `userSlice` - User profile and preferences
- `themeSlice` - Dark/light mode

**State Structure:**
```typescript
{
  auth: {
    user: User | null,
    token: string | null,
    isAuthenticated: boolean,
    isLoading: boolean
  },
  user: {
    profile: UserProfile | null,
    preferences: UserPreferences
  },
  theme: {
    mode: 'light' | 'dark',
    primaryColor: string
  }
}
```

## 🎨 Styling

### Tailwind CSS

Custom configuration in `tailwind.config.js`:

**Custom Colors:**
- Primary, secondary, accent colors
- Success, warning, error, info states
- Custom gradients

**Custom Components:**
- Button variants
- Card styles
- Form components

### Dark Mode

Toggle between light and dark themes:
```typescript
// Using the theme store
const { mode, setMode } = useTheme();
setMode('dark');
```

## 🔒 Authentication Flow

1. **Login/Register** - Get access and refresh tokens
2. **Token Storage** - Store in memory + refresh token in httpOnly cookie
3. **Auto Refresh** - Intercept 401 responses, refresh token
4. **Protected Routes** - Check authentication before accessing
5. **Role Guard** - Check user role for admin/organizer routes

## 🚦 Routing

Using React Router v6:

```
/                          # Landing page
/login                     # Login page
/register                  # Registration page

/dashboard                 # Role-based dashboard redirect
/admin/*                   # Admin routes
/organizer/*               # Organizer routes

/competitions              # Browse competitions
/competitions/:id          # Competition details
/leaderboards              # Leaderboards (tabs)
/resources                 # Resource library
/roadmaps                  # Learning roadmaps
/chat                      # Real-time chat

/profile                   # User profile
/settings                  # User settings
```

## 🧪 Testing (To Be Implemented)

```bash
# Run tests
npm test

# Coverage
npm run test:coverage
```

### Testing Strategy

- **Unit Tests** - Components and utilities
- **Integration Tests** - User flows
- **E2E Tests** - Critical paths

Tools to add:
- Vitest for unit tests
- React Testing Library
- Cypress or Playwright for E2E

## 📦 Dependencies

### Production

- `react` - UI library
- `react-router-dom` - Routing
- `axios` - HTTP client
- `@reduxjs/toolkit` - State management
- `react-redux` - React bindings for Redux
- `react-hook-form` - Form handling
- `zod` - Validation
- `tailwindcss` - Styling
- `lucide-react` - Icons

### Development

- `vite` - Build tool
- `typescript` - Type safety
- `eslint` - Linting
- `prettier` - Formatting
- `@vitejs/plugin-react` - React support

## 🎯 Performance Optimization

### Code Splitting

```typescript
// Lazy load routes
const Competitions = lazy(() => import('./modules/competitions'));
const Leaderboards = lazy(() => import('./modules/leaderboards'));
```

### Memoization

```typescript
// Memoize expensive computations
const sortedData = useMemo(() => 
  data.sort((a, b) => b.score - a.score),
  [data]
);
```

### Virtual Scrolling

For long lists (leaderboards, resources):
- Use `react-window` or `react-virtual`
- Render only visible items

## 🌐 Internationalization (Future)

Setup for i18n:
- `react-i18next` for translations
- Language switcher in header
- RTL support

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

Output in `dist/` directory.

### Environment Variables

Production `.env`:
```env
VITE_API_URL=https://api.campusclash.com
VITE_WS_URL=wss://api.campusclash.com
```

### Docker

```bash
# Build image
docker build -t campusclash-frontend .

# Run container
docker run -p 3000:3000 campusclash-frontend
```

### Static Hosting

Can be deployed to:
- Vercel (recommended for Vite)
- Netlify
- AWS S3 + CloudFront
- GitHub Pages

## 🎨 Design System

### Colors

- **Primary**: Main brand color
- **Secondary**: Accent color
- **Success**: Green (#10B981)
- **Warning**: Yellow (#F59E0B)
- **Error**: Red (#EF4444)
- **Info**: Blue (#3B82F6)

### Typography

- **Headings**: Font family, sizes, weights
- **Body**: Readable font size (16px base)
- **Code**: Monospace font

### Spacing

Following Tailwind's spacing scale (4px base unit)

## 📚 Resources

- [React Documentation](https://react.dev/)
- [Vite Guide](https://vitejs.dev/guide/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [React Router](https://reactrouter.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/)

## 🤝 Contributing

1. Create a new branch for your feature
2. Follow the existing component structure
3. Use TypeScript strictly (no `any`)
4. Add proper prop types
5. Follow the style guide
6. Test your changes
7. Submit a pull request

## 📝 TODO

- [ ] Implement all module components
- [ ] Add form validation with react-hook-form
- [ ] Implement dark mode toggle
- [ ] Add skeleton loading states
- [ ] Implement infinite scroll for lists
- [ ] Add toast notifications
- [ ] Setup error boundaries
- [ ] Add accessibility (ARIA labels)
- [ ] Implement PWA features
- [ ] Add analytics tracking
