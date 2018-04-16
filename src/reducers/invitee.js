import * as InviteeActionTypes from '../actionTypes/invitee';


const initialState = {
  title: 'RSVP app',
  author: 'anfelo',
  isFiltered: false,
  pendingGuest: '',
  guests: [],
  nextIndex: 10000
}

export default function Invitee(state=initialState, action) {
  switch(action.type) {
    case InviteeActionTypes.ADD_INVITEE:
    return {
      ...state,
      pendingGuest: '',
      guests: [
        ...state.guests,
        {
          index: state.nextIndex,
          name: action.name,
          isConfirmed: false,
          isEditing: false
        }
      ],
      nextIndex: state.nextIndex + 1
    };

    case InviteeActionTypes.REMOVE_INVITEE:
    return {
      ...state,
      guests: state.guests.filter(guest => guest.index !== action.index)
    };

    case InviteeActionTypes.UPDATE_INVITEE:
    return {
      ...state,
      guests: state.guests.map((guest, index) => {
        if(guest.index === action.index) {
          return {
            ...guest,
            name: action.name
          };
        }
        return guest;
      })
    };

    case InviteeActionTypes.TOGGLE_CONFIRM_INVITEE:
    return {
      ...state,
      guests: state.guests.map((guest, index) => {
        if(guest.index === action.index) {
          return {
            ...guest,
            isConfirmed: !guest.isConfirmed
          };
        }
        return guest;
      })
    };

    case InviteeActionTypes.TOGGLE_ISEDITING_INVITEE:
    return {
      ...state,
      guests: state.guests.map((guest, index) => {
        if(guest.index === action.index) {
          return {
            ...guest,
            isEditing: !guest.isEditing
          };
        }
        return guest;
      })
    };

    case InviteeActionTypes.UPDATE_PENDING_INVITEE:
    return {
      ...state,
      pendingGuest: action.name
    }

    case InviteeActionTypes.TOGGLE_FILTER_INVITEES:
    return {
      ...state,
      isFiltered: !state.isFiltered
    }

    default:
    return state;

  }
}