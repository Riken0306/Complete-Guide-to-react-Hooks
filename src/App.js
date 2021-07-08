import "./App.css";
import React from "react";
import ComponentC from "./hooks/useContext/ComponentC";
import DataFetching from "./hooks/useEffect/DataFetching";
import HookCounterOne from "./hooks/useEffect/HookCounterOne";
import HookMouse from "./hooks/useEffect/HookMouse";
import IntervalHookCounter from "./hooks/useEffect/IntervalHookCounter";
import MouseContainer from "./hooks/useEffect/MouseContainer";
import CounterOne from "./hooks/useReducer/CounterOne";
import CounterTwo from "./hooks/useReducer/CounterTwo";
import CounterThree from "./hooks/useReducer/CounterThree";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
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
      <CounterThree />
    </div>
  );
}

export default App;
