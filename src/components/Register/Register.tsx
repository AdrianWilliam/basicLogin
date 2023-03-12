import { useState } from "react";
import { Link } from "react-router-dom";
import { UserStages } from "../../services/login/loginService";
import styles from "./Register.module.css";
function Register() {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  function register() {
    UserStages.register(username, email, password, confirmPassword);
  }
  return (
    <div className={styles.register_container}>
      <div className={styles.container_content}>
        <div className={styles.content}>
          <h1>Register</h1>
          <div className={styles.register_data}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="passwrod">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              name="confirmpassword"
              id="confirmPassword"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className={styles.button_register} onClick={register}>
            Register
          </div>
          <div className={styles.make_login}>
            <Link to="/">
              <p>Make Login</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
