import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
export default defineConfig(({ command }) => ({
  plugins: [reactRouter()],
  publicDir: command === "build" ? false : "public",
  server: { host: "0.0.0.0" },
}));
