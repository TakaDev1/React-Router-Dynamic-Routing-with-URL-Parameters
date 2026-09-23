import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Navigation from "./components/Navigation";
import UserProfile from "./pages/UserProfile";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/user/:id" element={<UserProfile />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
