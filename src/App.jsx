import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LoginUser from "./components/Auth/UserLogin/Login";
import SignUpUser from './components/Auth/SignupUser/SignupUser';
import CivilLogin from './components/Auth/CivilLogin/CivilLogin'; // Import the CivilLogin component

function App() {
  const location = useLocation(); // Get the current location

  // Check if the current route is the login, signup, or civillogin page
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup' || location.pathname === '/CivilLogin';

  return (
    <div className="App">
      {/* Conditionally render the Header and Footer if not on the login, signup, or civillogin page */}
      {!isAuthPage && <Header />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginUser />} />
        <Route path="/signup" element={<SignUpUser />} />
        <Route path="/civillogin" element={<CivilLogin />} /> {/* Add the CivilLogin route */}
      </Routes>
      
      {!isAuthPage && <Footer />}
    </div>
  );
}

// Wrap the App component with the Router
function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;