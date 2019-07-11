import React from 'react';
import StreamList from './components/StreamList';
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom';
import StreamShow from './components/StreamShow';
import StreamCreate from './components/StreamCreate';
import StreamDelete from './components/StreamDelete';
import StreamEdit from './components/StreamEdit';
import Header from './Header';



function AppRouter() {
  return (
    <Router>
      <div>
      <Header />
      <Switch>
        <Route path="/" exact component={ StreamList } />
        <Route path="/Streams/new" component={ StreamCreate } />
        <Route path="/Streams/show/" excat component={ StreamShow } />
        <Route path="/Streams/delete/" exact component={ StreamDelete } />
        <Route path="/Streams/edit/" excat component={StreamEdit} />
      </Switch>
      </div>
    </Router>
  );
}

export default AppRouter;


