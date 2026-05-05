---
title: "Week 4 – FullStack Team, TBI Coach Redesign, and Coaching Request Feature"
date: "2026-03-02"
excerpt: "Fourth week at Makerspace InnovHub marking a team transfer to FullStack, focusing on institution registration polishing, TBI Coach redesign, and implementing the coaching request feature."
tags: ["sillag","fullstack", "redesign", "tbi-coach", "superadmin", "university"]
---

## Overview

Week 4 marked a significant shift — I was moved from the Backend Team to the FullStack Team. This transition meant taking on a broader scope of work, touching both the frontend and backend sides of the system. The week was packed with polishing tasks, major redesign work, and shipping a new feature that directly impacts how TBI Coaches interact with students on the platform.

## Day-by-Day

**March 2 — Institution Registration Polishing**

The week started with polishing the institution registration flow. This involved reviewing the existing registration process for institutions and refining the UI and validation logic to make sure the experience is smooth and error-free for new institutional users entering the platform.

**March 3 — Regex Polishing and University Data Fetching**

I worked on polishing the regex patterns used for validating approved university entries, ensuring that the validation logic correctly handles different university name formats. Alongside this, I implemented the fetching of approved universities from the database, making the registration flow dynamic rather than relying on a static list.

**March 4 — TBI Coach Major Redesign and Superadmin Landing Page**

This was a significant day — a major redesign of the TBI Coach interface was initiated. The goal was to modernize and improve the usability of the coach-facing side of the platform. In parallel, I also worked on creating the Superadmin Landing Page, which serves as the central hub for platform administrators to manage and oversee system-wide operations.

**March 5 — TBI Coach Dashboard Overhaul**

Continuing from the previous day's redesign, I focused on the TBI Coach side specifically — redesigning the interface, implementing the fetching of all Researchers who currently do not have an assigned coach, and polishing the entire TBI Coach dashboard. Making unassigned researchers visible to coaches is a key part of the platform's matching workflow.

**March 6 — Coaching Request Feature**

The week ended with implementing a complete new feature: TBI Coaches can now send coaching requests to students directly from the platform. These requests are routed through the UniAdmin Requests page, where university administrators can review and approve them. This creates a proper approval workflow that keeps institutional oversight intact while enabling coaches to proactively reach out to students.

## Key Takeaways

- Transferred to the FullStack Team, taking on both frontend and backend responsibilities
- Polished institution registration flow including regex validation and dynamic university fetching
- Led the major redesign of the TBI Coach interface and dashboard
- Created the Superadmin Landing Page for platform-wide administration
- Shipped the coaching request feature with a full UniAdmin approval workflow