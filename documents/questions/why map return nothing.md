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