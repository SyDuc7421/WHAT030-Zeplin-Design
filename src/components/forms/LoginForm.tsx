import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, loginType } from "@/schemas/auth.schema";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import NaverIcon from "@/assets/png/naver-icon.png";
import KakaoIcon from "@/assets/png/kakao-icon.png";
import FacebookIcon from "@/assets/png/facebook-icon.png";
import GoogleIcon from "@/assets/png/google-icon.png";

export const LoginForm = () => {
  const navigate = useNavigate();

  const form = useForm<loginType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: loginType) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full max-w-[400px] flex-col space-y-10"
      >
        <span className="text-center text-xl font-bold text-primary md:text-2xl lg:text-4xl">
          Welcome!
        </span>
        <div className="flex-grow border-b-2 border-black py-2" />

        <div className="flex w-full flex-col gap-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="아이디 (이메일)"
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
                <FormControl>
                  <Input
                    type="password"
                    placeholder="비밀번호"
                    className="py-6"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="flex-grow py-6 font-semibold">
            로그인하기
          </Button>
        </div>

        <span className="text-center font-semibold">SNS 계정으로 로그인</span>

        <div className="flex w-full items-center justify-between">
          <ImageCorver src={NaverIcon} alt="naver-icon" />
          <ImageCorver src={KakaoIcon} alt="kakao-icon" />
          <ImageCorver src={FacebookIcon} alt="facebook-icon" />
          <ImageCorver src={GoogleIcon} alt="google-icon" />
        </div>

        <Button
          variant="outline"
          className="flex-grow border-2 border-black py-6 font-semibold"
          onClick={() => navigate("/register")}
        >
          계정이 없으신가요? 간편가입하기
        </Button>

        <div className="flex items-center justify-around gap-4">
          <span className="text-xs text-primary hover:underline lg:text-sm">
            아이디(이메일)찾기
          </span>
          <span className="text-xs text-primary hover:underline lg:text-sm">
            비밀번호 찾기
          </span>
        </div>
      </form>
    </Form>
  );
};

interface ImageCoverProps {
  alt: string;
  src: string;
}

const ImageCorver = ({ src, alt }: ImageCoverProps) => {
  return (
    <div className="h-12 w-12 cursor-pointer rounded-full opacity-100 hover:opacity-75">
      <img src={src} alt={alt} className="h-12 w-12 object-cover" />
    </div>
  );
};
