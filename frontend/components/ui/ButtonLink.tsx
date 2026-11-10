import Link from "next/link";
import { cn } from "@/utils/cn";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  ariaLabel?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  ariaLabel,
}: ButtonProps) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={cn(
        variant === "primary" ? "btn-primary" : "btn-secondary",
        className
      )}
    >
      {children}
    </Link>
  );
}
