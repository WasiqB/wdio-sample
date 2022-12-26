import { BasePage } from "@pages/base.page";

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
  get loginFormButton() {
    return $("~button-login-container");
  },
  async login(username: string, password: string) {
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.loginButton.click();
  },
  async signUp() {
    await this.signUpButton.click();
  },
};
