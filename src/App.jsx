import './App.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import AdmissionForm from './pages/AdmissionForm';
import Profile from './pages/Profile';
import Admin from './pages/Admin';
import { StudentProvider } from './contexts/StudentContext';
// import Navbar from './Components/Navbar';
import Home from './pages/Home';


function App() {
  return (
    <div className>
    <Router>
    <StudentProvider>
    {/* <Navbar /> */}

      <Routes>

        <Route path='/' element = {<Home />} />
        <Route path='/AdmissionForm' element = {<AdmissionForm />} />
        <Route path='/Profile/:id' element = {<Profile /> } />
        <Route path='/admin' element = {<Admin/>} />
      </ Routes>
        </ StudentProvider>
      </ Router > 
    
    </div>
  );
}

export default App;
