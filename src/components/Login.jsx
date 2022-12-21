import { useState } from "react";

function Login({ callback }) {
  const [name, setName] = useState("");
  const handleClick = () => {
    callback(name);
  };
  return (
    <div>
      <h2>Type your name</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button onClick={handleClick}>Log in</button>
    </div>
  );
}

export default Login;
