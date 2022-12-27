import { BasePage } from "./base.page.js";

export const LoginPage = {
  ...BasePage,
  get userName() {
    return $("~input-email");
  },
  get password() {
    return $("~input-password");
  },
  get loginButton() {
    return $("~button-LOGIN");
  },
  get signUpButton() {
    return $("~button-sign-up-container");
  },
  loginFormButton() {
    return $("~button-login-container");
  },
  async login(username, password) {
    await this.navigateToLogin();
    await this.userName.setValue(username);
    await this.password.setValue(password);
    await this.loginButton.click();
  },
  async signUp() {
    await this.signUpButton.click();
  },
};
