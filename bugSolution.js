```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct: updates only on mount and the interval, no infinite loop
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => clearInterval(interval); // Cleanup function
  }, []);

  return (
    <div>Count: {count}</div>
  );
}

export default MyComponent;
```