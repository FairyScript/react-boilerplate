# React Boilerplate

A modern, feature-rich boilerplate for building scalable and maintainable React applications.

## Features

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A superset of JavaScript that adds static types.
- **Rsbuild**: A blazing-fast build tool for React applications.
- **Emotion**: A powerful CSS-in-JS library with great developer experience.
- **Biome**: Next-generation linter, formatter, and more for JavaScript and TypeScript.
- **Prettier**: Opinionated code formatter ensuring consistent style.
- **Husky**: Git hooks made easy for automated quality checks.
- **Lint-staged**: Run linters on git staged files to ensure code quality.
- **SWC**: Super-fast TypeScript/JavaScript compiler.

## Getting Started

### Using GitHub Template

The easiest way to get started is by using this repository as a template:

1. Click the "Use this template" button at the top of the repository page
2. Select "Create a new repository"
3. Fill in your repository details
4. Click "Create repository"
5. Clone your new repository to your local machine
6. Follow the installation steps below

### Prerequisites

- Bun version 1.1.39 or higher
- Node.js 18.x or higher (optional, if not using Bun)

### Installation

```sh
# Clone the repository
git clone https://github.com/your-username/react-boilerplate.git

# Navigate to the project directory
cd react-boilerplate

# Install dependencies
bun install
```

### Running the Development Server

```sh
bun run dev
```

This will start the development server at http://localhost:3000.

### Building for Production

```sh
bun run build
```

The build artifacts will be stored in the `dist/` directory.

### Scripts

- `bun run dev` - Start development server and open in browser
- `bun run build` - Build for production
- `bun run preview` - Preview production build
- `bun run check` - Run Biome checker
- `bun run format` - Format code with Prettier

## Project Structure

```
react-boilerplate/
├── public/           # Static files
├── src/
│   ├── components/   # Reusable components
│   ├── hooks/        # Custom React hooks
│   ├── utils/        # Utility functions
│   ├── styles/       # Global styles
│   ├── main.tsx      # Application entry point
│   └── App.tsx       # Root component
├── rsbuild.config.ts # Rsbuild configuration
└── tsconfig.json     # TypeScript configuration
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
