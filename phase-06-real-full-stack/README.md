# Phase 6: Real Full-Stack  Django + DRF + React

## Phase Overview

- **Goal:** Learn when and how to build a real backend and connect it properly to a React frontend.
- **Estimated study time:** 6–8 weeks.
- **Prerequisite:** Phase 5 React Foundations complete.
- **Expected outcome:** Build, protect, test, document, and deploy a real authenticated React application backed by Django REST Framework and PostgreSQL.

---

## Main Project

### Full-Stack Job Application CRM

We will turn the ideas from the Phase 5 Job Application Tracker into a real full-stack application.

The app will eventually support:

- User registration
- Login and logout
- Authenticated API requests
- Each user sees only their own applications
- Create, read, update, and delete job applications
- Company, role, status, notes, and timestamps
- Filtering
- Search
- Pagination
- Protected React routes
- Loading, empty, success, and error states
- Optimistic updates where appropriate
- Automated backend/API tests
- React Testing Library tests for critical flows
- Manual authentication and permission checks
- Offline support for useful data
- Simple conflict handling
- Production deployment
- API and architecture documentation

This is the main Phase 6 project. We do not need several small disconnected projects unless a small isolated exercise is useful for learning one concept.

---

## Architecture

```text
Browser
  |
  v
React + Vite frontend
  |
  | HTTP / JSON
  v
Django REST Framework API
  |
  v
PostgreSQL
```

### Responsibilities

**React**
- Render the UI
- Collect user input
- Call the API
- Store UI state
- Handle loading and error states
- Protect frontend routes
- Update the screen after API responses

**Django + DRF**
- Validate incoming data
- Authenticate users
- Enforce permissions
- Apply business rules
- Read and write database data
- Return JSON responses

**PostgreSQL**
- Persist application data

The frontend must never be treated as the security boundary. Authorization must be enforced by the backend.

---

# Course Outline

The order below is the dependency order for Phase 6. We do not skip ahead unless the next topic is independent.

## Module 0  Full-Stack Mental Model

### Learn
- When a frontend-only app is enough
- When a backend is actually required
- Browser → React → API → database flow
- Request and response lifecycle
- Frontend responsibility vs backend responsibility
- Why frontend checks do not replace backend security

### Practice
- Draw the architecture of the Phase 6 application
- Trace one real flow:
  - user submits a new application
  - React sends JSON
  - DRF validates it
  - Django saves it
  - API returns JSON
  - React updates the page

### Exit check
Explain the full request/response flow without notes.

---

## Module 1  Project Structure and Environment

### Learn
- Why frontend and backend are separate applications
- Development origins and ports
- Environment-based configuration
- API base URL
- What belongs in `.env`
- What must never be exposed in Vite frontend environment variables

### Project structure

```text
phase-06-real-full-stack/
├── README.md
├── frontend/
├── backend/
└── docs/
    ├── architecture.md
    ├── auth-flow.md
    └── decisions.md
```

### Practice
- Create React/Vite frontend
- Create or connect the DRF backend
- Configure environment variables
- Verify both applications run independently

### Exit check
Explain why frontend environment variables cannot hold real secrets.

---

## Module 2  DRF API Integration Refresher

This is an integration refresher, not a second copy of the Backend Engineering roadmap.

### Learn/review only what Phase 6 needs
- Model
- Serializer
- View/ViewSet
- URL/router
- Request
- Response
- HTTP status codes

### Practice
Build the first Job Application API resource.

Initial fields:

```text
company
role
status
notes
created_at
updated_at
```

### Exit check
Trace:

```text
URL
→ ViewSet
→ Serializer
→ Model
→ Database
→ Serializer
→ JSON response
```

---

## Module 3  React API Layer

### Learn
- Why API calls should not be scattered across components
- API base URL
- `fetch`
- GET
- POST
- PUT/PATCH
- DELETE
- JSON request bodies
- Response parsing
- HTTP errors vs network errors

### Practice
Create a small API layer and connect the React app to the DRF API.

Example responsibility:

```text
components
→ call API functions

API layer
→ knows URLs and HTTP details
```

### Required UI states
- Loading
- Success
- Empty
- Error

### Exit check
Explain what happens from button click to API response and UI update.

---

## Module 4  CORS and Browser Security Boundary

### Learn
- What an origin is
- Why React and Django may have different origins during development
- What CORS controls
- What CORS does not protect
- Allowed origins
- Credentials where applicable

### Practice
- Observe a real CORS failure
- Configure only the required development origin
- Verify React can call Django

### Exit check
Explain why a successful CORS configuration is not authentication or authorization.

---

## Module 5  Authentication Flow

We will choose **one authentication strategy and understand it properly** before implementation.

Because JWT has already been studied in the Backend Engineering track, JWT is the default candidate, but the final storage/refresh design must be verified against the security work before implementation.

### Learn
- Registration
- Login
- Authentication state
- Access credentials
- Refresh flow if JWT is selected
- Logout
- Expiration
- Failed authentication
- Secure browser storage considerations
- Why frontend route protection is only a UI feature
- Why the backend must still authenticate every protected request

### Practice
Implement:

```text
Register
→ Login
→ authenticated request
→ expiration/refresh behavior
→ Logout
```

### Documentation
Create:

```text
docs/auth-flow.md
```

with a small diagram of the chosen flow.

### Exit check
Explain the complete auth flow without copying code.

---

## Module 6  Permissions and User-Owned Data

### Learn
- Authentication vs authorization
- Object ownership
- Server-side permission enforcement
- Why hiding an Edit button is not security

### Practice
- User A creates applications
- User B cannot read or modify User A's private applications
- React shows only permitted actions
- Backend independently enforces the permission

### Manual security check
Attempt requests that should be forbidden.

### Exit check
Explain which layer controls security and which layer only controls the user experience.

---

## Module 7  Filtering, Search, and Pagination

### Learn
- Server-side filtering
- Search parameters
- Pagination
- Query strings
- Why large datasets should not always be downloaded at once

### Practice
Support:

```text
/status=Applied
/search=django
/page=2
```

React must keep the UI and API query state synchronized.

### Exit check
Explain when filtering belongs on the server instead of only in React.

---

## Module 8  Protected Routes and Authenticated React UX

### Learn
- Protected frontend routes
- Auth loading state
- Redirecting unauthenticated users
- Difference between frontend route protection and backend permission enforcement

### Practice
Build:

```text
/login
/register
/applications
/applications/:id
```

Unauthenticated users should not use protected screens, while the API remains independently protected.

### Exit check
Explain why someone bypassing the React router still must not gain API access.

---

## Module 9  Optimistic Updates and Better UX

### Learn
- Normal update flow
- Optimistic update
- Rollback
- When optimistic UI is safe
- When it is better to wait for the server

### Practice
Use optimistic behavior for one low-risk action, such as a status change.

Flow:

```text
user changes status
→ UI updates immediately
→ request sent
→ success: keep it
→ failure: restore previous value + show error
```

### Exit check
Explain the trade-off between responsiveness and consistency.

---

## Module 10  Testing

### Backend
- Django tests
- DRF API tests
- Authentication tests
- Permission tests
- Validation tests

### Frontend
- React Testing Library
- `userEvent`
- API behavior mocking where needed
- Critical user flows

### Manual checks
- Login/logout
- Expired/invalid authentication
- User ownership
- Forbidden actions
- CORS behavior
- Error states

### Rule
Before writing a new kind of test, learn what the testing tool/function does first. Then write the real test yourself.

### Exit check
Explain what belongs in a backend test, frontend test, and manual security check.

---

## Module 11  Refactoring and Application Architecture

Only refactor after the working behavior is tested.

### Learn
- API client separation
- Reusable API helpers
- Component responsibility
- Custom hooks only where they reduce real duplication
- Error boundaries
- Loading components/skeletons
- Cleaner serializers

### Practice
Refactor the working project without changing behavior.

### Exit check
Use tests to prove the refactor did not break the application.

---

## Module 12  Offline Support and Conflict Handling

### Learn
- What data is useful offline
- Cache vs source of truth
- Stale data
- Reconnection
- Simple conflict strategies
- Last-write-wins
- Timestamp-based conflict detection

### Practice
Start small:

```text
online
→ fetch applications
→ cache useful data locally

offline
→ show cached data

online again
→ synchronize
```

Then implement one simple conflict-handling strategy and document its trade-offs.

### Exit check
Explain what happens when local and server data both changed.

---

## Module 13  Documentation and Architecture Decisions

Maintain:

```text
README.md
docs/architecture.md
docs/auth-flow.md
docs/decisions.md
```

Document:
- Project architecture
- API flow
- Authentication flow
- State decisions
- Security decisions
- Offline strategy
- Important trade-offs

For meaningful architecture choices, record:
- Decision
- Why
- Alternatives considered
- Trade-off

---

## Module 14  Deployment

### Backend + Database
Use one supported deployment platform when we reach this point.

Roadmap candidates:
- Railway
- Render
- Fly.io

### Frontend
- Vercel

### Learn
- Production environment variables
- Production API URL
- Allowed origins
- HTTPS
- Database configuration
- Deployment logs
- Build failures
- Migration handling

### Rule
We do not deploy a broken or untested application just to say it is deployed.

### Exit check
Verify the production frontend can authenticate and use the production API correctly.

---

# Phase 6 Milestone Challenge

Add offline support and conflict handling to the main full-stack application and document the trade-offs.

The final application should demonstrate:

```text
React frontend
+ DRF API
+ PostgreSQL
+ authentication
+ permissions
+ filtering/search/pagination
+ protected routes
+ useful optimistic UI
+ automated tests
+ offline behavior
+ deployment
+ documentation
```

---

# Teaching Method for This Phase

## 1. Start Every Session From the Roadmap

Before teaching:
1. Check this README.
2. Check the current Learning Gaps tracker.
3. Confirm the exact module where we stopped.
4. Continue from the first unfinished prerequisite.

Do not add unrelated topics because they are interesting.

## 2. Retrieval Before Re-Teaching

For concepts already learned:
- Ask for a short explanation or small implementation from memory.
- If it is correct, continue.
- If a gap appears, repair only that gap.

Do not repeat full lessons the learner already understands.

## 3. New Concept Teaching Order

For every genuinely new concept:

```text
1. What are we trying to accomplish?
2. What is happening in the real system?
3. Show one tiny real flow/example.
4. Explain why it matters and what can fail.
5. Give the official primary-source documentation link.
6. Quote one short exact statement from the official source.
7. Explain any new syntax/API/command.
8. Let the learner write or run the real step.
9. Inspect the actual result/output together.
10. Continue only when the concept is understood.
```

No unexplained copy-paste blocks.

## 4. One Concept at a Time

Do not mix:
- authentication with authorization
- CORS with authentication
- frontend route protection with backend permissions
- UI state with server state
- caching with persistence
- optimistic updates with offline sync

Finish the current idea before adding the next mechanism.

## 5. Code Ownership Rule

The learner should write the meaningful application code.

The tutor may:
- explain
- show a tiny isolated example
- give a partial scaffold
- give progressive hints
- review code
- diagnose errors

A full solution is given only when:
- the pattern has already been taught and a complete example is genuinely useful, or
- repeated attempts have failed and the solution is needed for learning.

## 6. Progressive Help

When stuck:

```text
Attempt 1
→ identify the exact problem

Attempt 2
→ give a focused hint

Attempt 3
→ give a stronger hint / partial structure

Still blocked
→ show and explain the solution
→ learner then reconstructs or explains it
```

The goal is understanding, not artificial struggle.

## 7. Verify Every Meaningful Step

After each coherent implementation:
- run it
- inspect the real output
- test the behavior
- explain why it worked or failed

Do not move on because the code merely looks correct.

## 8. Testing Is Part of Development

For critical features:

```text
build behavior
→ verify manually
→ automate important behavior
→ refactor
```

Tests should prove user-visible behavior, API behavior, permissions, and important failure cases.

A green test that does not prove what its name claims must be corrected.

## 9. Backend and Frontend Stay Separate in Our Mental Model

When debugging, always ask:

```text
Did React send the correct request?
Did the browser allow the request?
Did DRF receive it?
Did authentication succeed?
Did permission checks succeed?
Did validation succeed?
Did the database operation succeed?
Did React correctly handle the response?
```

We diagnose the responsible layer instead of changing random code.

## 10. Security Rule

Never rely on React for security.

React may hide or disable controls for user experience.

Django/DRF must enforce:
- authentication
- authorization
- ownership
- validation

Sensitive authentication/storage decisions must be understood before implementation.

## 11. Documentation Rule

At each meaningful milestone:
- update README if behavior changed
- update architecture/auth docs if a decision changed
- record important trade-offs

Documentation describes what the project actually does, not planned features that were never built.

## 12. Git Rule

After a meaningful tested milestone:

```bash
git status
git add .
git commit -m "meaningful message"
git push
```

Do not commit broken experiments as completed milestones.

---

# Phase Boundaries

Phase 6 does **not** require us to add unrelated advanced tools.

Do not add these unless a real requirement appears:
- Redux
- GraphQL
- WebSockets
- Microservices
- Kubernetes
- complex event systems

React Native belongs to Phase 7.

The goal is one correct full-stack system, not maximum technology count.

---

# Completion Criteria

Phase 6 is complete only when the learner can independently demonstrate:

- [ ] Explain when a backend is required
- [ ] Explain the full React → API → database flow
- [ ] Build and consume a DRF CRUD API
- [ ] Separate React API calls from UI components
- [ ] Explain and configure CORS correctly
- [ ] Implement and explain the chosen authentication flow
- [ ] Enforce permissions on the backend
- [ ] Build protected React routes
- [ ] Implement filtering, search, and pagination
- [ ] Handle loading, empty, and error states
- [ ] Implement at least one justified optimistic update
- [ ] Write backend/API tests
- [ ] Write React critical-flow tests
- [ ] Perform manual auth/permission checks
- [ ] Add useful offline behavior
- [ ] Explain the conflict strategy
- [ ] Document architecture and decisions
- [ ] Deploy frontend, backend, and database
- [ ] Pass lint/build/test checks
- [ ] Rebuild or explain the core architecture from memory
- [ ] Pass the Phase 6 exit check

The exit check will be given as one complete batch of questions.

---

# Primary Learning Sources

Use primary documentation first:

- Django official documentation
- Django REST Framework official documentation and tutorial
- React official documentation
- MDN Web Docs for browser, HTTP, Fetch, CORS, and storage behavior
- Vite official documentation
- PostgreSQL official documentation where database-specific behavior matters

Secondary conceptual reference:
- *Two Scoops of Django*

---

## First Session

Start with **Module 0  Full-Stack Mental Model**.

First question to answer before writing code:

> What problem requires us to move from a frontend-only React application to a backend-backed application?
