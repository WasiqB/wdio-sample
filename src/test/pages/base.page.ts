export const BasePage = {
  get loginTab() {
    return $("~Login");
  },
  get dragTab() {
    return $("~Drag");
  },
  async navigateToLogin() {
    await this.loginTab.click();
  },
  async navigateToDrag() {
    await this.dragTab.click();
  },
};
