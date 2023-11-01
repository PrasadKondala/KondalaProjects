// Define a function that takes a callback as an argument
function performAsyncOperation(callback) {
    setTimeout(function () {
      // Simulate an asynchronous operation (e.g., fetching data)
      const data = "Some data from an async operation";
      
      // Call the callback function with the result
      callback(data);
    }, 2000); // Simulating a 2-second delay
  }
  
  // Define a callback function
  function handleAsyncData(data) {
    console.log("Received data: " + data);
  }
  
  // Call the function and pass the callback
  performAsyncOperation(handleAsyncData);
  