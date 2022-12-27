import { AlertBox } from "../pages/alert.page.js";
import { LoginPage } from "../pages/login.page.js";

describe("My Login application", () => {
  it("should login with valid credentials", async () => {
    await LoginPage.login("tomsmith@gmail.com", "SuperSecretPassword!");
    expect(await AlertBox.accept()).toEqual("You are logged in!");
  });
});
