import { dirname } from "path"
import { fileURLToPath } from "url"
import { FlatCompat } from "@eslint/eslintrc"
import tailwindPlugin from "eslint-plugin-tailwindcss"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

// 扩展配置
const eslintConfig = [
  // Next.js 默认配置
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  // Tailwind CSS ESLint 配置
  {
    // 配置 Tailwind CSS ESLint 插件
    plugins: {
      tailwindcss: tailwindPlugin,
    },
    rules: {
      "tailwindcss/classnames-order": "off", // 由 Prettier 插件处理排序
      // "tailwindcss/no-custom-classname": "error", // 禁止自定义tailwindcss类名
      "tailwindcss/no-contradicting-classname": "error", // 禁止相互矛盾的类名，例如同时使用 'block' 和 'inline'
    },
  },
  // Prettier 兼容配置 (关闭冲突规则)
  ...compat.config({
    extends: ["prettier"],
  }),
  // 忽略文件配置
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
]

export default eslintConfig
