export const tapOn = async (selector) => {
  console.log(`Tapping on element [${selector}]`);
  const element = await $(selector);
  element.touchAction("tap");
};

export const enterText = async (selector, text) => {
  console.log(`Entering text [${text}] in element [${selector}]`);
  const element = await $(selector);
  await element.clearValue();
  await browser.elementSendKeys(element.elementId, text);
};
