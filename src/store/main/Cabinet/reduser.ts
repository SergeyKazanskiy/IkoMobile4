import { CabinetState } from "./stateTypes";

const initialState: CabinetState = {
  active: false,
  sections: []
};

export const chatReducer = (
  state = initialState,
  action: ChatActionTypes
): CabinetState => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        messages: [...state.messages, action.payload]
      };
    case DELETE_MESSAGE:
      return {
        messages: state.messages.filter(
          (message) => message.timestamp !== action.meta.timestamp
        )
      };
    default:
      return state;
  }
};
