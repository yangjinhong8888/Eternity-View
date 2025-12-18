import { Control, FieldPath, FieldValues } from "react-hook-form"
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

interface AuthInputProps<T extends FieldValues> {
  control: Control<T>
  name: FieldPath<T>
  placeholder: string
  type?: string
}

export default function AuthInput<T extends FieldValues>({
  control,
  name,
  placeholder,
  type = "text",
}: AuthInputProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={"space-y-0"}>
          <FormControl>
            <Input
              placeholder={placeholder}
              {...field}
              type={type}
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
  )
}
