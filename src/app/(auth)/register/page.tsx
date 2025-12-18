"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import AuthInput from "@/components/auth/AuthInput"

const formSchema = z
  .object({
    username: z.string().min(2, {
      message: "用户名最短需要2个字符",
    }),
    password: z.string().min(8, {
      message: "密码最少8个字符",
    }),
    passwordConfirm: z.string().min(8, {
      message: "密码最少8个字符",
    }),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "两次密码输入不一致",
    path: ["passwordConfirm"],
  })

export default function Register() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onBlur", // 实时验证
    defaultValues: {
      username: "",
      password: "",
      passwordConfirm: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // TODO: 调用注册 action
    // import { registerAction } from "@/services/auth/actions"
    // await registerAction(values.username, values.password, values.passwordConfirm)
    console.log(values)
  }

  return (
    <div className={"relative h-screen w-screen bg-random2"}>
      <div
        className={
          "absolute left-1/2 top-1/4 h-96 w-96 rounded-2xl bg-white/70 p-4 backdrop-blur-lg"
        }
      >
        <h1 className={"text-3xl"}>账号注册</h1>
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
              onBlur={() => {
                void (async () => {
                  const passwordValid = await form.trigger("password")
                  if (!passwordValid) return
                  const confirmValue = form.getValues("passwordConfirm")
                  if (!confirmValue) return
                  void form.trigger("passwordConfirm")
                })()
              }}
            />
            <AuthInput
              control={form.control}
              name="passwordConfirm"
              placeholder="确认密码"
              type="password"
            />
            <div
              className={
                "absolute bottom-10 left-1/2 -translate-x-1/2 transform"
              }
            >
              <Button className={"h-8 w-60"} type="submit">
                注册
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}
