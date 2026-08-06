# Phase 1 Notes – JavaScript Foundations

## What I learned
- JavaScript has different types (number, string, boolean, object, etc.)
- Always prefer `===` over `==`
- `const` and `let` are block scoped
- Closures let a function remember variables from the place it was created
- `this` depends on how a function is called
- Objects can inherit from other objects using prototypes
- `map`, `filter`, and `reduce` are the most useful array tools

## What was difficult
- Understanding closures clearly at first
- Understanding how `this` can be lost when a method is taken out of an object
- Using `reduce` correctly in the beginning

## How Closures work (my words)
A closure is when a function remembers the variables that were around it when it was created, even after the outer function has finished running. This allows us to create private variables.

## How Reduce works (my words)
`reduce` goes through each item in an array and builds up a single result (like a total). It needs a starting value and a function that tells it how to combine the current item with the result so far.