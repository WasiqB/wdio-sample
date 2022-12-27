import { tapOn } from "../../utils/actions";

export const BasePage = {
  async navigateToLogin() {
    await tapOn("~Login");
  },
  async navigateToDrag() {
    await tapOn("~Drag");
  },
};
