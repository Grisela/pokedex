# Pokedex App

A Pokedex application built with React, Vite, and TypeScript.

## Table of Contents

- [Pokedex App](#pokedex-app)
  - [Table of Contents](#table-of-contents)
  - [Demo](#demo)
  - [Project Setup](#project-setup)
  - [Environment Variables](#environment-variables)
  - [Available Scripts](#available-scripts)
  - [Development](#development)
  - [Building for Production](#building-for-production)
  - [Previewing Production Build](#previewing-production-build)
  - [License](#license)

## Demo

- **Development Environment**: [https://dev-pokedex.owlchemist.quest/](https://dev-pokedex.owlchemist.quest/)
- **Production Environment**: [https://pokedex.owlchemist.quest/](https://pokedex.owlchemist.quest/)

## Project Setup

1. Clone the repository:

   ```bash
   git clone git@github.com:Grisela/pokedex.git
   cd pokedex
   ```

2. Install the dependencies:

   ```bash
   npm i
   ```

## Environment Variables

This project requires a `.env` file in the root directory. Create a `.env` file with the following variables:

```env
VITE_APP_VERSION=your_app_version
VITE_BASE_URL=pokeapi_url
```

- `VITE_APP_VERSION`: The current version of the app.
- `VITE_BASE_URL`: The base [URL](https://pokeapi.co/) for API

## Available Scripts

In the project directory, you can run:

- **`npm run dev`**: Runs the app in development mode using Vite.
- **`npm run build`**: Builds the app for production to the `dist` folder.
- **`npm run lint`**: Lints the codebase using ESLint.
- **`npm run preview`**: Previews the production build locally.

## Development

To start the development server, run:

```bash
npm run dev
```

This will start the Vite development server, and you can access the app at [http://localhost:3000](http://localhost:3000).

## Building for Production

To build the app for production, run:

```bash
npm run build
```

This will output a static production build to the `dist` folder.

## Previewing Production Build

To preview the production build locally after running the build, run:

```bash
npm run preview
```

This will start a local server at [http://localhost:4173](http://localhost:4173) to serve the production build.

## License

This project is licensed under the [MIT License](LICENSE).
