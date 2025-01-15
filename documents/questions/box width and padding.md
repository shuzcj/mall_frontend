The issue with your `MyOrder` function not displaying anything is due to JavaScript's automatic semicolon insertion. In JavaScript, if a `return` statement is followed by a new line without any other token, a semicolon is automatically inserted right after the `return`, which causes the function to return `undefined` instead of the JSX code you intended to render.

Here's the problematic part of your code:
```javascript
return
    <div style={{margin:20}} key={index}>
        <SettlementCard  cardInfo={cardInfo} />
    </div>
```

Because there's a line break right after `return`, JavaScript interprets this as `return;`, which ends the function execution and returns `undefined`, thus nothing is rendered.

To fix this, you need to ensure that the JSX immediately follows the `return` statement, like so:
```javascript
return (
    <div>
        {
            [1,2,3,4,5].map((item,index) => (
                <div style={{margin:20}} key={index}>
                    <SettlementCard cardInfo={cardInfo} />
                </div>
            ))
        }
    </div>
);
```

This code modification ensures that JavaScript doesn't insert a semicolon prematurely and will render your components as expected.

### so the width default is content width?

Yes, exactly! By default, the `width` property in CSS applies only to the **content width** of an element, excluding any padding, border, or margin.

Here’s the breakdown of how it works by default:

### Default Box Model (Content Box)
When the `box-sizing` is set to `content-box` (the default value), the `width` only affects the content area. This means that the padding and border are **not included** in the width.

So, if you set a `div`'s `width` to 1000px, the total width (i.e., the actual width including padding and border) would be:

```
Total Width = Content Width (1000px) + Left Padding + Right Padding + Left Border + Right Border
```

In your case, if the padding is `20px` on each side and the border is `1px` on each side, the total width would be:

```
Total Width = 1000px + 20px (padding-left) + 20px (padding-right) + 1px (border-left) + 1px (border-right) = 1042px
```

### Box Model with `box-sizing: border-box`
If you use `box-sizing: border-box`, the `width` will include the padding and border. In this case, if you set `width: 1000px`, the **total width** (content + padding + border) will be exactly 1000px.

Thus, the padding and border will be contained **within** the 1000px width.

### Summary:
- **Default (`box-sizing: content-box`)**: `width` only affects the content area, padding and border add extra width.
- **With `box-sizing: border-box`**: `width` includes content, padding, and border, so the total width is the value you specify.

By setting `box-sizing: border-box`, you make layout control more intuitive, especially when you're trying to set the total width to a specific value.