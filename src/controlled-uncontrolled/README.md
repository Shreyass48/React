# Controlled vs Uncontrolled Components

## What are Controlled Components?

Components where React state controls the form data. The component re-renders on every input change.

## What are Uncontrolled Components?

Components where the DOM itself handles the form data. React accesses values using refs when needed.

## Pattern Structure

### Controlled

```jsx
const [value, setValue] = useState("");

<input value={value} onChange={(e) => setValue(e.target.value)} />;
```

### Uncontrolled

```jsx
const inputRef = useRef(null);

<input ref={inputRef} defaultValue="initial" />;

// Access: inputRef.current.value
```

## Files in this Example

### 1. `ControlledForm.jsx`

- Form with React state controlling inputs
- Real-time validation
- Live character count
- Uses `value` + `onChange`

### 2. `UncontrolledForm.jsx`

- Form with DOM handling state
- Uses refs to access values
- Uses `defaultValue` for initial state
- Fewer re-renders

### 3. `ControlledUncontrolledExample.jsx`

- Side-by-side comparison
- Comparison table
- Usage guidelines
- Best practices

## Key Differences

| Aspect         | Controlled      | Uncontrolled |
| -------------- | --------------- | ------------ |
| **State**      | React state     | DOM          |
| **Access**     | value prop      | refs         |
| **Initial**    | useState        | defaultValue |
| **Updates**    | Every keystroke | On demand    |
| **Validation** | Real-time       | On submit    |
| **Re-renders** | High            | Low          |

## When to Use Controlled

✅ Need real-time validation
✅ Format input as user types
✅ Conditional submit button
✅ Dynamic form fields
✅ Enforce input patterns
✅ Instant feedback

### Example Use Cases

- Search with instant results
- Password strength meter
- Credit card formatting
- Character limit enforcement
- Dependent field validation

## When to Use Uncontrolled

✅ Simple forms
✅ File inputs (required)
✅ Non-React library integration
✅ Performance-critical
✅ Quick prototypes
✅ Legacy integration

### Example Use Cases

- Basic contact forms
- File upload forms
- Quick feedback forms
- Newsletter signup
- Login forms (simple)

## Code Examples

### Controlled Component

```jsx
import { useState } from "react";

function ControlledInput() {
  const [text, setText] = useState("");

  return <input value={text} onChange={(e) => setText(e.target.value)} />;
}
```

### Uncontrolled Component

```jsx
import { useRef } from "react";

function UncontrolledInput() {
  const inputRef = useRef(null);

  const handleSubmit = () => {
    console.log(inputRef.current.value);
  };

  return (
    <>
      <input ref={inputRef} defaultValue="Hello" />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}
```

## Common Mistakes

❌ **Mixing both patterns on same input**

```jsx
// DON'T DO THIS
<input value={value} ref={inputRef} />
```

❌ **Trying to control file inputs**

```jsx
// File inputs must be uncontrolled
<input type="file" ref={fileRef} />
```

❌ **Not using defaultValue for uncontrolled**

```jsx
// Wrong - this makes it controlled
<input ref={inputRef} value="initial" />

// Correct - use defaultValue
<input ref={inputRef} defaultValue="initial" />
```

## Form Libraries

For complex forms, consider using libraries:

- **React Hook Form**: Performance-focused, uncontrolled by default
- **Formik**: Popular, controlled approach
- **Final Form**: Framework agnostic
- **React Final Form**: React-specific version

## Performance Considerations

### Controlled Components

- Re-render on every keystroke
- Can impact performance with many fields
- Use `useMemo` / `useCallback` to optimize

### Uncontrolled Components

- Minimal re-renders
- Better for large forms
- Less React overhead

## Best Practices

1. **Default to Controlled**: React recommends this approach
2. **File Inputs**: Always uncontrolled
3. **Don't Mix**: Pick one pattern per input
4. **Use Libraries**: For complex forms with many fields
5. **Optimize**: Use debouncing for expensive operations
6. **Validation**: Controlled makes this easier
7. **Testing**: Controlled components are easier to test

## Migration Strategy

### Uncontrolled → Controlled

```jsx
// Before
<input ref={inputRef} defaultValue="text" />;

// After
const [value, setValue] = useState("text");
<input value={value} onChange={(e) => setValue(e.target.value)} />;
```

### Controlled → Uncontrolled

```jsx
// Before
<input value={value} onChange={e => setValue(e.target.value)} />

// After
<input ref={inputRef} defaultValue={value} />
```
