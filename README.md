# Shop4You - E-commerce Web Application

Shop4You is a simple e-commerce web application built with React, Vite, and TypeScript. It features a product listing with filtering and sorting capabilities, a shopping cart, and uses modern web development practices.

## Features

- Product listing with search, filter, and sort functionality
- Shopping cart with add, remove, and update quantity options
- Responsive design using Tailwind CSS
- State management with Zustand
- UI components from shadcn/ui

## Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/arioberek/we-code-for-you-development-test
cd we-code-for-you-development-test
```

2. Install the dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory and add the following:

```
VITE_API_URL=https://fakestoreapi.com/products
```

## Running the Project Locally

To start the development server:

```bash
npm run dev
```

This will start the application on `http://localhost:5173` (or another port if 5173 is already in use).

## Build for Production

To create a production build:

```bash
npm run build
```

This will generate a `dist` folder with the production-ready files.

## Project Structure

- `src/components/`: React components
- `src/store/`: Zustand store for state management
- `src/hooks/`: Custom React hooks
- `src/services/`: API services
- `src/types/`: TypeScript type definitions

## Assumptions

1. The project uses a mock API (FakeStoreAPI) for product data. In a real-world scenario, you would replace this with your actual API.
2. The shopping cart persists using local storage, which is suitable for demo purposes. For a production app, you might want to consider server-side persistence.
3. User authentication and checkout process are not implemented in this demo version.
4. The project assumes a modern browser environment with support for ES6+ features.

## Technologies Used

- React
- Vite
- TypeScript
- Tailwind CSS
- shadcn/ui
- Zustand for state management
- React Router for routing

## Acknowledgments

- [Fake Store API](https://fakestoreapi.com/) for providing mock e-commerce data
- [shadcn/ui](https://ui.shadcn.com/) for the beautiful and accessible UI components
- [Zustand](https://github.com/pmndrs/zustand) for the simple yet powerful state management
