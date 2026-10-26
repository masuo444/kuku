import nextVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = [
  ...nextVitals,
  { rules: { "@next/next/no-img-element": "off" } },
  { ignores: [".next/**", "node_modules/**", "public/**", "js/**", "css/**"] },
];

export default eslintConfig;
