let apiQuotes = [];

// Get a new Quote
function newQuote () {
    // pick a random quote from the apiQuotes array

    // We need 1 quote, not the whole array so: take apiQuotes array and run a math rounding function in it. Inside that rounding, run a randoming x length of array = a number that will be used as a key to select a random quote
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
    console.log(quote);
}

// Get Quotes from API

async function getQuotes() {
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';

    try {
      const response = await fetch(apiUrl);
      apiQuotes = await response.json();
      newQuote();  
    } catch (error) {
        // Catch error here
    }
}

// On Load
getQuotes();


/* 
Notes:

Ctrl+D Replace all instances of the variable with the same name

synchronous functions wait for each line of code to execute before moving onto the next line

async functions don't wait for the previous line to be executed before moving to the next. Allows certain parts to run independently. This is useful for something like getting data from a server without freezing the whole program to wait for it.

'await' is ONLY used inside async functions. It pauses the execution of an async function until a Promise is done. Allows to write async code that looks and behaves like sync code. It's like saying "wait here until this thing is done before moving on to the next line".      When you use await inside an async function, you're essentially telling JavaScript to pause execution of that function until the Promise it's waiting for is resolved. The Promise might be resolved with a value or with another Promise, which would then be awaited further.

'fetch' is used to make HTTP requests to servers. It's used to get resources (like JSON data, images, etc.) asynchronously from a specified URL. When you call fetch(), it returns a Promise that resolves to the response object representing the result of the request.

In simple terms, imagine you're ordering food online. Using synchronous functions would be like waiting for each step of the order process to finish before moving to the next step (like waiting for the payment to be processed before choosing your delivery address). Asynchronous functions, on the other hand, allow you to multitask—you can start selecting your delivery address while the payment is being processed in the background. await is like pausing your actions until each step completes, and fetch is like sending a request to the restaurant to get your food.

a 'Promise' is an object representing the eventual completion or failure of an asynchronous operation, and its resulting value. When you use fetch, for instance, it returns a Promise. This Promise represents the result of the HTTP request you've made. It could be successful (in which case it resolves with a Response object) or it could fail (in which case it rejects with an error). They allow you to write code that handles asynchronous operations in a more organized and readable way, by chaining .then() and .catch() methods to handle the resolution or rejection of the Promise.


*/