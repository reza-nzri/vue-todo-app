# Understanding `await` and `async` in JavaScript
## `async` Functions

An `async` function is a function declared with the `async` keyword, which allows you to use the `await` keyword inside it to wait for a promise to resolve before executing the next line of code.

#### `await` Keyword

The `await` keyword is used inside `async` functions to pause the execution of the function until a promise is resolved or rejected. It can only be used inside functions marked with the `async` keyword.

### Example of `async` and `await`

```javascript
async function fetchData() {
  try {
    let response = await fetch('https://api.example.com/data');
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();
```

### Differences between `async/await` and Traditional Promises

#### Promises

A promise is an object representing the eventual completion or failure of an asynchronous operation.

```javascript
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error fetching data:', error));
```

#### `async/await`

`async/await` is syntactic sugar built on top of promises, making asynchronous code look and behave more like synchronous code, which is easier to read and write.

```javascript
async function fetchData() {
  try {
    let response = await fetch('https://api.example.com/data');
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();
```

### Advantages of `async/await`

1. **Readability**: Makes asynchronous code look more like synchronous code, which is easier to understand.
2. **Error Handling**: Use `try/catch` blocks for error handling instead of chaining `catch` methods.
3. **Sequential Operations**: Easy to write code that performs asynchronous operations in a specific order.

### Disadvantages of `async/await`

1. **Browser Support**: Top-level `await` is not supported in all environments.
2. **Syntax Constraint**: `await` can only be used inside `async` functions.

### Differences in Execution

#### Promises with `.then()`

```javascript
console.log('Before fetch');
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error fetching data:', error));
console.log('After fetch');
```

Output:
```
Before fetch
After fetch
(data is logged once the promise resolves)
```

#### `async/await`

```javascript
async function fetchData() {
  console.log('Before fetch');
  try {
    let response = await fetch('https://api.example.com/data');
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
  console.log('After fetch');
}

fetchData();
```

Output:
```
Before fetch
(data is logged once the promise resolves)
After fetch
```

### Summary

- **Promises**: Provide a cleaner way to handle asynchronous operations compared to callbacks but can lead to "promise chaining" which might be harder to read.
- **`async/await`**: Provides a more synchronous-looking way to handle asynchronous operations, making the code easier to read and maintain. However, it requires the use of `async` functions and does not support top-level `await` in all environments.

Using `async/await` often results in more readable and maintainable code, especially when dealing with complex sequences of asynchronous operations. However, understanding both methods is important as both are widely used in modern JavaScript development.