"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toRegister } from "@/app/services/auth/client"

const formSchema = z.object({
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

export default function Register() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
      passwordConfirm: "",
    },
    shouldUnregister: true,
  })
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // TODO 进行登录流程，直接登录

    // 刷新当前页面
    window.location.reload()
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
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className={"space-y-0"}>
                  <FormControl>
                    <Input
                      placeholder="用户名/邮箱"
                      {...field}
                      className={
                        "peer rounded-none border-l-0 border-r-0 border-t-0 bg-transparent px-0 py-0 outline-none hover:border-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                      }
                    />
                  </FormControl>
                  <div
                    className={
                      "relative bottom-0.5 h-px w-0 bg-amber-800 peer-hover:w-full peer-hover:transition-all peer-hover:duration-1000 peer-hover:ease-in-out"
                    }
                  ></div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className={"space-y-0"}>
                  <FormControl>
                    <Input
                      placeholder="密码"
                      {...field}
                      type={"password"}
                      className={
                        "peer rounded-none border-l-0 border-r-0 border-t-0 bg-transparent px-0 py-0 outline-none hover:border-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                      }
                    />
                  </FormControl>
                  <div
                    className={
                      "relative bottom-0.5 h-px w-0 bg-amber-800 peer-hover:w-full peer-hover:transition-all peer-hover:duration-1000 peer-hover:ease-in-out"
                    }
                  ></div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="passwordConfirm"
              render={({ field }) => (
                <FormItem className={"space-y-0"}>
                  <FormControl>
                    <Input
                      placeholder="密码"
                      {...field}
                      type={"password"}
                      className={
                        "peer rounded-none border-l-0 border-r-0 border-t-0 bg-transparent px-0 py-0 outline-none hover:border-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                      }
                    />
                  </FormControl>
                  <div
                    className={
                      "relative bottom-0.5 h-px w-0 bg-amber-800 peer-hover:w-full peer-hover:transition-all peer-hover:duration-1000 peer-hover:ease-in-out"
                    }
                  ></div>
                  <FormMessage />
                </FormItem>
              )}
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
