// Utility function for formatting output
function formatOutput(title, content) {
    return `<div style="margin-bottom: 10px;">
        <span style="color: #3498db; font-weight: bold;">${title}:</span>
        <span style="margin-left: 8px;">${content}</span>
    </div>`;
}

// 1. Variables Exercise
function runVariablesExercise() {
    const output = document.getElementById('variables-output');
    
    // Creating different types of variables
    let name = "Alex";               // Text (string)
    let age = 15;                    // Number
    let likesJavaScript = true;      // Boolean (true/false)
    
    // Show what's stored in our variables
    output.innerHTML = `
        <p>Name: ${name}</p>
        <p>Age: ${age}</p>
        <p>Likes JavaScript? ${likesJavaScript}</p>
        <p>Age in 5 years: ${age + 5}</p>
    `;
}

// 2. Functions Exercise
function runFunctionsExercise() {
    const output = document.getElementById('functions-output');
    
    // Simple function to add two numbers
    function addNumbers(num1, num2) {
        return num1 + num2;
    }
    
    // Simple function to multiply two numbers
    function multiplyNumbers(num1, num2) {
        return num1 * num2;
    }
    
    // Using our functions
    let sum = addNumbers(5, 3);
    let product = multiplyNumbers(4, 2);
    
    output.innerHTML = `
        <p>5 + 3 = ${sum}</p>
        <p>4 × 2 = ${product}</p>
        <p>10 + 20 = ${addNumbers(10, 20)}</p>
        <p>5 × 5 = ${multiplyNumbers(5, 5)}</p>
    `;
}

// 3. Arrays Exercise
function runArraysExercise() {
    const output = document.getElementById('arrays-output');
    
    // Creating an array (list) of fruits
    let fruits = ['apple', 'banana', 'orange'];
    
    // Adding a new fruit to our list
    fruits.push('grape');
    
    // Creating an array of numbers
    let numbers = [1, 2, 3, 4, 5];
    
    output.innerHTML = `
        <p>My fruit list: ${fruits.join(', ')}</p>
        <p>Number of fruits: ${fruits.length}</p>
        <p>First fruit: ${fruits[0]}</p>
        <p>Last fruit: ${fruits[fruits.length - 1]}</p>
        <p>Numbers: ${numbers.join(', ')}</p>
    `;
}

// 4. Simple DOM Exercise
document.addEventListener('DOMContentLoaded', () => {
    const displayText = document.getElementById('displayText');
    const changeTextBtn = document.getElementById('changeText');
    const changeColorBtn = document.getElementById('changeColor');
    
    // Change the text when button is clicked
    changeTextBtn.addEventListener('click', () => {
        displayText.textContent = "You clicked the button! The text changed!";
    });
    
    // Change text color when button is clicked
    changeColorBtn.addEventListener('click', () => {
        // List of simple colors
        const colors = ['red', 'blue', 'green', 'purple', 'orange'];
        // Pick a random color
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        displayText.style.color = randomColor;
    });
});

// 5. Simple Input Exercise
document.addEventListener('DOMContentLoaded', () => {
    const userInput = document.getElementById('userInput');
    const greetButton = document.getElementById('greetButton');
    const greetingOutput = document.getElementById('greetingOutput');
    
    greetButton.addEventListener('click', () => {
        // Get what the user typed
        let name = userInput.value;
        
        // If they typed something, show a greeting
        if (name) {
            greetingOutput.innerHTML = `<p>Hello, ${name}! Welcome to JavaScript!</p>`;
        } else {
            greetingOutput.innerHTML = "<p>Please type your name first!</p>";
        }
    });
});

// Objects Exercise
function runObjectsExercise() {
    const output = document.getElementById('objects-output');
    
    // Course and student objects
    const course = {
        name: "Web Development 101",
        code: "WD101",
        credits: 3,
        instructor: "Prof. Smith"
    };
    
    const student = {
        name: "John Doe",
        id: "ST123",
        courses: ["WD101", "CS200", "MA150"],
        grades: {
            WD101: 95,
            CS200: 88,
            MA150: 92
        }
    };
    
    output.innerHTML = `
        ${formatOutput("Course Information", `
            • Name: ${course.name}
            • Code: ${course.code}
            • Credits: ${course.credits}
            • Instructor: ${course.instructor}
        `)}
        ${formatOutput("Student Information", `
            • Name: ${student.name}
            • ID: ${student.id}
            • Enrolled Courses: ${student.courses.join(', ')}
            • Grades: ${Object.entries(student.grades).map(([course, grade]) => 
                `${course}: ${grade}`).join(', ')}
        `)}
    `;
}

// DOM Manipulation
document.addEventListener('DOMContentLoaded', () => {
    const domContainer = document.getElementById('dom-container');
    const addButton = document.getElementById('add-element');
    const changeStyleButton = document.getElementById('change-style');
    const removeButton = document.getElementById('remove-element');
    
    let elementCount = 0;
    
    addButton.addEventListener('click', () => {
        elementCount++;
        const newElement = document.createElement('div');
        newElement.textContent = `Student Note #${elementCount}`;
        newElement.className = 'added-element';
        newElement.style.padding = '10px';
        newElement.style.margin = '5px 0';
        newElement.style.backgroundColor = '#f0f0f0';
        newElement.style.borderRadius = '4px';
        domContainer.appendChild(newElement);
    });
    
    changeStyleButton.addEventListener('click', () => {
        const elements = domContainer.getElementsByClassName('added-element');
        Array.from(elements).forEach(element => {
            element.style.backgroundColor = getRandomColor();
            element.style.color = 'white';
            element.style.transition = 'all 0.3s ease';
        });
    });
    
    removeButton.addEventListener('click', () => {
        const elements = domContainer.getElementsByClassName('added-element');
        if (elements.length > 0) {
            domContainer.removeChild(elements[elements.length - 1]);
            elementCount--;
        }
    });
});

// Event Handling
document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.getElementById('input-field');
    const submitButton = document.getElementById('submit-button');
    const eventOutput = document.getElementById('event-output');
    
    let submissions = [];
    
    inputField.addEventListener('input', (e) => {
        eventOutput.innerHTML = formatOutput("Current Input", e.target.value);
    });
    
    submitButton.addEventListener('click', () => {
        const inputValue = inputField.value.trim();
        if (inputValue) {
            submissions.push(inputValue);
            eventOutput.innerHTML = `
                ${formatOutput("Latest Submission", inputValue)}
                ${formatOutput("All Submissions", submissions.join(', '))}
            `;
            inputField.value = '';
        }
    });
    
    inputField.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            submitButton.click();
        }
    });
});

// Utility function for random colors
function getRandomColor() {
    const colors = ['#3498db', '#e74c3c', '#2ecc71', '#f1c40f', '#9b59b6'];
    return colors[Math.floor(Math.random() * colors.length)];
} 