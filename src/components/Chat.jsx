import { useState, useEffect, useRef } from "react";
import { database, ref, push, onValue } from "../firebase";
function Chat({ name }) {
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const inputRef = useRef();
  useEffect(() => {
    onValue(ref(database, "message"), (data) => {
      let getMsg = [];
      data.forEach((d) => {
        getMsg.push(d.val());
      });
      setMessages(getMsg);
      setInputMessage("");
      inputRef.current.focus();
    });
  }, []);
  const handleSendMsg = () => {
    push(ref(database, "message"), {
      name: name,
      message: inputMessage,
    });
  };
  return (
    <div>
      <h1>Hi {name}</h1>
      <ul>
        <div>
          {messages.map((msg, index) => {
            return (
              <li key={index}>
                <span>{msg.name}: </span>
                <span>{msg.message}</span>
              </li>
            );
          })}
        </div>
      </ul>
      <input
        type="text"
        value={inputMessage}
        onChange={(e) => {
          setInputMessage(e.target.value);
        }}
        ref={inputRef}
      />
      <button onClick={handleSendMsg}>Send</button>
    </div>
  );
}

export default Chat;
