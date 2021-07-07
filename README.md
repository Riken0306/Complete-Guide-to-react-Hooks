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

&rarr; Be careful while specifying empty dependency list. Previous state of variable can be used to encounter this issue.

&rarr; Data can be fetched in using axios.

- In useEffect axios.get(URL).then(//success).catch(//error) must be handled
- Use this data from .JSON file and use as per your requirement by manuplating dependency list and cleanup function
