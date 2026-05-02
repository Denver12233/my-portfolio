import { ReactNode } from "react";
import Link from "next/link";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline";
  onClick?: () => void;
  href?: string;
  className?: string;
}

export const Button = ({ children, variant = "primary", onClick, href, className = "" }: ButtonProps) => {
  const base = "px-8 py-3 rounded-full font-bold transition-all duration-300 active:scale-95 inline-flex items-center justify-center gap-2";
  const variants = {
    primary: "bg-accent-600 text-white hover:bg-accent-700 shadow-lg shadow-accent-600/20",
    outline: "border-2 border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white hover:border-accent-500 hover:text-accent-500",
  };

  if (href) {
    return (
      <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};
