function fetchData(callback) {
    console.log("Fetching data...");

    // simulate delay
    setTimeout(function () {
        console.log("Data fetched");
        callback("User Data");
    }, 2000);
}

function processData(data) {
    console.log("Processing:", data);
}

fetchData(processData);

// Output:
// Fetching data...
// (after 2 seconds)
// Data fetched
// Processing: User Data

// Explanation:
// fetchData is a function that does some work first.
//  It takes another function as an argument, which is called a callback.
//  The processData function is passed as the callback.
//  After the data is ready (after 2 seconds), fetchData calls the callback function and passes the data to it.
//  This shows that a callback function is called after a task is completed.
