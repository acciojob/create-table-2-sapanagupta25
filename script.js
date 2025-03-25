function createTable() {
    const table = document.getElementById('myTable');
    table.innerHTML = ''; // Clear existing table content

    // Get user input for rows and columns
    const rn = parseInt(prompt('Input number of rows'));
    const cn = parseInt(prompt('Input number of columns'));

    // Validate input
    if (isNaN(rn) || isNaN(cn)) {
        alert('Please enter valid numeric values.');
        return;
    }
    if (rn <= 0 || cn <= 0) {
        alert('Number of rows and columns must be greater than zero.');
        return;
    }

    // Create table rows and cells
    for (let i = 0; i < rn; i++) {
        const row = table.insertRow(); // Create a new row
        for (let j = 0; j < cn; j++) {
            const cell = row.insertCell(); // Create a new cell
            cell.textContent = `Row-${i} Column-${j}`;
        }
    }
}
