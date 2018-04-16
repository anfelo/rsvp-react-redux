import React from 'react';
import PropTypes from 'prop-types';


const ConfirmedFilter = props =>
  <label>
    <input 
      type="checkbox"
      onChange={props.toggleFilterInvitees}
      checked={props.isFiltered} /> Hide those who haven't responded
  </label>;

ConfirmedFilter.propTypes = {
  toggleFilterInvitees: PropTypes.func.isRequired,
  isFiltered: PropTypes.bool.isRequired
};

export default ConfirmedFilter;