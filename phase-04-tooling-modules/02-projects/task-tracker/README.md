# Task Tracker

A vanilla JavaScript task tracker built with Vite.

## Features

- Add tasks
- Mark tasks complete or undo completion
- Delete tasks
- Filter all, active, and completed tasks
- Save tasks with localStorage
- Restore tasks after page refresh
- Automated tests with Vitest

## Structure

- `src/data/tasks.js` - task state and task operations
- `src/data/storage.js` - localStorage logic
- `src/ui/render.js` - DOM rendering
- `src/utils/filters.js` - task filtering
- `src/main.js` - connects the application together
- `tests/` - Vitest tests

## Commands

```bash
npm run dev
npm test
npm run build
npm run preview
```
