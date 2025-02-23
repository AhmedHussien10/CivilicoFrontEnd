import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LoginUser from "./components/Auth/UserLogin/Login";
import SignUpUser from './components/Auth/SignupUser/SignupUser';
import CivilLogin from './components/Auth/CivilLogin/CivilLogin'; // Import the CivilLogin component
import CivilSignup from './components/Auth/CivilSignup/CivilSignup'; // Import the CivilSignup component

function App() {
  const location = useLocation(); // Get the current location

  // Check if the current route is the login, signup, civillogin, or civilSignup page
  const isAuthPage = location.pathname === '/login' || 
                     location.pathname === '/signup' || 
                     location.pathname === '/civillogin' || 
                     location.pathname === '/CivilSignUp';

  return (
    <div className="App">
      {/* Conditionally render the Header and Footer if not on the login, signup, civillogin, or civilSignup page */}
      {!isAuthPage && <Header />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginUser />} />
        <Route path="/signup" element={<SignUpUser />} />
        <Route path="/civillogin" element={<CivilLogin />} /> 
        <Route path="/CivilSignUp" element={<CivilSignup />} /> {/* Fixed typo and added closing bracket */}
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