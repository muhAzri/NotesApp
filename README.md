# NotesApp

A modern, responsive notes application built with React, TypeScript, and Redux Toolkit. Create, edit, archive, and manage your notes with a clean and intuitive interface.

## Features

- ✅ Create and edit notes with title and content
- 📁 Archive/unarchive notes
- 🗑️ Delete notes with confirmation
- 💾 Persistent storage using localStorage
- 📱 Responsive design with Tailwind CSS
- 🎨 Modern UI with clean animations
- 🔄 State management with Redux Toolkit

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Redux Toolkit** - State management
- **React Router** - Navigation
- **Tailwind CSS** - Styling
- **Vite** - Build tool

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/muhAzri/NotesApp.git
cd NotesApp
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components
│   └── icons/          # Icon components
├── context/            # React contexts
├── hooks/              # Custom hooks
├── pages/              # Page components
├── store/              # Redux store and slices
├── types/              # TypeScript type definitions
└── utils/              # Utility functions
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).
