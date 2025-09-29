# Things To Do

## https://mekintosz.github.io/things-to-do/

A lightweight task manager for organizing everyday todos into custom lists. Add, edit, move, and complete tasks across lists with dialog-based forms, and your data persists via browser storage.

<img width="1920" height="1085" alt="Things to do app screenshot" src="https://github.com/user-attachments/assets/79c0d181-e5f2-46c9-83e6-c8abb8f70da4" />

## Tech Stack & Tooling

- `JavaScript` with an Object-Oriented design that embraces SOLID principles for managing lists and tasks
- `CSS` for layout and theming
- `Webpack 5` for bundling JS/CSS/assets and generating the production `dist/`
- `npm` scripts (`build`, `watch`) for local development
- `GitHub Pages` deployment via `npm run ghupdate` (`git subtree push --prefix dist origin gh-pages`)

## What I Learned

- Architecting JavaScript modules with OOP patterns while applying SOLID guidelines to keep features composable
- Persisting state with `localStorage` and keeping the UI in sync with render helpers
- Structuring build steps around Webpack, asset loaders, and npm scripts
- Preparing static deployments by bundling assets and publishing `dist/` to GitHub Pages

## Implemented Improvements

- Refactored task/list logic into reusable modules, keeping state changes consistent and autosaving to `localStorage`
- Streamlined UI interactions (active list highlighting, icon injection, modal workflows) to reduce user friction
- Hardened task editing by ensuring list reassignment works and checkbox completion toggles persist between sessions
- Updated build/deploy flow so Webpack handles CSS/SVG assets and the GitHub Pages subtree script ships the compiled bundle

## Future Improvements

- Add client-side validation and inline feedback for empty or invalid form submissions
- Introduce Jest (or similar) for unit tests around list/task services and a GitHub Actions workflow for CI
- Expand list management with rename support, sorting, and clearer delete confirmations
- Split development/production Webpack configs to enable minification, caching, and faster reloads
- Consider migrating to TypeScript or adding ESLint/Prettier to guard consistency as the codebase grows
