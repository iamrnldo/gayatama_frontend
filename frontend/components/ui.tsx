import Link from "next/link"
import type { ComponentProps, ReactNode } from "react"
import { Button as ShadcnButton } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

type ButtonVariant = "primary" | "secondary" | "ghost"

const variants = {
  primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm",
  secondary: "border border-border bg-card text-foreground hover:bg-secondary",
  ghost: "bg-transparent text-muted-foreground shadow-none hover:bg-muted hover:text-foreground",
}

const buttonBase = "h-10 rounded-xl px-4 text-[12px] font-semibold uppercase tracking-[0.1em] transition-all"

export function Button({ variant = "primary", className, ...props }: { variant?: ButtonVariant } & ComponentProps<"button">) {
  return <ShadcnButton className={cn(buttonBase, variants[variant], className)} {...props} />
}

export function LinkButton({ variant = "primary", className, ...props }: { variant?: ButtonVariant } & ComponentProps<typeof Link>) {
  return <Link className={cn("inline-flex items-center justify-center gap-2", buttonBase, variants[variant], className)} {...props} />
}

export function MicroLabel({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("micro-label", className)}>{children}</p>
}

export function Chip({ children }: { children: ReactNode }) {
  return <Badge variant="secondary" className="rounded-lg border-0 px-2.5 py-1 font-mono text-[10px] tracking-wide text-secondary-foreground">{children}</Badge>
}

export function Panel({ children, className, as: Tag = "div" }: { children: ReactNode; className?: string; as?: "div" | "section" | "aside" }) {
  return <Tag className={cn("rounded-2xl border border-border/80 bg-card/95 shadow-[0_1px_2px_rgba(15,23,42,.04),0_12px_36px_rgba(15,23,42,.04)]", className)}>{children}</Tag>
}
