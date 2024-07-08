let array = [];

// Function to display the 2-D array
function displayArray(arr) {
    const container = document.getElementById('array-container');
    container.innerHTML = ''; // Clear previous content
    arr.forEach(row => {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('row');
        row.forEach(element => {
            const cellDiv = document.createElement('div');
            cellDiv.classList.add('cell');
            cellDiv.innerText = element;
            rowDiv.appendChild(cellDiv);
        });
        container.appendChild(rowDiv);
    });
}

// Function to perform Selection Sort on a 2-D array
function selectionSort(arr) {
    let rows = arr.length;
    let cols = arr[0].length;

    for (let i = 0; i < rows * cols - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < rows * cols; j++) {
            let currentRow = Math.floor(j / cols);
            let currentCol = j % cols;
            let minRow = Math.floor(minIdx / cols);
            let minCol = minIdx % cols;

            if (arr[currentRow][currentCol] < arr[minRow][minCol]) {
                minIdx = j;
            }
        }

        let currentRow = Math.floor(i / cols);
        let currentCol = i % cols;
        let minRow = Math.floor(minIdx / cols);
        let minCol = minIdx % cols;

        // Swap elements
        let temp = arr[currentRow][currentCol];
        arr[currentRow][currentCol] = arr[minRow][minCol];
        arr[minRow][minCol] = temp;
    }
    return arr;
}

// Function to handle user input and parse the 2-D array
function handleInput() {
    const input = document.getElementById('array-input').value;
    array = input.split('\n').map(row => row.split(',').map(Number));
    displayArray(array);
    document.getElementById('sort-button').disabled = false;
}

// Function to sort and display the array
function sortArray() {
    array = selectionSort(array);
    displayArray(array);
}
