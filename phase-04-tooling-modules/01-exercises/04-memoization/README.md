# Memoization

Memoization stores the result of a function so the same input does not need
to be calculated again.

The first time an input is used, the function calculates the result and
stores it in a cache.

If the same input is used again, the stored result is returned instead of
running the calculation again.

Example:

5 -> calculate 25 -> save it

5 again -> return saved 25

Memoization can improve performance when a function is expensive and is
called repeatedly with the same inputs.

In this exercise, an object is used as the cache.

`number in cache` checks whether the input already exists in the cache,
including values such as `0`.