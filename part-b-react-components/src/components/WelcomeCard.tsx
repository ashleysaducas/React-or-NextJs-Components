import React from 'react';
import './WelcomeCard.css';

interface WelcomeCardProps {
    name: string;
    message?: string;
}

const WelcomeCard: React.FC<WelcomeCardProps> = ({ name, message = "Welcome to our platform!" }) => {
    const getTimeBasedEmoji = () => {
        const hour = new Date().getHours();
        if (hour < 12) return '🌅';
        if (hour < 18) return '☀️';
        return '🌙';
    };

    const getTimeBasedGreeting = () => {
        const hour = new Date().getHours();
        if (hour < 12) return 'Good morning';
        if (hour < 18) return 'Good afternoon';
        return 'Good evening';
    };

    return (
        <div className="welcome-card">
            <span className="emoji">{getTimeBasedEmoji()}</span>
            <h2>{getTimeBasedGreeting()}, User!</h2>
            <p>{message}</p>
            <div className="highlight">
                Let's create something amazing today!
            </div>
        </div>
    );
};

export default WelcomeCard; 