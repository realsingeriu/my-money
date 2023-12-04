import { BrowserRouter, Route, Router } from "react-router-dom";
import Home from "./pages/home/Home";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Router>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Router>
      </BrowserRouter>
    </div>
  );
}
export default App;
