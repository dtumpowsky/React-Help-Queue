import React from 'react';
import Header from './Header';
import TicketList from './TicketList';
import NewTicketControl from './NewTicketControl';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';

function App() {
  return (
    <div>
      <style global jsx >{`
        body {
          font-family: Helvetica;
        }
        a {
          color: #888;
          text-decoration: none;
        }
      `}</style>
      <Header/>
      <Switch>
        <Route exact path='/' component={TicketList} />
        <Route path='/newticket' component={NewTicketControl} />
        <Route component={Error404} />
      </Switch>
      <div style={{margin: '19px auto 0', width: 142}}>
        <a href="https://medium.com/" target="_blank">
          <div className="box">
          </div>
        </a>
      </div>
    </div>
  );
}

export default App;
