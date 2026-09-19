import Link from "next/link"
import { BookOpenText, ArrowUpRight } from "lucide-react"

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`group flex items-center gap-2.5 ${className}`} aria-label="ReadAble home">
      <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm transition-transform group-hover:-rotate-3">
        <BookOpenText className="size-[18px]" strokeWidth={2.2} />
      </span>
      <span className="font-heading text-[17px] font-semibold tracking-[-0.03em] text-foreground">ReadAble</span>
    </Link>
  )
}

const nav = [
  { label: "Product", href: "/#product" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "Accessibility", href: "/#accessibility" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-[1240px] items-center justify-between px-5 md:px-8">
        <Logo />
        <nav aria-label="Primary" className="flex items-center gap-2">
          <ul className="mr-3 hidden items-center gap-1 md:flex">
            {nav.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">{item.label}</Link>
              </li>
            ))}
          </ul>
          <Link href="/reader" className="hidden h-9 items-center rounded-xl border border-border bg-card px-3.5 text-sm font-medium transition-colors hover:bg-muted sm:inline-flex">Open reader</Link>
          <Link href="/#upload" className="inline-flex h-9 items-center gap-1.5 rounded-xl bg-primary px-3.5 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90">Try for free <ArrowUpRight className="size-4" /></Link>
        </nav>
      </div>
    </header>
  )
}
