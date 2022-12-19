import FormHeading from "./components/FormHeading";
import FormBody from "./components/FormBody";

import "./App.css";
function App() {
  const sendHeading = ["props", "state"];
  return (
    <div className="App">
      <FormHeading firstSend={sendHeading[0]} secondSend={sendHeading[1]} />
      <FormBody />
    </div>
  );
}

export default App;
