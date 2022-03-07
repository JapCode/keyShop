import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../containers/Layout';
import Home from '../pages/Home';
import Orders from '../pages/Orders';
import Login from '../pages/Login';
import Register from '../pages/Register';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* filters */}
          <Route exact path="/" element={<Home filter="Home" />} />
          <Route exact path="/mechanic" element={<Home filter="Mechanic" />} />
          <Route exact path="/corne" element={<Home filter="Corne" />} />
          <Route exact path="/hotswap" element={<Home filter="Hotswap" />} />
          <Route exact path="/assembled" element={<Home filter="Assembled" />} />
          {/* others */}
          <Route exact path="/myOrders" element={<Orders />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
