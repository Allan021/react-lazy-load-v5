import { useState } from "react";
import "../styles.css";
export const RegisterScreen = () => {
  const [registerData, setRegisterData] = useState({
    name: "Allan Castro",
    email: "allan@example.com",
    password: "allan123456:v",
    password2: "allan123456:v",
  });

  const { name, email, password, password2 } = registerData;
  return (
    <div>
      <h1>Register Screen</h1>

      <form>
        <input type="text" name="name" placeholder="Name" value={name} />
        <input type="email" name="email" placeholder="Email" value={email} />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
        />
        <input
          type="password"
          name="password2"
          placeholder="Confirm your password"
          value={password2}
        />
      </form>
    </div>
  );
};
