# Replit.md

## Overview

This is a full-stack web application built with a React frontend and Express.js backend. The application uses a modern tech stack including TypeScript, Tailwind CSS with shadcn/ui components, Drizzle ORM for database operations, and TanStack Query for state management. The project is configured for both development and production deployment with Vite handling the build process.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query (React Query) for server state
- **Build Tool**: Vite with hot module replacement in development
- **Animations**: Framer Motion for smooth transitions and effects

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: Built-in session handling with connect-pg-simple

### Development Setup
- **Monorepo Structure**: Shared code between client and server in `/shared` directory
- **Path Mapping**: TypeScript path aliases for clean imports
- **Hot Reload**: Vite dev server with Express backend running concurrently
- **Error Handling**: Custom error overlay for development

## Key Components

### Directory Structure
```
├── client/           # React frontend application
│   ├── src/
│   │   ├── components/ui/  # shadcn/ui components
│   │   ├── pages/         # Route components
│   │   ├── hooks/         # Custom React hooks
│   │   └── lib/           # Utility functions and configs
├── server/           # Express.js backend
│   ├── routes.ts     # API route definitions
│   ├── storage.ts    # Data access layer
│   └── vite.ts       # Development server setup
├── shared/           # Shared TypeScript definitions
│   └── schema.ts     # Database schema and validation
└── migrations/       # Database migration files
```

### Database Schema
- **Users Table**: Basic user authentication with username/password
- **Validation**: Zod schemas for type-safe data validation
- **Type Safety**: Generated TypeScript types from database schema

### API Architecture
- **RESTful Design**: Express routes prefixed with `/api`
- **Type Safety**: Shared types between frontend and backend
- **Error Handling**: Centralized error middleware with proper HTTP status codes
- **Logging**: Request/response logging for API endpoints

## Data Flow

### Client-Server Communication
1. **Frontend**: React components use TanStack Query hooks
2. **HTTP Layer**: Custom fetch wrapper with credential handling
3. **Backend**: Express routes process requests and interact with storage
4. **Storage Layer**: Abstracted storage interface (currently in-memory, ready for database)
5. **Response**: JSON responses with proper error handling

### State Management
- **Server State**: TanStack Query manages API data with caching
- **Client State**: React hooks for local component state
- **Form State**: React Hook Form with Zod validation
- **UI State**: Local state for modals, dropdowns, and interactive elements

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React, React DOM, React Router alternative (Wouter)
- **UI Framework**: Radix UI primitives with shadcn/ui styling
- **Styling**: Tailwind CSS with PostCSS
- **State Management**: TanStack Query for server state
- **Forms**: React Hook Form with Hookform Resolvers
- **Validation**: Zod for schema validation
- **Animations**: Framer Motion
- **Utilities**: date-fns, clsx, class-variance-authority

### Backend Dependencies
- **Server**: Express.js with TypeScript support
- **Database**: Drizzle ORM with Neon Database serverless driver
- **Development**: tsx for TypeScript execution, esbuild for production builds
- **Session**: connect-pg-simple for PostgreSQL session storage

### Development Tools
- **Build**: Vite with React plugin and runtime error overlay
- **TypeScript**: Strict mode with path mapping
- **Database**: Drizzle Kit for migrations and schema management

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: esbuild bundles Express server to `dist/index.js`
3. **Static Serving**: Production server serves built React app as static files

### Environment Configuration
- **Development**: Hot reload with Vite dev server proxy
- **Production**: Express serves static files and API routes
- **Database**: Environment variable for PostgreSQL connection string

### Production Considerations
- **Database**: Ready for PostgreSQL with Drizzle migrations
- **Session Storage**: PostgreSQL-backed sessions for scalability
- **Static Assets**: Express serves built React application
- **Error Handling**: Production-safe error responses without stack traces

The application is designed to be easily deployable to platforms like Replit, with environment-based configuration and a single production server that handles both API requests and static file serving.