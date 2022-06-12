import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home'
import { useState } from 'react';


function App() {
  const [isLoading,setLoading] = useState(true);
  const spinner = document.getElementById('spinner');
  if(spinner){
    setTimeout(()=>{
      spinner.style.display = 'none';
      setLoading(false);
    },2000)
  }

  return (
      !isLoading && (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
        </Routes>
      </Router>
      )
      )
}

export default App;

