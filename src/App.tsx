import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Navigation from "./components/Navigation";
import UserProfile from "./pages/UserProfile";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-800 flex flex-col justify-center items-center">
        <BrowserRouter>
          <h1 className="text-sm">React-Router-Dynamic-Routing-with-URL-Parameters</h1>
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
