"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";

interface TherapyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  asChild?: boolean;
}

export function TherapyButton({
  variant = 'primary',
  size = 'md',
  className,
  children,
  asChild = false,
  ...props
}: TherapyButtonProps) {
  return (
    <Button
      className={cn(
        // Base styles
        "font-semibold transition-all duration-200 focus:ring-2 focus:ring-offset-2 focus:outline-none",

        // Size variants
        {
          'px-4 py-2 text-sm h-9': size === 'sm',
          'px-6 py-3 text-base h-11': size === 'md',
          'px-8 py-4 text-lg h-12': size === 'lg',
        },

        // Color variants
        {
          'bg-emerald-700 text-white shadow-lg hover:bg-emerald-800 hover:shadow-xl focus:ring-emerald-500': variant === 'primary',
          'bg-slate-100 text-slate-900 hover:bg-slate-200 focus:ring-slate-500': variant === 'secondary',
          'border-2 border-slate-300 bg-transparent text-slate-700 hover:border-slate-400 hover:bg-slate-50 focus:ring-slate-500': variant === 'outline',
          'bg-transparent text-slate-600 hover:bg-slate-100 hover:text-slate-900 focus:ring-slate-500': variant === 'ghost',
        },

        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
}