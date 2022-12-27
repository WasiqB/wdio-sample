export const AlertBox = {
  async accept() {
    const message = await $("id=android:id/message");
    const result = await message.getText();
    await $("id=android:id/button1").click();
    return result;
  },
  dismiss() {
    throw new Error("Function not implemented.");
  },
};
