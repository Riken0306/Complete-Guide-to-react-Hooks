import "./App.css";
import React, { useReducer } from "react";

// import ComponentC from "./hooks/useContext/ComponentC";
// import DataFetching from "./hooks/useEffect/DataFetching";
// import HookCounterOne from "./hooks/useEffect/HookCounterOne";
// import HookMouse from "./hooks/useEffect/HookMouse";
// import IntervalHookCounter from "./hooks/useEffect/IntervalHookCounter";
// import MouseContainer from "./hooks/useEffect/MouseContainer";
// import CounterOne from "./hooks/useReducer/CounterOne";
// import CounterTwo from "./hooks/useReducer/CounterTwo";
// import CounterThree from "./hooks/useReducer/CounterThree";
// import ComponentA from "./hooks/useReducer/with_useContext/ComponentA";
// import ComponentB from "./hooks/useReducer/with_useContext/ComponentB";
// import ComponentC from "./hooks/useReducer/with_useContext/ComponentC";

import DataFetchingOne from "./hooks/useReducer/DataFetching/DataFetchingOne";
import DataFetchingTwo from "./hooks/useReducer/DataFetching/DataFetchingTwo";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
export const CountContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      {/* <HookCounterOne /> */}
      {/* <HookMouse /> */}
      {/* <MouseContainer /> */}
      {/* <IntervalHookCounter /> */}
      {/* <DataFetching /> */}
      {/* <UserContext.Provider value={"Riken"}>
        <ChannelContext.Provider value={"Abhiyanta"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/* <CounterOne /> */}
      {/* <CounterTwo /> */}
      {/* <CounterThree /> */}

      {/* <CountContext.Provider
        value={{ countState: count, countDispatch: dispatch }}
      >
        Count - {count}
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </CountContext.Provider> */}

      {/* <DataFetchingOne /> */}
      <DataFetchingTwo />
    </div>
  );
}

export default App;
