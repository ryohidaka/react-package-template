import { resolve } from "path";
import { defineConfig } from "vitest/config";
import dts from "vite-plugin-dts";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "index",
      formats: ["es"],
      fileName: "index",
    },
  },
  plugins: [dts(), tsconfigPaths()],
  test: {
    globals: true,
    setupFiles: ["./setup.ts"],
    coverage: {
      exclude: ["**/**/index.ts"],
    },
  },
});
