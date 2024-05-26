import HomePage from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Cars from "./components/cars/Cars";
import Users from "./components/users/Users";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin/cars" element={<Cars />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
