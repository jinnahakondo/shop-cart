


# Predictable Shopping Cart Engine (React + Context + useReducer)

A high-performance, predictable shopping cart architecture built with React `useReducer` and Context API. This project avoids heavy external state management libraries (like Redux or Zustand) to demonstrate how complex, interdependent state changes can be handled cleanly, explicitly, and immutably using native React primitives.

## 🚀 Live Demo & Links
-  <a href="https://shop-cart-derzjsau2-jinnahs-projects-5d890d64.vercel.app/">Live Preview<a/> 
- **Design Pattern:** Unidirectional Data Flow with Command-Pattern Reducers

---

## ✨ Features & Requirements Met

### Core Cart Mechanics
- **Add to Cart:** Intelligently checks if an item exists; increments quantity if present, or appends a new item with a default quantity of `1`.
- **Remove Item:** Instantly purges an item from the cart array using immutable filtering.
- **Dynamic Quantity Adjustments:** - **Increase:** Increments individual item counts.
  - **Decrease:** Decrements item counts, automatically triggering a removal if the quantity drops below `1`.
- **Clear Cart:** Resets the cart state back to an empty baseline in a single atomic action.

### Real-Time Financial Calculations
- **Dynamic Subtotal:** Automatically calculated via an immutable `reduce` loop over cart items.
- **Tax Engine:** Computes a strict 5% tax flat rate based on the current subtotal.
- **Grand Total:** Combines subtotal and tax to output final checkout figures dynamically.
- **Total Item Counter:** Computes absolute item counts to power badge indicators in the navigation header.

### Production Enhancements (Bonus)
- **State Persistence:** Integrated custom synchronization with `localStorage` inside the initialization phase to ensure the cart survives page refreshes without layout shifts.

---

## 🏗️ Architectural Decisions & Deep Dive

### 1. Component Boundaries & Layout Philosophy
The application splits concerns cleanly into a **Data Layer** and a **Presentational Layer**:
