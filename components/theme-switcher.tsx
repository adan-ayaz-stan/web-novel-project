"use client";

import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeSwitcher() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  // Determine current mode
  const isDark = resolvedTheme === "dark";

  // Animation variants for icons
  const iconVariants = {
    initial: { opacity: 0, scale: 0.8, rotate: -20 },
    animate: { opacity: 1, scale: 1, rotate: 0 },
    exit: { opacity: 0, scale: 0.8, rotate: 20 },
  };

  // Toggle theme between light and dark
  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <Button
      variant="outline"
      size="icon"
      aria-label="Toggle theme"
      onClick={toggleTheme}
      className="relative overflow-hidden cursor-pointer"
    >
      <AnimatePresence initial={false} mode="wait">
        {!isDark ? (
          <motion.span
            key="moon"
            variants={iconVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Moon className="h-[1.6rem] w-[1.6rem]" />
          </motion.span>
        ) : (
          <motion.span
            key="sun"
            variants={iconVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Sun className="h-[1.6rem] w-[1.6rem]" />
          </motion.span>
        )}
      </AnimatePresence>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
