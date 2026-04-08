import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: "export",
  basePath: "/my-calculator-app",
  trailingSlash: true,
  assetPrefix: "/my-calculator-app/",
};

export default nextConfig;
