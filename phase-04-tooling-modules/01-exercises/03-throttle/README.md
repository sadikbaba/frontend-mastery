## Throttle

Throttle limits how often a function can run.

It is useful when an event happens many times very fast, like scrolling.

The function runs once, then it is blocked for a set amount of time. When the delay finishes, it can run again.

Unlike debounce, the timer does not keep resetting.

Common uses are scroll events, resize events, mouse movement, and other events that happen very frequently.