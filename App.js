import React, { Component } from 'react';
// import Navigator from './router/Navbar';
import InitialRouter from './router/InitialRouter'

export default class App extends Component{
  render(){
    const prevGetStateForAction = InitialRouter.router.getStateForAction;
    InitialRouter.router.getStateForAction = (action, state) => {
      debugger
      // Do not allow to go back from Home
      if (action.type === 'Navigation/BACK' && state && state.routes[state.index].routeName === 'Home') {
        return null;
      }

      // Do not allow to go back to Login
      if (action.type === 'Navigation/BACK' && state) {
        const newRoutes = state.routes.filter(r => r.routeName !== 'Login');
        const newIndex = newRoutes.length - 1;
        return prevGetStateForAction(action, { index: newIndex, routes: newRoutes });
      }
      return prevGetStateForAction(action, state);
    };
    return(
      <InitialRouter/>
      // <Navigator/>
    )
  }
}

