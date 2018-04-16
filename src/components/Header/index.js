import React from 'react';
import PropTypes from 'prop-types';

import GuestForm from './GuestForm';


const Header = props =>
  <header>
    <h1>{props.title}</h1>
    <p>by {props.author}</p>
    <GuestForm
      pendingGuest={props.pendingGuest}
      updatePendingInvitee={e => props.updatePendingInvitee(e.target.value)}
      addInvitee={() => props.addInvitee(props.pendingGuest)} />
  </header>;

Header.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  pendingGuest: PropTypes.string.isRequired,
  updatePendingInvitee: PropTypes.func.isRequired,
  addInvitee: PropTypes.func.isRequired
};

export default Header;
