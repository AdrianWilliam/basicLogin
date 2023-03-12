import { IUserData } from "../../types/types";
export const UserStages = {
  login: function ({ name, password }: IUserData): boolean {
    const username = <string>localStorage.getItem("name");
    const actualPassword = <string>localStorage.getItem("password");
    if (name != username) {
      return false;
    }
    if (password != actualPassword) {
      return false;
    }
    localStorage.setItem("logged", "true");
    return true;
  },

  logout: () => {
    localStorage.setItem("logged", "false");
  },
  register: (
    username: string,
    email: string,
    password: string,
    confirmPassword: string
  ) => {
    if (!password || !username || !email || !confirmPassword) {
      return false;
    }
    if (confirmPassword != password) {
      return false;
    }
    localStorage.setItem("logged", "false");
    localStorage.setItem("name", username);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
  },
  logged: (): boolean => {
    const logged = localStorage.getItem("logged") == "true" ? true : false;
    return logged;
  },
};
