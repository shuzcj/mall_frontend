To display some items on the left and others on the right **in the same row**, Flexbox is the best tool for the job. You can achieve this using **`justify-content: space-between`**, which places the first item on the far left and the last item on the far right, with any other items evenly distributed in between.

Here's a practical example where the items are aligned in a row:
- Items 1 and 2 are on the **left**.
- Item 3 is on the **right**.

### Example Code:
```jsx
import React from 'react';
import { Avatar, Button } from 'antd';

function ExampleRow() {
    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", padding: "10px", backgroundColor: "#f0f0f0" }}>
            {/* Left Section */}
            <div style={{ display: "flex", alignItems: "center" }}>
                <Avatar shape="square" size={48} />
                <div style={{ marginLeft: "10px" }}>Item 1</div>
                <div style={{ marginLeft: "20px" }}>Item 2</div>
            </div>
            
            {/* Right Section */}
            <Button type="primary">Item 3 (Right)</Button>
        </div>
    );
}

export default ExampleRow;
```

### Explanation:
1. **Container (`display: flex`)**:
    - The main `div` has `display: flex`, which makes its children (items) align in a row by default.
    - `align-items: center` vertically centers all the items within the container.
    - `justify-content: space-between` pushes the items on the left to the far left and the items on the right to the far right.

2. **Left Section**:
    - The left section (containing the Avatar, "Item 1," and "Item 2") is wrapped in a `div` with `display: flex` and `align-items: center`. This ensures the Avatar and text items are placed next to each other in a row.

3. **Right Section**:
    - The button ("Item 3") is placed on the far right using `justify-content: space-between` from the parent container.

### Result:
- **Left side**: Avatar, "Item 1," and "Item 2" are aligned next to each other.
- **Right side**: The button is aligned to the far right.
- **Both sections**: The left section and right section are on the same line, and they maintain this layout regardless of the container width.

### Screenshot:
```
| Avatar  | Item 1 | Item 2                      [Item 3 Button] |
```

### Flexbox Makes This Easy:
- **Alignment**: `justify-content: space-between` handles pushing the items to opposite sides without any extra hacks.
- **Spacing**: `margin-left` is used to provide spacing between items on the left side (Avatar, "Item 1," and "Item 2").
- **Responsive**: Flexbox ensures that the layout remains responsive and adjusts well when the container size changes.

### Key Points:
- **Use `justify-content: space-between`** to push items to opposite sides.
- **Wrap left-aligned items** in their own flex container to control their internal alignment.
- **Avoid using `float`**, as Flexbox is much easier and cleaner for aligning items in rows, especially when dealing with responsive layouts or dynamic content.



















Yes, **`justify-content`** in Flexbox has several options, allowing you to control how the items inside a flex container are distributed along the **main axis** (usually the horizontal axis unless you change the flex direction).

Let me explain the different options and their behavior:

### **`justify-content` Options**

1. **`flex-start`** (default):
    - Aligns items at the **start** of the flex container (left for horizontal layouts).
    - Items are packed starting from the left with no extra space between them.

   ```css
   justify-content: flex-start;
   ```

   **Example:**
   ```jsx
   <div style={{ display: "flex", justifyContent: "flex-start" }}>
       <div>Item 1</div>
       <div>Item 2</div>
       <div>Item 3</div>
   </div>
   ```

   **Result**: All items are aligned to the left.

2. **`flex-end`**:
    - Aligns items at the **end** of the flex container (right for horizontal layouts).
    - Items are packed starting from the right side of the container.

   ```css
   justify-content: flex-end;
   ```

   **Example:**
   ```jsx
   <div style={{ display: "flex", justifyContent: "flex-end" }}>
       <div>Item 1</div>
       <div>Item 2</div>
       <div>Item 3</div>
   </div>
   ```

   **Result**: All items are aligned to the right.

3. **`center`**:
    - Aligns items at the **center** of the flex container with equal space on both sides.

   ```css
   justify-content: center;
   ```

   **Example:**
   ```jsx
   <div style={{ display: "flex", justifyContent: "center" }}>
       <div>Item 1</div>
       <div>Item 2</div>
       <div>Item 3</div>
   </div>
   ```

   **Result**: All items are centered in the container.

4. **`space-between`**:
    - Distributes items **evenly** with **no space** at the edges (start and end). The first item is placed at the start, and the last item is placed at the end, with equal space between the remaining items.

   ```css
   justify-content: space-between;
   ```

   **Example:**
   ```jsx
   <div style={{ display: "flex", justifyContent: "space-between" }}>
       <div>Item 1</div>
       <div>Item 2</div>
       <div>Item 3</div>
   </div>
   ```

   **Result**: The first item is on the far left, the last is on the far right, and the middle item is evenly spaced in between.

5. **`space-around`**:
    - Distributes items **evenly**, but there is **equal space around each item**, meaning the space between items is the same, and the space on the outer sides (left and right) is half of the space between the items.

   ```css
   justify-content: space-around;
   ```

   **Example:**
   ```jsx
   <div style={{ display: "flex", justifyContent: "space-around" }}>
       <div>Item 1</div>
       <div>Item 2</div>
       <div>Item 3</div>
   </div>
   ```

   **Result**: Equal space around each item. The space between the items is larger than the space at the edges.

6. **`space-evenly`**:
    - Distributes items **evenly**, with **equal space between each item**, including the space at the start and end of the container. This means the space before the first item, between each item, and after the last item is all equal.

   ```css
   justify-content: space-evenly;
   ```

   **Example:**
   ```jsx
   <div style={{ display: "flex", justifyContent: "space-evenly" }}>
       <div>Item 1</div>
       <div>Item 2</div>
       <div>Item 3</div>
   </div>
   ```

   **Result**: All items are evenly spaced with equal space before the first item, between the items, and after the last item.

7. **`start`** and **`end`**:
    - Similar to `flex-start` and `flex-end`, but are based on **writing modes** (LTR or RTL). These are generally used when dealing with languages that have different text directions.

   ```css
   justify-content: start;
   justify-content: end;
   ```

    - `start`: Aligns items based on the start of the writing mode.
    - `end`: Aligns items based on the end of the writing mode.

---

### **How to Choose the Right `justify-content`?**
- **Align everything to the left**: Use `justify-content: flex-start`.
- **Align everything to the right**: Use `justify-content: flex-end`.
- **Center all elements**: Use `justify-content: center`.
- **Distribute elements with space between (without edge space)**: Use `justify-content: space-between`.
- **Distribute elements with some space around**: Use `justify-content: space-around`.
- **Distribute elements with equal space everywhere**: Use `justify-content: space-evenly`.

---

### Visual Guide:

Here's a visual representation of how these options work:

```jsx
<div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100px", border: "1px solid black" }}>
    <div style={{ width: "50px", height: "50px", backgroundColor: "red" }}></div>
    <div style={{ width: "50px", height: "50px", backgroundColor: "green", marginLeft: "10px" }}></div>
    <div style={{ width: "50px", height: "50px", backgroundColor: "blue", marginLeft: "10px" }}></div>
</div>
```

Try changing `justify-content` to see how the items behave in a horizontal line!

### Complete Example:

```jsx
function FlexExample() {
    return (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "100px", border: "1px solid black" }}>
            <div style={{ width: "50px", height: "50px", backgroundColor: "red" }}>Item 1</div>
            <div style={{ width: "50px", height: "50px", backgroundColor: "green" }}>Item 2</div>
            <div style={{ width: "50px", height: "50px", backgroundColor: "blue" }}>Item 3</div>
        </div>
    );
}
```

This example uses `justify-content: space-between`, but you can easily swap it for other options like `center`, `space-around`, etc., to see how they work.