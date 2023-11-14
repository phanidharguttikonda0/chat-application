// Function to generate a random string of given length
function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }
  
  // Function to generate a 2D array
  function generate2DArray(rows, minColumns, maxColumns, stringLength) {
    const array = [];
    for (let i = 0; i < rows; i++) {
      const row = [];
      const numColumns = Math.floor(Math.random() * (maxColumns - minColumns + 1)) + minColumns;
      for (let j = 0; j < numColumns; j++) {
        row.push(generateRandomString(stringLength));
      }
      array.push(row);
    }
    return array;
  }
  
  // Generate a 2D array with 5 rows, minimum 1 column, maximum 5 columns, and string length of 8
  const my2DArray = generate2DArray(5, 1, 5, 8);
  
  console.log(my2DArray);


