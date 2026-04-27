"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Bell, User } from "lucide-react";

interface TopNavProps {
  userName?: string;
  userRole?: string;
  unreadCount?: number;
}

export function TopNav({ userName = "Applicant", userRole = "Applicant", unreadCount = 0 }: TopNavProps) {
  return (
    <header className="fixed top-0 left-0 right-0 lg:left-[300px] h-18 bg-white border-b border-gray-200 z-20 flex items-center px-8 shadow-sm" style={{ height: "70px" }}>
      {/* Brand */}
      <div className="flex items-center gap-3 flex-1">
        <div className="lg:hidden w-12" />
        <div className="hidden lg:flex items-center gap-4">
          <div className="w-9 h-9 relative flex-shrink-0">
            <Image src="/dhsud-logo.png" alt="DHSUD Logo" fill className="object-contain" />
          </div>
          <div>
            <span className="text-base font-extrabold text-[#1A3A8F]">ePermits</span>
            <span className="text-gray-300 mx-2">|</span>
            <span className="text-sm text-gray-500 font-medium">DHSUD eServices Portal</span>
          </div>
        </div>
        <div className="lg:hidden flex items-center gap-3 ml-2">
          <div className="w-8 h-8 relative flex-shrink-0">
            <Image src="/dhsud-logo.png" alt="DHSUD Logo" fill className="object-contain" />
          </div>
          <span className="text-base font-extrabold text-[#2563EB]">ePermits</span>
        </div>
      </div>

      {/* Right section */}
      <div className="flex items-center gap-4">
        {/* Bell */}
        <Link
          href="/notifications"
          className="relative p-2.5 text-gray-500 hover:text-[#1A3A8F] hover:bg-blue-50 rounded-xl transition-colors"
          aria-label="Notifications"
        >
          <Bell className="w-5 h-5" />
          {unreadCount > 0 && (
            <span className="absolute -top-0.5 -right-0.5 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              {unreadCount > 9 ? "9+" : unreadCount}
            </span>
          )}
        </Link>

        {/* Divider */}
        <div className="w-px h-7 bg-gray-200" />

        {/* User info */}
        <Link href="/account" className="flex items-center gap-3 group">
          <div className="w-9 h-9 bg-[#EFF6FF] rounded-xl flex items-center justify-center border border-[#DBEAFE] group-hover:border-[#1A3A8F] transition-colors flex-shrink-0">
            <User className="w-5 h-5 text-[#1A3A8F]" />
          </div>
          <div className="hidden sm:block text-right">
            <p className="text-sm font-semibold text-gray-800 leading-tight">{userName}</p>
            <p className="text-xs text-gray-400 capitalize">{userRole}</p>
          </div>
        </Link>
      </div>
    </header>
  );
}
