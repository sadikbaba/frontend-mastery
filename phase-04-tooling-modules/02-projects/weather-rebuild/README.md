# Weather Rebuild

## Purpose

Rebuild a previous weather application from scratch using Vite, ES Modules, clean project structure, and reusable UI components.

## Concepts Practiced

- Vite
- ES Modules
- `import` / `export`
- Clean folder structure
- API layer separation
- Reusable UI components
- DOM rendering
- Async/await
- Fetch API
- Loading and error states
- Weather-code formatting
- Production builds

## Architecture

```text
src/
├── api/
│   └── weather.js
├── ui/
│   ├── components/
│   │   ├── status-message.js
│   │   └── weather-card.js
│   └── render.js
├── utils/
│   └── format.js
└── main.js
```

## Application Flow

```text
User searches for city
→ main.js
→ show loading state
→ weather.js fetches coordinates and weather
→ format.js converts weather code
→ render.js renders UI components
→ weather result appears
```

## API

This project uses Open-Meteo for:

- city geocoding
- current temperature
- humidity
- weather code
- wind speed

## Commands

```bash
npm run dev
npm run build
```

## What I Learned

I learned how to split an application into separate modules instead of putting all logic in one file.

Vite handles the development server and production build.

ES Modules allow different files to communicate using `import` and `export`.

The API layer handles fetching data, while the UI layer handles displaying it.
```