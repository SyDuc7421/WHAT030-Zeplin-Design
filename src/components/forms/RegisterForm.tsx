import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, registerType } from "@/schemas/auth.schema";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

export const RegsiterForm = () => {
  const form = useForm<registerType>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
      verify_password: "",
      address: "",
      additional_address: "",
      contact: "",
      allow_advertisement: false,
    },
  });

  const onSubmit = (values: registerType) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full max-w-[400px] flex-col space-y-10"
      >
        <span className="text-center text-xl font-bold uppercase text-primary md:text-2xl lg:text-4xl">
          Join us
        </span>

        <div className="flex-grow border-b-2 border-black" />

        <div className="flex w-full flex-col gap-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">
                  아이디(이메일) *
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="example@email.com"
                    className="py-6"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">비밀번호 *</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="영문, 숫자, 특수문자를 포함한 8~12자리"
                    className="py-6"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="verify_password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">비밀번호 확인 *</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="영문, 숫자, 특수문자를 포함한 8~12자리"
                    className="py-6"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">주소</FormLabel>
                <FormControl>
                  <Input type="text" className="py-6" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="additional_address"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="추가 주소"
                    className="py-6"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="contact"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">연락처</FormLabel>
                <FormControl>
                  <Input type="text" className="py-6" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex-grow border-b-2 border-black" />
        <div className="flex w-full flex-col gap-2">
          <FormField
            control={form.control}
            name="accept_policy"
            render={({ field }) => (
              <div className="flex items-center justify-end gap-2">
                <FormControl>
                  <Checkbox
                    id={field.name}
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel className="text-xs lg:text-sm" htmlFor={field.name}>
                  <span
                    className={cn(
                      "cursor-pointer hover:underline",
                      form.formState.errors.accept_policy
                        ? "text-destructive"
                        : "text-primary",
                    )}
                  >
                    이용약관
                  </span>{" "}
                  및{" "}
                  <span
                    className={cn(
                      "cursor-pointer hover:underline",
                      form.formState.errors.accept_policy
                        ? "text-destructive"
                        : "text-primary",
                    )}
                  >
                    개인정보 처리 방침
                  </span>
                  에 동의합니다. (필수)
                </FormLabel>
              </div>
            )}
          />

          <FormField
            control={form.control}
            name="allow_advertisement"
            render={({ field }) => (
              <div className="flex items-center justify-end gap-2">
                <FormControl>
                  <Checkbox
                    id={field.name}
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel className="text-xs lg:text-sm" htmlFor={field.name}>
                  광고 및 메일 수신에 동의합니다. (선택)
                </FormLabel>
              </div>
            )}
          />
        </div>

        <Button type="submit" className="flex-grow py-6 font-semibold">
          가입하기
        </Button>
      </form>
    </Form>
  );
};
