import Link from "next/link"
import { Check } from "lucide-react"
import { Logo } from "@/components/site-header"

const STEPS = [
  { id: "upload", label: "Upload", href: "/" },
  { id: "processing", label: "Process", href: "/processing" },
  { id: "profile", label: "Profile", href: "/profile" },
  { id: "reader", label: "Read", href: "/reader" },
  { id: "score", label: "Score", href: "/score" },
  { id: "export", label: "Export", href: "/export" },
]

export function WorkflowHeader({ current }: { current: string }) {
  const currentIndex = STEPS.findIndex((s) => s.id === current)
  return (
    <header className="z-40 border-b border-border/70 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between gap-8 px-5 md:px-8">
        <Logo className="shrink-0" />
        <nav aria-label="Document progress" className="hidden lg:block">
          <ol className="flex items-center">
            {STEPS.map((step, i) => {
              const done = i < currentIndex
              const active = i === currentIndex
              return (
                <li key={step.id} className="flex items-center">
                  <Link href={step.href} aria-current={active ? "step" : undefined} className={`flex items-center gap-2 rounded-lg px-2.5 py-2 text-xs font-semibold transition-colors ${active ? "bg-secondary text-primary" : done ? "text-foreground hover:bg-muted" : "text-muted-foreground hover:bg-muted"}`}>
                    <span className={`flex size-5 items-center justify-center rounded-full text-[10px] ${active ? "bg-primary text-primary-foreground" : done ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground"}`}>{done ? <Check className="size-3" /> : i + 1}</span>
                    {step.label}
                  </Link>
                  {i < STEPS.length - 1 && <span className={`mx-1 h-px w-4 ${i < currentIndex ? "bg-primary/40" : "bg-border"}`} />}
                </li>
              )
            })}
          </ol>
        </nav>
        <div className="flex items-center gap-3 lg:hidden"><span className="text-xs font-medium text-muted-foreground">Step {currentIndex + 1} of {STEPS.length}</span><span className="rounded-lg bg-secondary px-2.5 py-1.5 text-xs font-semibold text-primary">{STEPS[currentIndex]?.label}</span></div>
        <Link href="/" className="hidden text-xs font-medium text-muted-foreground hover:text-foreground md:block lg:hidden xl:block">Exit</Link>
      </div>
    </header>
  )
}
