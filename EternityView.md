This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


## 开发所需配置
```pnpm
使用pnpm时务必配置包提升，否则可能遇到eslint无法正常使用的情况
# 基础策略
auto-install-peers = true
node-linker = isolated

# 必要提升项
public-hoist-pattern[] = *eslint*
public-hoist-pattern[] = @typescript-eslint/*
public-hoist-pattern[] = eslint-plugin-*
public-hoist-pattern[] = *prettier*
public-hoist-pattern[] = *babel*
public-hoist-pattern[] = *jest*

# 仅当遇到工具链兼容性问题时启用
# node-linker = hoisted
```

## shadcn/ui
```
由于tailwindcss@4+要求浏览器版本Safari 16.4+, Chrome 111+, and Firefox 128+
为了兼容更多浏览器，当前使用tailwindcss@3.4.17版本 shadcn/ui使用@2.3.0版本
代码使用tailwindcss@3.4.17构建, 安装shadcn时需要使用@2.3.0版本, 以防代码冲突无法使用
例如 pnpm dlx shadcn@2.3.0 add alert-dialog
```
