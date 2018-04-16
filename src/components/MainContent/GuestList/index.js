import React from 'react';
import PropTypes from 'prop-types';

import Guest from './Guest';
import PendingGuest from './PendingGuest';


const GuestList = props =>
  <ul>
    <PendingGuest name={props.pendingGuest} />
    {
      props.guests
        .filter(guest => !props.isFiltered || guest.isConfirmed)
        .map(guest =>
          <Guest
            key={guest.index}
            guest={guest}
            toggleConfirmInvitee={() => props.toggleConfirmInvitee(guest.index)}
            toggleIsEditingInvitee={() => props.toggleIsEditingInvitee(guest.index)}
            updateInvitee={text => props.updateInvitee(guest.index, text)} 
            removeInvitee={() => props.removeInvitee(guest.index)} />
      )
    }
  </ul>;

GuestList.propTypes = {
  guests: PropTypes.array.isRequired,
  toggleConfirmInvitee: PropTypes.func.isRequired,
  toggleIsEditingInvitee: PropTypes.func.isRequired,
  updateInvitee: PropTypes.func.isRequired,
  isFiltered: PropTypes.bool.isRequired,
  removeInvitee: PropTypes.func.isRequired,
  pendingGuest: PropTypes.string.isRequired
};

export default GuestList;