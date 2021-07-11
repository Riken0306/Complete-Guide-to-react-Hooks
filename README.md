# React Hooks

## useState - state

## useEffect - side Effects

&rarr; The Effect Hook lets you perform side effects in functional components

&rarr; It is a close replacement of componentDidMount, componentDidUpdate and componentWillUnmount

&rarr; useEffect runs every time the component renders

&rarr; useEffect can runned Conditionally by adding Dependency list

- Dependency list is an array which contains variables, on change of thier state useEffect need to be executed

&rarr; By passing empty Dependency array useEffect can be called only once

&rarr; useEffect hook has a cleanup function that is used to remove subscrption of some event-handlers which are particularly unmounted

&rarr; Be careful while specifying empty dependency list. Previous state of variable can be used to encounter this issue

&rarr; Data can be fetched from api using axios

- In useEffect axios.get(URL).then(//success).catch(//error) must be handled
- Use this data from .JSON file and use as per your requirement by manuplating dependency list and cleanup function

## useContext - Context API

&rarr; Context provides a way to pass data through the component tree without having to pass props down manually at every level

## useReducer - reducer functions

&rarr; useReducer is hook that is used for state management

- It is alternative to useState. Rather useState is build using useReducer

&rarr; reduce vs useReducer

| reduce in Javascript                          | useReducer in React                                    |
| --------------------------------------------- | ------------------------------------------------------ |
| array.reduce(reducer, initialValue)           | useReducer(reducer, initialState)                      |
| singleValue = reducer(accumulator, itemValue) | newState reducer(currentState, action)                 |
| reduce method returns a single value          | usereducer returns pair of values [newstate, dispatch] |

### useState vs useReducer

| Scenario                        | useState                | useReducer             |
| ------------------------------- | ----------------------- | ---------------------- |
| **Type of State**               | Number, String, Boolean | Object or array        |
| **Number of state Transitions** | One or Two              | Too many               |
| **Related state Transition**    | No                      | Yes                    |
| **Business Logic**              | No Business Logic       | Complex Business Logic |
| **Local vs global**             | Local                   | Global                 |

## useCallback Hook

**What?**
&rarr; useCallback is a hook that will return a **_memorized version of callback function_** that only changes if one of the dependencies has changed

**Why?**
&rarr; It is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders

**How?**
&rarr; import useCallback hook which accepts 2 parameters first arrow function and second is dependency list. By this we must know what is dependency list and why use it.

## useMemo Hook

&rarr; useMemo returns **_memoized version of value returned by a function_** that only changes if one of the dependencies has changed

### Difference between useCallback and and useMemo

- In other words, useCallback gives you referential equality between renders for functions. And useMemo gives you referential equality between renders for values.

- useCallback and useMemo both expect a function and an array of dependencies. The difference is that useCallback returns its function when the dependencies change while useMemo calls its function and returns the result.

- Since JavaScript has first-class functions, useCallback(fn, deps) is equivalent to useMemo(() => fn, deps).

## Custom Hooks

&rarr; A Custom Hook is basically a Javascript function whose name starts with "use"
&rarr; A custom hook can also call other hook if required
