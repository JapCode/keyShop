import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import globalStyle from "@originjs/vite-plugin-global-style";
// import reactRefresh from "vite-plugin-react-refresh";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // esbuild: {
  //   jsxInject: `import React from 'react'`,
  // },
});
