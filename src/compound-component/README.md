# Compound Component Pattern

## What is a Compound Component?

A pattern where multiple components work together to share an implicit state. The parent component manages state and provides it to child components through Context API.

## Pattern Structure

```
ParentComponent (manages state)
├── SubComponent1 (accesses shared state)
├── SubComponent2 (accesses shared state)
└── SubComponent3 (accesses shared state)
```

## Files in this Example

### 1. `Tab.jsx`

- Main compound component implementation
- Includes: Tab, TabList, TabButton, TabPanels, TabPanel
- Uses Context API to share state

### 2. `CompoundExample.jsx`

- Complete usage example
- Shows how to compose compound components
- Demonstrates flexible structure

## How to Use This Example

1. Import the compound component:

```jsx
import Tab from "./Tab";
```

2. Use the parent and sub-components together:

```jsx
<Tab defaultActive={0}>
  <Tab.TabList>
    <Tab.TabButton index={0}>Tab 1</Tab.TabButton>
    <Tab.TabButton index={1}>Tab 2</Tab.TabButton>
  </Tab.TabList>

  <Tab.TabPanels>
    <Tab.TabPanel index={0}>Content 1</Tab.TabPanel>
    <Tab.TabPanel index={1}>Content 2</Tab.TabPanel>
  </Tab.TabPanels>
</Tab>
```

## Key Concepts

### Context API

- Creates shared state between components
- Avoids prop drilling
- Implicit state sharing

### Sub-Components

- Attached to parent component (Tab.TabButton)
- Access shared state via useContext
- Independent but coordinated behavior

## Key Benefits

✅ **Flexible Composition**: Arrange components as needed
✅ **Implicit State**: No manual prop passing
✅ **Clean API**: Intuitive and readable
✅ **Customizable**: Easy to modify structure
✅ **Single Responsibility**: Each component has one job

## When to Use Compound Components

- Building complex UI components (Tabs, Accordions, Menus)
- When sub-components need shared state
- Creating component libraries
- Need flexible, composable APIs
- Avoiding prop drilling

## Real-World Examples

- **React Select**: Dropdown with multiple sub-components
- **Reach UI**: Accessible component libraries
- **Headless UI**: Unstyled, accessible components
- **Material UI**: Complex components like Stepper

## Comparison with Other Patterns

### vs Props Drilling

- ✅ No need to pass props through multiple levels
- ✅ Cleaner component tree

### vs Render Props

- ✅ More intuitive API
- ✅ Better JSX readability

### vs HOC

- ✅ More flexible composition
- ✅ Better TypeScript support
- ✅ Easier to understand component structure
