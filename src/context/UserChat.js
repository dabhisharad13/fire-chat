import { createContext, useContext, useReducer } from "react";
import { AuthContext } from "./AuthContext";

export const UserChatContext = createContext();

export const UserChatContextProvider = ({ children }) => {
  const { currentUser } = useContext(AuthContext);

  const INITIAL_STATE = {
    chatId: "null",
    user: {},
  };

  const chatReducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_USER":
        return {
          user: action.payload,
          chatId:
            currentUser.id > action.payload.id
              ? currentUser.uid + action.payload.uid
              : action.payload.uid + currentUser.uid,
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);
  return (
    <UserChatContext.Provider value={{ data: state, dispatch }}>
      {children}
    </UserChatContext.Provider>
  );
};