import "./App.css";
import NavBar from "./components/organisms/navbar/NavBar.tsx";

import Landing from "./pages/Landing.tsx";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Landing />
    </div>
  );
}

export default App;
