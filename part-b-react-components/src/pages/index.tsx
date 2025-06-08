import React from 'react';
import WelcomeCard from '../components/WelcomeCard';
import Counter from '../components/Counter';
import StudentInfo from '../components/StudentInfo';

const Home: React.FC = () => {
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

            <style jsx>{`
                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 20px;
                }
                h1 {
                    text-align: center;
                    color: #343a40;
                    margin-bottom: 40px;
                }
                section {
                    margin-bottom: 40px;
                }
                h2 {
                    color: #495057;
                    margin-bottom: 20px;
                }
            `}</style>
        </div>
    );
};

export default Home; 