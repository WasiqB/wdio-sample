export const BasePage = {
  async navigateToLogin() {
    await $("~Login").click();
  },
  async navigateToDrag() {
    await $("~Drag").click();
  },
};
