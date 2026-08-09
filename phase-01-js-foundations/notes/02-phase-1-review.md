# Phase 1 — JavaScript Foundations Review

## Status

**Phase:** 1 — JavaScript Foundations
**Status:** Complete ✅

---

## 1. Array Methods

### `map()`

Used to transform every item in an array.

```js
const numbers = [1, 2, 3];

const doubled = numbers.map((number) => number * 2);
// [2, 4, 6]
```

### `filter()`

Used to return all items that satisfy a condition.

```js
const numbers = [1, 2, 3, 4];

const result = numbers.filter((number) => number > 2);
// [3, 4]
```

### `find()`

Used to return the first item that satisfies a condition.

```js
const todo = todos.find((todo) => todo.id === 2);
```

If no item matches, `find()` returns `undefined`.

### `reduce()`

Used to combine an array into one result.

```js
const total = numbers.reduce((total, number) => {
  return total + number;
}, 0);
```

The `0` is the initial accumulator value.

---

## 2. Array Copying

Returning:

```js
return todos;
```

returns the original array.

Returning:

```js
return [...todos];
```

returns a shallow copy of the array.

Using a copy helps prevent accidental mutation of the original array.

---

## 3. Error Handling

When `find()` cannot find an item, it returns:

```js
undefined
```

We can detect that and throw an error:

```js
if (!todo) {
  throw new Error("Todo not found");
}
```

Throwing the error stops the current function and reports the problem clearly.

---

## 4. Sorting Without Mutating

`sort()` mutates the array it is called on.

Therefore:

```js
return [...todos].sort(...);
```

copies the array first and sorts the copy.

This keeps the original `todos` array unchanged.

---

## 5. Sorting Dates

JavaScript `Date` objects can be converted to timestamps using:

```js
date.getTime()
```

The result is a number representing milliseconds since the Unix epoch.

Example:

```js
return [...todos].sort(
  (a, b) => b.date.getTime() - a.date.getTime()
);
```

This sorts newer dates first.

---

## 6. CRUD

CRUD means:

### Create

```js
addTodo()
```

Creates a new todo.

### Read

Examples:

```js
getTodos()
findTodo()
getCompletedTodos()
getIncompleteTodos()
searchTodos()
```

### Update

Examples:

```js
completeTodo()
uncompleteTodo()
updateTodoTitle()
```

### Delete

Examples:

```js
removeTodo()
clearCompletedTodos()
```

---

## 7. Todo Project

The Todo project reinforced:

* Arrays
* Objects
* Functions
* `find()`
* `filter()`
* `reduce()`
* `sort()`
* `map()` concepts
* Date objects
* Array copying
* Mutation
* Error handling
* CRUD
* Searching
* Filtering
* Sorting
* Updating data
* Deleting data

The project was rebuilt from memory and tested through Node.js.

---

## 8. Expense Tracker

The Expense Tracker currently supports:

```js
addExpense()
listExpenses()
filterByCategory()
getTotal()
getTotalByCategory()
```

It reinforces:

* Objects
* Arrays
* `filter()`
* `reduce()`
* Function composition
* Data aggregation

The project can be considered a small practice project rather than a full production application.

---

## 9. Important Lessons

### `filter()` selects

```text
array → matching items
```

### `find()` finds one

```text
array → first matching item
```

### `map()` transforms

```text
array → transformed array
```

### `reduce()` combines

```text
array → one result
```

### `sort()` mutates

Therefore copy first when the original order should remain unchanged:

```js
[...array].sort(...)
```

### `getTime()` converts dates to numbers

```js
date.getTime()
```

This allows dates to be compared numerically.

---

## Phase 1 Result

Phase 1 is complete.

The main remaining work was documentation and the Expense Tracker reinforcement. The Todo project is complete and was successfully rebuilt from memory.

**Next:** Phase 2 — DOM & Browser.
