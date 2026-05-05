---
title: "Week 7 – Testing & Quality"
date: "2025-04-14"
excerpt: "Improving codebase reliability through unit testing and end-to-end integration."
tags: ["testing", "jest", "playwright"]
---

## Overview
Quality assurance was the theme for week seven. I spent the week writing unit tests for our utility functions and setting up end-to-end tests for critical user paths.

## Day 1 — Unit Testing
Started by writing unit tests for our core utility functions using Vitest. I focused on the data fetching and filtering logic we implemented in week three.

## Day 2 — Component Testing
Implemented component tests using React Testing Library. I focused on ensuring that our complex molecules behave correctly under different props and states.

## Day 3 — E2E Setup
Configured Playwright for end-to-end testing. I set up the initial test suite to verify that the main navigation and project pages are accessible and functional.

## Day 4 — Critical Path Tests
Wrote E2E tests for the contact form submission and theme switching. These tests give us confidence that our most important features won't break during future updates.

## Day 5 — CI Integration
Integrated our test suite into the CI pipeline. Now, every pull request is automatically checked for regressions before it can be merged.

## Key Takeaways
- Testing utilities first provides the highest ROI for development time.
- E2E tests are essential for verifying that disparate parts of the app work together.
- Automated testing in CI is a game-changer for team confidence.
