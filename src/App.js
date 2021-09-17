import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import Menu from "./components/Menu";

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes />
      </BrowserRouter>
    </>
  );
}

export default App;
