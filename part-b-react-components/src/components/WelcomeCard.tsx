import React from 'react';

interface WelcomeCardProps {
    name: string;
    message?: string;
}

const WelcomeCard: React.FC<WelcomeCardProps> = ({ name, message = "Welcome to our platform!" }) => {
    return (
        <div className="welcome-card">
            <h2>Hello, {name}!</h2>
            <p>{message}</p>
            <style jsx>{`
                .welcome-card {
                    padding: 20px;
                    border-radius: 8px;
                    background-color: #f8f9fa;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                    text-align: center;
                    margin: 20px;
                }
                h2 {
                    color: #007bff;
                    margin-bottom: 10px;
                }
                p {
                    color: #6c757d;
                    margin: 0;
                }
            `}</style>
        </div>
    );
};

export default WelcomeCard; 