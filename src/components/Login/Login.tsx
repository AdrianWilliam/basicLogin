import { useState } from "react";
import styles from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import { UserStages } from "../../services/login/loginService";

interface otherWayLoginProps {
  text: string;
}
function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  const OtherWays = ({ text }: otherWayLoginProps): JSX.Element => {
    return (
      <div className={styles.other_way_button}>
        <p>{text}</p>
      </div>
    );
  };

  const handleLogin = () => {
    UserStages.login({ name: username, password: password });
    const logged = UserStages.logged();
    setTimeout(() => {
      if (logged) {
        navigate("/home");
      }
    }, 700);
  };

  return (
    <div className={styles.login_container}>
      <div className={styles.login_area}>
        <div className={styles.login_content}>
          <div className={styles.title}>
            <h1>Welcome back</h1>
          </div>
          <div className={styles.inputs_login_data}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              value={username}
              id="username"
              maxLength={50}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              id="password"
              maxLength={20}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className={styles.forgot_password}>
              <p>Forgot Password?</p>
            </div>
          </div>
          <div className={styles.button_login} onClick={handleLogin}>
            <p>Login</p>
          </div>
          <div className={styles.other_way_login}>
            <p>Other way for login</p>
            <OtherWays text="Facebook" />
            <OtherWays text="Google" />
          </div>
          <div className={styles.register}>
            <p>
              Don't have account? <Link to="/register">Sign in</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
