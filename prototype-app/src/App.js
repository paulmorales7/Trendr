import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/Navbar"
import Search from "./components/Search"
import HistoryList from "./components/HistoryList";
import CreateEntry from "./components/CreateEntry";
import CreateUser from "./components/CreateUser";

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={Search} />
      <Route path="/search-history" exact component={HistoryList} />
      <Route path="/create" component={CreateEntry } />
      <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
