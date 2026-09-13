# 🚀 DevStack

DevStack is a simple web application that helps developers explore different technologies and build their own technology stack. Users can add technologies to their stack, remove individual technologies or remove all selected technologies.

## 🛠️ Technologies Used

* React
* TypeScript
* Tailwind CSS
* React Toastify
* JSON
* Vite

## ✨ Features

1. **Explore Technologies**
   Users can view different technologies with their category, rating, difficulty, description and icon.

2. **Build Your Stack**
   Users can add technologies to their personal stack and see the selected technologies in the sidebar.

3. **Manage Your Stack**
   Users can remove a single technology or remove all technologies. Toast notifications are also shown for different actions.

## 📚 React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript or TypeScript. It makes React components easier to write and understand.

### 2. What is the difference between props and state?

**Props** are used to send data from a parent component to a child component.
**State** is data managed inside a component that can change over time.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` lets us create and manage changing data in a React component.

I used `useState` in `App.tsx` to store the selected technologies in the stack. I also used it in `TechnologySection.tsx` to store the loaded technologies and loading state.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` lets us run code after a component renders.

I used it in `TechnologySection.tsx` to fetch the technology data from the JSON file when the component loads.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the `key` to identify each item in a list.A unique key helps React understand which item has changed,been added or been removed.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different content depending on a condition.

I used it in `StackSidebar.tsx`:

```tsx
{stack.length === 0 ? (
  <p>Your stack is empty</p>
) : (
  stack.map((item) => ...)
)}
```

When the stack is empty, it shows **"Your stack is empty"**. Otherwise, it shows the selected technologies.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent sends data to a child using **props**.

In this project, `App.tsx` sends `stack` and `setStack` to `TechnologySection` and `StackSidebar`.

The child can send changes back by calling a function received through props. For example, the child calls `setStack()` to update the stack in the parent.
