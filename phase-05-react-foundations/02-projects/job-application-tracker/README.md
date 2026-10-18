# Job Application Tracker

A React project for tracking job applications.

## Features

- Add a job application
- Delete a job
- Change application status
- Filter jobs by status
- Edit an existing job
- Save jobs with localStorage
- Restore saved jobs after refresh
- Automated tests with Vitest and React Testing Library

## React Concepts Practiced

- Components
- Props
- useState
- useEffect
- Controlled forms
- Lifting state up
- Conditional rendering
- Rendering lists
- Keys
- Immutable array updates

## Component Structure

- `App.jsx` owns the shared jobs state
- `JobForm.jsx` handles creating and editing jobs
- `JobList.jsx` renders the list of jobs
- `JobCard.jsx` renders one job and its actions

## State Decisions

The main `jobs` state lives in `App.jsx` because several components need access to it.

`JobForm` receives functions through props to add or update jobs.

The selected filter is stored in state, while `filteredJobs` is calculated from `jobs` and the selected filter.

## Persistence

Jobs are saved to `localStorage`.

When the app starts, saved jobs are loaded back into React state.

## Testing

The project uses:

- Vitest
- React Testing Library
- user-event
- jsdom

Tests cover:

- Rendering the app
- Adding a job
- Deleting a job
- Changing status
- Filtering jobs
- Editing a job
- Restoring jobs from localStorage

## Run the Project

```bash
npm install
npm run dev
```

## Run Tests

```bash
npm test
```

## Check the Project

```bash
npm run lint
npm run build
```

## What I Learned

The biggest lesson from this project was understanding where state should live.

Shared state belongs in the parent component when multiple child components need to read or change it.

I also learned that tests should simulate how a real user interacts with the application instead of only checking internal implementation details.