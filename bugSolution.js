The solution involves correctly nesting the component using `useParams` within a route that defines the parameters. Here's how to fix the example:

```javascript
import { useParams } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

function MyComponent() {
  const { id } = useParams();
  console.log(id); // Now returns the correct parameter value
  return <div>My Component: {id}</div>;
}

function App(){
  return(
    <Routes>
      <Route path="/:id" element={<MyComponent/>}/>
    </Routes>
  )
}

export default App;
```

By nesting `MyComponent` inside a `<Route>` with a path containing `:id`, the `useParams` hook correctly obtains the parameter from the URL.  The `App` component now utilizes `Routes` for route nesting in React Router v6.