import "./App.css";
import HookCounterOne from "./hooks/useEffect/HookCounterOne";
import HookMouse from "./hooks/useEffect/HookMouse";
import MouseContainer from "./hooks/useEffect/MouseContainer";

function App() {
  return (
    <div className="App">
      {/* <HookCounterOne /> */}
      {/* <HookMouse /> */}
      <MouseContainer />
    </div>
  );
}

export default App;
