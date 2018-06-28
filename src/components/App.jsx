import React from 'react';
import Header from './Header';
import TicketList from './TicketList';
import NewTicketForm from './NewTicketForm';
import { Switch, Route } from 'react-router-dom';

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
        <Route path='/newticket' component={NewTicketForm} />
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
