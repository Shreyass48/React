# ⚛️ React Intermediate Concepts 2

## 🧠 State Management

### Context API

> Built-in global state

- Avoid prop drilling
- Uses: `createContext`, `Provider`, `useContext`
- Best for: theme, auth, small apps
- ❌ Not for frequent updates (re-renders)

---

### Redux Toolkit (RTK)

> Scalable state management

- Minimal Redux boilerplate
- Predictable state flow

**Core:**

- Slice (state + actions)
- Store (global state)
- Reducer (update logic)
- Dispatch (trigger action)

**Flow:**
Component → dispatch → reducer → store → UI

- Best for: large apps, complex logic

---

### Zustand

> Lightweight state management

- No boilerplate
- Hook-based
- Fast & simple

```js
const useStore = create((set) => ({
  count: 0,
  inc: () => set((s) => ({ count: s.count + 1 })),
}));
```
