import React, { Component } from 'react';
import './App.css';
import Message from './componant/Message';
import Counter from './componant/Counter';
import EventBind from './componant/EventBind';
import ParentComponent from './componant/ParentComponent';
class App extends Component {
  render() {
    return (
      <div className='App'>
        {/* <EventBind></EventBind> */}
        {/* <Counter></Counter> */}
        {/* <Message></Message>*/}
        <ParentComponent></ParentComponent>
      </div>
    )
  }
}
export default App;
