import React from 'react' 
import {Routes, Route} from 'react-router-dom'

// Components
import Layout from "./components/Layout"
import Login from "./components/Login"
import SignUp from './components/SignUp';
import Home from './components/Home';
import About from './components/About'
import Missing from './components/Missing';
import RequireAuth from './components/RequireAuth';
// Css
import './css/app.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        {/* Public Routes */}
        <Route path="login" element={<Login/>} />
        <Route path="signup" element={<SignUp/>} />
        
        {/* Private Routes */}
        <Route element={<RequireAuth/>} >
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
        </Route>

        {/* Catch All  */}
        <Route path="*" element={<Missing/>} />

      </Route>
    </Routes>
  )
}


export default App;
