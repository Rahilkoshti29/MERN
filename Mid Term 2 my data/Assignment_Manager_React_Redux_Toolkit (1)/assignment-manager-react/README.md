# Assignment Manager (React + Redux Toolkit)

A simple assignment manager built with React, Redux Toolkit, and React Redux.

## Features
- Shows the three starter assignments.
- `AssignmentCard` receives `title` as a prop.
- Uses `.map()` and a unique `key` for each assignment.
- Redux Toolkit `assignmentSlice` includes `addAssignment` and `removeAssignment`.
- Store is configured with `configureStore` and provided through `Provider`.
- Adds assignments from a text input using `useDispatch`.
- Deletes assignments using Redux actions.
- Reads assignment data with `useSelector`.
- Shows **No assignments available** when the list is empty.

## Run the project

Install Node.js first, then open a terminal in this folder and run:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

To check a production build:

```bash
npm run build
```

## Main file structure

```text
src/
├── components/
│   └── AssignmentCard.jsx
├── redux/
│   ├── assignmentSlice.js
│   └── store.js
├── App.jsx
├── main.jsx
└── styles.css
```
