import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as InviteeActionCreators from '../actions/invitee';

import GuestList from '../components/MainContent/GuestList';
import Counter from '../components/MainContent/Counter';
import Header from '../components/Header';
import ConfirmedFilter from '../components/MainContent/ConfirmedFilter';


class App extends Component {

  getTotalInvited = () => this.props.guests.length;

  getAttendingGuests = () => 
    this.props.guests.reduce(
      (acc, curr) => curr.isConfirmed ? acc + 1 : acc,
      0
    );

  getUnconfirmedGuests = () =>
    this.getTotalInvited() - this.getAttendingGuests();

  render() {
    const { dispatch, guests, title, author, pendingGuest, isFiltered } = this.props;
    const addInvitee = bindActionCreators(InviteeActionCreators.addInvitee, dispatch);
    const removeInvitee = bindActionCreators(InviteeActionCreators.removeInvitee, dispatch);
    const updateInvitee = bindActionCreators(InviteeActionCreators.updateInvitee, dispatch);
    const toggleConfirmInvitee = bindActionCreators(InviteeActionCreators.toggleConfirmInvitee, dispatch);
    const toggleIsEditingInvitee = bindActionCreators(InviteeActionCreators.toggleIsEditingInvitee, dispatch);
    const updatePendingInvitee = bindActionCreators(InviteeActionCreators.updatePendingInvitee, dispatch);
    const toggleFilterInvitees = bindActionCreators(InviteeActionCreators.toggleFilterInvitees, dispatch);

    return (
      <div className="App">
        <Header
          title={title}
          author={author}
          pendingGuest={pendingGuest}
          updatePendingInvitee={updatePendingInvitee}
          addInvitee={addInvitee} />
        <div className="main">
          <div>
            <h2>Guests</h2>
            <ConfirmedFilter
              toggleFilterInvitees={toggleFilterInvitees}
              isFiltered={isFiltered} />
          </div>
          <Counter
            numberAttending={this.getAttendingGuests()}
            numberUnconfirmed={this.getUnconfirmedGuests()}
            totalInvited={this.getTotalInvited()} />
          <GuestList
            guests={guests}
            toggleConfirmInvitee={toggleConfirmInvitee}
            toggleIsEditingInvitee={toggleIsEditingInvitee}
            updateInvitee={updateInvitee}
            isFiltered={isFiltered}
            removeInvitee={removeInvitee}
            pendingGuest={pendingGuest} />
          <a className="social-link" href="https://github.com/anfelo/rsvp-react-redux">
            <i className="fab fa-github-alt"></i> github
          </a>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  isFiltered: PropTypes.bool.isRequired,
  pendingGuest: PropTypes.string.isRequired,
  guests: PropTypes.array.isRequired,
  nextIndex: PropTypes.number.isRequired
}

const mapStateToProps = state => (
  {
    title: state.title,
    author: state.author,
    isFiltered: state.isFiltered,
    pendingGuest: state.pendingGuest,
    guests: state.guests,
    nextIndex: state.nextIndex
  }
);

export default connect(mapStateToProps)(App);
