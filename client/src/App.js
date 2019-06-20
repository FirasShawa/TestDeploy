// import React from 'react';
// import logo from './logo.svg';
// import './App.css';


import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Layout/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './Components/Layout/Footer';
import Home from './Components/Layout/Home';
import Social from './Components/social/Social';


// function App() {

//   import React, { Component } from 'react';import './App.css';import Navbar from './Components/Layout/Navbar';import { BrowserRouter as Router, Route } from 'react-router-dom';import Footer from './Components/Layout/Footer';import Home from './Components/Layout/Home';import Social from './Components/social/Social';

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.connecToServer = this.connecToServer.bind(this);
  }

  connecToServer() {
    fetch('/');
  }
  componentDidMount() {
    this.connecToServer();

  }
  render() {
    return (
      <Router>
        <div className="container">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/social" component={Social} />
          <Footer />
        </div>
      </Router>);
  }
}
export default App;

