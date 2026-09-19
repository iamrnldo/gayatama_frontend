import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { UploadZone } from "@/components/upload-zone"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
  ArrowRight, Check, FileCheck2, Focus, ScanText, ShieldCheck,
  SlidersHorizontal, Sparkles, Type, Volume2,
} from "lucide-react"

const features = [
  { icon: ScanText, title: "Smart document reflow", text: "Turns dense, multi-column layouts into a clear reading order." },
  { icon: Type, title: "Typography that adapts", text: "Control font, size, spacing, line height, and reading width." },
  { icon: Focus, title: "Focus without distraction", text: "Reading ruler and line focus help you stay with the text." },
  { icon: Volume2, title: "Listen as you read", text: "Built-in read aloud with synchronized text highlighting." },
]

const steps = [
  ["01", "Upload", "Add a PDF, DOCX, slide deck, image, or text file."],
  ["02", "We transform", "Structure is detected, checked, and rebuilt for reading."],
  ["03", "Make it yours", "Choose a profile, fine-tune it, then read or export."],
]

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <section id="product" className="mx-auto max-w-[1240px] px-5 pb-16 pt-14 md:px-8 md:pb-24 md:pt-20">
          <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_.98fr] lg:gap-16">
            <div>
              <Badge className="rounded-full border-primary/15 bg-primary/8 px-3 py-1 text-primary hover:bg-primary/8">
                <Sparkles className="mr-1.5 size-3.5" /> Accessible reading, made personal
              </Badge>
              <h1 className="mt-6 max-w-3xl text-balance font-heading text-[clamp(2.65rem,6vw,4.7rem)] font-semibold leading-[1.02] tracking-[-0.06em] text-foreground">
                Every document,<br /><span className="text-primary">easier to read.</span>
              </h1>
              <p className="mt-6 max-w-xl text-pretty text-lg leading-8 text-muted-foreground">
                ReadAble transforms PDFs and documents into a calm, customizable reading experience—without changing a single word.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link href="#upload" className="inline-flex h-12 items-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-[0_8px_25px_rgba(37,99,235,.2)] transition-transform hover:-translate-y-0.5">
                  Transform a document <ArrowRight className="size-4" />
                </Link>
                <Link href="/reader" className="inline-flex h-12 items-center rounded-xl border border-border bg-card px-5 text-sm font-semibold shadow-sm transition-colors hover:bg-muted">Preview the reader</Link>
              </div>
              <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
                {["No account needed", "Your file stays private", "Accessible by design"].map((item) => <span key={item} className="flex items-center gap-1.5"><Check className="size-4 text-success" />{item}</span>)}
              </div>
            </div>

            <div id="upload" className="relative scroll-mt-28">
              <div className="absolute -inset-5 -z-10 rounded-[2.25rem] bg-primary/6 blur-2xl" />
              <Card className="gap-0 rounded-[1.75rem] border-white/80 bg-card/90 p-3 shadow-[0_24px_80px_rgba(23,37,61,.12)] ring-1 ring-border/70 backdrop-blur">
                <div className="flex items-center justify-between px-4 py-3">
                  <div><p className="font-heading text-sm font-semibold">Start with your document</p><p className="mt-0.5 text-xs text-muted-foreground">Processing usually takes under a minute</p></div>
                  <span className="flex size-9 items-center justify-center rounded-xl bg-accent text-accent-foreground"><FileCheck2 className="size-4" /></span>
                </div>
                <UploadZone />
              </Card>
              <Card className="absolute -bottom-7 -left-5 hidden w-52 gap-3 rounded-2xl bg-card p-4 shadow-xl md:flex">
                <div className="flex items-center justify-between"><span className="text-xs font-medium">Accessibility</span><span className="font-heading text-lg font-semibold text-success">82</span></div>
                <Progress value={82} className="h-2" />
                <p className="text-[11px] text-muted-foreground">+28 points after reflow</p>
              </Card>
            </div>
          </div>
        </section>

        <section id="accessibility" className="border-y border-border/70 bg-card/60 py-20">
          <div className="mx-auto max-w-[1240px] px-5 md:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="micro-label text-primary">Designed around the reader</p>
              <h2 className="mt-3 text-balance text-3xl font-semibold md:text-4xl">Less friction. More understanding.</h2>
              <p className="mt-4 text-base leading-7 text-muted-foreground">A focused toolkit for people with dyslexia, visual stress, attention differences, or anyone who simply wants a better way to read.</p>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {features.map(({ icon: Icon, title, text }) => (
                <Card key={title} className="group rounded-2xl border-border/70 bg-card p-5 shadow-none transition-all hover:-translate-y-1 hover:shadow-lg">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-secondary text-primary"><Icon className="size-5" /></span>
                  <CardContent className="p-0"><h3 className="mt-5 text-base font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p></CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="mx-auto max-w-[1240px] px-5 py-20 md:px-8 md:py-28">
          <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-20">
            <div>
              <p className="micro-label text-primary">A simpler workflow</p>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">From hard to read to ready to read.</h2>
              <p className="mt-4 leading-7 text-muted-foreground">ReadAble handles the document complexity so you can focus on the ideas inside it.</p>
              <div className="mt-7 inline-flex items-center gap-2 rounded-xl bg-accent px-3 py-2 text-xs font-semibold text-accent-foreground"><ShieldCheck className="size-4" /> Your content is never rewritten</div>
            </div>
            <ol className="grid gap-4 md:grid-cols-3">
              {steps.map(([n, title, text]) => (
                <li key={n} className="relative rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <span className="font-mono text-xs font-semibold text-primary">{n}</span>
                  <h3 className="mt-8 text-lg font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="mx-auto max-w-[1240px] px-5 pb-20 md:px-8">
          <div className="flex flex-col items-start justify-between gap-6 rounded-[1.75rem] bg-foreground p-8 text-background md:flex-row md:items-center md:p-10">
            <div><div className="flex items-center gap-2 text-sm font-medium text-background/70"><SlidersHorizontal className="size-4" /> Your document. Your settings.</div><h2 className="mt-2 text-2xl font-semibold md:text-3xl">Ready for a more comfortable read?</h2></div>
            <Link href="#upload" className="inline-flex h-12 shrink-0 items-center gap-2 rounded-xl bg-background px-5 text-sm font-semibold text-foreground transition-transform hover:-translate-y-0.5">Try ReadAble <ArrowRight className="size-4" /></Link>
          </div>
        </section>
      </main>
      <footer className="border-t border-border/70 bg-card/60"><div className="mx-auto flex max-w-[1240px] flex-col justify-between gap-3 px-5 py-8 text-sm text-muted-foreground md:flex-row md:px-8"><p>© 2026 ReadAble. Reading should work for everyone.</p><p>Change the presentation, never the meaning.</p></div></footer>
    </div>
  )
}
