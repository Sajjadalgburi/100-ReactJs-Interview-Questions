/**
 * Question 1: What is ReactJS?
 * Answer:
 * ReactJS is an open-source library for building user interfaces, primarily through the use of components. React is mainly used for Single Page Applications (SPAs).
 * Difficulty: Easy (Junior)
 *
 * Question 2: What are some features of ReactJS?
 * Answer:
 * - **VDOM (Virtual DOM):** A virtual DOM is essentially a lightweight copy (cache) of the original DOM (Document Object Model) - a tree-like structure with nodes representing elements.
 * - **Reusable Components:** React is a component-based UI library, meaning you can define a component and reuse it throughout your SPA.
 * - **JSX (JavaScript XML):** Allows developers to conveniently write JavaScript code within HTML elements using `{}`.
 * - **High Performance:** ReactJS renders Single Page Applications efficiently. The VDOM ensures that only necessary updates are made, saving on performance costs.
 * Difficulty: Medium (Mid-Senior)
 *
 * Question 3: What is a virtual DOM, and how does it work?
 * Answer:
 * A virtual DOM is a programming concept where a virtual representation of the real DOM is kept in memory and synced with the real DOM through a process called reconciliation. React uses this to optimize rendering by only updating parts of the UI that have changed.
 * Difficulty: Medium (Mid-Senior)
 *
 * Question 4: What are components in React?
 * Answer:
 * Components are the building blocks of React applications. They are pieces of the UI (User Interface) that can be imported and used anywhere in the codebase. There are two main types of components:
 * - **Functional Components**
 * - **Class-Based Components**
 * Difficulty: Easy (Junior)
 *
 * Question 5: What is JSX?
 * Answer:
 * JSX (JavaScript XML) allows developers to write JavaScript code within HTML elements using `{}`. It’s a syntax extension for JavaScript and provides a way to structure component rendering in React.
 * Difficulty: Easy (Junior)
 *
 * Question 6: How can you export and import components in React?
 * Answer:
 * Components can be exported using the `export` keyword and imported using the `import` keyword. Example:
 * ```javascript
 * export default MyComponent;
 * import MyComponent from './MyComponent';
 * ```
 * Difficulty: Easy (Junior)
 *
 * Question 7: How can you use nested components in React?
 * Answer:
 * Nested components in React are components used inside other components. You can achieve this by importing a component into another and using it within the JSX of that component.
 * Difficulty: Easy (Junior)
 *
 * Question 8: How do you handle events in React?
 * Answer:
 * Events in React are handled similarly to standard DOM events but with some syntactic differences. React events are named using camelCase, and you pass a function as the event handler.
 * Example:
 * ```javascript
 * <button onClick={handleClick}>Click me</button>
 * ```
 * Difficulty: Easy (Junior)
 *
 * Question 9: What is state in React?
 * Answer:
 * State is an object that represents parts of the application that can change. In React, the state is often referred to as the UI, because as the UI changes, these changes need to be reflected in the real DOM.
 * Difficulty: Easy (Junior)
 *
 * Question 10: What is a setState callback in React?
 * Answer:
 * `setState` is a method of the `useState` hook or class components in React that allows developers to update the state of the application. `setState` can accept a callback function, which is executed after the state has been updated.
 * Difficulty: Medium (Mid-Senior)
 *
 * Question 11: What are props in ReactJS?
 * Answer:
 * Props in ReactJS are values or data passed into components. They allow for improved reusability of components because you can define a skeletal structure for a component and insert different values based on your application needs.
 * Difficulty: Easy (Junior)
 *
 * Question 12: What is the difference between props and state in React?
 * Answer:
 * Props are read-only data passed from a parent to a child component, while state is a local data store that can be modified within a component. Props allow data to be passed down the component tree, whereas state manages the internal data of a component.
 * Difficulty: Medium (Mid-Senior)
 *
 * Question 13: What is lifting state up in React?
 * Answer:
 * Lifting state up is the process of passing state from a child component back up to the parent component, allowing multiple child components to share and synchronize state.
 * Difficulty: Medium (Mid-Senior)
 *
 * Question 14: What are default props in React?
 * Answer:
 * Default props are default values assigned to props when a parent component does not specify them. They provide a fallback value for props if none are provided by the parent.
 * Difficulty: Easy (Junior)
 *
 * Question 15: What are fragments in ReactJS?
 * Answer:
 * Fragments are a way to group a list of children without adding extra nodes to the DOM. They allow you to wrap multiple elements without creating additional elements in the DOM, unlike using a `div`.
 * Example:
 * ```javascript
 * <React.Fragment>
 *   <ChildComponent />
 *   <AnotherChildComponent />
 * </React.Fragment>
 * ```
 * Difficulty: Medium (Mid-Senior)
 *
 * Question 16: What is the context API in React?
 * Answer:
 * The Context API is a React feature that allows you to manage state globally and pass data through the component tree without having to pass props down manually at every level.
 * Difficulty: Medium (Mid-Senior)
 *
 * Question 17: What are React hooks?
 * Answer:
 * React hooks are functions that let you use state and other React features in functional components. Some of the most common hooks are `useState`, `useEffect`, and `useContext`.
 * Difficulty: Easy (Junior)
 *
 * Question 18: What is `useEffect` hook in React?
 * Answer:
 * The `useEffect` hook allows you to perform side effects in your functional components, such as data fetching, subscriptions, or manually changing the DOM. It can be used to mimic lifecycle methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` in class components.
 * Difficulty: Medium (Mid-Senior)
 *
 * Question 19: What is the difference between controlled and uncontrolled components in React?
 * Answer:
 * Controlled components are those where form data is handled by the React component's state. Uncontrolled components manage their own state internally, and React refs are used to access their current values.
 * Difficulty: Medium (Mid-Senior)
 *
 * Question 20: What is prop drilling in React?
 * Answer:
 * Prop drilling is a process in React where you pass data from one component through multiple layers of components to reach the component where it's needed. It often occurs in deep component trees and can lead to less maintainable code.
 * Difficulty: Medium (Mid-Senior)
 *
 * Question 21: What is the difference between `useState` and `useReducer`?
 * Answer:
 * `useState` is used for managing local state in functional components. `useReducer` is used for more complex state logic where the next state depends on the previous state. It’s similar to Redux in that it uses a reducer function to determine the next state.
 * Difficulty: Medium (Mid-Senior)
 *
 * Question 22: What are higher-order components (HOCs) in React?
 * Answer:
 * Higher-order components are functions that take a component and return a new component with added props or functionality. They are used for reusing component logic.
 * Difficulty: Medium (Mid-Senior)
 *
 * Question 23: What is reconciliation in React?
 * Answer:
 * Reconciliation is the process by which React updates the DOM with the minimum number of changes. It compares the new virtual DOM with the previous one and updates only the parts that have changed.
 * Difficulty: Hard (Senior)
 *
 * Question 24: How does React handle forms?
 * Answer:
 * React handles forms using controlled components where form data is kept in the component state and updated with each user input. You can also use uncontrolled components, but controlled components offer more flexibility and control over form data.
 * Difficulty: Medium (Mid-Senior)
 *
 * Question 25: What is React Router?
 * Answer:
 * React Router is a standard library for routing in React. It enables the navigation among different components, changing the browser URL and keeping the UI in sync with the URL.
 * Difficulty: Easy (Junior)
 *
 * Question 26: What is lazy loading in React?
 * Answer:
 * Lazy loading is a technique in React to defer the loading of components until they are needed. This improves the performance of the application by reducing the initial load time. React supports lazy loading with `React.lazy` and `Suspense`.
 * Difficulty: Medium (Mid-Senior)
 *
 * Question 27: What is code splitting in React?
 * Answer:
 * Code splitting is a feature supported by bundlers like Webpack that splits the application code into smaller bundles that can be loaded on demand. React supports code splitting using `React.lazy` and dynamic imports.
 * Difficulty: Medium (Mid-Senior)
 *
 * Question 28: What is the purpose of `key` props in React?
 * Answer:
 * `Key` props are used to identify which items in a list have changed, been added, or removed. They help React optimize rendering by reusing existing elements instead of re-rendering them.
 * Difficulty: Easy (Junior)
 *
 * Question 29: How do you optimize performance in a React application?
 * Answer:
 * Performance in a React application can be optimized through various techniques such as:
 * - Memoization using `React.memo` and `useMemo`.
 * - Lazy loading components using `React.lazy`.
 * - Code splitting.
 * - Avoiding unnecessary re-renders by using `PureComponent` or `shouldComponentUpdate`.
 * Difficulty: Hard (Senior)
 *
 * Question 30: What is the difference between React and React Native?
 * Answer:
 * React is a library for building web applications, while React Native is a framework for building native mobile applications using React. React Native uses native components instead of web components like `div` and `span`.
 * Difficulty: Medium (Mid-Senior)
 *
 * Question 31: How does server-side rendering (SSR) work in React?
 * Answer:
 * Server-side rendering is a technique where the HTML is generated on the server and sent to the client, allowing for faster initial load times and better SEO. React supports SSR through frameworks like Next.js.
 * Difficulty: Hard (Senior)
 *
 * Question 32: What is Redux, and how does it integrate with React?
 * Answer:
 * Redux is a state management library that centralizes the application's state and logic. It integrates with React through the `react-redux` library, which provides `Provider` and `connect` functions to connect React components to the Redux store.
 * Difficulty: Hard (Senior)
 *
 * Question 33: What are React portals?
 * Answer:
 * React portals provide a way to render children into a DOM node that exists outside the DOM hierarchy of the parent component. This is useful for creating modals, tooltips, and other UI elements that need to appear above other content.
 * Difficulty: Medium (Mid-Senior)
 *
 * Question 34: What is React Suspense?
 * Answer:
 * React Suspense is a feature that allows you to defer rendering part of your component tree until some condition is met, such as data loading. It works in tandem with React's `lazy` loading and other asynchronous rendering techniques.
 * Difficulty: Medium (Mid-Senior)
 *
 * Question 35: What is `useMemo` and when would you use it?
 * Answer:
 * `useMemo` is a React hook that memoizes the result of a computation, re-computing it only when its dependencies change. It’s used to optimize performance by avoiding unnecessary recalculations in functional components.
 * Difficulty: Medium (Mid-Senior)
 *
 * Question 36: What is `useCallback` and how is it different from `useMemo`?
 * Answer:
 * `useCallback` is a React hook that returns a memoized version of a callback function, preventing it from being re-created on every render. It’s used to optimize performance by preventing unnecessary re-renders in child components.
 * Difficulty: Medium (Mid-Senior)
 *
 * Question 37: How does React's `ref` work, and what are its use cases?
 * Answer:
 * `ref` is an attribute that provides a way to access the underlying DOM node or React element created in the render method. It’s often used for accessing DOM elements directly, managing focus, text selection, or integrating with third-party libraries.
 * Difficulty: Medium (Mid-Senior)
 *
 * Question 38: What is the purpose of `React.forwardRef`?
 * Answer:
 * `React.forwardRef` is a function that lets you pass a ref through a component to one of its children. It’s useful for creating reusable components that need to expose a ref to a parent component.
 * Difficulty: Hard (Senior)
 *
 * Question 39: How do you handle errors in React components?
 * Answer:
 * Errors in React components can be handled using Error Boundaries. These are special components that catch JavaScript errors in their child component tree, log those errors, and display a fallback UI.
 * Difficulty: Medium (Mid-Senior)
 *
 * Question 40: What is the purpose of `shouldComponentUpdate` lifecycle method?
 * Answer:
 * The `shouldComponentUpdate` lifecycle method allows you to control whether a component should re-render when its state or props change. By returning `false`, you can prevent unnecessary re-renders, improving performance.
 * Difficulty: Medium (Mid-Senior)
 *
 * Question 41: What is the difference between `componentDidMount` and `componentDidUpdate`?
 * Answer:
 * `componentDidMount` is invoked immediately after a component is mounted (inserted into the tree). `componentDidUpdate` is invoked immediately after updating occurs. Both methods are used for handling side effects.
 * Difficulty: Medium (Mid-Senior)
 *
 * Question 42: What is `getDerivedStateFromProps` lifecycle method?
 * Answer:
 * `getDerivedStateFromProps` is a static lifecycle method that is invoked right before calling the render method, both on the initial mount and on subsequent updates. It allows the state to be updated in response to changes in props.
 * Difficulty: Hard (Senior)
 *
 * Question 43: What is React Fiber?
 * Answer:
 * React Fiber is a reimplementation of React’s core algorithm that allows for incremental rendering. It breaks down rendering work into units that can be spread out over multiple frames, improving performance for complex updates.
 * Difficulty: Hard (Senior)
 *
 * Question 44: What is the difference between `useState` and `useRef`?
 * Answer:
 * `useState` causes a re-render of the component when the state changes, while `useRef` persists values across renders without causing re-renders. `useRef` is commonly used for accessing DOM elements and storing mutable values.
 * Difficulty: Medium (Mid-Senior)
 *
 * Question 45: What is the role of `React.StrictMode`?
 * Answer:
 * `React.StrictMode` is a tool for highlighting potential problems in an application. It activates additional checks and warnings for its descendants, helping you write more robust and error-free code.
 * Difficulty: Medium (Mid-Senior)
 *
 * Question 46: How does `React.lazy` differ from traditional component loading?
 * Answer:
 * `React.lazy` allows components to be loaded asynchronously, reducing the initial load time by loading components only when they are needed. This is different from traditional component loading, where all components are loaded upfront.
 * Difficulty: Medium (Mid-Senior)
 *
 * Question 47: What is the significance of the `key` prop in lists?
 * Answer:
 * The `key` prop is used by React to identify which items in a list have changed, been added, or removed. It helps React optimize rendering by reusing existing elements, rather than re-rendering the entire list.
 * Difficulty: Easy (Junior)
 *
 * Question 48: What is React's concurrent mode?
 * Answer:
 * React’s Concurrent Mode is a set of new features that help React apps stay responsive and gracefully adjust to the user’s device capabilities and network speed. It allows React to interrupt long-running tasks so that the UI can be updated immediately.
 * Difficulty: Hard (Senior)
 *
 * Question 49: How do you implement a theme switcher in React?
 * Answer:
 * A theme switcher can be implemented using React state or context to manage the current theme (light/dark). You can apply conditional CSS classes based on the theme value and use localStorage to persist the user's preference across sessions.
 * Difficulty: Medium (Mid-Senior)
 *
 * Question 50: What is React's Profiler API?
 * Answer:
 * React’s Profiler API helps you measure the performance of your React application. It can be used to identify components that take a long time to render and optimize them to improve performance.
 * Difficulty: Hard (Senior)
 */
