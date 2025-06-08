import React, { useState, FormEvent } from 'react';

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

            <style jsx>{`
                .student-info {
                    max-width: 500px;
                    margin: 20px;
                    padding: 20px;
                    background-color: white;
                    border-radius: 8px;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                }
                .form-group {
                    margin-bottom: 15px;
                }
                label {
                    display: block;
                    margin-bottom: 5px;
                    color: #495057;
                }
                input, select {
                    width: 100%;
                    padding: 8px;
                    border: 1px solid #ced4da;
                    border-radius: 4px;
                    font-size: 16px;
                }
                button {
                    width: 100%;
                    padding: 10px;
                    background-color: #007bff;
                    color: white;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                    font-size: 16px;
                    margin-top: 10px;
                }
                button:hover {
                    background-color: #0056b3;
                }
                .submission-info {
                    margin-top: 20px;
                    padding: 15px;
                    background-color: #f8f9fa;
                    border-radius: 4px;
                }
                h2 {
                    color: #343a40;
                    margin-bottom: 20px;
                }
                h3 {
                    color: #495057;
                    margin-bottom: 10px;
                }
            `}</style>
        </div>
    );
};

export default StudentInfo; 