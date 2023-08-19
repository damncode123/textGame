//import logo from './logo.svg';
import React,{useState} from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

//  for accesing the value of name we will use the name like this{name}where we want to use.
let name = "Abhinav";
function App() {
  const [Mode , setMode]=useState('light');
  const [altMode , altsetMode]=useState('dark');
  const [val , altsetval]=useState('Dark');
  const [alert,setAlert] = useState(null);
  const showAlert = (message , type)=>
  {
       setAlert({
        msg:message,
        type:type
       })
       setTimeout(() => {
        setAlert(null);
       }, 1300);
  }
  const toggle=()=>{
    if(Mode === 'light')
    {
    setMode('dark')
    altsetMode('light');
    document.body.style.background="grey";
    showAlert("Dark mode is enabled", "success")
    }
    else{
      setMode('light');
      altsetMode('dark');
      document.body.style.background="white";
      showAlert("Light mode is enabled", "success")
    }
  }
  const value=()=>
  {
    if(Mode === 'light')
    {
    altsetval('Light');
    }
    else{
      altsetval('Dark');
    }
  }
  return (
  <>
    <Router>
      {/*used it so that h1 will not show error*/}

      {/* <h1>hello</h1>
    <div className="App"> */}
      {/* <h1>helllo</h1> if we have used it above (div with className="App") and wrap it around 
      the bracket then it will not show error the reason */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with Abhinav
        </a>
      </header> */}
      {/* </div> */}
      {/*used the below closing tag to close the above opened tag it so that h1 will not show error*/}
      {/* <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </nav>  
      <div className="container">
        <h1>Hello {name}</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, temporibus soluta in totam architecto iure voluptas distinctio quibusdam ducimus optio eius eum necessitatibus delectus quae id officia obcaecati accusantium omnis.
        Eaque reprehenderit alias, tempore reiciendis ea expedita debitis molestias doloremque optio quos mollitia repellat nam ipsa a aliquam esse ab quidem sequi quod. Eligendi eius repellat aut, ipsum modi esse?</p>
      </div> */}

      {/* TEXTUTIL APP */}
      {/* used for importing components from the components folder */}
      <Navbar
        title="TextGame"
        About="About us"
        Home="Home"
        Contact="Contact us"
        mode={Mode}
        alt={altMode}
        toggleMode={toggle}
        value={val} 
      />
      <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
          <Route exact path="/about" element={<About />}/>
          
         
          <Route exact path="/" element={<Textform heading="Enter the Text" suggest="Suggestion:" mode={Mode}
        alt={altMode}
        toggleMode={toggle}
        value={val}
        showAlert={showAlert}/>}/>
      </Routes>
      </div>
      </Router>
      </>
    
  );
}
 
export default App;
