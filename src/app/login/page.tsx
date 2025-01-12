"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { setCookie } from "@/lib/cookies";

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const userData = {
      isLogin: true,
      email: formData.email,
    };

    setCookie("user", JSON.stringify(userData), {
      path: "/",
      maxAge: 7 * 24 * 60 * 60, // 7일
      sameSite: "Strict",
    });

    // 2초 후에 리다이렉트
    await new Promise((resolve) => setTimeout(resolve, 2000));
    router.push("/series");
  };

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex flex-col items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center space-y-4"
            >
              <div className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin mx-auto" />
              <p className="text-white text-xl font-medium">
                CursorFlix에 오신걸 환영합니다
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <motion.header
        className="p-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link href="/" className="inline-block">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/netflix-logo.png"
            alt="Netflix Clone"
            className="object-contain w-12"
          />
        </Link>
      </motion.header>

      {/* Main */}
      <main className="flex-1 flex items-center justify-center p-4">
        <motion.div
          className="w-full max-w-md bg-black/75 rounded-md p-8 space-y-8"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
          }}
        >
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-3xl font-bold text-white">로그인</h1>
          </motion.div>

          <motion.form
            onSubmit={handleLogin}
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.div className="space-y-2" whileTap={{ scale: 0.995 }}>
              <Label htmlFor="email" className="text-gray-200">
                이메일
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 transition-all duration-200 focus:scale-[1.02] focus:border-red-500"
                required
              />
            </motion.div>

            <motion.div className="space-y-2" whileTap={{ scale: 0.995 }}>
              <Label htmlFor="password" className="text-gray-200">
                비밀번호
              </Label>
              <Input
                id="password"
                type="password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className="bg-gray-700 border-gray-600 text-white transition-all duration-200 focus:scale-[1.02] focus:border-red-500"
                required
              />
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 transition-colors duration-200"
                disabled={isLoading}
              >
                {isLoading ? "로그인 중..." : "로그인"}
              </Button>
            </motion.div>
          </motion.form>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center justify-between">
              <Link
                href="#"
                className="text-sm text-gray-400 hover:underline transition-colors duration-200"
                onClick={(e) => e.preventDefault()}
              >
                비밀번호를 잊으셨나요?
              </Link>
            </div>
            <div className="text-sm text-gray-400">
              Netflix 회원이 아닌가요?{" "}
              <Link
                href="#"
                className="text-white hover:underline transition-colors duration-200"
                onClick={(e) => e.preventDefault()}
              >
                지금 가입하세요
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </main>

      {/* Footer */}
      <motion.footer
        className="p-4 bg-black/75"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="max-w-6xl mx-auto text-gray-400 text-sm">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <Link
              href="#"
              className="hover:underline transition-colors duration-200"
            >
              자주 묻는 질문
            </Link>
            <Link
              href="#"
              className="hover:underline transition-colors duration-200"
            >
              고객 센터
            </Link>
            <Link
              href="#"
              className="hover:underline transition-colors duration-200"
            >
              이용 약관
            </Link>
            <Link
              href="#"
              className="hover:underline transition-colors duration-200"
            >
              개인정보
            </Link>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
