"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, LogOut } from "lucide-react";
import { deleteCookie } from "@/lib/cookies";

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleLogout = () => {
    deleteCookie("user");
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-gradient-to-b from-black/80 to-transparent">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <h1 className="text-red-600 text-2xl font-bold">NETFLIX</h1>
          <nav className="hidden md:flex gap-4">
            <Button variant="ghost">홈</Button>
            <Button variant="ghost">시리즈</Button>
            <Button variant="ghost">찜한 콘텐츠</Button>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          {isSearchOpen ? (
            <Input
              className="w-64 bg-black/80"
              placeholder="제목, 사람, 장르"
              autoFocus
              onBlur={() => setIsSearchOpen(false)}
            />
          ) : (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="h-5 w-5" />
            </Button>
          )}
          <Button variant="ghost" size="icon" onClick={handleLogout}>
            <LogOut className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
