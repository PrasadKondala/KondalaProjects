function calculateRectanglePerimeter(length, width) {
    // Formula to calculate perimeter of a rectangle: 2 * (length + width)
    const perimeter = 2 * (length + width);
    return perimeter;
  }
  
  // Example values for length and width of a rectangle
  const length = 5;
  const width = 10;
  
  // Calculate the perimeter using the function
  const rectanglePerimeter = calculateRectanglePerimeter(length, width);
  
  // Display the result
  console.log(`The perimeter of the rectangle with length ${length} and width ${width} is: ${rectanglePerimeter}`);
  