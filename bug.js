In React Router Dom v6, a common error occurs when using the `useParams` hook within a component that isn't directly nested within a route defined using the `<Route>` component.  This results in `useParams()` returning `undefined` unexpectedly.  This happens because `useParams` relies on the routing context provided by its parent route.  For example:

```javascript
// Incorrect Usage
import { useParams } from 'react-router-dom';

function MyComponent() {
  const { id } = useParams();
  console.log(id); // Returns undefined if not nested correctly
  return <div>My Component</div>;
}

export default MyComponent;
```

This `MyComponent` will not correctly obtain parameters unless wrapped within a `<Route>` component that defines a route path containing parameters.