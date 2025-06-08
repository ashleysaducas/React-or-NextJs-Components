# JavaScript and React Components Learning Project

This repository contains two parts focusing on JavaScript fundamentals and React component development.

## Project Structure

```
├── part-a-js-fundamentals/     # JavaScript Basics
│   ├── index.html
│   └── script.js
│
└── part-b-react-components/    # React Components
    ├── public/
    ├── src/
    │   ├── components/
    │   │   ├── WelcomeCard/   # Dynamic greeting card with time-based features
    │   │   ├── Counter/       # Interactive counter with state management
    │   │   └── StudentInfo/   # Form handling component
    │   ├── App.tsx
    │   └── index.tsx
    ├── package.json
    └── tsconfig.json
```

## Part A: JavaScript Fundamentals

Interactive exercises demonstrating core JavaScript concepts:
- Variables and Data Types
- Functions and Arrow Functions
- Arrays and Array Methods
- Objects and Object Methods
- DOM Manipulation
- Event Handling

### How to Run Part A
1. Navigate to the `part-a-js-fundamentals` directory
2. Open `index.html` in your web browser
3. Use the interactive buttons to test different JavaScript functionalities
4. Open browser console (F12) to see additional outputs

## Part B: React Components

A collection of React components built with TypeScript, demonstrating:

### 1. WelcomeCard Component
- Dynamic time-based greetings (morning/afternoon/evening)
- Animated gradient background
- Responsive design with hover effects
- Modern UI with frosted glass effect

### 2. Counter Component
- State management using React hooks
- Increment/decrement functionality
- Reset option
- Clean, modern interface

### 3. StudentInfo Component
- Form handling with validation
- Multiple input types
- Real-time form updates
- Submission handling

### How to Run Part B
1. Navigate to the React project:
   ```bash
   cd part-b-react-components
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Technologies Used

### Part A
- HTML5
- CSS3
- Vanilla JavaScript
- DOM API

### Part B
- React 18
- TypeScript
- CSS Modules
- Create React App

## Development

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Available Scripts (Part B)
- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm run build`: Builds the app for production
- `npm run eject`: Ejects from Create React App

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).