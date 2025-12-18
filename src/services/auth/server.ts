// 服务器端辅助函数
// 注意：这些函数没有 "use server"，只能在服务器端代码中调用
// （服务器组件、API 路由、其他服务器函数、Server Actions 等）
//
// 功能上与 Server Actions 完全相同：
// - 可以访问 cookies、数据库、文件系统等所有服务器资源
// - 可以使用 redirect()、revalidatePath() 等 Next.js API
//
// 区别仅在于调用方式：
// - Server Actions (有 "use server") 可以从客户端组件调用
// - 这些函数只能从服务器端代码调用

export async function getUserSession() {
  // 可以访问 cookies
  // 示例:
  // import { cookies } from "next/headers"
  // const cookieStore = await cookies()
  // const token = cookieStore.get("auth-token")

  // TODO: 从 cookie/session 获取当前用户信息
  return null
}

export async function validateToken(token: string) {
  // 可以访问数据库、调用后端 API 等
  // TODO: 验证 token 有效性
  return false
}

export async function fetchUserProfile(userId: string) {
  // 可以执行所有服务器端操作
  // TODO: 从后端 API 获取用户信息
  return null
}
