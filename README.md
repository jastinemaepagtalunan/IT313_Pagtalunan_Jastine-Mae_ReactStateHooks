# IT313 — Lab 5: React State & Hooks

## Project Overview
A practice tracker with a stopwatch built using React Native, Expo, and React Hooks.

## Components & Concepts Used

### 1. Custom Hook: useStopwatch
- Tracks elapsed seconds using useState
- Uses useEffect with setInterval to increment time every second
- Cleanup function clears the interval when paused — prevents memory leaks

### 2. PracticeTracker Component
- Receives solved, onSolve, onReset as props
- Uses functional update: setSolved(prev => prev + 1)
- Conditional rendering: shows "Great job!" when solved ≥ 5

### 3. Stopwatch Component
- Formats time as MM:SS
- Displays "Running…" or "Paused" status

### 4. Main App — Lifting State Up
- Parent component holds solved and isRunning states
- Shares data & functions with child components
- Ensures all components stay in sync

## How to Run
`bash
npx expo start --lan# IT313 — Lab 5: React State & Hooks

Name: Jastine Mae P. Pagtalunan
Section: BSIT-3C

## Project Overview
A practice tracker with a stopwatch built using React Native, Expo, and React Hooks.

## Components & Concepts Used

### 1. Custom Hook: useStopwatch
- Tracks elapsed seconds using useState
- Uses useEffect with setInterval to increment time every second
- Cleanup function clears the interval when paused — prevents memory leaks

### 2. PracticeTracker Component
- Receives solved, onSolve, onReset as props
- Uses functional update: setSolved(prev => prev + 1)
- Conditional rendering: shows "Great job!" when solved ≥ 5

### 3. Stopwatch Component
- Formats time as MM:SS
- Displays "Running…" or "Paused" status

### 4. Main App — Lifting State Up
- Parent component holds solved and isRunning states
- Shares data & functions with child components
- Ensures all components stay in sync

## How to Run
`bash
npx expo start --lan