# Higher Order Component (HOC) Pattern

## What is a HOC?

A Higher Order Component is a function that takes a component and returns a new enhanced component with additional functionality.

## Pattern Structure

```
HOC = (Component) => EnhancedComponent
```

## Files in this Example

### 1. `withLoading.jsx`

- The HOC that adds loading functionality
- Takes any component and adds loading state handling

### 2. `UserList.jsx`

- A simple component that displays user data
- Doesn't know anything about loading states

### 3. `HOCExample.jsx`

- Demonstrates how to use the HOC
- Shows the complete usage with state management

## How to Use This Example

1. Import the HOC and your component:

```jsx
import withLoading from "./withLoading";
import UserList from "./UserList";
```

2. Wrap your component with the HOC:

```jsx
const UserListWithLoading = withLoading(UserList);
```

3. Use the enhanced component:

```jsx
<UserListWithLoading isLoading={isLoading} users={users} />
```

## Key Benefits

✅ **Reusability**: Use the same HOC with multiple components
✅ **Separation of Concerns**: Keep loading logic separate
✅ **No Modification**: Original component stays unchanged
✅ **Composability**: Can stack multiple HOCs

## When to Use HOCs

- Adding common functionality to multiple components
- Cross-cutting concerns (auth, logging, loading)
- Props manipulation or injection
- Conditional rendering based on props

## Modern Alternatives

While HOCs are still valid, modern React often uses:

- Custom Hooks (for logic reuse)
- Render Props
- Compound Components
