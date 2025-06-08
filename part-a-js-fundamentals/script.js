// 1. Variables Exercise
function runVariablesExercise() {
    const output = document.getElementById('variables-output');
    
    // Variable declarations
    let name = "John Doe";
    const age = 25;
    let isStudent = true;
    
    // Template literal demonstration
    output.innerHTML = `
        <p>Name: ${name} (type: ${typeof name})</p>
        <p>Age: ${age} (type: ${typeof age})</p>
        <p>Is Student: ${isStudent} (type: ${typeof isStudent})</p>
    `;
}

// 2. Functions Exercise
function runFunctionsExercise() {
    const output = document.getElementById('functions-output');
    
    // Regular function
    function add(a, b) {
        return a + b;
    }
    
    // Arrow function
    const multiply = (a, b) => a * b;
    
    // Function with default parameters
    const greet = (name = "Guest") => `Hello, ${name}!`;
    
    output.innerHTML = `
        <p>Addition (5 + 3): ${add(5, 3)}</p>
        <p>Multiplication (4 × 6): ${multiply(4, 6)}</p>
        <p>Greeting: ${greet("User")}</p>
        <p>Default Greeting: ${greet()}</p>
    `;
}

// 3. Arrays Exercise
function runArraysExercise() {
    const output = document.getElementById('arrays-output');
    
    // Array methods demonstration
    const fruits = ['apple', 'banana', 'orange'];
    const numbers = [1, 2, 3, 4, 5];
    
    // Array operations
    fruits.push('grape');
    const doubledNumbers = numbers.map(num => num * 2);
    const evenNumbers = numbers.filter(num => num % 2 === 0);
    
    output.innerHTML = `
        <p>Original Fruits: ${fruits.join(', ')}</p>
        <p>Original Numbers: ${numbers.join(', ')}</p>
        <p>Doubled Numbers: ${doubledNumbers.join(', ')}</p>
        <p>Even Numbers: ${evenNumbers.join(', ')}</p>
    `;
}

// 4. Objects Exercise
function runObjectsExercise() {
    const output = document.getElementById('objects-output');
    
    // Object creation and manipulation
    const person = {
        name: "Jane Doe",
        age: 30,
        occupation: "Developer",
        skills: ["JavaScript", "React", "Node.js"]
    };
    
    // Object methods and properties
    person.location = "New York";
    const skillsList = person.skills.join(", ");
    
    output.innerHTML = `
        <p>Person Details:</p>
        <p>Name: ${person.name}</p>
        <p>Age: ${person.age}</p>
        <p>Occupation: ${person.occupation}</p>
        <p>Location: ${person.location}</p>
        <p>Skills: ${skillsList}</p>
    `;
}

// 5. DOM Manipulation
document.addEventListener('DOMContentLoaded', () => {
    const domContainer = document.getElementById('dom-container');
    const addButton = document.getElementById('add-element');
    const changeStyleButton = document.getElementById('change-style');
    const removeButton = document.getElementById('remove-element');
    
    // Add element
    addButton.addEventListener('click', () => {
        const newElement = document.createElement('div');
        newElement.textContent = 'New Element Added!';
        newElement.className = 'added-element';
        domContainer.appendChild(newElement);
    });
    
    // Change style
    changeStyleButton.addEventListener('click', () => {
        domContainer.style.backgroundColor = '#e9ecef';
        domContainer.style.color = '#007bff';
        domContainer.style.padding = '20px';
    });
    
    // Remove element
    removeButton.addEventListener('click', () => {
        const elements = domContainer.getElementsByClassName('added-element');
        if (elements.length > 0) {
            domContainer.removeChild(elements[elements.length - 1]);
        }
    });
});

// 6. Event Handling
document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.getElementById('input-field');
    const submitButton = document.getElementById('submit-button');
    const eventOutput = document.getElementById('event-output');
    
    // Input event
    inputField.addEventListener('input', (e) => {
        eventOutput.innerHTML = `
            <p>Current Input: ${e.target.value}</p>
        `;
    });
    
    // Click event
    submitButton.addEventListener('click', () => {
        const inputValue = inputField.value;
        eventOutput.innerHTML += `
            <p>Submitted Value: ${inputValue}</p>
        `;
        inputField.value = '';
    });
    
    // Keyboard event
    inputField.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            submitButton.click();
        }
    });
}); 