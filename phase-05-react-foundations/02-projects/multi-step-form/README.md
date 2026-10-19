# Multi-Step Developer Onboarding

A React project that guides a developer through a multi-step onboarding flow and shows the completed profile on a dashboard.

## Project Flow

1. Personal Details
2. Developer Profile
3. Job Preferences
4. Review
5. Dashboard

## Features

- Multi-step form navigation
- Back and Continue controls
- Shared form state across components
- Controlled inputs
- Required form fields
- Job preference dropdown
- Read-only review step
- Final developer dashboard
- Reusable review and dashboard item components
- CSS styling with Flexbox and Grid

## Form Data

The onboarding form collects:

- Name
- Email
- Experience
- Main stack
- Preferred role
- Work preference

## Component Structure

- `App.jsx` owns the shared form data and current step
- `PersonalDetails.jsx` collects name and email
- `DeveloperProfile.jsx` collects experience and stack
- `JobPreferences.jsx` collects preferred role and work preference
- `ReviewStep.jsx` displays all entered information before completion
- `Dashboard.jsx` displays the completed developer profile

## State Decisions

`App.jsx` owns:

- `formData`
- `currentStep`

The step components receive the data and navigation functions through props.

This keeps the onboarding data available while moving forward and backward between steps.

## React Concepts Practiced

- Components
- Props
- `useState`
- Controlled forms
- Lifting state up
- Conditional rendering
- Function props
- Updating object state with the spread operator
- Computed property names
- Reusable components

## CSS Practiced

The project also practices normal CSS with React using `className`.

CSS concepts used include:

- Flexbox
- CSS Grid
- Form styling
- Primary and secondary buttons
- Review layout
- Dashboard cards
- Spacing and basic visual hierarchy

## Run the Project

```bash
npm install
npm run dev
```

## Final Verification

The complete flow was manually tested:

- Step 1 to Step 2
- Step 2 to Step 3
- Step 3 to Review
- Back navigation
- Form values remain when moving between steps
- Review displays the entered values
- Complete Onboarding opens the Dashboard
- Dashboard displays the completed profile

## What I Learned

I also learned how to test a complete React user flow rather than testing only isolated functions.

I practiced rendering the application, querying accessible elements, simulating typing, clicking and selecting options, checking navigation between steps, and verifying that shared state survives component changes.


## Automated Testing

The onboarding flow is tested with Vitest, React Testing Library, and `user-event`.

The test suite verifies:

- Personal Details renders as the first step
- Completing Personal Details moves to Developer Profile
- Completing Developer Profile moves to Job Preferences
- Completing Job Preferences moves to Review
- Completing Review moves to Dashboard
- The Dashboard displays the submitted profile data
- Back navigation works across the form
- Form data is preserved when navigating backward

### Testing Tools

- Vitest test runner
- jsdom browser-like DOM environment
- React Testing Library renders and queries React components
- `user-event`  simulates real user interactions
- `jest-dom` provides DOM-specific assertions

### Run Tests

```bash
npm test
npm run lint
npm run build
```