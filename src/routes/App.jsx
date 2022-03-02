import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Orders from '../pages/Orders';
import Login from '../pages/Login';
import Register from '../pages/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/myOrders" element={<Orders />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
