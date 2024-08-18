/*36,37,the term "render prop" refers to a technique for sharing code bettwen react components using a prop whose value is a function.
So, the render prop technique allows you to extract shared functionality into a single component and pass different rendering logic as a function (render prop) to customize the output for each use case. This makes your code more reusable and modular.

function DataFetcher({ render }) {
  const data = fetchData(); // Assume this function fetches data
  return render(data);
}

function ComponentA() {
  return (
    <DataFetcher
      render={(data) => (
        <div>
          <h1>Component A</h1>
          <p>{data.title}</p>
        </div>
      )}
    />
  );
}

function ComponentB() {
  return (
    <DataFetcher
      render={(data) => (
        <div>
          <h1>Component B</h1>
          <p>{data.description}</p>
        </div>
      )}
    />
  );
}


 */


/*
38,39,40,Context provides a way to pass data through the component tree without having to pass props down manually at every level.


 */

/*
HOOKS
45.
"Only call hooks at the top level"
Don't call hooks inside loops, conditions, or nested functions
"Only call hooks from React functions"
Call them from within React functional components and not just any regular javascript function
46.
When use previous state to update, use a variable to store the previous state
setCount((prevCount) => prevCount + 1);
47.
When use state with object, use spread operator to update the state
setUser({ ...user, name: 'John' });
48.
When use state with array, use spread operator to update the state
setItems([...items, 'new item']);
49.
useEffect is used to perform side effects in function components
it is similar to componentDidMount, componentDidUpdate, and componentWillUnmount in class components
50.
useEffect runs after every render
useEffect(() => {
    // code here will run after every render
    });
51.
use previousProps and previousState in class component to compare the previous and current values and update the state accordingly
componentDidUpdate(prevProps, prevState) {
    if (prevProps.count !== this.props.count) {
        this.setState({ count: this.props.count });
    }
}

use useEffect with a dependency array to compare the previous and current values and update the state accordingly
useEffect(() => {
    if (prevCount !== count) {
        setPrevCount(count);
    }
}, [count]);
52.
useEffect with an empty dependency array to run only once after the initial render
useEffect(() => {
    // code here will run only once after the initial render
}, []);
53.
when unmount a component, use useEffect with a cleanup function to perform cleanup tasks
useEffect(() => {
    return () => {
        // cleanup tasks here
    };
}, []);

when it comes to class components, use componentWillUnmount to perform cleanup tasks

componentWillUnmount() {
    // cleanup tasks here
}
54.
useEffect with a dependency array to run only when the dependency value changes
useEffect(() => {
    // code here will run only when the count value changes
}, [count]);
55.
useEffect with multiple effects to separate concerns
useEffect(() => {
    // effect 1
}, [count]);
56.
useEffect to fetch data from an API
58.
Context provides a way to pass data through the component tree without having to pass props down manually at every level
59.
useContext hook to consume the context value
60.
const value = useContext(MyContext);
61.
useReducer hook to manage state transitions
useState is built using useReducer
useReducer is usually preferable when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one
useState is simpler and more straightforward
useReducer(reducer, initialState);
reducer(currentState, action);
62.
useReducer
const [state, dispatch] = useReducer(reducer, initialState);
63.










 */



