# Authentication Flow

## Purpose

This document explains how authentication works
between the React frontend and Django REST Framework backend.

The system uses JWT authentication stored in HttpOnly cookies.

The backend is responsible for authenticating users
and protecting application data.


flowchart TD
    A[User opens application] --> B[React requests CSRF cookie]
    B --> C[User registers or logs in]
    C --> D[Django validates credentials]
    D --> E[Backend sets HttpOnly JWT cookies]
    E --> F[React updates authentication state]
    F --> G[React requests protected data]
    G --> H[Django authenticates request]
    H --> I[React displays user's data]