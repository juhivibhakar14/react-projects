import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './components/auth/Welcome';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import SidebarMain from './components/sidebar/SidebarMain';
import MainChat from './components/ChatWindow.jsx/MainChat';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/sidebar" element={<SidebarMain />} />
        <Route path="/MainChat" element={<MainChat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;