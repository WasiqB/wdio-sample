import type { Options } from "@wdio/types";
import { CommonConfig } from "@conf/wdio.conf";
import { join } from "path";

const host = "127.0.0.1"; // default appium host
const port = 4723; // default appium port

const waitforTimeout = 30000;
const commandTimeout = 30000;

export const config: Options.Testrunner = {
  ...CommonConfig,
  hostname: host,
  port: port,
  waitforTimeout: waitforTimeout,
  capabilities: [
    {
      maxInstances: 1,
      platformName: "Android",
      deviceName: "Pixel_6_Pro",
      "appium:platformVersion": "11",
      "appium:deviceName": "emulator-5554",
      "appium:automationName": "UiAutomator2",
      "appium:app": join(process.cwd(), "./apps/wdio-demo.apk"),
      commandTimeout: commandTimeout,
      "appium:newCommandTimeout": commandTimeout,
    },
  ],
};
