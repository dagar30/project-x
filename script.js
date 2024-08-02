// script.js
document.getElementById('user-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    // Get form values
    const name = document.getElementById('name').value;
    const region = document.getElementById('region').value;
    const role = document.getElementById('role').value;

    // Display result
    document.getElementById('result').innerHTML = `
        <h2>Entered Details:</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Region:</strong> ${region}</p>
        <p><strong>Role:</strong> ${role}</p>
    `;
});
