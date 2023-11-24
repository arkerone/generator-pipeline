# Generator pipeline

## Development Status

🚧 **Currently Under Development:** Please note that this library is a work-in-progress. Features and API may change as development progresses. Feedback and contributions are welcome!

## Overview

The `Pipe` class is a versatile utility for TypeScript that enables fluent and expressive operations on iterable sequences. It is designed to provide a chainable, lazy evaluation approach for handling collections of data. With methods like `where`, `each`, `take`, and `all`, `Pipe` allows users to efficiently process and manipulate iterable sequences.

## Installation

To use the `Pipe` class, simply import it into your TypeScript project:

```typescript
import Pipe from './path/to/pipe';
```

Ensure that the file containing the `Pipe` class is correctly located in your project structure.

## Usage

### Creating a Pipe

You can create a `Pipe` instance by passing any iterable object to its constructor.

```typescript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const pipe = new Pipe(numbers);
```

### Methods

- **where(predicate: Predicate\<TSequence>)**: Filters the sequence based on a given predicate.

  ```typescript
  const evenNumbers = pipe.where(n => n % 2 === 0);
  ```

- **each\<TReturn>(transform: Transform\<TSequence, TReturn>)**: Transforms each element in the sequence using the provided function.

  ```typescript
  const doubled = pipe.each(n => n * 2);
  ```

- **take(count: number)**: Takes the first `count` elements from the sequence.

  ```typescript
  const firstTwo = pipe.take(2);
  ```

- **all()**: Converts the entire sequence into an array.

  ```typescript
  const allNumbers = pipe.all();
  ```

### Iteration

The `Pipe` class implements the iterable protocol, so you can use it directly with a `for...of` loop.

```typescript
for (const num of pipe) {
  console.log(num);
}
```

### Chaining

Methods of `Pipe` return a new `Pipe` instance, allowing for method chaining.

```typescript
const result = new Pipe(numbers)
  .where(n => n % 2 === 0)
  .each(n => n * 2)
  .take(3)
  .all();
```

## TypeScript Types

- **Predicate\<TValue>**: A function type that takes a value of type `TValue` and returns a boolean.
- **Transform\<TValue, TReturn>**: A function type that takes a value of type `TValue` and transforms it into a value of type `TReturn`.

## Compatibility

The `Pipe` class is compatible with any TypeScript project that supports ES6 features, particularly iterable protocols and generator functions.

## License

This project is open-sourced and can be freely used and modified in accordance with the chosen license terms. 