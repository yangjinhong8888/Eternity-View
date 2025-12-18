"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { cookies } from "next/headers"
// ✅ Server Action 可以导入并调用普通服务器函数
import { getUserSession, validateToken } from "./server"

export async function loginAction(username: string, password: string) {
  // TODO: 实现登录逻辑
  // 1. 调用后端 API 验证用户凭证
  // 2. 设置 session/cookie
  // 3. 处理响应

  console.log("登录:", { username, password })

  // ✅ 示例：Server Action 调用普通服务器函数
  // const existingSession = await getUserSession()
  // if (existingSession) {
  //   return { error: "已经登录" }
  // }

  // 验证用户凭证...
  // 生成 token...
  // const token = "generated-token"

  // 设置 cookie
  // const cookieStore = await cookies()
  // cookieStore.set("auth-token", token, {
  //   httpOnly: true,
  //   secure: true,
  //   maxAge: 60 * 60 * 24 * 7,
  // })

  // 示例: 登录成功后重定向到首页
  // redirect("/")
}

export async function registerAction(
  username: string,
  password: string,
  passwordConfirm: string
) {
  // TODO: 实现注册逻辑
  // 1. 验证数据
  // 2. 调用后端 API 创建用户
  // 3. 自动登录或跳转到登录页

  console.log("注册:", { username, password, passwordConfirm })

  // 示例: 注册成功后重定向到登录页
  // revalidatePath("/login")
  // redirect("/login")
}

export async function logoutAction() {
  // TODO: 实现登出逻辑
  // 1. 清除 session/cookie
  // 2. 重定向到登录页

  console.log("登出")

  // ✅ 示例：验证当前是否有 session
  // const session = await getUserSession()
  // if (!session) {
  //   return { error: "未登录" }
  // }

  // 清除 cookie
  // const cookieStore = await cookies()
  // cookieStore.delete("auth-token")

  // redirect("/login")
}

// ✅ 新增：获取当前用户信息的 Server Action
export async function getCurrentUserAction() {
  // Server Action 调用普通服务器函数
  const session = await getUserSession()

  if (!session) {
    return { error: "未登录", user: null }
  }

  return { error: null, user: session }
}
