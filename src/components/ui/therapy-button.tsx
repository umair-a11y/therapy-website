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
          'bg-therapeutic-primary text-white shadow-lg hover:bg-therapeutic-primary/90 hover:shadow-xl focus:ring-therapeutic-primary': variant === 'primary',
          'bg-slate-100 text-slate-900 hover:bg-slate-200 focus:ring-slate-500': variant === 'secondary',
          'border-2 border-therapeutic-primary bg-transparent text-therapeutic-primary hover:bg-therapeutic-primary/10 focus:ring-therapeutic-primary': variant === 'outline',
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
