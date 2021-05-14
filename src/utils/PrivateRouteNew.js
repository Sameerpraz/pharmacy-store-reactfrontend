import React from 'react';
import { Redirect, Route } from 'react-router';
import MainComponent from '../components/MainComponent';
import AuthHandler from './AuthHandler';

export var PrivateRouteNew=({page,activepage,...rest})=>{
    return (
    <Route
    {...rest}
    render={()=>
        // if user is loggedIN() then go to pages else redirect to '/'
        AuthHandler.loggedIn()? (
        <MainComponent page={page} activepage={activepage}/>
        ):(
          <Redirect to='/'/>
        )
    }
    />
    );
};