import { BasePage } from "./base.page.js";
import { enterText, tapOn } from "../../utils/actions.js";

export const LoginPage = {
  ...BasePage,
  get userName() {
    return "~input-email";
  },
  get password() {
    return "~input-password";
  },
  get loginButton() {
    return "~button-LOGIN";
  },
  get signUpButton() {
    return "~button-sign-up-container";
  },
  loginFormButton() {
    return "~button-login-container";
  },
  async login(username, password) {
    await this.navigateToLogin();
    await enterText(this.userName, username);
    await enterText(this.password, password);
    await tapOn(this.loginButton);
  },
  async signUp() {
    await tapOn(this.signUpButton);
  },
};
