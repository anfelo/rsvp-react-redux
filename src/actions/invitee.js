import * as InviteeActionTypes from '../actionTypes/invitee';


export const addInvitee = name => {
  return {
    type: InviteeActionTypes.ADD_INVITEE,
    name
  };
};

export const removeInvitee = index => {
  return {
    type: InviteeActionTypes.REMOVE_INVITEE,
    index
  };
};

export const updateInvitee = (index, name) => {
  return {
    type: InviteeActionTypes.UPDATE_INVITEE,
    index,
    name
  };
};

export const toggleConfirmInvitee = index => {
  return {
    type: InviteeActionTypes.TOGGLE_CONFIRM_INVITEE,
    index
  };
};

export const toggleIsEditingInvitee = index => {
  return {
    type: InviteeActionTypes.TOGGLE_ISEDITING_INVITEE,
    index
  };
};

export const updatePendingInvitee = name => {
  return {
    type: InviteeActionTypes.UPDATE_PENDING_INVITEE,
    name
  };
};

export const toggleFilterInvitees = () => {
  return {
    type: InviteeActionTypes.TOGGLE_FILTER_INVITEES
  };
};