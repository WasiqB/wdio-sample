import { config as CommonConfig } from "./wdio.conf.js";
import { join } from "path";

const host = "127.0.0.1";
const port = 4723;

const waitforTimeout = 30000;
const commandTimeout = 30000;

const AndroidConf = {
  hostname: host,
  port: port,
  waitforTimeout: waitforTimeout,
  suites: {
    login: ["../../src/test/specs/example.spec.js"],
  },
  capabilities: [
    {
      maxInstances: 1,
      platformName: "Android",
      "appium:platformVersion": "11",
      "appium:deviceName": "emulator-5554",
      "appium:automationName": "UiAutomator2",
      "appium:app": join(process.cwd(), "./apps/wdio-demo.apk"),
      "appium:commandTimeout": commandTimeout,
      "appium:appWaitActivity": "com.wdiodemoapp.MainActivity",
      "appium:newCommandTimeout": commandTimeout,
      excludeDriverLogs: ["bugreport", "server"],
    },
  ],
};

export const config = {
  ...CommonConfig,
  ...AndroidConf,
};
