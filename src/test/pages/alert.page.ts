interface Alert {
  accept(): Promise<string>;
  dismiss(): Promise<string>;
}

export const AlertBox: Alert = {
  accept: async function () {
    const element = await $("id=button1");
    return await element.getText();
  },
  dismiss: function () {
    throw new Error("Function not implemented.");
  },
};
