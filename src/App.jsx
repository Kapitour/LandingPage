import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login"; // Importe o Login.jsx
import Home from "./components/Home"; // Importe o Home.jsx

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Rota para a página inicial */}
        <Route path="/" element={<Home />} />
        {/* Rota para o Login */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
