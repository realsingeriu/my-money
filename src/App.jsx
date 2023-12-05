import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import Navbar from "./Components/Navbar";
import { useAuthContext } from "./hooks/useAuthContext";
import Footer from "./pages/footer/footer";

function App() {
  const { authIsReady, user } = useAuthContext();
  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Routes>
            {/* 네비게이션 가드 : 인증된 유저와 안된유저에 따라서 페이지 요청시 막기 */}
            <Route
              path="/"
              element={user ? <Home /> : <navigate to="/login" />}
            />
            <Route path="/login" element={!user ? <Login /> : <Home />} />
            <Route path="/signup" element={!user ? <Signup /> : <Home />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      )}
    </div>
  );
}
export default App;
