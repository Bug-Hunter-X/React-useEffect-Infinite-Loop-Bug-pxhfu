# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React applications: an infinite loop caused by incorrectly updating state within the `useEffect` hook.

## Bug Description
The `bug.js` file contains a component that attempts to increment a state variable within the `useEffect` hook's dependency array.  This leads to an infinite loop because every state change causes a re-render, which in turn re-executes the `useEffect` hook, triggering another state change.  This results in the browser crashing or becoming unresponsive.

## Solution
The `bugSolution.js` file provides a corrected version.  The state update is properly managed, preventing the infinite loop.

## How to Reproduce
1. Clone this repository.
2. Navigate to the directory.
3. Run `npm install` to install dependencies (if any).
4. Run the app using a React development server.