import React from 'react';
import WelcomeCard from './components/WelcomeCard';
import Counter from './components/Counter';
import StudentInfo from './components/StudentInfo';
import './App.css';

const App: React.FC = () => {
  return (
    <div>
      <header className="app-header">
        <h1>React Components Demo</h1>
      </header>
      
      <div className="container">
        <div className="app-content">
          <div className="component-section">
            <h2>Welcome Card</h2>
            <WelcomeCard 
              name="John Doe" 
              message="Welcome to our React components demo!"
            />
          </div>

          <div className="component-section">
            <h2>Counter</h2>
            <Counter initialValue={0} step={1} />
          </div>

          <div className="component-section">
            <h2>Student Information</h2>
            <StudentInfo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App; 