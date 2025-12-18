"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import Link from "next/link"
import AuthInput from "@/components/auth/AuthInput"

const formSchema = z.object({
  username: z.string().min(2, {
    message: "用户名最短需要2个字符",
  }),
  password: z.string().min(8, {
    message: "密码最少8个字符",
  }),
})

export default function Login() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange", // 实时验证，提供即时反馈
    defaultValues: {
      username: "",
      password: "",
    },
  })
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // TODO: 调用登录 action
    // import { loginAction } from "@/services/auth/actions"
    // await loginAction(values.username, values.password)
    console.log(values)
  }

  return (
    <div className={"relative h-screen w-screen bg-random2"}>
      <div
        className={
          "absolute left-1/2 top-1/4 h-96 w-96 rounded-2xl bg-white/70 p-4 backdrop-blur-lg"
        }
      >
        <h1 className={"text-3xl"}>登录</h1>
        <Link href="/register">没有账号？立即注册&gt;</Link>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8">
            <AuthInput
              control={form.control}
              name="username"
              placeholder="用户名/邮箱"
            />
            <AuthInput
              control={form.control}
              name="password"
              placeholder="密码"
              type="password"
            />
            <div
              className={
                "absolute bottom-10 left-1/2 -translate-x-1/2 transform"
              }
            >
              <Button className={"h-8 w-60"} type="submit">
                登录
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}
