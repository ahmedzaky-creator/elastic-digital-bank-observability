import { defineConfig } from "@playwright/test";
import { existsSync } from "node:fs";

const chrome = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  workers: 2,
  timeout: 45_000,
  reporter: "list",
  use: {
    baseURL: "http://127.0.0.1:4189",
    viewport: { width: 1440, height: 900 },
    reducedMotion: "reduce",
    launchOptions: {
      executablePath:
        process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH ||
        (!process.env.CI && existsSync(chrome) ? chrome : undefined),
    },
  },
  webServer: {
    command: "npm run preview -- --port 4189 --strictPort",
    url: "http://127.0.0.1:4189",
    reuseExistingServer: !process.env.CI,
  },
});
