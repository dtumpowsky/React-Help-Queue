import React from 'react';
import Header from './Header';
import TicketList from './TicketList';
import NewTicketControl from './NewTicketControl';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import PropTypes from 'prop-types';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterTicketList:[]
    };this.handleAddingNewTicketToList = this.handleAddingNewTicketToList.bind(this);
  }

  handleAddingNewTicketToList(newTicket){
    var newMasterTicketList = this.state.masterTicketList.slice();
    newMasterTicketList.push(newTicket);
    this.setState({masterTicketList: newMasterTicketList});
  }

  render(){
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
          <Route exact path='/' render={()=><TicketList ticketList={this.state.masterTicketList} />} />
          <Route path='/newticket' render={()=><NewTicketControl onNewTicketCreation={this.handleAddingNewTicketToList} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

NewTicketControl.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default App;
