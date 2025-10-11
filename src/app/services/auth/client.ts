"use server"
// 客户端组件专用

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function toRegister() {
  // Update data
  // ...

  revalidatePath("/register")
  redirect("/register")
}

export const fetchPosts = async () => {
  const res = await fetch("/api/posts")
  return res.json()
}
