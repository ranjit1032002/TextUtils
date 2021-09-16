
import "./App.css";
import About from "./components/About";
import Navbar from './components/Navbar';
import React, { useState } from 'react'
import TextForm from './components/TextForm';
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
 const [alert, setAlert] = useState(null)
  const [btntext, setBtnText] = useState("Enable Dark Mode")
  const [mode, setmode] = useState('light')
  const showAlert=(message,type)=>
  {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>
    {
      setAlert(null);
    },1500);
  }
  const toggleMode=()=>
  {
    if(mode==='light')
    {
      setmode('dark');
      setBtnText("Enable Light Mode");
      document.body.style.backgroundColor='#1E2C2F';
      document.body.style.color="#fff";
      showAlert("Dark Mode Enabled","success")

    }
    else
    {
      setmode('light');
      setBtnText("Enable Dark Mode") ;
      document.body.style.backgroundColor='white';
      document.body.style.color="black";
      showAlert("Light Mode Enabled","success")
      
    }
  }
  return (
    <>
     <Router>
      <Navbar title="TextUtils" AboutText="About TextUtils" mode={mode} toggleMode={toggleMode} btntext={btntext}  />
      <Alert alert={alert} />
      <div className="container">
      <Switch>
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
          <Route exact path="/">
          <TextForm heading="Try TextUtils - Word Counter,Character Counter,Remove Extra Spaces" mode={mode} showAlert={showAlert}/>
          </Route>
        </Switch>
      </div>
      </Router>
     </>
    
  );
}

export default App;
