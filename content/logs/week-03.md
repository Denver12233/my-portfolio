---
title: "Week 3 – Data Integration"
date: "2025-03-17"
excerpt: "Connecting the frontend components to the local data layer and optimizing fetches."
tags: ["data", "integration", "backend"]
---

## Overview
Week three was dedicated to the data layer. I focused on connecting our frontend components to the local JSON store and optimizing our data fetching strategy using Next.js Server Components.

## Day 1 — Server Components
Implemented the initial set of server components to fetch project data. This approach allows us to keep the logic on the server and reduce the bundle size sent to the client.

## Day 2 — App Router Deep Dive
Explored the nuances of the Next.js App Router. I spent time refining our nested layouts and implementing meaningful loading states to improve the perceived performance.

## Day 3 — Filtering System
Started designing a robust filtering system for the portfolio. I wanted to allow users to filter projects by technology and category seamlessly.

## Day 4 — Logic Extraction
Moved the complex filtering logic into pure utility functions. This separation of concerns keeps the UI components clean and focused solely on rendering.

## Day 5 — Refinement & Testing
Tested the data integration and filtering system across different devices. The separation of logic has already made the codebase much easier to maintain.

## Key Takeaways
- Server Components are powerful for performance-oriented data fetching.
- Meaningful loading states are crucial for a good UX in the App Router.
- Decoupling logic from components simplifies testing and future updates.
