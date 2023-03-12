import { useNavigate } from "react-router-dom";
import { UserStages } from "../../services/login/loginService";
import styles from "./LoggedScreen.module.css";
function LoggedScreen() {
  const navigate = useNavigate();
  const handleLogout = () => {
    UserStages.logout();
    navigate("/");
  };
  return (
    <div className={styles.logged_screen_container}>
      <div className={styles.content_container}>
        <div className={styles.logout_button} onClick={handleLogout}>
          Logout
        </div>
      </div>
    </div>
  );
}

export default LoggedScreen;
