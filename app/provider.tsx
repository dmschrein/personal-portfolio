"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

