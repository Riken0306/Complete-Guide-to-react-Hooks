# React Hooks

## useState

## useEffect

&rarr; The Effect Hook lets you perform side effects in functional components.

&rarr; It is a close replacement of componentDidMount, componentDidUpdate and componentWillUnmount.

&rarr; useEffect runs every time the component renders

&rarr; useEffect can runned Conditionally by adding Dependency list.

- Dependency list is an array which contains variables, on change of thier state useEffect need to be executed.

&rarr; By passing empty Dependency array useEffect can be called only once.

&rarr; useEffect hook has a cleanup function that is used to remove subscrption of some event-handlers which are particularly unmounted.
