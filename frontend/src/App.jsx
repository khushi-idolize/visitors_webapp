import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LoginPage from "./pages/Login/LoginPage"
import VisitorLogin from './pages/Visitor Login/VisitorLogin'
import Dashboard from './pages/Dashboard/index'
const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<LoginPage/>} />
        <Route path = "/visitor-login" element = {<VisitorLogin/>}></Route>
        <Route path = "/dashboard" element = {<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;