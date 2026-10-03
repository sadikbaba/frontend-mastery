## Debounce

Debounce waits for the user to stop doing something before running a function.

It is useful when an event happens many times very fast, like typing in a search box.

`setTimeout()` starts the delay.

`clearTimeout()` cancels the old timer if the event happens again.

The timer keeps resetting until the user stops.

Common uses are search input, form validation, resize events, and API calls.