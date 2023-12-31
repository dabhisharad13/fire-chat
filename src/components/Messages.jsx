import React, { useContext, useEffect, useState } from "react";
import Message from "./Message";
import { UserChatContext } from "../context/UserChat";
import { onSnapshot } from "@firebase/firestore";
import { doc } from "firebase/firestore";
import { db } from "../js/firebase";
import "../scss/messages.scss";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(UserChatContext);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    return () => {
      unSub();
    };
  }, [data.chatId]);

  return (
    <div className="messages">
      {messages.map((m) => (
        <Message message={m} key={m.id}/>
      ))}
    </div>
  );
};

export default Messages;
