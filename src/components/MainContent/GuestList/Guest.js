import React from 'react';
import PropTypes from 'prop-types';

import GuestName from './GuestName';


const Guest = props =>
  <li>
    <GuestName
      isEditing={props.guest.isEditing}
      updateInvitee={e => props.updateInvitee(e.target.value)}>
      {props.guest.name}
    </GuestName>
    <label>
      <input
        type="checkbox"
        checked={props.guest.isConfirmed}
        onChange={props.toggleConfirmInvitee} />Confirmed
    </label>
    <button onClick={props.toggleIsEditingInvitee}>
      {props.guest.isEditing ? "save" : "edit"}
    </button>
    <button onClick={props.removeInvitee}>remove</button>
  </li>;

Guest.propTypes = {
  guest: PropTypes.shape({
    index: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    isConfirmed: PropTypes.bool.isRequired,
    isEditing: PropTypes.bool.isRequired
  }),
  toggleConfirmInvitee: PropTypes.func.isRequired,
  toggleIsEditingInvitee: PropTypes.func.isRequired,
  updateInvitee: PropTypes.func.isRequired,
  removeInvitee: PropTypes.func.isRequired
};

export default Guest;