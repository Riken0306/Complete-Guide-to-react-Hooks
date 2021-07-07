import "./App.css";
import DataFetching from "./hooks/useEffect/DataFetching";
import HookCounterOne from "./hooks/useEffect/HookCounterOne";
import HookMouse from "./hooks/useEffect/HookMouse";
import IntervalHookCounter from "./hooks/useEffect/IntervalHookCounter";
import MouseContainer from "./hooks/useEffect/MouseContainer";

function App() {
  return (
    <div className="App">
      {/* <HookCounterOne /> */}
      {/* <HookMouse /> */}
      {/* <MouseContainer /> */}
      {/* <IntervalHookCounter /> */}
      <DataFetching />
    </div>
  );
}

export default App;
