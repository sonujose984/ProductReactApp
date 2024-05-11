import logo from './logo.svg';
import './App.css';
import Login from './Component/Login.jsx';
import ProductPage from './Component/ProductPage.jsx';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="*" element={<Navigate to="/login" />} /> {/* Fallback to login page for unknown routes */}
      </Routes>
    </Router>
  );
}

export default App;
