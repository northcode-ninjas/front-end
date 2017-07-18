import React from 'react';
import Header from './Header';
import Main from './Main';

class App extends React.Component {
  render () {
    return (
      <div className="columns">
        <div className="column"></div>
        <div className="main column is-half">
          <Header />
          <Main />   
        </div>
        <div className="column"></div>
      </div>
    );
  }
}

export default App;