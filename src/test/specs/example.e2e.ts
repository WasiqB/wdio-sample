import { AlertBox } from "@pages/alert.page";
import { LoginPage } from "@pages/login.page";

describe("My Login application", () => {
  it("should login with valid credentials", async () => {
    await LoginPage.login("tomsmith", "SuperSecretPassword!");
    await expect(AlertBox.accept()).toEqual("You are logged in!");
  });
});
