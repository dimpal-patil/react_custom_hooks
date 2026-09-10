# React Custom Hooks – Pagination & Debounce

This project demonstrates two custom React hooks:

* `usePagination` – manages pagination logic for lists.
* `useDebounce` – delays updating a value until the user stops changing it.

## Features

### usePagination

* Handles total items and items per page
* Calculates total pages
* Tracks the current page
* Calculates start and end indexes
* Supports Previous and Next navigation
* Supports jumping directly to a specific page
* Disables navigation buttons when needed
* Handles the last page correctly

### useDebounce

* Accepts a value and delay
* Uses a default delay of 500ms
* Delays updating the debounced value
* Clears the previous timer when the value changes
* Demonstrates a simulated search using the debounced value

## Demo

### Pagination Demo

Displays 100 items with 10 items per page.

Users can:

* Navigate using Previous and Next
* Jump directly to a page
* See the current page and total pages
* View the items for the current page

### Debounce Search Demo

Users can enter a search term and see:

* Current input value
* Debounced value after 500ms
* Simulated search results

The console also logs the simulated search when the debounced value changes.

## Technologies

* React
* TypeScript
* Vite
* Tailwind CSS
* React Hooks
* Custom Hooks

## Custom Hooks

```text
src/
├── hooks/
│   ├── usePagination.ts
│   └── useDebounce.ts
│
└── components/
    ├── PaginationDemo.tsx
    └── DebounceSearchDemo.tsx
```

