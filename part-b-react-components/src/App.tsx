import React from 'react';
import WelcomeCard from './components/WelcomeCard';
import Counter from './components/Counter';
import StudentInfo from './components/StudentInfo';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="container">
      <h1>React Components Demo</h1>
      
      <section>
        <h2>1. Welcome Card Component</h2>
        <WelcomeCard 
          name="John Doe" 
          message="Welcome to our React components demo!"
        />
      </section>

      <section>
        <h2>2. Counter Component</h2>
        <Counter initialValue={0} step={1} />
      </section>

      <section>
        <h2>3. Student Information Form</h2>
        <StudentInfo />
      </section>
    </div>
  );
};

export default App; 