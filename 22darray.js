// Create a 2D array with 3 rows and 4 columns filled with zeros
const rows = 3;
const columns = 4;
const twoDimArray = new Array(rows);

for (let i = 0; i < rows; i++) {
    twoDimArray[i] = new Array(columns).fill(0);
}

// Initialize the 2D array with some values
twoDimArray[0][1] = 5;
twoDimArray[1][2] = 8;
twoDimArray[2][3] = 12;

// Access and display elements from the 2D array
console.log("2D Array:");
for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
        console.log(`twoDimArray[${i}][${j}] = ${twoDimArray[i][j]}`);
    }
}

// You can also loop through the 2D array
console.log("\nLooping through the 2D Array:");
for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
        console.log(twoDimArray[i][j]);
    }
}
