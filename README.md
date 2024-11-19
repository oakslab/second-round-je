# Junior engineer 2nd round

**Table of Contents**

1. [Installation](#installation)
   - [Prerequisites](#prerequisites)
   - [Getting Started](#getting-started)
2. [Development](#development)
   - [Application URLs](#application-urls)

**Tech Stack**

- [Turborepo](https://turbo.build/repo)
- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Prisma](https://www.prisma.io/)
  - SQLite
- [React](https://react.dev/)
- [React Hook Form](https://react-hook-form.com/)
- [MUI](https://mui.com/)
- [Zod](https://zod.dev/)

## Installation

### Prerequisites

- [Node.js](http://nodejs.org) >= 18.19.0
  - npm >= 10.2.3
- [VS Code](https://code.visualstudio.com/) or any other code editor
  - Useful VS code plugins (optional)
    - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
    - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
    - [Prisma](https://marketplace.visualstudio.com/items?itemName=Prisma.prisma)
- Any Git client

### Getting Started

1. Unzip/Clone the repository
2. Install dependencies

```bash
npm install
```

4. Start development servers

```bash
npm run dev
```

## Development

### Application URLs

- Frontend: http://localhost:3000
- Backend: http://localhost:3001

### Folder Structure

```plaintext
├── apps/
│   ├── api/                                # Backend Express application
│   │   ├── prisma/                         # Database migrations and schema
│   │   │   ├── migrations/                 # Database migration files
│   │   │   └── schema.prisma               # Prisma schema definition
│   │   │   └── dev.db                      # DB stored as file
│   │   ├── src/                            # Source code
│   │   │   ├── domains/                    # DDD domain modules
│   │   │   │   ├── posts/                  # Posts module
│   │   │   │   │   ├── post.controller.ts  # Posts controller
│   │   │   │   │   ├── post.routes.ts      # Posts route definitions
│   │   │   ├── middleware/                 # Express middleware
│   │   │   ├── libs/                       # Global services
│   │   │   └── index.ts                    # Main application entry
│   │   ├── package.json                    # API package.json
│   │   └── tsconfig.json
│   └── web/                                # Frontend React application
│       ├── public/                         # Static assets
│       ├── src/
│       │   ├── components/                 # React components
│       │   │   ├── post/                   # Posts components
│       │   │   ├── notifications           # Notifications components
│       │   │   └── layout/                 # Layout components
│       │   ├── services/                   # API services
│       │   │   └── postService.ts          # Posts API calls
│       │   ├── types/                      # Project types
│       │   │   └── posts.ts                # Posts types
│       │   └── App.tsx                     # Root component
│       ├── package.json                    # Web package.json
│       └── tsconfig.json
├── package.json              # Root package.json
├── turbo.json                # Rurborepo configuration
└── README.md                 # Readme file
```
