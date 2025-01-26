# React Router v6 useParams Hook Issue

This repository demonstrates a common issue encountered when using the `useParams` hook in React Router v6. The `useParams` hook unexpectedly returns `undefined` if not used within a component nested directly under a route defined using the `<Route>` component.

## Problem Description

The `useParams` hook in React Router v6 requires the routing context from its parent.  If the component using `useParams` is not nested within a route with a defined path that includes parameters, the hook will return `undefined`.

## Solution

To resolve this issue, ensure your component using `useParams` is a child component of a `<Route>` component that has a path including parameters. The parameters are then accessible through the `useParams` hook.