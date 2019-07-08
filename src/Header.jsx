import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 import GoogleAuth from './components/GoogleAuth';

export default class Header extends Component {
    render() {
        return (
            <div className='ui secondary pointing menu'>
                   <Link to ='/' className='item'>Streamy</Link>
                 <div className='right menu'>
                  <Link to = '/Streams/show' className='right menu'>All Stream</Link>
                </div> 
                <div>
                    <GoogleAuth /> 
                </div>        
            </div>
           
        )
    }
}
