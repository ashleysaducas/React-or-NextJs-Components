import React, { useState, FormEvent } from 'react';
import './StudentInfo.css';

interface StudentData {
    name: string;
    email: string;
    course: string;
    year: string;
}

const StudentInfo: React.FC = () => {
    const [formData, setFormData] = useState<StudentData>({
        name: '',
        email: '',
        course: '',
        year: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        // Here you would typically send the data to a server
        console.log('Form submitted:', formData);
    };

    return (
        <div className="student-info">
            <h2>Student Information</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="course">Course:</label>
                    <input
                        type="text"
                        id="course"
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="year">Year:</label>
                    <select
                        id="year"
                        name="year"
                        value={formData.year}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Year</option>
                        <option value="1">First Year</option>
                        <option value="2">Second Year</option>
                        <option value="3">Third Year</option>
                        <option value="4">Fourth Year</option>
                    </select>
                </div>

                <button type="submit">Submit</button>
            </form>

            {submitted && (
                <div className="submission-info">
                    <h3>Submitted Information:</h3>
                    <p>Name: {formData.name}</p>
                    <p>Email: {formData.email}</p>
                    <p>Course: {formData.course}</p>
                    <p>Year: {formData.year}</p>
                </div>
            )}
        </div>
    );
};

export default StudentInfo; 