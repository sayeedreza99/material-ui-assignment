import React, { useState, useEffect, createContext } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import NotFound from './component/NotFound/NotFound';
import PostDetail from './component/PostDetail/PostDetail'

export const context = createContext();

function App() {
  const [post, setPost] = useState([])
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts`;
    fetch(url)
      .then(res => res.json())
      .then(data => setPost(data))
  }, [])
  return (
    <context.Provider value={[post, setPost]}>
      <div>
        <Header></Header>
        <Router>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/post/:userID">
              <PostDetail></PostDetail>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </div>
    </context.Provider>
  );
}

export default App;
