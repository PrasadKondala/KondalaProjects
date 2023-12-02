function calculateCubeVolume(sideLength) {
    // Formula to calculate volume of a cube: sideLength^3
    const volume = Math.pow(sideLength, 3);
    return volume;
  }
  
  function calculateCubeSurfaceArea(sideLength) {
    // Formula to calculate surface area of a cube: 6 * sideLength^2
    const surfaceArea = 6 * Math.pow(sideLength, 2);
    return surfaceArea;
  }
  
  // Example value for the side length of the cube
  const sideLength = 4;
  
  // Calculate the volume and surface area using the functions
  const cubeVolume = calculateCubeVolume(sideLength);
  const cubeSurfaceArea = calculateCubeSurfaceArea(sideLength);
  
  // Display the results
  console.log(`For a cube with side length ${sideLength}:`);
  console.log(`Volume: ${cubeVolume}`);
  console.log(`Surface Area: ${cubeSurfaceArea}`);
  