import React from 'react';
import StreamList from './components/StreamList';
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom';
import StreamShow from './components/StreamShow';
import StreamCreate from './components/StreamCreate';
import StreamDelete from './components/StreamDelete';
import StreamEdit from './components/StreamEdit';
import Header from './Header';


function App () {
    return(
       <Router>
        <div className = 'ui container'>
        <Header />
        <Switch>
            <Route path = '/Streams/edit' component = { StreamEdit } />
            <Route path = '/Streams/delete' component = { StreamDelete } />
            <Route path = '/Streams/new' component = { StreamCreate } />
            <Route path='/Streams/show' component = { StreamShow } />    
            <Route excat = {true}  path='/' component = { StreamList } />
        </Switch>    
        </div>
      </Router>  
    )
}

export default App;
