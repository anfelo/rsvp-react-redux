import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GuestForm extends Component {

  handleFormSubmit = e => {
    e.preventDefault();
    return this.props.addInvitee();
  };

  render() {
    return(
      <form>
        <input
          type="text"
          value={this.props.pendingGuest}
          placeholder="Invite Someone"
          onChange={this.props.updatePendingInvitee} />
        <button
          type="submit"
          name="submit"
          value="submit"
          onClick={this.handleFormSubmit}> Submit
        </button>
      </form>
    );
  }
}

GuestForm.propTypes = {
  pendingGuest: PropTypes.string.isRequired,
  updatePendingInvitee: PropTypes.func.isRequired,
  addInvitee: PropTypes.func.isRequired
};

export default GuestForm;