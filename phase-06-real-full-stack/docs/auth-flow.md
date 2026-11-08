# Authentication Flow

## Purpose

This document explains how authentication works
between the React frontend and Django REST Framework backend.

The system uses JWT authentication stored in HttpOnly cookies.

The backend is responsible for authenticating users
and protecting application data.

```mermaid
flowchart TD
    A[User opens application] --> B[React requests CSRF cookie]
    B --> C[React attempts session restoration]
    C --> D[Backend validates refresh token]
    D --> E[Backend sets new access cookie]
    E --> F[React fetches user's applications]
    F --> G[User uses the dashboard]
```

```mermaid
flowchart TD
    A[User logs out] --> B[Backend blacklists refresh token]
    B --> C[Backend deletes authentication cookies]
    C --> D[React clears authentication state]
    D --> E[User returns to login]
```
