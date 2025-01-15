
---

### 1. **Mount**
- **When**: Only the **first time** a component is created and added to the DOM.
- **What happens**: React initializes the component.

Think of **mounting** as placing a brand-new component onto the screen for the first time.

---

### 2. **Render**
- **When**: Every time React processes a component to figure out what should appear on the screen.
- **What happens**: React evaluates the component’s JSX (or UI logic).

- **Two cases of render**:
    - **Initial render**: Happens during **mounting**.
    - **Re-render**: Happens during updates (when state, props, or context changes).

---

### In Simple Words:
- **Mount** = First time the component appears on the screen.
- **Render** = React checking or updating what to display. It happens:
    1. During mounting (initial render).
    2. After state or props change (re-render).

---

### Quick Example:
```jsx
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // Runs only on mount
  useEffect(() => {
    console.log("Mounted!");
  }, []);

  // Runs on every render (mount + updates)
  console.log("Rendered!");

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

### Output:
1. When the component first appears:
    - **"Mounted!"**
    - **"Rendered!"**

2. After clicking the button:
    - **"Rendered!"** (re-render happens).

---

Let me know if this makes sense! 😊
